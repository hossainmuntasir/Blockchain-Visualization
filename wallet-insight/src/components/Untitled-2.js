
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const { exec } = require('child_process');
const fs = require('fs');

Alimohammadjobaer
alimohammadjobaer
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const { exec } = require('child_process');
const fs = require('fs');

// Require the route modules
const reportRoutes = require('./routes/reportRoutes');
const vulnerabilityRoutes = require('./routes/vulnerabilityRoutes');
const reportVulnerabilityRoutes = require('./routes/reportVulnerabilityRoutes');

const app = express();

app.use('/api/reports', reportRoutes);
app.use('/api/vulnerabilities', vulnerabilityRoutes);
app.use('/api/report-vulnerabilities', reportVulnerabilityRoutes);

const PORT = 5000;
const cors = require('cors');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage: storage });

function runSlither(file, callback) {
    const command = `slither ${file.path} --checklist > ./result.md`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, stdout);
    });
}

const recommendations = {
    "arbitrary-send-eth": "Ensure that an arbitrary user cannot withdraw unauthorized funds.",
    // ... add other vulnerability types and their recommendations here
};

app.post('/api/contracts/upload', upload.single('file'), async (req, res) => {
    const file = req.file;

    // Check if a file was uploaded
    if (!file) return res.status(400).send('No file uploaded.');

    runSlither(file, async (error, stdout) => {
        // Check if there was an error running the Slither command
        if (error) {
            return res.status(500).send(`Error executing Slither command: ${error.message}`);
        }

        try {
            const data = fs.readFileSync('./result.md', 'utf8');
            const vulnerabilityRegex = /Vulnerability Type: (.+)\nContract: (.+)\nImpact: (.+)\nDescription: (.+)\nLocation: (.+)/g;

            let match;
            const vulnerabilities = [];

            while ((match = vulnerabilityRegex.exec(data)) !== null) {
                vulnerabilities.push({
                    type: match[1],
                    contract: match[2],
                    severity: match[3],
                    description: match[4],
                    location: match[5],
                    recommendation: recommendations[match[1]] || 'Recommendation not found'
                });
            }

            const report = await db.report.create({
                contract_name: file.originalname,
                audit_date: new Date(),
            });

            for (let vulnerability of vulnerabilities) {
                const createdVuln = await db.vulnerability.create({
                    vulnerability_name: vulnerability.type,
                    description: `${vulnerability.description}. Recommendation: ${vulnerability.recommendation}`,
                    impact: vulnerability.severity,
                });

                await db.reportVulnerabilities.create({
                    report_id: report.report_id,
                    vulnerability_id: createdVuln.vulnerability_id,
                });
            }

            // Cleanup: Delete the temporary result.md file
            fs.unlinkSync('./result.md');

            res.status(200).send('File uploaded and analyzed successfully.');
        } catch (err) {
            // Handle any error that might occur while processing the Slither output or saving data to the database
            res.status(500).send(`Error processing the Slither output: ${err.message}`);
        }
    });
});

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello from the backend!'));

db.sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        return db.sequelize.sync();
    })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch(err => console.error('Unable to connect to the database:', err));
message.txt
5 KB
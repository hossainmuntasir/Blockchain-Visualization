import { Box, Grid } from "@mui/material";
import { SearchBar, DetailsTab, GraphRegion } from "../components";
import React, { useEffect, useState } from "react";
import * as data from "../utils/TestData"
import { useParams } from "react-router-dom";

// Test Data
const testData = data.initialNodes;

export function Graph() {

    const { initialSearchTerm } = useParams();

    useEffect(() => {
        UpdateSearchTerm(initialSearchTerm);
    }, []);

    const [searchTerm, setSearchTerm] = useState()

    const [targetNode, setTargetNode] = useState(data.initialNodes[0].data);
    const [validSearchTerm, setValidSearchTerm] = useState(false);

    // SearchBar will return a string which will then be matched against an object in the database
    const UpdateSearchTerm = (searchTerm) => {
        // Check if searchTerm is an existing node.
        testData.forEach(e => {
            if (e.data.id == searchTerm) {
                setTargetNode(e.data)
            }
        });
        // TODO Handle invalid search term
    }



    return (
        <>
            <Box margin={3}>
                <SearchBar callBack={UpdateSearchTerm}></SearchBar>
            </Box>

            {/* Main Content */}
            <Grid container columnSpacing={2} paddingX={3} sx={{ height: '80vh', maxHeight: '80vh' }}>

                <Grid item md={4} xs={6} borderRadius={2} >
                    <DetailsTab data={targetNode}></DetailsTab>
                </Grid>

                <Grid item md={8} xs={6} borderRadius={2}>
                    <GraphRegion searchTerm={searchTerm} callBack={setTargetNode}></GraphRegion>
                </Grid>
            </Grid >
        </>
    )
}

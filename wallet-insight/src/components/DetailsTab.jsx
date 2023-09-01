import { Grid } from '@mui/material'
import React from 'react'

export default function DetailsTab() {
    return (
        <>
            <Grid container spaceing={0} sx={{
                columnGap: 1.5,
            }}>
                <Grid item xs={12} sx={{ backgroundColor: 'orange', padding: 0, margin: 0 }}>title</Grid>
                <Grid item xs={12} sx={{ backgroundColor: 'purple', padding: 0, margin: 0 }}>
                    <Grid item xs={5.7} sx={{ backgroundColor: 'red', padding: 0, margin: 0 }}>a</Grid>
                    <Grid item xs={5.7} sx={{ backgroundColor: 'blue', padding: 0, margin: 0 }}>n</Grid>
                </Grid>
            </Grid>
            {/* react grid? */}
        </>
    )
}

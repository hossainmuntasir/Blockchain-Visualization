import { Box, Card, Grid } from "@mui/material";
import { SearchBar } from "../components/SearchBar";
import React from "react";
import { DetailsTab } from "../components/DetailTab";
import { GraphRegion } from "../components/GraphRegion";


export function Graph() {
    return (
        <>
            <Grid container spacing={2} padding={3} sx={{ height: '100vh' }}>

                <Grid item xs={12}>
                    <SearchBar></SearchBar>
                </Grid>

                <Grid item xs={3} >
                    <Card variant="outlined" sx={{ height: '80vh' }}><DetailsTab></DetailsTab></Card>
                </Grid>
                <Grid item xs={9} sx={{ height: '80vh' }}>
                    <GraphRegion></GraphRegion>
                </Grid>
            </Grid>
        </>
    )
}

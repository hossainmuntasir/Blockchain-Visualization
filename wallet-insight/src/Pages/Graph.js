import { Box, Grid } from "@mui/material";
import { SearchBar, DetailsTab, GraphRegion } from "../components";
import React from "react";
import { useParams } from "react-router-dom";
import * as data from "../utils/TestData"


export function Graph() {
    const walletId = useParams()

    // Hardcoded Dataset
    const initialNodes = data.initialNodes
    const initialEdges = data.initialEdges

    return (
        <>
            <Grid container spacing={2} padding={3} sx={{ height: '100vh' }}>

                <Grid item xs={12}>
                    <SearchBar searchTerm={walletId}></SearchBar>
                </Grid>

                <Grid item md={4} xs={6} >
                    <DetailsTab></DetailsTab>
                </Grid>
                <Grid item md={8} xs={6} sx={{ height: '80vh' }}>
                    <GraphRegion target={walletId} initialEdges={data.initialEdges} initialNodes={data.initialNodes}></GraphRegion>
                </Grid>
            </Grid>
        </>
    )
}

import { Box, Grid } from "@mui/material";
import { SearchBar, DetailsTab, GraphRegion } from "../components";
import React from "react";
import { useParams } from "react-router-dom";

export function Graph() {
    const walletId = useParams()

    const data = {
        walletId: { walletId }
    }

    return (
        <>
            <Grid container spacing={2} padding={3} sx={{ height: '100vh' }}>

                <Grid item xs={12}>
                    <SearchBar searchTerm={walletId}></SearchBar>
                </Grid>

                <Grid item xs={3} >
                    <Box sx={{
                        height: '80vh',
                        backgroundColor: 'white',
                        borderRadius: 1,
                        padding: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"

                    }}>
                        <DetailsTab></DetailsTab>
                    </Box>
                </Grid>
                <Grid item xs={9} sx={{ height: '80vh' }}>
                    <GraphRegion></GraphRegion>
                </Grid>
            </Grid>
        </>
    )
}

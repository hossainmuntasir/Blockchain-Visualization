import { Container, Typography } from "@mui/material";
import { SearchBar } from "../components";
import React from "react";

export function Home() {
    return (
        <>
            <Container sx={{
                height: '100vh', display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <Typography variant="h1" gutterBottom sx={{ textAlign: "center", color: 'white' }}>Wallet Insight</Typography>
                <SearchBar></SearchBar>
            </Container >
        </>
    )
}

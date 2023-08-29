import React from "react";
import { Box, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/joy/Input';

export function SearchBar() {
    return (
        <>
            <Box>
                <Input
                    placeholder="Search A Wallet Address"
                    size="lg"
                    outline="none"
                    autoFocus={true}
                    endDecorator={<Button variant="contained" ><SearchIcon></SearchIcon></Button>}
                    sx={{ outline: 'none', textAlign: 'center' }}
                // sx={{ '.MuiOutlinedInput-notchedOutline': { border: 'none !important', outline: 'none', textAlign: 'center' } }}
                />
            </Box>
        </>
    )
}

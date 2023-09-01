import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Search } from "@mui/icons-material";
import Input from '@mui/joy/Input';
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";


export default function SearchBar(props) {

    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: { searchTerm: props.searchTerm.walletId }
    });

    const onSubmit = (data) => {
        // navigate({`/Graph/${data.searchTerm}`});
        navigate('/Graph/' + data.searchTerm);
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                {...register("searchTerm", {
                    // minLength: { value: 26, message: "Incorrect Character Length!" },
                    // maxLength: { value: 42, message: "Incorrect Character Length!" },
                    // pattern: { value: "^[a-zA-Z0-9]*$", message: "Invalid character!" },
                })}
                autoComplete="off"
                size="lg" variant="outlined"
                placeholder="Enter A Wallet Address..."
                sx={{
                    '&::before': {
                        display: 'none',
                    },
                }}
                endDecorator={<Button variant="contained" type="submit"><Search></Search></Button>}>
            </Input>
            {/* {errors.searchTerm && <Typography variant="h6" sx={{ color: 'red' }}>{errors.searchTerm?.message}</Typography>} */}
        </form>
    )
}

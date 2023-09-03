import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import Input from '@mui/joy/Input';
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";


export default function SearchBar(props) {

    const navigate = useNavigate();
    const { initialSearchTerm } = useParams();


    // Setup for future error handling 
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: { searchTerm: initialSearchTerm }
    });

    const onSubmit = (data) => {
        // On submit, inform parent component if it requires it
        if (props.callBack) props.callBack(data.searchTerm);
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
                    // Turn off focus outline
                    '&::before': {
                        display: 'none',
                    },
                }}
                endDecorator={<Button variant="contained" type="submit"><Search></Search></Button>}>
            </Input>
            {/* TODO Error handling message / styling */}
            {/* {errors.searchTerm && <Typography variant="h6" sx={{ color: 'red' }}>{errors.searchTerm?.message}</Typography>} */}
        </form>
    )
}

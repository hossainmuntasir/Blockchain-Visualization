import { Box, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
// import { styled } from '@mui/material/styles';



export default function DetailsTab(props) {
    // Map props to variables

    return (
        <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px', height: '100%' }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography justifySelf={'end'}
                        marginBottom={3}
                        sx={{
                            backgroundColor: 'orange', wordBreak: 'break-all'
                        }}
                    >asdfasasdfasdfasdfaasdfasdfsdfasdfasdfasdfdfasdfaasdfasdfsdfasdfasdfasdf</Typography>
                </Grid>


                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'end', backgroundColor: 'green' }}>Current Balance:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'start', backgroundColor: 'red' }}>185 USDT</Typography>
                </Grid>


                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'end', backgroundColor: 'green' }}>Total Sent:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'start', backgroundColor: 'red' }}>4,794,806.1506 USDT</Typography>
                </Grid>


                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'end', backgroundColor: 'green' }}>Total Recieved:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'start', backgroundColor: 'red' }}>4,794,806.1506 USDT</Typography>
                </Grid>


                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'end', backgroundColor: 'green' }}>To/From Trans:</Typography>
                </Grid>
                <Grid item xs={6} marginBottom={3}>
                    <Typography sx={{ justifySelf: 'start', backgroundColor: 'red' }}>7/123</Typography>
                </Grid>


                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'end', backgroundColor: 'green' }}>Latest Transaction:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'start', backgroundColor: 'red', wordBreak: 'break-all' }}>sduf6hgq2BySDSAh1nicd398hBSGj</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'end', backgroundColor: 'green' }}>Time:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'start', backgroundColor: 'red' }}>03/11/2023 23:28</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'end', backgroundColor: 'green' }}>Amount:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'start', backgroundColor: 'red' }}>12.678 USDT</Typography>
                </Grid>



                <Grid item xs={6} marginBottom={3}>
                    <Chip variant='filled' color='error' label='Snt'></Chip>
                </Grid>
                <Grid item xs={6} height={'16px'}>
                </Grid>


                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'end', backgroundColor: 'green' }}>First Transaction:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'start', backgroundColor: 'red', wordBreak: 'break-all' }}>0xasdfuy1H2hSiii12YggbUIj1mawdf71hbnutGh5R</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'end', backgroundColor: 'green' }}>Time:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'start', backgroundColor: 'red' }}>01/05/2018 08:45</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'end', backgroundColor: 'green' }}>Amount:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ justifySelf: 'start', backgroundColor: 'red' }}>199.99 USDT</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Chip variant='filled' label='Rcv' color='success'></Chip>
                </Grid>
                <Grid item xs={6}>
                </Grid>

            </Grid >
        </div>
    )
}




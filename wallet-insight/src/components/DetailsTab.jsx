import { Box, Chip, Grid, Typography } from '@mui/material'
import React from 'react'

export default function DetailsTab(props) {
    const data = props.data

    return (
        <>
            <Box borderRadius={1} padding={2} backgroundColor={'white'} height={'80vh'} overflow={'scroll'}>

                <Grid container spacing={1} >

                    <Grid item xs={12}>
                        <Typography
                            marginBottom={3}
                            align='center'
                            variant='h5'
                            sx={{
                                wordBreak: 'break-all'
                            }}
                        >{data.id}</Typography>
                    </Grid>


                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'right'} >
                            <Typography>Current Balance:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.currentBalance}</Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography>Total Sent:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.totalSent}</Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography>Total Recieved:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.totalRecieved}</Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography>To/From Trans:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} marginBottom={3}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.transRatio}</Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography>Latest Transaction:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography sx={{ wordBreak: 'break-all' }}>{data.latestTransaction.id}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography>Time:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.latestTransaction.time}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography>Amount:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.latestTransaction.amount}</Typography>
                        </Box>
                    </Grid>



                    <Grid item xs={6} marginBottom={3}>
                        {data.latestTransaction.isRecieved
                            ? <Box backgroundColor={'#63f772'} width={'50%'} padding={1} borderRadius={5} textAlign={'center'} color={'white'}>RCV</Box>
                            : <Box backgroundColor={'#f94c4c'} width={'50%'} padding={1} borderRadius={5} textAlign={'center'} color={'white'}>SNT</Box>
                        }
                    </Grid>
                    <Grid item xs={6} height={'16px'}>
                    </Grid>


                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography>First Transaction:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography sx={{ wordBreak: 'break-all' }}>{data.firstTransaction.id}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography>Time:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.firstTransaction.time}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography>Amount:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.firstTransaction.amount}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6} marginBottom={3}>
                        {data.firstTransaction.isRecieved
                            ? <Box backgroundColor={'#63f772'} width={'50%'} padding={1} borderRadius={5} textAlign={'center'} color={'white'}>RCV</Box>
                            : <Box backgroundColor={'#f94c4c'} width={'50%'} padding={1} borderRadius={5} textAlign={'center'} color={'white'}>SNT</Box>
                        }
                    </Grid>

                </Grid >
            </Box >
        </ >
    )
}




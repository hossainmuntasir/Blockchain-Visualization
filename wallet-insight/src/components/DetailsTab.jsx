import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function DetailsTab(props) {
    const data = props.data

    return (
        <>
            {/* Container */}
            <Box borderRadius={1} padding={2} backgroundColor={'white'} height={'80vh'} sx={{
                scrollbarWidth: 'thin',
                overflowY: 'scroll'
            }}>

                <Grid container spacing={1} >

                    {/* Wallet Address */}
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


                    {/* Current Balance */}
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'right'} >
                            <Typography align='right'>Current Balance:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.currentBalance}</Typography>
                        </Box>
                    </Grid>



                    {/* Total Sent */}
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography align='right'>Total Sent:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.totalSent}</Typography>
                        </Box>
                    </Grid>



                    {/* Total Recieved */}
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography align='right'>Total Recieved:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.totalRecieved}</Typography>
                        </Box>
                    </Grid>



                    {/* To/From Trans */}
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography align='right'>To/From Trans:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} marginBottom={3}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.transRatio}</Typography>
                        </Box>
                    </Grid>



                    {/* Latest Transaction Address */}
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography align='right'>Latest Transaction:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography sx={{ wordBreak: 'break-all' }}>{data.latestTransaction.id}</Typography>
                        </Box>
                    </Grid>



                    {/* Time */}
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography align='right'>Time:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.latestTransaction.time}</Typography>
                        </Box>
                    </Grid>



                    {/* Amount */}
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography align='right'>Amount:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.latestTransaction.amount}</Typography>
                        </Box>
                    </Grid>



                    {/* Recieved / Sent */}
                    <Grid item xs={6} marginBottom={3}>
                        {data.latestTransaction.isRecieved
                            ? <Box backgroundColor={'#63f772'} width={'50%'} padding={1} borderRadius={5} textAlign={'center'} color={'white'}>RCV</Box>
                            : <Box backgroundColor={'#f94c4c'} width={'50%'} padding={1} borderRadius={5} textAlign={'center'} color={'white'}>SNT</Box>
                        }
                    </Grid>
                    {/* Blank area */}
                    <Grid item xs={6} height={'16px'}>
                    </Grid>



                    {/* First Transaction Address */}
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography align='right'>First Transaction:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography sx={{ wordBreak: 'break-all' }}>{data.firstTransaction.id}</Typography>
                        </Box>
                    </Grid>



                    {/* Time */}
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography align='right'>Time:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.firstTransaction.time}</Typography>
                        </Box>
                    </Grid>



                    {/* Amount */}
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-end'} >
                            <Typography align='right'>Amount:</Typography>
                        </Box>
                    </Grid >
                    <Grid item xs={6}>
                        <Box display={'flex'} justifyContent={'flex-start'} >
                            <Typography>{data.firstTransaction.amount}</Typography>
                        </Box>
                    </Grid>



                    {/* Recieved / Sent */}
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




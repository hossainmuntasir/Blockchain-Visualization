import { Box, Chip, Grid, Typography } from '@mui/material'
import React from 'react'

export default function DetailsTab(props) {
    // Map props to variables

    return (
        <>
            <Box sx ={{
                width:'100%',
                height:'100%',
                display:'grid',
                gap:1,
                // gap:'8px',
                gridTemplateColumns:'1fr 1fr',
                // gridTemplateRows:'repeat(1fr, 16)',
                alignItems:'center',
            }}>
                <Typography variant='h5' noWrap='false' sx={{gridColumn:'span 2'}}>Thy4SDBjSyas22g1EDSydsa</Typography>
                {/* <Typography variant='h5' noWrap='false' className='wallet-address'>{walletAddress}</Typography> */}

                <Typography variant='h6' sx={{justifySelf:'end', gridColumn:'span 1'}}>Current Balance:</Typography>
                <Typography variant='h6' sx={{justifySelf:'start', gridColumn:'span 1'}}>185 USDT</Typography>

                
                <Typography variant='h6' sx={{justifySelf:'end', gridColumn:'span 1'}}>Total Sent:</Typography>
                <Typography variant='h6' sx={{justifySelf:'start', gridColumn:'span 1'}}>4,794,806.1506 USDT</Typography>

                
                <Typography variant='h6' sx={{justifySelf:'end', gridColumn:'span 1'}}>Total Recieved:</Typography>
                <Typography variant='h6' sx={{justifySelf:'start', gridColumn:'span 1'}}>4,794,806.1506 USDT</Typography>

                
                <Typography variant='h6' sx={{justifySelf:'end', gridColumn:'span 1'}}>To/From Trans:</Typography>
                <Typography variant='h6' sx={{justifySelf:'start', gridColumn:'span 1'}}>7/123</Typography>

                {/*  */}

                <Chip variant='filled' color='error'>Snt</Chip>

                <Typography variant='h6' sx={{justifySelf:'end', gridColumn:'span 1'}}>Latest Transaction:</Typography>
                <Typography variant='h6' sx={{justifySelf:'start', gridColumn:'span 1'}}>sduf6hgq2BySDSAh1nicd398hBSGj</Typography>

                <Typography variant='h6' sx={{justifySelf:'end', gridColumn:'span 1'}}>Time:</Typography>
                <Typography variant='h6' sx={{justifySelf:'start', gridColumn:'span 1'}}>03/11/2023 23:28</Typography>

                <Typography variant='h6' sx={{justifySelf:'end', gridColumn:'span 1'}}>Amount:</Typography>
                <Typography variant='h6' sx={{justifySelf:'start', gridColumn:'span 1'}}>12.678 USDT</Typography>

                {/*  */}

                <Chip variant='filled' color='success'>Rcv</Chip>

                <Typography variant='h6' sx={{justifySelf:'end', gridColumn:'span 1'}}>First Transaction:</Typography>
                <Typography variant='h6' sx={{justifySelf:'start', gridColumn:'span 1'}}>0xasdfuy1H2hSiii12YggbUIj1mawdf71hbnutGh5R</Typography>

                <Typography variant='h6' sx={{justifySelf:'end', gridColumn:'span 1'}}>Time:</Typography>
                <Typography variant='h6' sx={{justifySelf:'start', gridColumn:'span 1'}}>01/05/2018 08:45</Typography>

                <Typography variant='h6' sx={{justifySelf:'end', gridColumn:'span 1'}}>Amount:</Typography>
                <Typography variant='h6' sx={{justifySelf:'start', gridColumn:'span 1'}}>199.99 USDT</Typography>
                
                
            </Box>
        </>
    )
}

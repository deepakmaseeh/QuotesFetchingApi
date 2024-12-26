import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Quote from '../Components/Quote'


function Home() {
  return (
    <>
    <Container maxWidth=""> 
     <Box sx={{bgcolor: '#2980b9', p: 3, width:"90vw", height:"80vh", margin: ' 10px auto'}}>
        
        <Typography variant="h3" component="div"  sx={{color:"CaptionText", font:"Bolder", textDecoration:"underline"}}>Home Page</Typography>
        <Typography variant="h5" component="div" sx={{color:"#f4433"}}><Quote/></Typography>
       
     </Box>
     </Container>
  
    </>
  )
}

export default Home
import React from 'react'
import { AppBar, Box, Container, Paper, Toolbar, Typography } from '@mui/material'
import LikedQuotes from '../Components/LikedQuotes'


function Liked() {
  
  return (
   <Container maxWidth="">
    <Paper sx={{bgcolor: '#2980b9', p: 3, width:"90vw", height:"80vh", margin: '10px auto'}} elevation={24} >

        <Typography variant="h5" component="div" sx={{color:"white"}}><LikedQuotes/></Typography>

     
     </Paper>

    </Container>

  )
};
export default Liked
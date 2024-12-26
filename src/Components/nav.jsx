import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
    <AppBar position="static" >
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>
            <Typography>Fetch API</Typography>
            </Box>
             <Box sx={{display: 'flex', gap: '20px'}}>
                 <Link to="/" >Home</Link>
                    <Link to="/liked" >Liked</Link>
            </Box>
        </Toolbar>
    </AppBar>
        
    </>
  )
}

export default Header
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme ({
  palette: {
    primary: {
      main: '#f44336'
    },
    secondary: {
      main: '#3f51b5'
    }
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
     <App />
    </ThemeProvider>
  </StrictMode>,
)

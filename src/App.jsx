import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Home from './Pages/Home.jsx'
import  Liked from './Pages/Liked.jsx'
import Header from './Components/nav.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="**" element={<h1>page not found</h1>} />
      </Routes>
     {/* <Footer/> */}
     </BrowserRouter>
    </>
  )
}

export default App

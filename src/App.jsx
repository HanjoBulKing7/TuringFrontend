import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainLay from './layouts/MainLay'
import { Routes , Route } from 'react-router-dom' 

function App() {
  return (
    <MainLay>
      <Routes>
        <Route path='/' element={ <Home/> }  />
        <Route path='/about' element={ <About />} />
        <Route path='/catalog' element={ <Catalog />} />
      </Routes>
    </MainLay>
  )
}

export default App
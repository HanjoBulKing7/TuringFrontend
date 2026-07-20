import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainLay from './layouts/MainLay'
import { Routes , Route } from 'react-router-dom' 
import Home from './pages/Home'
import About from './components/About'
import Catalog from './components/Catalog'

function App() {
  return (
    <MainLay>
      <Routes>
        <Route path='/' element={ <Home/> }  />
      </Routes>
    </MainLay>
  )
}

export default App
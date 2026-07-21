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
import Auth from './pages/Auth'
import { Toaster } from 'react-hot-toast'
import RouteProtector from './components/auth/RouteProtector'

function App() {
  return (
    <MainLay>
      <Toaster position="top-right" />
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Do not enter if there is active session */}
        <Route element={<RouteProtector isAuthPage={true} />}>
          <Route path='/auth' element={<Auth />} />
        </Route>

        {/* Panel admin: solo con sesión iniciada */}
        {/* Panel admin: solo con sesión iniciada 
        <Route element={<RouteProtector isAuthPage={false} />}>
          <Route path='/admin' element={<AdminPanel />} />
        </Route>
        */}
      </Routes>
    </MainLay>
  );
}

export default App;
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-black/40 flex flex-col md:flex-row'>
        <ul>
            <li>Sobre nosotros</li>
            <li>Catálogo</li>
            <li>Iniciar sesión</li>
        </ul>
    </div>
  )
}

export default Navbar
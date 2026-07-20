import React, { useState } from 'react'
import Logo from '../assets/img/Arpegio-Logo.jpeg'
import { RxCross2 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-amber-50 shadow">

      <div className="flex items-center justify-between h-20 px-6">

        <img
          src={Logo}
          alt="Arpegio"
          className="h-16"
        />

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RxCross2 className="text-3xl text-red-600" />
          ) : (
            <GiHamburgerMenu className="text-3xl text-blue-600" />
          )}
        </button>

        <ul className="hidden md:flex items-center gap-10 text-lg">
          <li><Link to='/about'>Acerca de nosotros</Link></li>
          <li><Link to='/catalog'>Catálogo</Link></li>
          <li><Link to='/auth'><FaUser className='text-black text-2xl'/></Link></li>
        </ul>

      </div>

      {isOpen && (
        <ul className="flex flex-col items-center gap-6 py-6 md:hidden text-lg">
          <li>Sobre nosotros</li>
          <li>Catálogo</li>
          <li><FaUser className='text-black text-2xl'/></li>
        </ul>
      )}

    </nav>
  );
};

export default Navbar;
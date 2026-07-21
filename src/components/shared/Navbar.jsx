import React, { useState } from 'react'
import Logo from '../../assets/img/Arpegio-Logo.jpeg'
import { RxCross2 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GrUserSettings } from 'react-icons/gr';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { token, username, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <nav className="w-full bg-amber-50 shadow">
      <div className="flex items-center justify-between h-25 px-6 xl:h-30">
        <img src={Logo} alt="Arpegio" className="h-25 xl:h-30" />

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 className="text-3xl text-red-600" /> : <GiHamburgerMenu className="text-3xl text-blue-600" />}
        </button>

        <ul className="hidden md:flex items-center gap-10 text-lg">
          <li><a href='#about'>Acerca de nosotros</a></li>
          <li><a href='#catalog'>Catálogo</a></li>
          <li className="relative">
            {token ? (
              <>
                <button onClick={() => setShowUserMenu(!showUserMenu)}>
                  <GrUserSettings className='text-black text-2xl' />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border py-2 z-50">
                    <p className="px-4 py-2 text-sm text-gray-500 border-b truncate">
                      {username}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link to='/auth'>
                <FaUser className='text-black text-2xl' />
              </Link>
            )}
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center gap-6 py-6 md:hidden text-lg">
          <li><a href='#about'>Sobre nosotros</a></li>
          <li><a href="#catalog">Catálogo</a></li>
          <li>
            {token ? (
              <button onClick={handleLogout} className="text-red-600">Cerrar sesión ({username})</button>
            ) : (
              <Link to='/auth'><FaUser className='text-black text-2xl' /></Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
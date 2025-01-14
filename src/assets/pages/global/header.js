import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/header.css';
import LogoHospic from "../../src/logos/hospic_logos/logoHospic.png";

function Header() {
  const location = useLocation();  // Obtém a localização atual da URL

  return (
    <header className='header-site'>
        <div className="logo">
            <img src={LogoHospic} alt="Logo" />
            <span></span>
        </div>
        <nav className="navbar">
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className={location.pathname === '/' ? 'active' : ''}>
                        <i className="fas fa-home" /> Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/staff" 
                        className={location.pathname === '/staff' ? 'active' : ''}>
                        <i className="fas fa-user" /> Staff
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/campeonatos" 
                        className={location.pathname === '/campeonatos' ? 'active' : ''}>
                        <i className="fa-solid fa-trophy" /> Campeonatos
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/parceiros" 
                        className={location.pathname === '/parceiros' ? 'active' : ''}>
                        <i className="fas fa-handshake" /> Parceiros
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/portal-hstv" 
                        className={location.pathname === '/portal-hstv' ? 'active' : ''}>
                        <i className="fas fa-newspaper" /> HSTV
                    </Link>
                </li>
            </ul>
        </nav>
        <div>
        </div>
    </header>
  );
}

export default Header;

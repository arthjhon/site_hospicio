import React from 'react'
import './css/header.css'
import LogoHospic from "../../src/logos/hospic_logos/logoHospic.png"

function Header() {
  return (
    <header className='header-site'>
        <div className="logo">
            <img src={LogoHospic} alt="Logo" />
            <span></span>
        </div>
        <nav className="navbar">
            <ul>
            <li>
                <a href="/" className="active">
                <i className="fas fa-home" /> Home
                </a>
            </li>
            <li>
                <a href="/staff">
                <i className="fas fa-user" /> Staff
                </a>
            </li>
            <li>
                <a href="/campeonatos">
                <i className="fa-solid fa-trophy" /> Campeonatos
                </a>
            </li>
            <li>
                <a href="/partners">
                <i className="fas fa-handshake" /> Parceiros
                </a>
            </li>
            <li>
                <a href="/portal-hstv">
                <i className="fas fa-newspaper" /> HSTV
                </a>
            </li>
            </ul>
        </nav>
        <div>

        </div>
    </header>

  )
}

export default Header
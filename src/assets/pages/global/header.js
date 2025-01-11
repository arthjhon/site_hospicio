import React from 'react'
import './css/header.css'
import logoHospic from '../../../assets/src/logos/hospic_logos/logoHospic.png'

function Header() {
  return (
    <header className='header-site'>
        <div className="logo">
            <img src={logoHospic} alt="Logo" />
            <span>Hospicio do Zikaloka</span>
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
                <i className="fa-solid fa-trophy" /> Copa Hospic
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
        <div className="cadastro-buttons">
            <a href="https://google.com">
            <button className="bttn-signup">
                <i className="fa-solid fa-ticket" /> Inscreva-se
            </button>
            </a>
        </div>
    </header>

  )
}

export default Header
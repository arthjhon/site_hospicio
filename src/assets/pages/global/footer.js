import React from 'react'
import './css/footer.css'

function Footer() {
  return (
    <>
    <footer className="footer">
        <section id="social-container">
            <div className="social-icons">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter" />
            </a>
            <a href="https://twitch.tv/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitch" />
            </a>
            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-discord" />
            </a>
            <a href="http://youtube.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-youtube" />
            </a>
            </div>
            <div className="copyrights">
            <p>© 2025 arThLabs Info. Todos os Direitos Reservados.</p>
            <a href="https://google.com">Politicas de Privacidade</a>
            <a href="https://google.com">Termos de Uso</a>
            </div>
        </section>
    </footer>

    </>
  )
}

export default Footer
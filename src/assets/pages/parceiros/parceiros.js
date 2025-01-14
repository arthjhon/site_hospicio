import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./css/parceiros.css"

const Parceiros = () => {
  const [streamers, setStreamers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Exemplo de streamers, você pode substituir pelas IDs do Twitch ou YouTube.
  const streamerIds = [
    { name: "Gaules", twitchId: "181077473" },
  ];

  return (
    <div className="parceiros-page">
      <header>
        <h1>Parceiros - Hospício do Zikaloka</h1>
      </header>

      <main>
        <section className="parceiros-content">
          {/* Cards de Streamers */}
          <div className="streamers">
            <h2>Parceiros de Live</h2>
            <div className="streamers-cards">
              {loading ? (
                <p>Carregando streamers...</p>
              ) : (
                streamers.map((streamer, index) => (
                  <div key={index} className="streamer-card">
                    <img 
                      src={streamer.online ? streamer.thumbnail : 'offline_thumbnail_url.png'} 
                      alt={`${streamer.name} thumbnail`} 
                    />
                    <div className="streamer-info">
                      <h3>{streamer.name}</h3>
                      {streamer.online ? (
                        <p><strong>Ao vivo!</strong></p>
                      ) : (
                        <p>Offline</p>
                      )}
                      {streamer.online && <p>{streamer.title}</p>}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Banners de Parceiros */}
          <div className="banners">
            <h2>Nossos Parceiros Comerciais</h2>
            <div className="banner-container">
              <div className="banner">
                <a href="https://linkparceiro1.com" target="_blank" rel="noopener noreferrer">
                  <img src="banner1.png" alt="Parceiro 1" />
                </a>
              </div>
              <div className="banner">
                <a href="https://linkparceiro2.com" target="_blank" rel="noopener noreferrer">
                  <img src="banner2.png" alt="Parceiro 2" />
                </a>
              </div>
              <div className="banner">
                <a href="https://linkparceiro3.com" target="_blank" rel="noopener noreferrer">
                  <img src="banner3.png" alt="Parceiro 3" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Parceiros;

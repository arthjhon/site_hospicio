import "../css/partials/FormMember.css"
import React, { useState } from 'react';
import axios from 'axios';

const FormAddMember = () => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cargo, setCargo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [steamLink, setSteamLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [twitchLink, setTwitchLink] = useState('');
  const [nick, setNick] = useState('');
  const [imagem, setImagem] = useState(null);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('sobrenome', sobrenome);
    formData.append('cargo', cargo);
    formData.append('descricao', descricao);
    formData.append('steam_link', steamLink);
    formData.append('instagram_link', instagramLink);
    formData.append('twitch_link', twitchLink);
    formData.append('nick', nick);

    if (imagem) {
      formData.append('imagem', imagem);
    }

    try {
      if (id) {
        // Atualizar membro existente
        await axios.put(`http://localhost:5000/members/id/${id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Membro atualizado com sucesso!');
      } else {
        // Criar novo membro
        await axios.post(`http://localhost:5000/members`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Membro criado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário.');
    }
  };

  return (
    <div className="conteudo-panel">
      <div className="titulo-pagina">
        <h2> Adicione ou Edite um membro na tela de Staff </h2>
      </div>
      <div className="caixa-form">
        <div className="div-form">
          <div className="titulo-form">
            <h3> Informações do membro </h3>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            {/* Campo para ID */}
            <div className="form-nome">
              <label className="div-label">Nome:</label>
              <input 
                type="text"
                placeholder="Informe o Primeiro nome..." 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
              />
            </div>
            <div className="form-label">
              <label className="div-label">Sobrenome:</label>
              <input 
                type="text" 
                placeholder="Informe UM Sobrenome..."
                value={sobrenome} 
                onChange={(e) => setSobrenome(e.target.value)} 
              />
            </div>
            <div className="form-label">
              <label className="div-label">Nick:</label>
              <input 
                type="text"
                placeholder="Informe o Nickname..." 
                value={nick} 
                onChange={(e) => setNick(e.target.value)} 
              />
            </div>
            <div className="form-label">
              <label className="div-label">Cargo:</label>
              <select
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              >
                <option value="" disabled>Selecione o Cargo</option>
                <option value="presidente">Presidente</option>
                <option value="diretor">Diretor</option>
                <option value="membro">Membro</option>
              </select>
            </div>
            <div className="form-label">
              <label className="div-label">Link Steam:</label>
              <input 
                type="url"
                placeholder="Informe o link da conta steam..." 
                value={steamLink} 
                onChange={(e) => setSteamLink(e.target.value)} 
              />
            </div>
            <div className="form-label">
              <label className="div-label">Link Instagram:</label>
              <input 
                type="url"
                placeholder="Informe o link do instagram..." 
                value={instagramLink} 
                onChange={(e) => setInstagramLink(e.target.value)} 
              />
            </div>
            <div className="form-label">
              <label className="div-label">Link Twitch:</label>
              <input 
                type="url"
                placeholder="Informe o link da twitch..." 
                value={twitchLink} 
                onChange={(e) => setTwitchLink(e.target.value)} 
              />
            </div>
            <div className="form-label">
              <label className="div-label">Descrição:</label>
              <textarea
                placeholder="Envie uma pequena descrição..." 
                value={descricao} 
                onChange={(e) => setDescricao(e.target.value)} 
              />
            </div>
            {/* Campo para upload de imagem */}
            <div className="form-label">
              <label className="div-label">Imagem:</label>
              <input 
                type="file" 
                onChange={(e) => setImagem(e.target.files[0])} 
              />
            </div>
            <button className="butao" type="submit">
              {id ? "Atualizar Membro" : "Adicionar Membro"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddMember;

import "../css/partials/FormMember.css"
import React, { useState } from "react";
import axios from "axios";

const FormEditMember = () => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cargo, setCargo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [steamLink, setSteamLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [twitchLink, setTwitchLink] = useState("");
  const [nick, setNick] = useState("");

  // Função para buscar membro pelo ID
  const handleFetchMember = async () => {
    if (!id) {
      alert("Por favor, insira um ID válido.");
      return;
    }

    console.log("Buscando membro com ID:", id);

    try {
      const response = await axios.get(`http://localhost:5000/members/id/${id}`);
      console.log("Resposta do servidor:", response.data);

      if (response.data && response.data.length > 0) {
        const member = response.data[0];
        setNome(member.nome || "");
        setSobrenome(member.sobrenome || "");
        setNick(member.nick || "");
        setCargo(member.cargo || "");
        setDescricao(member.descricao || "");
        setSteamLink(member.steam_link || "");
        setInstagramLink(member.instagram_link || "");
        setTwitchLink(member.twitch_link || "");
      } else {
        alert("Nenhum membro encontrado para o ID fornecido.");
      }
    } catch (error) {
      console.error("Erro ao buscar o membro:", error);
      alert("Erro ao buscar o membro. Verifique o console para mais detalhes.");
    }
  };

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      nome,
      sobrenome,
      cargo,
      descricao,
      steam_link: steamLink,
      instagram_link: instagramLink,
      twitch_link: twitchLink,
      nick,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/members/id/${id}`,
        updatedData
      );
      console.log("Membro atualizado:", response.data);
      alert("Membro atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o membro:", error);
      alert("Erro ao atualizar o membro. Verifique o console para mais detalhes.");
    }
  };

  return (
    <div className="conteudo-panel">
      <div className="titulo-pagina">
        <h2>Editar informações do membro</h2>
      </div>
      <div className="caixa-form">
        <div className="div-form">
          <div className="titulo-form">
            <h3>Buscar e editar membro</h3>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            {/* Campo para ID */}
            <div className="form-label">
              <label className="div-label">ID do Membro:</label>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Digite o ID do membro"
              />
              <button
                type="button"
                onClick={handleFetchMember}
                className="botao-pesquisar"
              >
                Buscar Membro
              </button>
            </div>
            <div className="form-nome">
              <label className="div-label">Nome:</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="form-label">
              <label className="div-label">Sobrenome:</label>
              <input
                type="text"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </div>
            <div className="form-label">
              <label className="div-label">Nick:</label>
              <input
                type="text"
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
                <option value="" disabled>
                  Selecione o Cargo
                </option>
                <option value="presidente">Presidente</option>
                <option value="diretor">Diretor</option>
                <option value="membro">Membro</option>
              </select>
            </div>
            <div className="form-label">
              <label className="div-label">Link Steam:</label>
              <input
                type="url"
                value={steamLink}
                onChange={(e) => setSteamLink(e.target.value)}
              />
            </div>
            <div className="form-label">
              <label className="div-label">Link Instagram:</label>
              <input
                type="url"
                value={instagramLink}
                onChange={(e) => setInstagramLink(e.target.value)}
              />
            </div>
            <div className="form-label">
              <label className="div-label">Link Twitch:</label>
              <input
                type="url"
                value={twitchLink}
                onChange={(e) => setTwitchLink(e.target.value)}
              />
            </div>
            <div className="form-label">
              <label className="div-label">Descrição:</label>
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            <button className="butao" type="submit">
              Atualizar Membro
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditMember;

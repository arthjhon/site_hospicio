import React, {useState, useEffect } from 'react';
import "../css/staff.css"
import axios from 'axios'

function CardDiretoria() {
    const [members, setMembers] = useState ([]);
    useEffect(() =>{
        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/members/diretor');
                setMembers(response.data);
            } catch (error){
                console.error('erro ao buscar membros:', error);

            }
        };
        fetchMembers();
    }, []);

    return (
      <div className="cards-staff-diretoria">
        {members.map((member) => (
          <div key={member.id} className="card-staff">
              <div className="staff-info">
                  
                  <p>{member.descricao}</p>
              </div>
              <div className="foto-staff">
                  <img src={`http://localhost:5000/members/${member.id}/imagem`} alt={`Foto de ${member.nick}`} />
              </div>
              <div className="nome-staff">
                  <h4>{member.nome} "{member.nick}" {member.sobrenome} </h4>
              </div>
              <div className="link-staff">
                  <a href={member.twitch_link} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitch" />
                  </a>
                  <a href={member.instagram_link} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram" />
                  </a>
                  <a   a href={member.steam_link} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-steam" />
                  </a>
              </div>
          </div>
        ))}
      </div>
    );
  }


export default CardDiretoria
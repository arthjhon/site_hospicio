import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/staff.css"

    

function CardMembros() {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        // Função para buscar os membros com cargo "Membro"
        const fetchMembers = async () => {
          try {
            const response = await axios.get('http://localhost:5000/members/membro');
            setMembers(response.data); // Atualiza o estado com os membros
          } catch (error) {
            console.error('Erro ao buscar membros:', error);
          }
        };
    
        fetchMembers();
      }, []); // A requisição será feita apenas uma vez
  return (
    <>
        <div className='cards-staff-membros'>
            {members.map((member) =>( 
                <div key={member.id} className='card-staff'>
                    <div className='staff-info'>
                        <h5>{member.nome} "{member.nick}" {member.sobrenome} </h5>
                        <p> {member.descricao} </p>
                    </div>
                    <div className='foto-staff'>
                        <img src={member.foto_link} alt={`Foto de ${member.nick}`} />
                    </div>
                    <div className='nome-staff'> <h4> {member.nick}</h4> </div>
                    <div className='link-staff'>
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

    </>
  )
}

export default CardMembros
import React, {useEffect, useState} from 'react'
import axios from 'axios'; 
import "./css/staff.css"
import Titulo from './partials/titulo'
import CardAdmin from './partials/cardAdmin'
import CardDiretoria from './partials/cardDiretoria'
import CardMembros from './partials/cardMembros'



function Staff() {
    const [members, setMembers] = useState([]);

  useEffect(() => {
    // Buscar membros do backend
    axios.get('http://localhost:5000/members')
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar membros:', error);
      });
  }, []);
  return (
        <div className="conteudo-staff">
            <Titulo />
            <div className="div-principal">
                  {/* Card Admins*/}
                <div className="titulo-cargo">
                    <h2>Presidente:</h2>
                </div>
                <CardAdmin />
                {/*Cards Diretoria*/}
                <div className='titulo-cargo'>
                    <h2>Diretoria:</h2>
                </div>
                <CardDiretoria />
                {/* Cards Membros */}
                <div className='titulo-cargo'>
                    <h2>Membros:</h2>
                </div>
                <CardMembros />
                
            </div>
        </div>
  )
}

export default Staff
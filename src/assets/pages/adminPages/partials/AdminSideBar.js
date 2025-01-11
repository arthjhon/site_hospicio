import React from 'react';
import "../css/partials/AdminSideBar.css";

function AdminSideBar({ setActiveComponent }) {
  return (
    <div className="admin-sidebar">
      <nav className="nav-mle">
        <div className="header-mle">
          <div className="icone-header">
            <i className="bi bi-person-fill-gear" />
          </div>
          <h4>Gerenciar Membros</h4>
        </div>
        <div className="botoes-mle">
          <br />
          <button
            className="buttao-mngr-member"
            onClick={() => setActiveComponent("edit")}
          >
            Editar Membro
          </button>
          <button
            className="buttao-mngr-member"
            onClick={() => setActiveComponent("add")}
          >
            Adicionar Membro
          </button>
          <button
            className="buttao-mngr-member"
            onClick={() => setActiveComponent("remove")}
          >
            Remover Membro
          </button>
        </div>
      </nav>
    </div>
  );
}

export default AdminSideBar;

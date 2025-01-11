import React, { useState } from "react";
import AdminSideBar from "./partials/AdminSideBar"; // Importando o componente Sidebar
import FormEditMember from "./partials/FormEditMember";
import FormAddMember from "./partials/FormAddMember";
import "./css/AdminPanel.css"

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("edit"); // Estado para alternar entre os componentes

  return (
    <div className="conteudo-pag-admin">
      {/* Passando a função para o Sidebar */}
      <AdminSideBar setActiveComponent={setActiveComponent} />

      <div className="conteudo-do-form">
        <div className="formulario-container">
          {activeComponent === "edit" && <FormEditMember />}
          {activeComponent === "add" && <FormAddMember />}
          {/* Aqui você pode adicionar a lógica para o componente de remover membros */}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

import React from "react";

function PoliticaDePrivacidade() {
  return (
    <div className="container-termos-de-uso">
      <section className="section1">
        <h1>Política de Privacidade</h1>
      </section>
      <section className="section1">
        <h2>1. Coleta de Informações</h2>
        <p>
          Coletamos informações pessoais que você nos fornece ao se registrar em
          nosso site ou usar nossos serviços. As informações podem incluir, mas
          não se limitam a, nome, endereço de e-mail, número de telefone e
          outras informações necessárias para fornecer os nossos serviços.
        </p>
      </section>
      <section className="section1">
        <h2>2. Uso das Informações</h2>
        <p>Usamos as informações coletadas para:</p>
        <ul className="coleta">
          <li className="info-coleta">Personalizar a experiência do usuário</li>
          <li className="info-coleta">Melhorar nossos serviços</li>
          <li className="info-coleta">
            Enviar comunicações relacionadas ao serviço
          </li>
          <li className="info-coleta">
            Realizar análises e relatórios internos
          </li>
        </ul>
        <p />
      </section>
      <section className="section1">
        <h2>3. Compartilhamento de Informações</h2>
        <p>
          Não vendemos ou compartilhamos suas informações pessoais com
          terceiros, exceto quando necessário para fornecer os serviços
          solicitados ou quando exigido por lei.
        </p>
      </section>
      <section className="section1">
        <h2>4. Proteção das Informações</h2>
        <p>
          Adotamos medidas de segurança apropriadas para proteger suas
          informações pessoais contra acesso não autorizado, alteração ou
          destruição. No entanto, nenhuma transmissão de dados pela internet é
          100% segura, e não podemos garantir a segurança total das informações.
        </p>
      </section>
      <section className="section1">
        <h2>5. Cookies</h2>
        <p>
          Utilizamos cookies para melhorar a experiência do usuário e coletar
          dados sobre o uso do site. Você pode configurar seu navegador para
          recusar cookies, mas isso pode afetar a funcionalidade de nossos
          serviços.
        </p>
      </section>
      <section className="section1">
        <h2>6. Seus Direitos</h2>
        <p>
          Você tem o direito de acessar, corrigir ou excluir as informações
          pessoais que temos sobre você. Para exercer esses direitos, entre em
          contato conosco por meio das informações fornecidas abaixo.
        </p>
      </section>
      <section className="section1">
        <h2>7. Alterações na Política de Privacidade</h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente. Todas
          as alterações serão publicadas nesta página com a data da última
          atualização.
        </p>
      </section>
      <section className="section1">
        <h2>8. Contato</h2>
        <p>
          Se você tiver dúvidas sobre esta Política de Privacidade, entre em
          contato conosco por meio do e-mail{" "}
          <a href="mailto:contato@arthlabs.inf.br">contato@arthlabs.inf.br</a>.
        </p>
      </section>
    </div>
  );
}

export default PoliticaDePrivacidade;

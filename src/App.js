import './App.css';
import Header from './assets/pages/global/header';
import Footer from './assets/pages/global/footer';
import Staff from './assets/pages/staff/staff';
import Home from './assets/pages/home/home';
import AdminPanel from './assets/pages/adminPages/AdminPanel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importação correta
import PoliticaDePrivacidade from './assets/pages/global/politica_de_privacidade';
import TermoDeUso from './assets/pages/global/termos_de_uso';
import Campeonatos from './assets/pages/campeonatos/campeonatos';
import Parceiros from './assets/pages/parceiros/parceiros';

function App() {
  return (

    <Router>
      <Header />
      <main className='main-conteudo'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/staff" element={<Staff />} />
          <Route path="/campeonatos" element= {<Campeonatos/>} />
          <Route path="/painel" element={< AdminPanel/>} />
          <Route path="/politicas-de-privacidade" element={<PoliticaDePrivacidade/> }/>
          <Route path="/termos-de-uso" element={<TermoDeUso />} />
          <Route path="/parceiros" element={<Parceiros/>} />
        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;

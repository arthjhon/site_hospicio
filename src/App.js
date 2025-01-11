import './App.css';
import Header from './assets/pages/global/header';
import Footer from './assets/pages/global/footer';
import Staff from './assets/pages/staff/staff';
import Home from './assets/pages/home/home';
import AdminPanel from './assets/pages/adminPages/AdminPanel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importação correta
import Campeonatos from './assets/pages/campeonatos/campeonatos';

function App() {
  return (

    <Router>
      <Header />
      <main className='main-conteudo'>
        <Routes>
          <Route path="/staff" element={<Staff />} />
          <Route path="/" element={ <Home /> } />
          <Route path="/painel" element={< AdminPanel/>} />
          <Route path="/campeonatos" element= {<Campeonatos/>} />
        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;

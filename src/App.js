import './App.css';
import Header from './assets/pages/global/header';
import Footer from './assets/pages/global/footer';
import Staff from './assets/pages/staff/staff';
import Home from './assets/pages/home/home';
import AdminPanel from './assets/pages/adminPages/AdminPanel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importação correta
import Container_times from './assets/pages/campeonatos/partials/container_times';

function App() {
  return (

    <Router>
      <Header />
      <main className='main-conteudo'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/staff" element={<Staff />} />
          <Route path="/campeonatos" element= {<Container_times/>} />
          <Route path="/painel" element={< AdminPanel/>} />
        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;

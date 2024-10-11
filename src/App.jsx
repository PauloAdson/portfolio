import React from 'react';
import { Home } from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contato } from './components/Contato/Contato';
import { Obrigado } from './components/Obrigado/Obrigado';
import { Certificados } from './components/Certificados/Certificados';
import { Projetos } from './components/Projetos/Projetos';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>

            <Route path='*' element={<Home />} />

            <Route path='/' element={<Home />} />

            <Route path='/projetos' element={<Projetos />} />

            <Route path='/certificados' element={<Certificados />} />

            <Route path='/contato' element={<Contato />} />

            <Route path='/obrigado' element={<Obrigado />} />

          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contato } from './components/Contato/Contato';
import { Obrigado } from './components/Obrigado/Obrigado';
import { Certificados } from './components/Certificados/Certificados';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/certificados' element={<Certificados />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/obrigado' element={<Obrigado />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
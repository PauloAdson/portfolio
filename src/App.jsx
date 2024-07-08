import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contato } from './components/Contato/Contato';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contato' element={<Contato />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
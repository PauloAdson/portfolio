import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Obrigado } from "./components/Obrigado/Obrigado";
import { Contato } from "./components/Contato/Contato";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            {/* <Route path='*' element={<Home />} /> */}
            <Route path="*" element={<Portfolio />} />

            {/* <Route path='/' element={<Home />} /> */}
            <Route path="/" element={<Portfolio />} />

            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/contato" element={<Contato />} />

            <Route path="/obrigado" element={<Obrigado />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

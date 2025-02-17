import React from "react";
import './styles.css';
import logoHtml5 from '../../assets/images/html5-logo.png';
import logoCss3 from '../../assets/images/css3-logo.png';
import logoJavaScript from '../../assets/images/javascript-logo.png';
import logoReact from '../../assets/images/react-logo.png';
import logoLinkedin from '../../assets/images/linkedin-logo.png';
import logoGitHub from '../../assets/images/github-logo.png';
import pdfCurriculo from '../../assets/PauloAdson-Curriculo.pdf'
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProjetoBloco } from "../Projetos/ProjetoBloco";
import fotoDePaulo from '../../assets/images/paulo-adson.png';
import { Projetos } from "../Projetos/Projetos";

export class Portfolio extends React.Component {
    render() {
        return (
            <>
                <Header />
                <main className="portfolio_main">

                    <section className="sobre-mim" id="sobre">

                        <div className="background-sobre">
                            <img loading="lazy" className="foto-de-paulo" src={fotoDePaulo} alt="Foto de Paulo Adson" />
                            <h1 className="bold">Paulo Adson <br />
                                <span className="text-uppercase"> Desenvoldor Front-End</span>
                            </h1>

                            <div className="logos-linguagens">
                                <img src={logoHtml5} alt="Logo HTML5" width="30px" />
                                <img src={logoCss3} alt="Logo CSS3" width="30" />
                                <img src={logoJavaScript} alt="Java Script" width="30px" />
                                <img src={logoReact} alt="Java Script" height="32px" />
                            </div>

                            <div className="links-sociais">
                                <a href="https://www.linkedin.com/in/paulo-adson/" target="_blank" rel="noopener">
                                    <img src={logoLinkedin} alt="logo-linkedin" width="42" />
                                </a>
                                <a href="https://github.com/PauloAdson" target="_blank" rel="noopener">
                                    <img src={logoGitHub} alt="logo-github" width="42" />
                                </a>
                            </div>
                        </div>

                        <div id="sobre" className="texto-sobre">
                            <h2>Olá</h2>
                            <p className="content-sobre">
                                Sou um Desenvolvedor Front-End focado em criar interfaces funcionais e bem estruturadas.. Minha abordagem une habilidades técnicas sólidas
                                com um toque de criatividade, resultando em projetos envolventes e intuitivos. Estou
                                constantemente em busca de novas oportunidades para aprimorar minhas habilidades e enfrentar
                                desafios estimulantes. No momento, estou imerso nos estudos de React, buscando expandir
                                meu conhecimento e contribuir para projetos inovadores.
                            </p>
                            <a class="hover btn-curriculo" href={pdfCurriculo}
                                target="_blank" rel="noopener">Meu
                                Currículo<i class="fa-solid fa-download"></i>
                            </a>
                        </div>
                    </section>
                    <Projetos />

                    
                </main>
                <Footer />
            </>
        );
    }
}
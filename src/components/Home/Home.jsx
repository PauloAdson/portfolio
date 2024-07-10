import React from "react";
import './styles.css';
import pauloAdsonFoto from '../../assets/images/paulo-adson.png';
import logoHtml5 from '../../assets/images/html5-logo.png';
import logoCss3 from '../../assets/images/css3-logo.png';
import logoJavaScript from '../../assets/images/javascript-logo.png';
import logoReact from '../../assets/images/react-logo.png';
import logoLinkedin from '../../assets/images/linkedin-logo.png';
import logoGitHub from '../../assets/images/github-logo.png';
import pdfCurriculo from '../../assets/PauloAdson-Curriculo.pdf'
import { Projeto } from "./Projeto";

export class Home extends React.Component {
    render() {
        return (
            <>
                <section className="sobre-mim">

                    <div className="background-sobre">
                        <img className="foto-de-paulo" src={pauloAdsonFoto} alt="" width="190" />
                        <p className="bold">Paulo Adson</p>
                        <p className="text-uppercase">Desenvoldor Front-End</p>
                        <div className="logos-linguagens">
                            <img src={logoHtml5} alt="Logo HTML5" width="30px" />
                            <img src={logoCss3} alt="Logo CSS3" width="30" />
                            <img src={logoJavaScript} alt="Java Script" width="30px" />
                            <img src={logoReact} alt="Java Script" height="32px" />
                        </div>

                        <div className="links-sociais">
                            <a href="https://www.linkedin.com/in/paulo-adson/">
                                <img src={logoLinkedin} alt="logo-linkedin" width="42" />
                            </a>
                            <a href="https://github.com/PauloAdson">
                                <img src={logoGitHub} alt="logo-github" width="42" />
                            </a>
                        </div>
                    </div>

                    <div id="sobre" className="texto-sobre">
                        <h2>Olá</h2>
                        <p>
                            Sou um Desenvolvedor Front-End apaixonado por transformar conceitos em experiências visuais
                            incríveis. Minha abordagem une habilidades técnicas sólidas
                            com um toque de criatividade, resultando em projetos envolventes e intuitivos. Estou
                            constantemente em busca de novas oportunidades para aprimorar minhas habilidades e enfrentar
                            desafios estimulantes. No momento, estou imerso nos estudos de React, buscando expandir
                            meu conhecimento e contribuir para projetos inovadores.
                        </p>
                        <a class="hover btn-curriculo " href={pdfCurriculo}
                            download="Currículo de Paulo Adson">Meu
                            Currículo<i class="fa-solid fa-download"></i>
                        </a>
                    </div>
                </section>

                <h2 className="titulo-projetos" id="projetos">Projetos</h2>
                <section className="section-projetos">
                    <div className="projetos">
                        <Projeto imagemDoProjeto="img-info-petlife" titulo="Clínica Petlife" linkDoProjeto="https://pauloadson.github.io/petlife/" />
                        <Projeto imagemDoProjeto="img-info-calculadora" titulo="Calculadora" linkDoProjeto="https://pauloadson.github.io/calculadora-black" />
                        <Projeto imagemDoProjeto="img-info-relogio-e-cronometro" titulo="Relógio e Cronômetro" linkDoProjeto="https://pauloadson.github.io/relogio-e-cronometro/" />
                        <Projeto imagemDoProjeto="img-info-to-do-list" titulo="Lista de Tarefas" linkDoProjeto="https://pauloadson.github.io/to-do-list/" />

                        <div className="container-btn">
                            <a className="btn-mais-projetos" rel="noreferrer" href="https://github.com/PauloAdson" target="_blank">Outros
                                Projetos</a>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
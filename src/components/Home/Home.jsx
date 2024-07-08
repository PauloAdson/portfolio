import React from "react";
import './styles.css';
import pauloAdsonFoto from '../../assets/images/paulo-adson.png';
import logoHtml5 from '../../assets/images/html5-logo.png';
import logoCss3 from '../../assets/images/css3-logo.png';
import logoJavaScript from '../../assets/images/javascript-logo.png';
import logoLinkedin from '../../assets/images/linkedin-logo.png';
import logoGitHub from '../../assets/images/github-logo.png';
import pdfCurriculo from '../../assets/PauloAdson-Curriculo.pdf'

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
                            <img src={logoHtml5} alt="Logo HTML5" width="28px" />
                            <img src={logoCss3} alt="Logo CSS3" width="28" />
                            <img src={logoJavaScript} alt="Java Script" width="27" />
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
                            desafios estimulantes. No momento, estou imerso nos estudos de Java Script, buscando expandir
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
                        <div className="container-projetos">
                            <div className="img-info-petlife"></div>
                            <div className="info-projetos">
                                <p>Clínica Petlife</p>
                                <a target="_blank" rel="noreferrer" href="https://pauloadson.github.io/petlife/"><button className="btn-projetos">Ver
                                    Projeto</button></a>
                            </div>
                        </div>

                        <div className="container-projetos">
                            <div className="img-info-calculadora"></div>
                            <div className="info-projetos">
                                <p>Calculadora</p>
                                <a target="_blank" rel="noreferrer" href="https://pauloadson.github.io/calculadora-black/"><button
                                    className="btn-projetos">Ver Projeto</button></a>
                            </div>
                        </div>

                        <div className="container-projetos">
                            <div className="img-info-relogio-e-cronometro"></div>
                            <div className="info-projetos">
                                <p>Relógio e Cronômetro</p>
                                <a target="_blank" rel="noreferrer" href="https://pauloadson.github.io/relogio-e-cronometro/"><button
                                    className="btn-projetos">Ver Projeto</button></a>
                            </div>
                        </div>

                        <div className="container-projetos">
                            <div className="img-info-to-do-list"></div>
                            <div className="info-projetos">
                                <p>Lista de Tarefas</p>
                                <a target="_blank" rel="noreferrer" href="https://pauloadson.github.io/to-do-list/"><button
                                    className="btn-projetos">Ver Projeto</button></a>
                            </div>
                        </div>

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
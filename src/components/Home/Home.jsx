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

export class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <main className="home_main">

                    <section className="sobre-mim">

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

                    <section className="section-projetos">
                        <h3 className="titulo-projetos" id="projetos">Projetos</h3>
                        <span className="projetos_main-title-span">Clique na imagem para ver o projeto completo!</span>

                        <ProjetoBloco class_projeto_img='furlan-solucoes'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/site-furlan-desktop.png'}
                            projeto_img_desc='Imagem da Página Furlan Soluções Financeiras'
                            projeto_title='Furlan Soluções Financeiras'
                            projeto_desc='Desenvolvi o site utilizando HTML, CSS, Wordpress por preferência do cliente,começando pelo protótipo no Figma.'
                            projeto_linguagens={[
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/html5-logo.png', desc: 'Logo HTML5' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/css3-logo.png', desc: 'Logo CSS3' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/figma-logo.png', desc: 'Logo Figma' }
                            ]}

                            projeto_link='https://furlansolucoesfinanceiras.com.br/' />

                        <ProjetoBloco class_projeto_img='landing-page'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/projetos-bg/aulas-de-musica.png'}
                            projeto_img_desc='Imagem da Página Aulas de Música'
                            projeto_title='Aulas de Música'
                            projeto_desc='Desenvolvi o site utilizando React, começando pelo protótipo no Figma e até criando a logo.'
                            projeto_linguagens={[
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/react-logo.png', desc: 'Logo React' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/html5-logo.png', desc: 'Logo HTML5' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/css3-logo.png', desc: 'Logo CSS3' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/figma-logo.png', desc: 'Logo Figma' }
                            ]}

                            projeto_link='https://paulo-aulas-de-musica.vercel.app/' />

                        <ProjetoBloco class_projeto_img='landing-page'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/projetos-bg/landing-page.png'}
                            projeto_img_desc='Imagem da Landing Page'
                            projeto_title='Landing Page'
                            projeto_desc='Desenvolvida com HTML5 e CSS. Créditos: Design feito por Animaapp.com'
                            projeto_linguagens={[
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/html5-logo.png', desc: 'Logo HTML5' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/css3-logo.png', desc: 'Logo CSS3' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/figma-logo.png', desc: 'Logo Figma' }
                            ]}

                            projeto_link='https://pauloadson.github.io/landing-page/' />

                        <ProjetoBloco class_projeto_img='azevedo-advocacia'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/projetos-bg/azevedo-avocacia.png'}
                            projeto_img_desc='Imagem da Página Azevedo Advocia e Consultoria Jurídica'
                            projeto_title='Azevedo Advocia e Consultoria Jurídica'
                            projeto_desc='Página institucional para Azevedo Advocacia e Consultoria Jurídica, desenvolvida com WordPress, HTML5 e CSS. Conta com um blog para artigos e uma estrutura visual projetada no Figma, garantindo uma navegação intuitiva e uma imagem profissional.'
                            projeto_linguagens={[
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/html5-logo.png', desc: 'Logo HTML5' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/css3-logo.png', desc: 'Logo CSS3' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/figma-logo.png', desc: 'Logo Figma' }
                            ]}

                            projeto_link='https://asazevedo.adv.br/' />

                        <ProjetoBloco class_projeto_img='curso-ebd'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/projetos-bg/curso-ebd.png'}
                            projeto_img_desc='Imagem da Plataforma de Curso de Escola Bíblica'
                            projeto_title='Plataforma de Curso | Escola Bíblica'
                            projeto_desc='Uma plataforma online onde os usuários podem se cadastrar, fazer login e acessar conteúdos de curso bíblico. Desenvolvida com React, Node.js e MySQL para garantir interatividade, segurança e performance. O design da interface foi planejado utilizando o Figma, garantindo uma experiência de usuário fluida e intuitiva.'
                            projeto_linguagens={[
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/react-logo.png', desc: 'Logo React' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/nodejs-logo.png', desc: 'Logo Node' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/mysql-logo.png', desc: 'Logo Mysql' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/figma-logo.png', desc: 'Logo Figma' }
                            ]}
                            projeto_link='https://curso-ebd.vercel.app/' />

                        <ProjetoBloco class_projeto_img='maratona-vocal'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/projetos-bg/maratonavocal.png'}
                            projeto_img_desc='Imagem página de vendas Maratona Vocal'
                            projeto_title='Página de Vendas | Maratona Vocal'
                            projeto_desc='Uma página de vendas online para a Maratona Vocal. Desenvolvida com React, garantindo alta performance e interatividade para uma navegação fluida e envolvente.'
                            projeto_linguagens={[
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/react-logo.png', desc: 'Logo React' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/html5-logo.png', desc: 'Logo HTML5' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/css3-logo.png', desc: 'Logo CSS3' },
                            ]}
                            projeto_link='https://maratonavocal.vercel.app/' />

                        <ProjetoBloco class_projeto_img='petlife'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/projetos-bg/petlife.png'}
                            projeto_img_desc='Imagem página de uma clínica veterinária PetLife'
                            projeto_title='PetLife'
                            projeto_desc='Desenvolvida com HTML, CSS e JavaScript, a página oferece uma interface intuitiva e funcional, proporcionando uma experiência agradável e fácil de usar.'
                            projeto_linguagens={[
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/html5-logo.png', desc: 'Logo HTML5' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/css3-logo.png', desc: 'Logo CSS3' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/javascript-logo.png', desc: 'Logo JavaScript' },
                            ]}
                            projeto_link='https://petlife-one.vercel.app/' />

                        <a className="btn-mais-projetos" rel="noopener" href="/projetos" >Outros Projetos</a>

                    </section>
                </main>
                <Footer />
            </>
        );
    }
}
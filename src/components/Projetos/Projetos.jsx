import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProjetoBloco } from "./ProjetoBloco";
import './styles.css';

// import bgEbdTeste from '../../assets/images/curso-escola-biblica.png'

export class Projetos extends React.Component {
    render() {
        return (
            <>
                <Header />
                <main className="projetos_main">
                    <div className="projetos_main-container-title">
                        <h1 className="projetos_main-title">Projetos</h1>
                        <span className="projetos_main-title-span">Clique na imagem para ver o projeto completo!</span>
                    </div>
                    <section className="projetos_main-section">

                        <ProjetoBloco class_projeto_img='curso-ebd'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/curso-ebd.png'}
                            projeto_img_desc='Imagem da Plataforma de Curso de Escola Bíblica'
                            projeto_title='Plataforma de Curso | Escola Bíblica'
                            projeto_desc='Uma plataforma online onde os usuários podem se cadastrar, fazer login e acessar conteúdos de curso bíblico. Desenvolvida com React, Node.js e MySQL para garantir interatividade, segurança e performance. O design da interface foi planejado utilizando o Figma, garantindo uma experiência de usuário fluida e intuitiva.'
                            projeto_linguagens={[
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/react-logo.png', desc: 'Logo React' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/node-logo.png', desc: 'Logo Node' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/mysql-logo.png', desc: 'Logo Mysql' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/figma-logo.png', desc: 'Logo Figma' }
                            ]}

                            projeto_link='/projetos' />

                        <ProjetoBloco class_projeto_img='maratona-vocal'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/maratonavocal.png'}
                            projeto_img_desc='Imagem página de vendas Maratona Vocal'
                            projeto_title='Página de Vendas | Maratona Vocal'
                            projeto_desc='Uma página de vendas online para a Maratona Vocal. Desenvolvida com React, garantindo alta performance e interatividade para uma navegação fluida e envolvente.'
                            projeto_linguagens={[
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/react-logo.png', desc: 'Logo React' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/html5-logo.png', desc: 'Logo HTML5' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/css3-logo.png', desc: 'Logo CSS3' },
                            ]}
                            projeto_link='/projetos' />

                        <ProjetoBloco class_projeto_img='petlife'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/petlife.png'}
                            projeto_img_desc='Imagem página de uma clínica veterinária PetLife'
                            projeto_title='PetLife'
                            projeto_desc='Desenvolvida com HTML, CSS e JavaScript, a página oferece uma interface intuitiva e funcional, proporcionando uma experiência agradável e fácil de usar.'
                            projeto_linguagens={[
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/html5-logo.png', desc: 'Logo HTML5' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/css3-logo.png', desc: 'Logo CSS3' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/javascript-logo.png', desc: 'Logo JavaScript' },
                            ]}
                            projeto_link='/projetos' />

                        <ProjetoBloco class_projeto_img='consulta-votacao'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/consultarvotacao.png'}
                            projeto_img_desc='Imagem página local de votação'
                            projeto_title='Consulta de Local de Votação'
                            projeto_desc='Um site voltado para moradores de Goiânia, que permite consultar rapidamente o local de votação. Utilizando HTML, CSS, PHP e MySQL, a plataforma oferece uma interface simples e funcional para facilitar o acesso a informações eleitorais de maneira eficiente e intuitiva.'
                            projeto_linguagens={[
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/html5-logo.png', desc: 'Logo HTML5' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/css3-logo.png', desc: 'Logo CSS3' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/php-logo.png', desc: 'Logo PHP' },
                                { src: 'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/mysql-logo.png', desc: 'Logo MYSQL' },
                            ]}
                            projeto_link='/projetos' />

                    </section>
                </main>
                <Footer />
            </>
        );
    }
}
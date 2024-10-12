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
                    <h1 className="projetos_main-title">Projetos</h1>

                    <section className="projetos_main-section">

                        <ProjetoBloco class_projeto_img='curso-ebd'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/curso-escola-biblica.png'}
                            projeto_img_desc='Imagem da Plataforma de Curso de Escola Bíblica'
                            projeto_title='Plataforma de Curso | Escola Bíblica'
                            projeto_desc='Uma plataforma online onde os usuários podem se cadastrar, fazer login e acessar conteúdos de curso bíblico. Desenvolvida com React, Node.js e MySQL para garantir interatividade, segurança e performance. O design da interface foi planejado utilizando o Figma, garantindo uma experiência de usuário fluida e intuitiva.'
                            projeto_img_liguagem1={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/react-logo.png'}
                            projeto_img_liguagem2={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/node-logo.png'}
                            projeto_img_liguagem3={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/mysql-logo.png'}
                            projeto_img_liguagem4={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/figma-logo.png'}

                            projeto_img_liguagem_desc1='Logo React'
                            projeto_img_liguagem_desc2='Logo Node'
                            projeto_img_liguagem_desc3='Logo Mysql'
                            projeto_img_liguagem_desc4='Logo Figma'
                            projeto_link='/projetos' />

                        <ProjetoBloco class_projeto_img='maratona-vocal'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/maratonavocal.png'}
                            projeto_img_desc='Imagem página de vendas Maratona Vocal'
                            projeto_title='Página de Vendas | Maratona Vocal'
                            projeto_desc='Uma página de vendas online para a Maratona Vocal, onde os usuários podem descobrir o método definitivo para dominar técnicas vocais como vibrato, notas agudas e graves, e impressionar ao cantar, mesmo sem experiência prévia ou talento natural. Desenvolvida com React, garantindo alta performance e interatividade para uma navegação fluida e envolvente.'
                            projeto_img_liguagem1={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/react-logo.png'}
                            projeto_img_liguagem2={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/css3-logo.png'}

                            projeto_img_liguagem_desc1='Logo React'
                            projeto_img_liguagem_desc2='Logo CSS'
                            projeto_link='/projetos' />

                        <ProjetoBloco class_projeto_img='petlife'
                            projeto_img={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/petlife.png'}
                            projeto_img_desc='Imagem página de uma clínica veterinária PetLife'
                            projeto_title='PetLife'
                            projeto_desc='A PetLife é o seu refúgio de confiança para o cuidado completo do seu pet. Com profissionais dedicados e serviços abrangentes, oferecemos uma experiência acolhedora e personalizada, garantindo o bem-estar, a saúde e a felicidade dos seus animais de estimação. Desenvolvida com HTML, CSS e JavaScript, a página oferece uma interface intuitiva e funcional, proporcionando uma experiência agradável e fácil de usar.'
                            projeto_img_liguagem1={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/html5-logo.png'}
                            projeto_img_liguagem2={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/css3-logo.png'}
                            projeto_img_liguagem3={'https://raw.githubusercontent.com/PauloAdson/portfolio/refs/heads/main/src/assets/images/javascript-logo.png'}

                            projeto_img_liguagem_desc1='Logo HTML'
                            projeto_img_liguagem_desc2='Logo CSS'
                            projeto_img_liguagem_desc3='Logo JavaScript'
                            projeto_link='/projetos' />

                    </section>
                </main>
                <Footer />
            </>
        );
    }
}
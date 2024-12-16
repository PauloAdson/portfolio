import React from "react";
import './styles.css';
import logo from '../../assets/images/logo-icon-cinza.png'

export class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <nav className="footer_nav">
                        <div className="footer_nav-links-sociais">

                            <a className="logo-name uppercase" href="/">Paulo Adson | Desenvolvedor Front-End</a>

                            <ul className="lista-links-sociais">
                                <a href="https://www.linkedin.com/in/paulo-adson" target="_blank" rel="noopener">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>

                                <a href="https://www.instagram.com/oluap_dev/" target="_blank" rel="noopener">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>

                                <a href="https://www.facebook.com/profile.php?id=100077998817978" target="_blank" rel="noopener">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                            </ul>
                        </div>

                        <ul className="footer_links-container">
                            <h4 className="footer_nav-titulo">Links rápidos</h4>
                            <li><a href="/" rel="noopener">Início</a></li>
                            <li><a href="/#sobre" rel="noopener">Sobre</a></li>
                            <li><a href="/projetos" rel="noopener">Projetos</a></li>
                            <li><a href="/contato" rel="noopener">Contato</a></li>
                        </ul>

                        <ul className="footer_links-container">
                            <h4 className="footer_nav-titulo">Contatos</h4>
                            <li><a href="https://wa.me/62995132226?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20or%C3%A7amento." target="_blank" rel="noopener">Celular: (62) 99513-2226</a></li>
                            <li><a href="mailto:paulo.alves200581@gmail.com" target="_blank" rel="noopener">E-mail: paulo.alves200581@gmail.com</a></li>
                            <li><a href="https://www.google.com/maps/place/Abadia+de+Goi%C3%A1s,+GO,+75345-000/@-16.789487,-49.4357483,13.75z/data=!4m15!1m8!3m7!1s0x935e599a5a9fa6bb:0xc79231dc803d5b28!2sAbadia+de+Goi%C3%A1s,+GO,+75345-000!3b1!8m2!3d-16.763996!4d-49.4352476!16zL20vMGJ3Y2dn!3m5!1s0x935e599a5a9fa6bb:0xc79231dc803d5b28!8m2!3d-16.763996!4d-49.4352476!16zL20vMGJ3Y2dn?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener">Cidade: Abadia de Goiás</a></li>
                        </ul>
                    </nav>
                </footer>
                <div className="footer_copyright">
                    <p>Desenvolvido por <a href="/">Paulo Adson</a></p>
                </div>
            </>
        );
    }
}
import React from "react";
import './styles.css';
import '../../index.css';
import logoCinza from '../../assets/images/logo-icon-cinza.png';

export class Header extends React.Component {
    constructor() {
        super();
        this.state = { active: false };
    }

    toggleClass = () => {
        this.setState({ active: !this.state.active });
    };

    render() {
        const { active } = this.state;
        return (
            <>
                <header className="menu-principal">

                    <nav>
                        <div className="logo">
                            <a href="./"><img className="img-logo" src={logoCinza} alt="logo code" /></a>
                            <a className="logo-name uppercase" href="/">Paulo Adson | Desenvolvedor Front-End</a>
                        </div>

                        <div onClick={this.toggleClass} className={active ? 'mobile-menu active' : 'mobile-menu'}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>

                        <ul className={active ? 'nav-list uppercase active' : 'nav-list uppercase'}>
                            <li><a className="menu-links" href="./">Home</a></li>
                            <li><a className="menu-links" href="/#sobre">Sobre Mim</a></li>
                            <li><a className="menu-links" href="/#projetos">Projetos</a></li>
                            <li><a className="menu-links" href="/certificados">Certificados</a></li>
                            <li><a className="menu-links" href="/contato">Contato</a></li>
                        </ul>
                    </nav>
                </header>
            </>
        );
    }
}
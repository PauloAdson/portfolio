import React from "react";
import './styles.css';

export class Certificados extends React.Component {
    render() {
        return (
            <>
                <h1 id="voltar-ao-topo">Meus Certificados</h1>

                <div className="btn-top-down">
                    <a href="#voltar-ao-topo" class="fa-solid fa-arrow-up fa-xl"></a>
                    <a href="#ir-ao-final" class="fa-solid fa-arrow-down fa-xl"></a>
                </div>

                <section id="certificicados">
                    <figure className="certificado">
                        <img src="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-01.png" alt="Foto de um certificado" />
                    </figure>
                </section>
                <div id="ir-ao-final"></div>
            </>
        );
    }
}
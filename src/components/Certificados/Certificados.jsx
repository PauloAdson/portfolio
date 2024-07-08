import React from "react";
import './styles.css';

export class Certificados extends React.Component {
    render() {
        return (
            <>
                <h1>Meus Certificados</h1>
                <section id="certificicados">
                    <figure className="certificado">
                        <img src="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-01.png" alt="Foto de um certificado" />
                    </figure>
                </section>
            </>
        );
    }
}
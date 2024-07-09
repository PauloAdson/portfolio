import React from "react";
import './styles.css';
import { Certificado } from "./Certificado";

export class Certificados extends React.Component {
    render() {
        return (
            <>
                <h1 id="voltar-ao-topo">Meus Certificados</h1>

                <div className="btn-top-down">
                    <a href="#voltar-ao-topo" class="fa-solid fa-arrow-up fa-xl"></a>
                    <a href="#ir-ao-final" class="fa-solid fa-arrow-down fa-xl"></a>
                </div>

                <section id="certificados">
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-01.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-02.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-03.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-04.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-05.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-06.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-07.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-08.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-09.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-10.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-11.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-12.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-13.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-14.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-15.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-16.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-17.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-18.png" />
                </section>
                <div id="ir-ao-final"></div>
            </>
        );
    }
}
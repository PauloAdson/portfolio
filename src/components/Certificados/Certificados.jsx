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
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-01.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-02.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-03.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-04.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-05.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-06.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-07.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-08.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-09.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-10.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-11.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-12.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-13.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-14.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-15.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-16.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-17.png" />
                    <Certificado certificado="https://raw.githubusercontent.com/PauloAdson/portfolio/main/src/assets/images/certificados/certificado-dio-18.png" />
                </section>
                <div id="ir-ao-final"></div>
            </>
        );
    }
}
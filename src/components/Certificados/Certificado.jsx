import React from "react";
import './styles.css';

export class Certificado extends React.Component {
    render() {
        return (
            <div className="certificado">
                <img loading="lazy" src={this.props.certificado} alt="Foto de um certificado" />
            </div>
        );
    }
}
import React from "react";
import './styles.css';

export class Projeto extends React.Component {
    render() {
        return (
            <>
                <div className="container-projetos" loading='lazy'>
                    <div className={this.props.imagemDoProjeto}></div>
                    <div className="info-projetos">
                        <p>{this.props.titulo}</p>
                        <a target="_blank" rel="noreferrer" href={this.props.linkDoProjeto}><button className="btn-projetos">Ver
                            Projeto</button></a>
                    </div>
                </div>
            </>
        );
    }
}
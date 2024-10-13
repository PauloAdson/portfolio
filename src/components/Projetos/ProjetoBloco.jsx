import React from "react";
import './styles.css';
export class ProjetoBloco extends React.Component {

    constructor() {
        super();
        this.state = {
            animate: false
        };
    };

    handleImageClick = () => {
        this.setState({ animate: true });

        setTimeout(() => {
            this.setState({ animate: false });
        }, 3600);
    };

    render() {
        return (
            <>
                <div className="projeto_container">
                    <div className="projeto_container-img">
                        <img
                            className={`projeto_container-content-img ${this.props.class_projeto_img || ''} ${this.state.animate ? 'animate' : ''}`}
                            src={this.props.projeto_img}
                            alt={this.props.projeto_img_desc}
                            onClick={this.handleImageClick} />
                    </div>

                    <div className="projeto_container-info">
                        <h3 className="projeto_container-info-title">{this.props.projeto_title}</h3>
                        <p className="projeto_container-content-text">{this.props.projeto_desc}</p>
                        <div className="projeto_container-content-img-linguagens">
                            {this.props.projeto_linguagens.map((linguagem, index) => (

                                <img
                                    key={index}
                                    src={linguagem.src}
                                    alt={linguagem.desc} />
                            ))}

                        </div>
                        <a className="projeto_container-link" href={this.props.projeto_link} rel="noopener" target="_blank">Ver Projeto</a>
                    </div>
                </div>
            </>
        );
    }
}
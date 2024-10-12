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
                        <h3>{this.props.projeto_title}</h3>
                        <p className="projeto_container-content-text">{this.props.projeto_desc}</p>
                        <div className="projeto_container-content-img-linguagens">

                            <img src={this.props.projeto_img_liguagem1} alt={this.props.projeto_img_liguagem_desc1} />
                            <img src={this.props.projeto_img_liguagem2} alt={this.props.projeto_img_liguagem_desc2} />
                            <img src={this.props.projeto_img_liguagem3} alt={this.props.projeto_img_liguagem_desc3} />
                            <img src={this.props.projeto_img_liguagem4} alt={this.props.projeto_img_liguagem_desc4} />
                        </div>
                        <a className="projeto_container-link" href={this.props.projeto_link} rel="noopener" target="_blank">Ver Projeto</a>
                    </div>
                </div>
            </>
        );
    }
}
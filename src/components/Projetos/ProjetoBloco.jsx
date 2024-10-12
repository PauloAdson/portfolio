import React from "react";
import './styles.css';
export class ProjetoBloco extends React.Component {
    render() {
        return (
            <>
                <div className="projeto_container">
                    <div className="projeto_container-img">
                        <img
                            className={`projeto_container-content-img ${this.props.class_projeto_img || ''}`}
                            src={this.props.projeto_img}
                            alt={this.props.projeto_img_desc} />
                    </div>

                    <div className="projeto_container-content-info">
                        <h3>{this.props.projeto_title}</h3>
                        <p className="projeto_container-content-text">{this.props.projeto_desc}</p>
                        <div className="projeto_container-content-img-linguagens">

                            <img src={this.props.projeto_img_liguagem1} alt={this.props.projeto_img_liguagem_desc1} />
                            <img src={this.props.projeto_img_liguagem2} alt={this.props.projeto_img_liguagem_desc2} />
                            <img src={this.props.projeto_img_liguagem3} alt={this.props.projeto_img_liguagem_desc3} />
                            <img src={this.props.projeto_img_liguagem4} alt={this.props.projeto_img_liguagem_desc4} />
                        </div>
                        <a href={this.props.projeto_link}>Ver Projeto</a>
                    </div>
                </div>
            </>
        );
    }
}
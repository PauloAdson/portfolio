import React from "react";
import './styles.css'

export class Obrigado extends React.Component {
    render() {
        return (
            <main className="obrigado_main">
                <div className="content-obrigado">
                    <h1 className="h1-obrigado">Obrigado pelo contato!</h1>
                    <p className="p-obrigado">Em breve estarei respondendo</p>
                    <a className="btn-voltar-ao-inicio" href="/">Voltar ao ínicio</a>
                </div>
            </main>
        );
    }
}
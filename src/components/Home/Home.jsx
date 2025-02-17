import React from "react";
import './styles.css'
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <main className="home_main">
                    <section className="home_section1">
                        <h1>Faça hoje um orçamento</h1>
                    </section>
                </main>
                <Footer />
            </>
        )
    }
}
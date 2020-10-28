import React from "react";
import { Link } from 'react-router-dom';

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "./styles.css";

export default function Index() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="center-container">
          <h1>Encontre sua moradia e estude com tranquilidade!</h1>
          <h3>
            A Student's Home conta com as mais diversas opções de moradia com
            variedade de preços para você que pretende estudar em uma nova
            cidade. É simples, fácil e rápido, sem sair de casa, com apenas
            alguns cliques você pode escolher entre repúblicas, hotéis e quartos
            de aluguel próximos das mais importantes instituições de ensino do
            Brasil.
          </h3>
          <Link to="/accommodations">Encontrar uma hospedagem!</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

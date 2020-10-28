import React from "react";
import { Link } from 'react-router-dom';

import "./styles.css";

import logoImg from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <div className="left-container">
        <Link to="/"><img src={logoImg} alt="Student`s Home Logo" /></Link>

        <div className="itens-container">
            <Link to="/accommodations">Hospedagens</Link>
            <Link to="/company">Quem Somos</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/partners">Parceiros</Link>
            <Link to="/contact">Fale Conosco</Link>
        </div>
      </div>
      <div className="right-container">Login/Cadastrar</div>
    </header>
  );
}

import React, { useEffect } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "./styles.css";

import AccommodationsCard from "../../components/AccommodationsCard";

import accommodationsImg from "../../assets/images/hospedagens.png";
import republicaufabcsbc from "../../assets/images/hospedagens/republica-ufabc-sbc.jpg";

export default function Accommodations() {
  useEffect(() => {
    document.title = "Student`s Home - Hospedagens";
  }, []);

  return (
    <>
      <Header />
      <div className="img-container">
        <img src={accommodationsImg} alt="Accommodations" />
      </div>
      <main>
        <div className="filters-container">
          <button>Tipos de Hospedagens ▼</button>
          <button>Estados ▼</button>
          <button>Avaliacao ▼</button>
          <button>Classificar ▼</button>
          <span>Faixa Preco:</span>
        </div>
        <div className="cards-container">
          <AccommodationsCard
            image={republicaufabcsbc}
            title="Republica UFABC - SBC"
            text="Republica localizada proxima a Universidade Federal do ABC - SBC"
            value={200}
            stars={3}
            link=""
          />
          <AccommodationsCard
            image={republicaufabcsbc}
            title="Republica UFABC - SBC"
            text="Republica localizada proxima a Universidade Federal do ABC - SBC"
            value={200}
            stars={3}
            link=""
          />
          <AccommodationsCard
            image={republicaufabcsbc}
            title="Republica UFABC - SBC"
            text="Republica localizada proxima a Universidade Federal do ABC - SBC"
            value={200}
            stars={3}
            link=""
          />
          <AccommodationsCard
            image={republicaufabcsbc}
            title="Republica UFABC - SBC"
            text="Republica localizada proxima a Universidade Federal do ABC - SBC"
            value={200}
            stars={3}
            link=""
          />
          <AccommodationsCard
            image={republicaufabcsbc}
            title="Republica UFABC - SBC"
            text="Republica localizada proxima a Universidade Federal do ABC - SBC"
            value={200}
            stars={3}
            link=""
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

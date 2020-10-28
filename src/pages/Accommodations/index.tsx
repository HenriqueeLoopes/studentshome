import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "./styles.css";

import AccommodationsCard from "../../components/AccommodationsCard";

import accommodationsImg from "../../assets/images/hospedagens.png";
import republicaufabcsbc from "../../assets/images/hospedagens/republica-ufabc-sbc.jpg";

export default function Accommodations() {
  const [priceSlider, setPriceSlider] = useState(150);

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
          <button>
            Tipos de Hospedagens ▼
            <div className="dropdown-container">
              <button>Republica</button>
              <button>Hotel</button>
              <button>Quarto</button>
              <button>Casa</button>
            </div>
          </button>
          <button>
            Estados ▼
            <div className="dropdown-container">
              <button>SP</button>
              <button>RJ</button>
              <button>BH</button>
              <button>MG</button>
            </div>
          </button>
          <button>
            Avaliacao ▼{" "}
            <div className="dropdown-container">
              <button>5 ✩</button>
              <button>4 ✩</button>
              <button>3 ✩</button>
              <button>2 ✩</button>
              <button>0/1 ✩</button>
            </div>
          </button>
          <button>
            Classificar ▼
            <div className="dropdown-container">
              <button>Maior Preco</button>
              <button>Menor Preco</button>
              <button>Melhor Avaliacao</button>
              <button>Pior Avaliacao</button>
            </div>
          </button>
          <span>Faixa Preco:</span>
          <input
            type="range"
            min={0}
            max={4000}
            value={priceSlider}
            onChange={(e) => {
              setPriceSlider(Number(e.target.value));
            }}
            id="price-slider"
          />
          <span>R$ {priceSlider}</span>
        </div>

            <div className="mobile-filters">
              <button>Filtros ▼</button>
              <div className="mobile-filters-main-dropdown">
                    <button>Tipos de hospedagens ▼</button>
                    <button>Estados ▼</button>
                    <button>Avaliacao ▼</button>
                    <button>Classificar ▼</button>
              </div>
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

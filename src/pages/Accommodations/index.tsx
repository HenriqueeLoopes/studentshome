import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import {
  FiltersContainer,
  ImgWrapper,
  MainWrapper,
  DropdownContainer,
  DropdownButton,
  FiltersButton,
  PriceSlider,
  CardsWrapper,
  MobileFiltersWrapper,
  MobileFiltersMainDropdown,
} from "./styles";

import AccommodationsCard from "../../components/AccommodationsCard";

import accommodationsImg from "../../assets/images/hospedagens.png";
import republicaufabcsbc from "../../assets/images/hospedagens/republica-ufabc-sbc.jpg";

export default function Accommodations() {
  const [priceSlider, setPriceSlider] = useState(150);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    document.title = "Student`s Home - Hospedagens";
  }, []);

  return (
    <>
      <Header />
      <ImgWrapper>
        <img src={accommodationsImg} alt="Accommodations" />
      </ImgWrapper>
      <MainWrapper>
        <FiltersContainer>
          <FiltersButton>
            Tipos de Hospedagens ▼
            <DropdownContainer>
              <DropdownButton>Republica</DropdownButton>
              <DropdownButton>Hotel</DropdownButton>
              <DropdownButton>Quarto</DropdownButton>
              <DropdownButton>Casa</DropdownButton>
            </DropdownContainer>
          </FiltersButton>
          <FiltersButton>
            Estados ▼
            <DropdownContainer>
              <DropdownButton>SP</DropdownButton>
              <DropdownButton>RJ</DropdownButton>
              <DropdownButton>BH</DropdownButton>
              <DropdownButton>MG</DropdownButton>
            </DropdownContainer>
          </FiltersButton>
          <FiltersButton>
            Avaliacao ▼{" "}
            <DropdownContainer>
              <DropdownButton>5 ✩</DropdownButton>
              <DropdownButton>4 ✩</DropdownButton>
              <DropdownButton>3 ✩</DropdownButton>
              <DropdownButton>2 ✩</DropdownButton>
              <DropdownButton>0/1 ✩</DropdownButton>
            </DropdownContainer>
          </FiltersButton>
          <FiltersButton>
            Classificar ▼
            <DropdownContainer>
              <DropdownButton>Maior Preco</DropdownButton>
              <DropdownButton>Menor Preco</DropdownButton>
            </DropdownContainer>
          </FiltersButton>
          <span>Faixa Preco:</span>
          <PriceSlider
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
        </FiltersContainer>

        <MobileFiltersWrapper>
          <button
            onClick={() => {
              setShowMobileFilters(!showMobileFilters);
            }}
          >
            Filtros ▼
          </button>
          {showMobileFilters && (
            <MobileFiltersMainDropdown>
              <button>Tipos de hospedagens ▼</button>
              <button>Estados ▼</button>
              <button>Avaliacao ▼</button>
              <button>Classificar ▼</button>
            </MobileFiltersMainDropdown>
          )}
        </MobileFiltersWrapper>

        <CardsWrapper>
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
        </CardsWrapper>
      </MainWrapper>
      <Footer />
    </>
  );
}

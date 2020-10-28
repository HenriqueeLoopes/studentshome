import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  HambugerMenuItensWrapper,
  HamburgerMenuItem,
  HamburgerMenuWrapper,
  LeftWrapper,
  LinksWrapper,
  LoginButton,
  Wrapper,
} from "./styles";

import logoImg from "../../assets/images/logo.png";

export default function Header() {
  const [hambugerMenu, setHamburgerMenu] = useState(false);

  return (
    <>
      <Wrapper>
        <LeftWrapper>
          <Link to="/">
            <img src={logoImg} alt="Student`s Home Logo" />
          </Link>

          <LinksWrapper>
            <Link to="/accommodations">Hospedagens</Link>
            <Link to="/company">Quem Somos</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/partners">Parceiros</Link>
            <Link to="/contact">Fale Conosco</Link>
          </LinksWrapper>
        </LeftWrapper>

        <LoginButton to="/login">Login/Cadastrar</LoginButton>

        <HamburgerMenuWrapper
          onClick={() => setHamburgerMenu(!hambugerMenu)}
          aria-label="HamburgerMenu Button"
          className="hamburger-menu"
        >
          <HamburgerMenuItem />
          <HamburgerMenuItem />
          <HamburgerMenuItem />
        </HamburgerMenuWrapper>
      </Wrapper>

      {hambugerMenu && (
        <HambugerMenuItensWrapper>
          <Link to="/accommodations">Hospedagens</Link>
          <Link to="/company">Quem Somos</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/partners">Parceiros</Link>
          <Link to="/contact">Fale Conosco</Link>
        </HambugerMenuItensWrapper>
      )}
    </>
  );
}

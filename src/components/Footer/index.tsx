import React from "react";
import { Link } from "react-router-dom";

import { FooterWrapper, SocialNetworkWrapper } from "./styles";

import logoImg from "../../assets/images/logo.png";

import facebookIcon from "../../assets/facebook-icon.svg";
import twitterIcon from "../../assets/twitter-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";

export default function Footer() {
  return (
    <FooterWrapper>
      <img src={logoImg} alt="Student`s Home Logo" />

      <SocialNetworkWrapper>
        <a
          href="https://www.instagram.com/studentshome_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Student`s Home Instagram"
        >
          <img src={instagramIcon} alt="Instagram Icon" />
        </a>
        <a
          href="https://twitter.com/studentshome2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Student`s Home Twitter"
        >
          <img src={twitterIcon} alt="Twitter Icon" />
        </a>
        <Link to="/">
          <img
            src={facebookIcon}
            alt="Facebook Icon"
            aria-label="Student`s Home Facebook"
          />
        </Link>
      </SocialNetworkWrapper>

      <span>Student's Home © - 2020</span>
    </FooterWrapper>
  );
}

import React from "react";
import { Link } from 'react-router-dom';

import "./styles.css";

import logoImg from "../../assets/images/logo.png";

import facebookIcon from '../../assets/facebook-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';

export default function Footer() {
  return (
    <footer>
      <img src={logoImg} alt="Student`s Home Logo" />

      <div className="social-networks">
          <a href="https://www.instagram.com/studentshome_/" target="_blank" rel="noopener noreferrer" aria-label="Student`s Home Instagram"><img src={instagramIcon} alt="Instagram Icon"/></a>
          <a href="https://twitter.com/studentshome2" target="_blank" rel="noopener noreferrer" aria-label="Student`s Home Twitter"><img src={twitterIcon} alt="Twitter Icon"/></a>
          <Link to="/"><img src={facebookIcon} alt="Facebook Icon" aria-label="Student`s Home Facebook"/></Link>
      </div>

      <span>Student's Home © - 2020 - Remasterized</span>
    </footer>
  );
}

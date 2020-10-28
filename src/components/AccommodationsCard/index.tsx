import React from "react";
import { Link } from 'react-router-dom';

import "./styles.css";

interface AccommodationsCardProps {
  image: string;
  title: string;
  text: string;
  value: number;
  stars: number;
  link: string;
}

export default function AccommodationsCard(props: AccommodationsCardProps) {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <div className="bottom-card-container">
        <h1>{props.title}</h1>
        <span>{props.text}</span>
        <div className="buttons-container">
          <button>R${props.value}</button>
          <Link to={props.link}>saiba mais</Link>
          <button>{props.stars} ✩</button>
        </div>
      </div>
    </div>
  );
}

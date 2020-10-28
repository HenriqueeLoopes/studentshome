import React from "react";

import './styles.css';


interface AccommodationsCardProps {
  image: string;
  title: string;
  text: string;
  value: number;
  link: string;
}

export default function AccommodationsCard(props: AccommodationsCardProps) {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <span>{props.text}</span>
    </div>
  );
}

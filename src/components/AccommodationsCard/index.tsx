import React from "react";
import { Link } from 'react-router-dom';

import { BottomCardWrapper, ButtonsWrapper, CardWrapper } from './styles';

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
    <CardWrapper>
      <img src={props.image} alt="" />
      <BottomCardWrapper>
        <h1>{props.title}</h1>
        <span>{props.text}</span>
        <ButtonsWrapper>
          <button>R${props.value}</button>
          <Link to={props.link}>saiba mais</Link>
          <button>{props.stars} ✩</button>
        </ButtonsWrapper>
      </BottomCardWrapper>
    </CardWrapper>
  );
}

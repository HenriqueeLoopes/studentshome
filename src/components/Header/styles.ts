import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  height: 6rem;
  background-color: #f8f9fa;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  img {
    height: 3.5rem;
    width: 12rem;
    margin-right: 0.5rem;
  }
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;

  a {
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    transition: background-color ease-in-out 0.2s;

    &:hover {
      color: rgba(0, 0, 0, 0.7);
      background-color: #e2e6ea;
    }

    &:active {
      color: #000;
    }

    @media (max-width: 900px) {
      padding: 0.5rem 0.5rem;
    }
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

export const LoginButton = styled(Link)`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  transition: background-color ease-in-out 0.2s;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
    background-color: #e2e6ea;
  }

  &:active {
    color: #000;
  }

  @media (max-width: 780px){
      display: none;
  }
`;

export const HamburgerMenuWrapper = styled.button`
  display: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 2px 3px;
  border-radius: 5px;
  transition: background-color ease-in-out 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:focus {
      outline: none;
  }

  @media (max-width: 780px) {
      display: inline-block;
  }
`;

export const HamburgerMenuItem = styled.div`
  width: 35px;
  height: 3px;
  background-color: black;
  margin: 6px 0;
`;

export const HambugerMenuItensWrapper = styled.div`
  padding: 0.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    padding: 3px 0;
  }
`;

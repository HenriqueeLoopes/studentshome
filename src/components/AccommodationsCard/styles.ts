import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 1rem 1rem;
  width: 25rem;
  height: 40rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 40%;
  }
`;

export const BottomCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1rem 1.5rem;

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
  span {
    font-size: 1.5rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  a,
  button {
    background-color: transparent;
    text-decoration: none;
    display: flex;
    align-items: center;

    padding: 0 0.962rem;
    height: 100%;
    color: #6c757d;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all ease-in-out 0.2s;
  }

  button:hover,
  a:hover {
    background-color: #6c757d;
    color: #fff;
  }
`;

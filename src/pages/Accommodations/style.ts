import styled from "styled-components";

export const ImgWrapper = styled.div`
  width: 100vw;
  height: calc(40vh - 6rem);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border: 2px solid #fff;
    border-radius: 3px;
    max-width: 90vw;
    max-height: 85%;
  }
`;

export const MainWrapper = styled.main`
  background-color: #fff;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
`;

export const FiltersContainer = styled.div`
  padding: 3rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;

  span {
    color: rgba(0, 0, 0, 0.5);
    padding: 0 1rem;
  }

  button {
    text-decoration: none;
    background-color: transparent;
    border: 0;
    color: rgba(0, 0, 0, 0.5);
    padding: 0 0.5rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  margin-top: 20px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  max-width: 100%;
  max-height: 150px;
  overflow-y: scroll;
  background-color: #fff;
  border-radius: 5px;
  display: none;
  flex-direction: column;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FiltersButton = styled.button`
  &:hover {
    ${DropdownContainer} {
      display: flex;
    }
  }
`;

export const DropdownButton = styled.button`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 30px;
  padding: 5px 3rem;
  transition: background-color ease-in-out 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const PriceSlider = styled.input`
  width: 20%;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 90vw;
  height: inherit;
  padding-bottom: 4rem;
`;

import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 998;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  height: 6rem;
  background-color: #f8f9fa;

  border-top: 1px solid rgba(0, 0, 0, 0.2);

  img {
    height: 3.5rem;
    width: 12rem;

    @media (max-width: 610px) {
      height: 2.5rem;
      width: 6.5rem;
    }
  }

  span {
    @media (max-width: 610px) {
      font-size: 1.5rem;
    }
  }
`;

export const SocialNetworkWrapper = styled.div`
  img {
    margin: 0 1rem;
    height: 2rem;
    width: 2rem;

    @media (max-width: 610px) {
      margin: 0 0.5rem;
      height: 1rem;
      width: 1rem;
    }
  }
`;

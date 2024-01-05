import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #0066ff;

  h1 {
    text-align: center;
    font-size: 5rem;
    text-align: center;
    font-weight: 800;
    color: #ffff;
    text-shadow: 2px 2px black;
    text-transform: uppercase;
  }

  img {
    width: 120px;
  }

  @media screen and (max-width: 648px) {
    flex-direction: column;
  }

  @media screen and (max-width: 435px) {
    h1 {
      font-size: 4rem;
    }
  }
`;

import styled from "styled-components";

export const DataInputContainerStyled = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;

  p {
    color: #0066ff;
  }

  img {
    width: 50%;
  }

  @media screen and (max-width: 780px) {
    img {
      display: none;
    }

    justify-content: center;
  }
`;

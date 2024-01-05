import styled from "styled-components";

export const ImageVariationStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
  flex-direction: column;

  .image-control {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    button {
      font-size: 0.6rem;
      padding: 5px;
    }
  }
  @media screen and (max-width: 600px) {
    img {
      width: 80%;
    }
  }
`;

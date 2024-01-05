import styled from "styled-components";

export const PostStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  border-radius: 10px;

  button {
    border: 0;
    font-size: 1.2rem;
    padding: 0px 10px;
    cursor: pointer;
    border-radius: 15px;
  }

  .image-container {
    position: relative;
    text-align: center;
    overflow: hidden;
    h1 {
      font-size: 150%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  h1 {
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }

  img {
    width: 80%;
  }
`;

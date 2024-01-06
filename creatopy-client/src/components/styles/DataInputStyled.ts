import styled from "styled-components";

export const DataInputStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  gap: 50px;
  margin-bottom: 50px;

  h1 {
    color: #0066ff;
    text-transform: uppercase;
    font-weight: 300;
  }

  .input-control {
    width: 70%;
    display: flex;
    flex-direction: column;

    &:focus-within {
      label {
        transform: translateY(-5px);
        transition: 0.2s;
        color: #0066ff;
        font-weight: 800;
      }
    }
  }

  input {
    border: 1px solid blue;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background-color: transparent;
    font-size: 20px;

    &::placeholder {
      font-size: 1rem;
    }

    &:focus {
      border-bottom: 2px solid #0066ff;
    }
  }

  label {
    font-size: 1.2rem;
    text-transform: uppercase;

    span {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      text-align: center;
    }
  }
`;

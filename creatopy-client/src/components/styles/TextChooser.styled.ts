import styled from "styled-components";

export const TextChooseStyled = styled.input`
  border: 0;
  border: 1px solid blue;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  width: 80%;

  &::placeholder {
    font-size: 1rem;
  }

  &:focus {
    border-bottom: 2px solid #0066ff;
  }
`;

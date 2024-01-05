import styled from "styled-components";

export const ColorPickerStyled = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  width: 25px;
  height: 25px;
  border: 0;
  cursor: pointer;

  &::-webkit-color-swatch {
    border-radius: 50px;
    border: 1px solid blue;
  }

  &::-moz-color-swatch {
    border-radius: 100%;
  }
`;

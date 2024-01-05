import styled from "styled-components";

export const GenerateButtonStyled = styled.button`
  padding: 17px 40px;
  border-radius: 50px;
  cursor: pointer;
  background-color: #0066ff;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;
  color: #ffff;
  border: 5px solid #0066ff;

  &:hover {
    color: hsl(0, 0%, 100%);
    /* box-shadow: #000000 0px 7px 29px 0px; */
  }

  &:active {
    transform: translateY(10px);
    transition: 100ms;
  }
`;

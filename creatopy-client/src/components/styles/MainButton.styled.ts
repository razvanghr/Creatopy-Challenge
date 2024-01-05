import styled from "styled-components";
import { motion } from "framer-motion";

export const MainButtonStyled = styled(motion.button)`
  padding: 17px 40px;
  border-radius: 50px;
  cursor: pointer;
  border: 4px solid #0066ff;
  background-color: white;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;

  &:hover {
    /* letter-spacing: 3px; */
    /* color: hsl(0, 0%, 100%); */
    box-shadow: #000000 0px 7px 29px 0px;
  }

  &:active {
    box-shadow: #000000 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }
`;

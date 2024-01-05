import styled from "styled-components";
import { motion } from "framer-motion";

export const TemplateMenuObjectStlyed = styled(motion.div)`
  width: 300px;
  height: 400px;
  background-color: #0066ff;
  color: #ffff;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 5px 0px #000000;
  box-shadow: 0px 0px 5px 0px #000000;
  transition: 0.4s;
  cursor: pointer;

  h1 {
    text-shadow: 2px 2px black;
  }

  p {
    font-weight: 800;
  }

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 1180px) {
    width: 100%;
    margin-top: 50px;
  }

  @media screen and (max-width: 435px) {
    text-align: center;
  }
`;

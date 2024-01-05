import React, { ReactElement } from "react";

import { StyledHeader } from "./styles/Header.styled";

import CreatopyLogo from "../assets/Images/Creatopy.png";
import OpenAiLogo from "../assets/Images/OpenAI.png";

const Header = (): ReactElement => {
  return (
    <StyledHeader id="header">
      <img src={CreatopyLogo} alt="Creatopy-Logo" />
      <h1>
        Creatopy
        <br />
        Challenge
      </h1>
      <img src={OpenAiLogo} alt="OpenAi-Logo" />
    </StyledHeader>
  );
};

export default Header;

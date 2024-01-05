import React, { ReactElement } from "react";

import { MainButtonStyled } from "./styles/MainButton.styled";

type MainButtonProps = { buttonText: string; onClick: () => void };

const MainButton = ({ buttonText, onClick }: MainButtonProps): ReactElement => {
  return <MainButtonStyled onClick={onClick}>{buttonText}</MainButtonStyled>;
};

export default MainButton;

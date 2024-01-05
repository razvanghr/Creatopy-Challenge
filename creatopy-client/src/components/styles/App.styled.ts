import styled from "styled-components";

import bgImage from "../../assets/Images/app-background2.svg";

export const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${bgImage});
  background-color: #f6f6f6;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 250px;

  @media only screen and (max-width: 648px) {
    background-position-y: 250px;
  }

  @media only screen and (max-width: 825px) {
    background-position-y: 100px;
  }

  @media only screen and (max-width: 647px) {
    background-position-y: 300px;
  }
`;

import styled from "styled-components";

export const MainStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 400px;

  .top-button-wrapper {
    position: fixed;
    z-index: 9999;
  }

  .main-button-control {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 50px;
  }
`;

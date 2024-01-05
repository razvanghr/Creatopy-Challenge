import styled from "styled-components";

export const StyledSpinner = styled.div`
  border: 3px solid #606060;
  border-top: 3px solid #0066ff;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: spin 1s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

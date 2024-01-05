import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: grey;
  justify-content: center;
  flex-direction: column;

  a {
    text-decoration: none;
    color: #0066ff;
    transition: 0.2s;

    &:hover {
      letter-spacing: 3px;
    }
  }
`;

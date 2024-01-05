import styled from "styled-components";

export const TemplateEditorStyled = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 200px;
  gap: 20px;

  .editor-menu-special-control {
    width: 80%;
    display: flex;
    text-align: center;
    justify-content: space-around;
  }

  .editor-menu-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    gap: 35px;
  }
`;

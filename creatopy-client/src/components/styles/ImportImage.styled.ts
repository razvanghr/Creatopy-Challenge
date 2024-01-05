import styled from "styled-components";

export const StyledImportImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  a {
    text-decoration: none;
    color: red;
  }

  p {
    color: #0066ff;
    text-align: center;
  }

  button {
  }

  .input-control-image {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 50px;
  }

  input[type="file"]::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #0066ff;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }

  input[type="file"]::file-selector-button:hover {
    background: #0d45a5;
  }

  label {
    text-transform: uppercase;
    font-size: 2rem;
  }
`;

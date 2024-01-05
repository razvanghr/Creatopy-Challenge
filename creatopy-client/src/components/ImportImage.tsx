import React, { useState } from "react";
import styled from "styled-components";
import { GenerateButtonStyled } from "./styles/GenerateButton.styled";
import ImageVariation from "./ImageVariation";
import Spinner from "./Spinner";

import { StyledImportImage } from "./styles/ImportImage.styled";

type ImageInfo = {
  url: string;
};

export type ImageInfoArray = ImageInfo[];

const ImportImage = () => {
  const [requestStatus, setRequestStatus] = useState<string | null>(null);
  const [isImported, setIsImported] = useState<boolean>(false);
  const [imageArray, setImageArray] = useState<ImageInfoArray>([]);
  const [isLoading, setIsLoading] = useState<boolean>();

  const sendImage = async (e: any) => {
    console.log(e.target.files[0]);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    try {
      const response = await fetch("http://localhost:8888/upload", {
        method: "POST",
        body: formData,
      });
      console.log(response);
      setIsImported(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getVartiation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8888/variations", {
        method: "POST",
      });
      const data = await response.json();
      console.log(data);
      if (data.status === 400) {
        setIsLoading(false);
        setRequestStatus(data.error.message);
        return;
      }
      setImageArray(data);
      setIsLoading(false);
      setRequestStatus("");
    } catch (error) {
      setRequestStatus("Something went wrong! Please try again later");
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <StyledImportImage id="import-image">
      <div className="input-control-image">
        <label>Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            sendImage(e);
            setIsImported(true);
          }}
        />
        <p>
          Notice: The image must be in <br />
          png format and maximum 4 mb
        </p>
        <a href="https://github.com/razvanghr/Creatopy-Challenge">
          Require: Creatopy Challenge Server
        </a>
      </div>
      {isImported && (
        <GenerateButtonStyled onClick={getVartiation}>
          GENERATE NOW
        </GenerateButtonStyled>
      )}
      {isLoading && <Spinner />}
      <p style={{ textAlign: "center" }}>{requestStatus}</p>
      {imageArray.length !== 0 && (
        <ImageVariation images={imageArray}></ImageVariation>
      )}
    </StyledImportImage>
  );
};

export default ImportImage;

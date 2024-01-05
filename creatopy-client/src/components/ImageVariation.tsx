import React from "react";

import { ImageInfoArray } from "./ImportImage";
import styled from "styled-components";
import FileSaver, { saveAs } from "file-saver";
import { GenerateButtonStyled } from "./styles/GenerateButton.styled";
import { ImageVariationStyled } from "./styles/ImageVariation.styled";

type ImageVariationProps = {
  images: ImageInfoArray;
};

const downloadImage = (imageURL: string) => {
  saveAs(imageURL, "ad-image.png");
};

const ImageVariation = ({ images }: ImageVariationProps) => {
  console.log("imageArray", images);
  return (
    <ImageVariationStyled>
      {images.length !== 0 &&
        images.map((image, index) => (
          <div className="image-control">
            <img key={index} src={image.url} alt={`Image ${index + 1}`} />
            <GenerateButtonStyled
              key={index + 2}
              onClick={() => {
                downloadImage(image.url);
              }}
            >
              Download Ad
            </GenerateButtonStyled>
          </div>
        ))}
    </ImageVariationStyled>
  );
};

export default ImageVariation;

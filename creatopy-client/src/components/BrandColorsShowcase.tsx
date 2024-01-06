import React from "react";

type BrandColorsShowcaseProps = {
  brandColours: {
    hex: string;
    type: "accent" | "brand";
    brightness: number;
  }[];
};

const BrandColorsShowcase = ({ brandColours }: BrandColorsShowcaseProps) => {
  return <>
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
  </>;
};

export default BrandColorsShowcase;

import { GenerateButtonStyled } from "./styles/GenerateButton.styled";
import { DataInputStyled } from "./styles/DataInputStyled";
import OpenAI from "openai";
import { ChangeEvent, useState } from "react";
import Spinner from "./Spinner";
import { getTemplateSize } from "../functions/getTemplateSize";
import { TApiData } from "./Template";
import { smoothScroll } from "../functions/smoothScroll";
import { DataInputContainerStyled } from "./styles/DataInputContainer.styed";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

type DataInputProps = {
  templateTitle: string;
  formImage: string;
  setActiveEditor: React.Dispatch<React.SetStateAction<boolean>>;
  setApiData: React.Dispatch<React.SetStateAction<TApiData | null>>;
  selectedTemplate: string;
};

const DataInput = ({
  templateTitle,
  formImage,
  setActiveEditor,
  setApiData,
  selectedTemplate,
}: DataInputProps) => {
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [imageDescription, setimageDescription] = useState<string | null>(null);
  const [inputStatus, setInputStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [brandName, setBrandName] = useState<string | null>(null);

  const adRequest = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setInputStatus("");

    if (!title) {
      setInputStatus("Title is required.");
      return;
    }

    if (!description) {
      setInputStatus("Description is required.");
      return;
    }

    if (!imageDescription) {
      setInputStatus("Image description is required.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `Generate an ad with the title ${title}
             and with this description ${description}
            in 5-10 words and a call to acction text for a button`,
          },
        ],
        n: 1,
        model: "gpt-3.5-turbo",
        max_tokens: 50,
      });

      const imageRequest = await openai.images.generate({
        prompt: `Genarate image about ${imageDescription}`,
        model: "dall-e-2",
        n: 1,
        size: getTemplateSize(selectedTemplate) as any,
      });

      let getBrandName;
      if (brandName) {
        getBrandName = await fetch(
          `https://api.brandfetch.io/v2/brands/${brandName}.com`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer /7riU0CWHYyxC4EfGzikU3HKSY+HTJwOIhkAFoUy1gc=",
            },
          }
        );
      }

      setActiveEditor(true);
      setIsLoading(false);

      setApiData({
        adText: (await response.choices[0].message.content) || " ",
        adImageURL: (await imageRequest.data[0].url) || " ",
        adBrand: (await getBrandName?.json()) || null,
      });

      smoothScroll("template-editor");
      setInputStatus("");
    } catch (error) {
      console.log(error);
      setInputStatus("An error occurred.Please try again later!");
      setIsLoading(false);
    }
  };

  return (
    <DataInputContainerStyled>
      <DataInputStyled id="input-form">
        <h1>{templateTitle}</h1>
        <div className="input-control">
          <label>Title</label>
          <input
            value={title || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="ex. Summer Sale"
          />
        </div>

        <div className="input-control">
          <label>Description</label>
          <input
            type="text"
            value={description || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(e.target.value);
            }}
            placeholder="ex. Summer Sale advertising text"
          />
        </div>

        <div className="input-control">
          <label>Image Description</label>
          <input
            type="text"
            value={imageDescription || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setimageDescription(e.target.value);
            }}
            placeholder="ex. Summer Sale Image"
          />
        </div>
        <div className="input-control">
          <label>
            Brand Name <span>(optional)</span>
          </label>
          <input
            type="text"
            value={brandName || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setBrandName(e.target.value);
            }}
            placeholder="ex. Google"
          />
        </div>
        {!isLoading ? (
          <GenerateButtonStyled onClick={adRequest}>
            Generate
          </GenerateButtonStyled>
        ) : (
          <Spinner></Spinner>
        )}
        <p>{inputStatus}</p>
      </DataInputStyled>
      <img src={formImage} alt="Form-Image" />
    </DataInputContainerStyled>
  );
};

export default DataInput;

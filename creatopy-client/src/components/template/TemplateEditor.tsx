import React, { useEffect, useState } from "react";
import { dataExtractor } from "../../functions/dataExtractor";
import { TApiData } from "../Template";
import TemplateEditorMenu from "./TemplateEditorMenu";
import { getTemplateType } from "../../functions/getTemplateType";
import { TemplateEditorStyled } from "../styles/TemplateEdiotr.styled";
import { PostStyled } from "../styles/Post.styled";

export type TPostText = {
  text?: string;
  color?: string;
};

export type TemplateEditorProps = {
  apiData: TApiData | null;
  selectedTemplate: string;
};

const TemplateEditor = ({ apiData, selectedTemplate }: TemplateEditorProps) => {
  const [postTitle, setPostTitle] = useState<TPostText | null>(null);
  const [postDesc, setPostDesc] = useState<TPostText | null>(null);
  const [postAction, setPostAction] = useState<TPostText | null>(null);
  const [buttonColor, setButtonColor] = useState<string>();
  const [postBackgroundColor, setPostBackgroundColor] =
    useState<string>("#0066ff");

  const templateStyle = getTemplateType(selectedTemplate);

  useEffect(() => {
    const extractedData = dataExtractor(apiData?.adText || "");
    setPostTitle({ text: extractedData.title || "" });
    setPostDesc({ text: extractedData.description || "" });
    setPostAction({ text: extractedData.callToAction || "Shop Now" });
  }, [apiData]);

  return (
    <TemplateEditorStyled id="template-editor">
      <PostStyled
        style={{ backgroundColor: postBackgroundColor, ...templateStyle }}
      >
        <h1 style={{ color: postTitle?.color }}>{postTitle?.text}</h1>
        <div className="image-container">
          <img src={apiData?.adImageURL} alt="Generated-Image" />
        </div>
        <p style={{ color: postDesc?.color }}>{postDesc?.text}</p>
        <button
          style={{
            color: postAction?.color,
            backgroundColor: buttonColor || "#fffff",
          }}
        >
          {postAction?.text}
        </button>
      </PostStyled>
      <div className="editor-menu-card">
        <TemplateEditorMenu
          setColor={setPostTitle}
          elementData={postTitle}
          componentTitle={"Title"}
        />
        <TemplateEditorMenu
          setColor={setPostDesc}
          elementData={postDesc}
          componentTitle={"Description"}
        />
        <TemplateEditorMenu
          setColor={setPostAction}
          elementData={postAction}
          componentTitle={"Button Title"}
        />
        <div className="editor-menu-special-control">
          <div className="editor-menu-special">
            <p>Button Color</p>
            <input
              type="color"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setButtonColor(e.target.value);
              }}
            />
          </div>
          <div className="editor-menu-special">
            <p>Background Color</p>
            <input
              type="color"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPostBackgroundColor(e.target.value);
              }}
            />
          </div>
        </div>
        <div></div>
      </div>
    </TemplateEditorStyled>
  );
};

export default TemplateEditor;

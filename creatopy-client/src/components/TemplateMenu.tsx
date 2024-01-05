import React from "react";
import TemplateMenuObject from "./TemplateMenuObject";
import { smoothScroll } from "../functions/smoothScroll";
import { TemplateMenuStyled } from "./styles/TemplateMenu.styled";

type TempleMenuProps = {
  setSelectedTemplate: React.Dispatch<React.SetStateAction<string>>;
};

const TemplateMenu = ({ setSelectedTemplate }: TempleMenuProps) => {
  return (
    <TemplateMenuStyled id="template-menu">
      <div
        onClick={() => {
          setSelectedTemplate("instagram-post-template");
          smoothScroll("input-form");
        }}
      >
        <TemplateMenuObject
          templateSize="500x500"
          templateType="Instagram Post"
        ></TemplateMenuObject>
      </div>
      <div
        onClick={() => {
          setSelectedTemplate("twitter-header-template");
          smoothScroll("input-form");
        }}
      >
        <TemplateMenuObject
          templateSize="1500x1500"
          templateType="Twitter Header"
        ></TemplateMenuObject>
      </div>
      <div
        onClick={() => {
          setSelectedTemplate("instagram-story-template");
          smoothScroll("input-form");
        }}
      >
        <TemplateMenuObject
          templateSize="1080x1920"
          templateType="Instagram Story"
        ></TemplateMenuObject>
      </div>
    </TemplateMenuStyled>
  );
};

export default TemplateMenu;

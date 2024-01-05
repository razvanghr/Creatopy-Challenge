import React, { useState } from "react";

import { MainStyled } from "./styles/Main.styled";
import MainButton from "./MainButton";
import TemplateMenu from "./TemplateMenu";
import Template from "./Template";

import { smoothScroll } from "../functions/smoothScroll";
import ImportImage from "./ImportImage";

const Main = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showImportImage, setShowImportImage] = useState<boolean>(false);

  return (
    <MainStyled>
      <div className="main-button-control">
        <MainButton
          onClick={() => {
            setShowMenu(true);
            setShowImportImage(false);
            smoothScroll("template-menu");
          }}
          buttonText={"Generate Now"}
        ></MainButton>
        <MainButton
          onClick={() => {
            setShowImportImage(true);
            setShowMenu(false);
            smoothScroll("import-image");
          }}
          buttonText={"Import your Image"}
        ></MainButton>
      </div>

      {/* Template */}
      {showMenu && (
        <>
          <TemplateMenu
            setSelectedTemplate={setSelectedTemplate}
          ></TemplateMenu>
          <Template selectedTemplate={selectedTemplate}></Template>
        </>
      )}

      {/* Import Image */}
      {showImportImage && (
        <>
          <ImportImage></ImportImage>
        </>
      )}
    </MainStyled>
  );
};

export default Main;

import DataInput from "./DataInput";

import picImage from "../assets/Images/artist.svg";
import TemplateEditor from "./template/TemplateEditor";
import { useState } from "react";

export type TApiData = {
  adText: string;
  adImageURL?: string;
};

type TemplateProps = {
  selectedTemplate: string;
};

const Template = ({ selectedTemplate }: TemplateProps) => {
  const [activeEditor, setActiveEditor] = useState<boolean>(false);
  const [apiData, setApiData] = useState<TApiData | null>(null);

  return (
    <>
      {selectedTemplate === "instagram-post-template" && (
        <DataInput
          formImage={picImage}
          templateTitle="Instagram Post"
          setActiveEditor={setActiveEditor}
          setApiData={setApiData}
          selectedTemplate={selectedTemplate}
        />
      )}
      {selectedTemplate === "twitter-header-template" && (
        <DataInput
          formImage={picImage}
          templateTitle="Twitter Header"
          setActiveEditor={setActiveEditor}
          setApiData={setApiData}
          selectedTemplate={selectedTemplate}
        />
      )}
      {selectedTemplate === "instagram-story-template" && (
        <DataInput
          formImage={picImage}
          templateTitle="Instagram Story"
          setActiveEditor={setActiveEditor}
          setApiData={setApiData}
          selectedTemplate={selectedTemplate}
        />
      )}

      {activeEditor && (
        <TemplateEditor selectedTemplate={selectedTemplate} apiData={apiData} />
      )}
    </>
  );
};

export default Template;

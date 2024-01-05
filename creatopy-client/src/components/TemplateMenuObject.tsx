import { ReactElement } from "react";
import { TemplateMenuObjectStlyed } from "./styles/TemplateMenuObjected.styled";

type TemplateMenuObjectProps = {
  templateType: string;
  templateSize: string;
};

const TemplateMenuObject = ({
  templateType,
  templateSize,
}: TemplateMenuObjectProps): ReactElement => {
  return (
    <TemplateMenuObjectStlyed>
      <h1>{templateType}</h1>
      <p>{templateSize}</p>
    </TemplateMenuObjectStlyed>
  );
};

export default TemplateMenuObject;

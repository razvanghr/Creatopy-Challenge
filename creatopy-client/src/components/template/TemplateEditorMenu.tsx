import React, { ReactElement } from "react";
import { TPostText } from "./TemplateEditor";
import { color } from "framer-motion";

import { ColorPickerStyled } from "../styles/ColorPicker.styled";
import { TextChooseStyled } from "../styles/TextChooser.styled";
import { TemplateEditorMenuStyled } from "../styles/TemplateEditorMenu.styled";

type TemplateEditorMenuProps = {
  setColor: React.Dispatch<React.SetStateAction<TPostText | null>>;
  elementData: TPostText | null;
  componentTitle: string;
};

const TemplateEditorMenu = ({
  setColor,
  elementData,
  componentTitle,
}: TemplateEditorMenuProps) => {
  return (
    <TemplateEditorMenuStyled>
      <p>{componentTitle}</p>
      <div className="editor-menu-control">
        <TextChooseStyled
          value={elementData?.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setColor({ text: e.target.value, color: elementData?.color });
          }}
        />

        <ColorPickerStyled
          type="color"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setColor({ color: e.target.value, text: elementData?.text })
          }
        />
      </div>
    </TemplateEditorMenuStyled>
  );
};

export default TemplateEditorMenu;

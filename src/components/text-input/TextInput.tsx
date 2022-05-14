import React from "react";

import { TextInputProps } from "./types";
import "./TextInput.scss";

const TextInput: React.FunctionComponent<TextInputProps> = ({
  headerActions,
  inputProps,
  title,
}) => {
  return (
    <div className="text-input">
      <div className="text-input-header">
        <p className="text-input-header-title">{title}</p>
        {headerActions}
      </div>
      <div className="text-input-body">
        <input {...inputProps} />
      </div>
    </div>
  );
};

export default TextInput;

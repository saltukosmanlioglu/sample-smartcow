import React from "react";

import { TextInputProps } from "./types";
import "./TextInput.scss";

const TextInput: React.FunctionComponent<TextInputProps> = ({
  headerActions,
  onChange,
  placeholder,
  title,
  value,
}) => {
  return (
    <div className="text-input">
      <div className="text-input-header">
        <p className="text-input-header-title">{title}</p>
        {headerActions}
      </div>
      <div className="text-input-body">
        <input placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default TextInput;

import React from "react";

import { ButtonProps } from "./types";
import "./Button.scss";

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  color = "default",
  onClick,
  outline,
  type,
}) => {
  return (
    <button
      onClick={() => onClick?.()}
      className={`button ${outline ? `button-${color}-o` : `button-${color}`}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

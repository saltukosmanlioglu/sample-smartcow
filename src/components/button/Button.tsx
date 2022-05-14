import React from "react";

import { ButtonProps } from "./types";
import "./Button.scss";

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  color = "default",
  onClick,
  outline,
}) => {
  return (
    <button
      onClick={() => onClick?.()}
      className={`button ${outline ? `button-${color}-o` : `button-${color}`}`}
    >
      {children}
    </button>
  );
};

export default Button;

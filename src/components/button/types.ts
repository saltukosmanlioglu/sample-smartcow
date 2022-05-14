import React from "react";

export type ButtonColorType = "default" | "error" | "info" | "success";

export interface ButtonProps {
  color?: ButtonColorType;
  children?: React.ReactNode | string;
  onClick?: () => void;
  outline?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

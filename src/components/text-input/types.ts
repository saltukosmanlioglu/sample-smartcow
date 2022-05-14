import React from "react";

export interface TextInputProps {
  headerActions?: React.ReactNode;
  title?: string;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

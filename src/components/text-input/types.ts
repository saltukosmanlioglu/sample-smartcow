import React from "react";

export interface TextInputProps {
  headerActions?: React.ReactNode;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  placeholder?: string;
  title?: string;
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
}

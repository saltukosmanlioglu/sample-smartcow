import { ButtonProps } from "components/button";

export interface HeaderProps {
  actions?: Array<ButtonProps>;
  title?: string;
  border?: boolean;
}

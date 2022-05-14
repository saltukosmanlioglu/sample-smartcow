import React from "react";

import Button from "components/button";

import { HeaderProps } from "./types";
import "./Header.scss";

const Header: React.FunctionComponent<HeaderProps> = ({
  actions,
  border = true,
  title,
}) => {
  return (
    <div className={!border ? "header-without-border" : "header"}>
      <div className="header-wrapper">
        <div className="header-wrapper-title">
          <p>{title}</p>
        </div>
        <div className="header-wrapper-actions">
          <div className="header-wrapper-actions-buttons">
            {actions &&
              actions.map((action, index) => (
                <Button
                  key={index}
                  children={action.children}
                  color={action.color}
                  onClick={action.onClick}
                  outline={action.outline}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

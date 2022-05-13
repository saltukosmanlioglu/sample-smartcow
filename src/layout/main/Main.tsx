import React from "react";
import { Helmet } from "react-helmet";

import { MainProps } from "./types";

const Main: React.FunctionComponent<MainProps> = ({ children, title }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <div>{children}</div>
    </React.Fragment>
  );
};

export default Main;

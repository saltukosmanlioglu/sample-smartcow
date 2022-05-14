import React from "react";
import { Helmet } from "react-helmet";

import Header from "layout/components/header";
import SideBar from "layout/components/side-bar";

import { MainProps } from "./types";
import "./Main.scss";

const Main: React.FunctionComponent<MainProps> = ({
  children,
  headerProps,
  title,
}) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>

      <div className="main">
        <div className="main-wrapper">
          <div className="main-wrapper-sidebar">
            <SideBar />
          </div>
          <div className="main-wrapper-detail">
            <Header {...headerProps} />
            <div className="main-wrapper-detail-children">{children}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;

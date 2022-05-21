import React from "react";

import { ButtonProps } from "components/button";
import Main from "layout/main";
import Video from "widgets/video";

import "./Library.scss";

const Library: React.FunctionComponent = () => {
  const actions: Array<ButtonProps> = [
    { children: "Create New", color: "success" },
  ];

  return (
    <Main
      headerProps={{ actions: actions, title: "Saved Videos" }}
      title="Library"
    >
      <Video />
    </Main>
  );
};

export default Library;

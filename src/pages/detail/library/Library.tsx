import React from "react";

import type { ButtonProps } from "components/button";
import Main from "layout/main";

const Library: React.FunctionComponent = () => {
  const actions: Array<ButtonProps> = [
    { children: "Create New", color: "success" },
  ];

  return (
    <Main
      headerProps={{ actions: actions, title: "Saved Videos" }}
      title="Library"
    >
      <div>Library</div>
    </Main>
  );
};

export default Library;

import React from "react";

import type { ButtonProps } from "components/button";
import Main from "layout/main";

const Video: React.FunctionComponent = () => {
  const actions: Array<ButtonProps> = [
    { children: "Cancel", color: "default" },
    { children: "Save", color: "success" },
  ];

  return (
    <Main
      headerProps={{ actions: actions, title: "Saying to my customers" }}
      title="Video"
    >
      <div>Video</div>
    </Main>
  );
};

export default Video;

import React from "react";

import { ButtonProps } from "components/button";
import Main from "layout/main";
import VideoCard from "widgets/video-card";

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
      <div className="gutter">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </Main>
  );
};

export default Library;

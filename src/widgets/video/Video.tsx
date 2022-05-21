import React from "react";

import { VideoProps } from "./types";
import "./Video.scss";

const Video: React.FunctionComponent<VideoProps> = () => {
  return (
    <div className="video">
      <button className="video-context-menu">
        <img src="/images/three-dot.png" alt="Three Dot" />
      </button>
      <img src="/images/medium-people2.png" alt="People" />
    </div>
  );
};

export default Video;

import React from "react";

import { VideoCardProps } from "./types";
import "./VideoCard.scss";

const VideoCard: React.FunctionComponent<VideoCardProps> = () => {
  return (
    <div className="video-card">
      <button className="video-card-context-menu">
        <img alt="Three Dot" src="/images/three-dot.png" />
      </button>
      <img src="/images/medium-people2.png" width={"100%"} alt="People" />
      <p>Saying Hi to users!</p>
      <div className="video-card-subject">
        <button>
          <p>Email</p>
        </button>
        <button>
          <p>Marketing</p>
        </button>
        <button>
          <p>Greeting</p>
        </button>
      </div>
    </div>
  );
};

export default VideoCard;

import React, { useState } from "react";

import Button, { ButtonProps } from "components/button";
import Main from "layout/main";
import Tabs from "widgets/tabs";

import "./Video.scss";
import { Actor, Alignment, Background, Voice } from "./tabs";

const Video: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  const actions: Array<ButtonProps> = [
    { children: "Cancel", color: "default" },
    { children: "Save", color: "success" },
  ];

  return (
    <Main
      headerProps={{ actions: actions, title: "Saying to my customers" }}
      title="Video"
    >
      <div className="video">
        <div className="video-left">
          <div className="video-left-image">
            <img src="/images/big-people2.png" width="100%" alt="People" />
            <div className="video-left-image-preview">
              <Button children="Preview" color="info" />
            </div>
          </div>
          <div className="video-left-comment">
            <textarea
              rows={6}
              placeholder="Type or paste your videoscript here. You can also request a translation of 
an English script to any of 27 other languages"
              onChange={(e) => setCount(e.target.value.length)}
            />
            <div>
              <Button children="Listen" color="default" />
              <p>{count} char</p>
            </div>
          </div>
        </div>
        <div className="video-right">
          <Tabs
            tabs={[
              { children: <Actor />, title: "Actor" },
              { children: <Voice />, title: "Voice" },
              { children: <Alignment />, title: "Alignment" },
              { children: <Background />, title: "Background" },
            ]}
          />
        </div>
      </div>
    </Main>
  );
};

export default Video;

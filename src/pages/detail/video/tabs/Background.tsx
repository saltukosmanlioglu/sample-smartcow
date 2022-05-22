import React, { useRef } from "react";

import Accordion from "widgets/accordion";

import "./Background.scss";

const Background: React.FunctionComponent = () => {
  const fileUpload = useRef<any>();

  return (
    <div className="background">
      <Accordion title="Images">
        <div className="background-images">
          <button onClick={() => fileUpload.current.click()}>
            <img width={"100%"} src="/images/upload.png" alt="Background" />
            <p>Upload</p>
          </button>
          <input ref={fileUpload} type="file" />
          <button>
            <img
              width={"100%"}
              src="/images/background1.png"
              alt="Background"
            />
            <p>Office</p>
          </button>
          <button>
            <img
              width={"100%"}
              src="/images/background2.png"
              alt="Background"
            />
            <p>Space</p>
          </button>
          <button>
            <img
              width={"100%"}
              src="/images/background3.png"
              alt="Background"
            />
            <p>Noise</p>
          </button>
          <button>
            <img
              width={"100%"}
              src="/images/background4.png"
              alt="Background"
            />
            <p>Meeting Room</p>
          </button>
          <button>
            <img
              width={"100%"}
              src="/images/background5.png"
              alt="Background"
            />
            <p>Books</p>
          </button>
          <button>
            <img
              width={"100%"}
              src="/images/background6.png"
              alt="Background"
            />
            <p>Desk</p>
          </button>
        </div>
      </Accordion>
      <Accordion title="Solid Colours">
        <div></div>
      </Accordion>
      <Accordion title="Videos">
        <div></div>
      </Accordion>
    </div>
  );
};

export default Background;

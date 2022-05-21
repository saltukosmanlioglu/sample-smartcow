import React from "react";
import Accordion from "widgets/accordion";

import "./Background.scss";

const Background: React.FunctionComponent = () => {
  return (
    <div className="background">
      <Accordion title="Images">
        <div>image</div>
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

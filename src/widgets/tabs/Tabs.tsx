import React, { useState } from "react";

import { TabsProps } from "./types";
import "./Tabs.scss";

const Tabs: React.FunctionComponent<TabsProps> = ({ index, tabs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(index || 0);

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs &&
          tabs?.map((tab, index) => (
            <button
              key={index}
              className="tabs-header-title"
              style={{ color: activeIndex === index ? "#3860AD" : "#999999" }}
              onClick={() => setActiveIndex(index)}
            >
              {tab.title}
            </button>
          ))}
      </div>
      <div className="tabs-children">
        {tabs.map((tab, index) => (
          <div key={index} className="tabs-children-detail">{activeIndex === index ? tab.children : null}</div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

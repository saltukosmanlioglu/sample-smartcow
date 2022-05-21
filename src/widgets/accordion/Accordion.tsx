import React, { useState } from "react";

import { AccordionProps } from "./types";
import "./Accordion.scss";

const Accordion: React.FunctionComponent<AccordionProps> = ({
  children,
  title,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      style={{
        backgroundColor: active ? "#EBF2FF" : "#fff",
        borderBottom: active ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
      }}
      className="accordion"
    >
      <div onClick={() => setActive(!active)} className="accordion-header">
        <p style={{ color: active ? "#3860AD" : "#999999" }}>{title}</p>
        <img
          alt="Arrow"
          src={active ? "/images/arrow-up.png" : "/images/arrow-gray.png"}
        />
      </div>
      {active && <div className="accordion-detail">{children}</div>}
    </div>
  );
};

export default Accordion;

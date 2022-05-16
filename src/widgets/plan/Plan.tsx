import React from "react";

import { PlanProps } from "./types";
import "./Plan.scss";

const Plan: React.FunctionComponent<PlanProps> = ({
  activePlan,
  matters,
  price,
  title,
}) => {
  return (
    <div
      className="plan"
      style={{
        backgroundColor: activePlan ? "#46B13D" : "transparent",
        marginTop: activePlan ? -50 : 0,
      }}
    >
      <div
        className="plan-title"
        style={{
          color: activePlan ? "#fff" : "#222222",
        }}
      >
        {title}
      </div>
      <div className="plan-matters">
        {matters.map((matter, index) => (
          <div key={index} className="plan-matters-explain">
            <img
              src={
                activePlan && !matter.isCheck
                  ? "/images/white-tick.png"
                  : activePlan && matter.isCheck === false
                  ? "/images/white-close.png"
                  : "/images/white-close.png"
              }
              alt="Tick"
            />
            <p
              style={{
                color: activePlan ? "#fff" : "#222222",
              }}
            >
              {matter.title}
            </p>
          </div>
        ))}
      </div>
      <div
        className="plan-price"
        style={{
          color: activePlan ? "#fff" : "#222222",
        }}
      >
        <span>$ </span>
        {price}
      </div>
      {activePlan ? (
        <p className="plan-status-active">Current Plan</p>
      ) : (
        <button className="plan-status">Downgrade</button>
      )}
    </div>
  );
};

export default Plan;

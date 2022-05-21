import React from "react";

import "./Actor.scss";

const Actor: React.FunctionComponent = () => {
  return (
    <div className="actor">
      <button>
        <img width={"100%"} src="/images/people1.png" alt="People1" />
        <p>Anna</p>
      </button>
      <button>
        <img width={"100%"} src="/images/people2.png" alt="People2" />
        <p style={{ color: "#3860AD" }}>YoYo</p>
      </button>
      <button>
        <img width={"100%"} src="/images/people3.png" alt="People3" />
        <p>Skye</p>
      </button>
      <button>
        <img width={"100%"} src="/images/people4.png" alt="People4" />
        <p>Mike</p>
      </button>
      <button>
        <img width={"100%"} src="/images/people5.png" alt="People5" />
        <p>Vincent</p>
      </button>
      <button>
        <img width={"100%"} src="/images/people6.png" alt="People6" />
        <p>Peter</p>
      </button>
      <button>
        <img width={"100%"} src="/images/people7.png" alt="People7" />
        <p>May</p>
      </button>
    </div>
  );
};

export default Actor;

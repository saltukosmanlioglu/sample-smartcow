import Button from "components/button";
import React from "react";

import "./Alignment.scss";

const Alignment: React.FunctionComponent = () => {
  return (
    <div className="alignment">
      <Button children="Left" color="default" />
      <Button children="Center" color="info" outline />
      <Button children="Right" color="default" />
    </div>
  );
};

export default Alignment;

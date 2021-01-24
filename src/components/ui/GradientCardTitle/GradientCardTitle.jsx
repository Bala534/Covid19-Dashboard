import React from "react";
import "./GradientCardTitle.css";

const GradientCardTitle = (props) => {
  return (
    <div style={props.style ? props.style : {}} className="GradientCardTitle">
      {props.title}
    </div>
  );
};

export default GradientCardTitle;

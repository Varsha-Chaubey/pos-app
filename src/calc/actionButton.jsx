import React from "react";

const ActionButton = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
      }}
      className="btn"
      onClick={props.onClick}
    >
      {props.lable}
    </button>
  );
};

export default ActionButton;

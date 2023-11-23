import React from "react";

const ActionButton = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
        width:props.width,
        height:props.height,
        border:props.border,
        borderRadius:props.borderRadius,
        color:props.color
      }}
      className="btn"
      onClick={props.onClick}
    >
      {props.lable}
    </button>
  );
};

export default ActionButton;

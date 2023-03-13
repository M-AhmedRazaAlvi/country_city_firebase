import React from "react";
import InputControllor_module from "./InputControllor_module.css";

function InputControllor(props) {
  return (
    <div className="Incontainer">
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControllor;
import React from "react";

function Button({ icone,onclick }) {
  return (
    <div>
      <i className={icone + ' text-light icone'} onClick={onclick} style={{ fontSize: "30px" }}></i>
    </div>
  );
}

export default Button;

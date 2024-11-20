import React from "react";
import "./index.css";

function Mdel({ header, body, footer,onclose }) {
  return (
    <div className="model">
      <div className="model-1">
        {" "}
        <div className="header">
          <span style={{cursor:"pointer"}} onClick={onclose}>
            &times;<h2>{header ? header : "header"}</h2>
          </span>
        </div>
        <div className="body">{body ? body : "body"}</div>
        <div className="footer">{footer ? footer : "footer"}</div>
      </div>
    </div>
  );
}

export default Mdel;

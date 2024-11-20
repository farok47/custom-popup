import React, { useState } from "react";
import Mdel from "./Mdel";

function MOdeltest() {
  const [custombtn, setcustombtn] = useState(false);
  function handletoggle() {
    setcustombtn(!custombtn);
    
  }function onclose() {
      setcustombtn(false);
    }
  return (
    <div className="content">
      <button onClick={handletoggle}>custom</button>
      {custombtn && (
        <Mdel
          header={<div>you are the best</div>}
          body={<h1>i'm the king</h1>}
          onclose={onclose}
        />
      )}
    </div>
  );
}

export default MOdeltest;

import React from "react";


import "./InfoCard.style.css";

function Info({title,svg,color,p}) {
  return (
    <div className="infocard containerCenter">
      <div className={`${color?"logoContainerColor box center-xs shadow":"logoContainer box center-xs shadow"}`}> 
     <img  src={svg}></img>

      </div>
      <h2 className="font-1 center-xs margin-top-1 h2-responsive">{title}</h2>
      <p className="font-half center-xs margin-top-1 p-width">{p} </p>
    </div>
  );
}

export default Info;

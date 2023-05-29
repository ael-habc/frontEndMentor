import React, { useEffect, useState } from "react";
import "./Card.css";
import dots from "./images/icon-ellipsis.svg";

export default function Card({ elm, timeframe }) {
  const time = elm.timeframes[timeframe];
  const [t,setT] = useState("Yestrday")
  useEffect(()=>{
    function hundleTime(x){
      switch (x) {
        case 'daily':
          setT("Yesterday")
          break;
        case 'weekly':
          setT('Last Week')
          break;
        default:
          setT("Last Month")
          break;
      }
    }
    hundleTime(timeframe)
  },[timeframe])
  const color = {
    backgroundColor: elm.color,
  };
  return (
    <div className="card">
      <div className="header" style={color}>
        <img className="logo" src={require(`${elm.image}`)} alt={elm.title} />
      </div>
      <div className="body">
        <div className="top">
          <h3>{elm.title}</h3>
          <img src={dots} alt="dots" className="dots" />
        </div>
        <p className="current">{time.current}hrs</p> 
         <p className="previous">
          {t} {time.previous}hrs
        </p>
      </div>
    </div>
  );
}

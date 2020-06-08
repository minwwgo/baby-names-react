import React from "react";
import "./DisplayBabyName.css";

const DisplayBabyName = ({data,handlePickName}) => {
  return (
    <div>
    
    <div className="holder">
        {data.map((babyInfo) => (
          <div key={babyInfo.id} className="name-holder">
            <div 
            onClick = {()=>{handlePickName(babyInfo)}}
            className={babyInfo.sex === "m" ? "ele male " : "ele female"}>
              {babyInfo.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DisplayBabyName;

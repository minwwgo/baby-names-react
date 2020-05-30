import React from "react";
import "./DisplayBabyName.css";
const DisplayBabyName = (props) => {
  const sortBabyNames = props.results.sort((a, b) =>
    a.name > b.name ? 1 : -1
  );

  return (
    
    <div className = "holder">
    
      {sortBabyNames.map((babyInfo) => (
          <div key={babyInfo.id} className="name-holder">
            <div className={babyInfo.sex === "m" ? "ele male " : "ele female"}>
              {babyInfo.name}
            </div>
          </div>
        ))}
    </div>
      
    
  );
};
export default DisplayBabyName;

import React, { useState } from "react";
import "./DisplayBabyName.css";

const DisplayBabyName = (props) => {
  const{results}=props
  const [data, setData] = useState(results);
  const [value, setValue] = useState("");
  

  results.sort((a, b) => (a.name > b.name ? 1 : -1));

  const handlerChange = (inputData) => {
    setValue(inputData);
    const searchValue = inputData.toLowerCase();
    setData(
        results.filter((babyInfo) =>
          babyInfo.name.toLowerCase().includes(searchValue)
        )
      );
  };
  const removeName =(data)=>{

  }


  return (
    <div>
      <div className="input-holder">
        <form>
          <input
            className="input"
            placeholder="search by"
            value={value}
            onChange={(e) => handlerChange(e.target.value)}
          />
        </form>
      </div>

      <div className="holder">
        {data.map((babyInfo) => (
          <div key={babyInfo.id} className="name-holder">
            <div className={babyInfo.sex === "m" ? "ele male " : "ele female"}>
              {babyInfo.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DisplayBabyName;

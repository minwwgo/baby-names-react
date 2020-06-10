import React, { useState } from "react";
import babyData from "./babyNamesData.json";
import DisplayBabyName from "./DisplayBabyName";
import InputData from "./InputData";
import "./App.css";
import DisplayGender from './DisplayGender'
function App() {
  const [data, setData] = useState(babyData);
  const [favName, setFavName] = useState([]);

  const handlerChange = (inputData) => {
    const searchValue = inputData.toLowerCase();

    const inputSearch = data.filter((baby) =>
      baby.name.toLowerCase().includes(searchValue)
    );
    if (inputData.length > 0) {
      return setData(inputSearch);
    } else {
      return setData(babyData);
    }
  };
  const handlePickName = (pickName) => {
    
    setFavName([...favName, pickName]);
    setData(data.filter(baby=>baby !== pickName))
  };

  function handleRemoveName(pickName){
    setFavName(favName.filter(baby=>baby !== pickName))
    setData([...data,pickName])
  }
function handlePickGender(pickGender){
  console.log(pickGender)
  if(pickGender === "m" || pickGender ==="f"){
    setData(data.filter(baby => baby.sex === pickGender ))

  }
    
  
}
  data.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div className="App">
    <div className='box-holder'>
    <InputData handlerChange={handlerChange} />
      <div>
        FavName:
        {favName.length > 0 &&
          favName.map((baby) => (
            <span 
          
            className={baby.sex === "m" ? "ele male " : "ele female"}
            onClick={()=>{handleRemoveName(baby)}}
            >
              {baby.name}
            </span>
          ))}
      </div>
      <DisplayBabyName data={data} handlePickName={handlePickName} />
      <DisplayGender data={data} handlePickGender={handlePickGender}/ >

    </div>
      
    </div>
  );
}

export default App;

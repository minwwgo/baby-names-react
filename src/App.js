import React, { useState } from "react";
import babyData from "./babyNamesData.json";
import DisplayBabyName from "./DisplayBabyName";
import InputData from "./InputData";
import "./App.css";
import DisplayGender from "./DisplayGender";
function App() {
  const [searchText, setSearchText] = useState("");
  const [favNames, setFavNames] = useState([]);
  const [selectedGender, setSelectedGender] = useState("both");

  const handlePickName = (pickName) => {
    setFavNames([...favNames, pickName]);
  };

  function handleRemoveName(pickName) {
    setFavNames(favNames.filter((baby) => baby !== pickName));
  }
  const filteredData = babyData
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .filter((baby) => selectedGender === "both" || baby.sex === selectedGender)
    .filter((baby) =>baby.name.toLowerCase().includes(searchText.toLowerCase()))
    .filter((baby) => !favNames.includes(baby));
    
  return (
    <div className="App">
      <div className="box-holder">
        <InputData setSearchText={setSearchText} searchText={searchText} />
        <DisplayGender
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
        />

        <div>
          FavName:
          {favNames.length > 0 &&
            favNames.map((baby) => (
              <span
                className={baby.sex === "m" ? "ele male " : "ele female"}
                onClick={() => {
                  handleRemoveName(baby);
                }}
              >
                {baby.name}
              </span>
            ))}
        </div>
        <DisplayBabyName data={filteredData} handlePickName={handlePickName} />
      </div>
    </div>
  );
}

export default App;

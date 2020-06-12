import React from "react";

function DisplayGender({ setSelectedGender, selectedGender }) {
  return (
    <div>
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        onChange={() => {
          setSelectedGender("m");
        }}
        checked={selectedGender === "m"}
      />
      <label htmlFor="male">Male</label>
      <br />
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        onChange={() => {
          setSelectedGender("f");
        }}
        checked={selectedGender === "f"}
      />
      <label htmlFor="female">Female</label>
      <br />
      <input
        type="radio"
        id="both"
        name="gender"
        value="both"
        onChange={() => {
          setSelectedGender("both");
        }}
        checked={selectedGender === "both"}
      />
      <label htmlFor="both">both</label>
    </div>
  );
}
export default DisplayGender;

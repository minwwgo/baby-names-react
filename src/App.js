import React from 'react';
 import BabyData from './babyNamesData.json';
import DisplayBabyName from './DisplayBabyName';


function App() {
  return (
    <div className="App">
      <DisplayBabyName results={BabyData}/>
    </div>
  );
}

export default App;

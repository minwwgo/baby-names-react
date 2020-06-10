import React from 'react'

function DisplayGender ({handlePickGender}){
return(
  <div>
  
  <input 
  type="radio" 
  id="male" 
  name="gender" 
  value="male"
  onChange={()=>{handlePickGender("m")}}
  />
  <label for="male">Male</label><br/>
  <input type="radio" id="female" name="gender" value="female"
  onClick={()=>{handlePickGender("f")}}

  />
  <label for="female">Female</label><br/>
  <input type="radio" id="other" name="gender" value="other"
    onClick={()=>{handlePickGender("other")}}
  />
  <label for="other">Other</label>

  </div>
)
}
export default DisplayGender;
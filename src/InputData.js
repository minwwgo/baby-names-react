import React from 'react'

const InputData=({handlerChange})=>{
return(
    <div className="input-holder">
        <form>
          <input
            className="input"
            placeholder="search by"
            onChange={(e) =>handlerChange(e.target.value)}
          />
        </form>
      </div>
)
}
export default InputData;
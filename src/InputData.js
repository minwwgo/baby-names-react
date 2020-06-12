import React from 'react'

const InputData=({searchText,setSearchText})=>{
return(
    <div className="input-holder">
        <form>
          <input
            className="input"
            placeholder="search by"
            onChange={(e) =>setSearchText(e.target.value)}
            value={searchText}
          />
        </form>
      </div>
)
}
export default InputData;
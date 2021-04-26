import React, { useContext } from 'react';
import { Context } from './Context';

function SearchBar() {

  const {stocks, setStocks} = useContext(Context)

  let searchString = ""

  const handleChange = (e) => {
    searchString = e.target.value.toUpperCase()
  }
  const handleClick = (e) => {
    e.preventDefault()
    let tempVar = [...stocks]
    if (!tempVar.includes(searchString)){
      tempVar.push(searchString)
      setStocks(tempVar)
    }
  }

  return (
    <div>
      <input
        placeholder="search stock ticker"
        type="text"
        onChange={handleChange}
      />

      <button 
        type="button"
        onClick={handleClick}
      >Add</button>

    </div>
  );
}

export default SearchBar;
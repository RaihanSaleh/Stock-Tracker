import React, { useContext } from 'react';
import { Context } from './Context';

function SearchBar() {

  const token = 'Tpk_219118a840804c0e83a9d0c7fbc7e1bc'
  const baseURL = 'https://sandbox.iexapis.com/stable/stock/market/batch?symbols='
  const urlParams = '&filter=companyName, latestPrice, previousClose, close, open, high, low, peRatio, week52High, week52Low, ytdChange, date'

  const {stocks, setStocks} = useContext(Context)

  let stockTicker = ""

  const handleChange = (e) => {
    stockTicker = e.target.value.toUpperCase()
    console.log(stockTicker)
    console.log(stocks)
  }
  const addStock = (e) => {
    e.preventDefault()
    let tempState = [...stocks]
    let url = `${baseURL}${stockTicker}&types=chart,quote&range=1m&token=${token}${urlParams}`
    
    // need to update with if statement
    fetch(url)
    .then(result => result.json())
    .then(result => {
      tempState.push(result)
      setStocks(tempState)
    })
    .catch(console.error())
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
        onClick={addStock}
      >Add</button>

    </div>
  );
}

export default SearchBar;
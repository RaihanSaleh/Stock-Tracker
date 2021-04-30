import React, { useContext } from 'react';
import { Context } from './Context';

function SearchBar() {

  // const token = process.env.SANDBOX_TOKEN
  const token = 'Tpk_219118a840804c0e83a9d0c7fbc7e1bc'
  const baseURL = 'https://sandbox.iexapis.com/stable/stock/market/batch?symbols='
  const urlParams = '&filter=companyName, latestPrice, previousClose, close, open, high, low, peRatio, week52High, week52Low, ytdChange, date'

  const {stocks, setStocks} = useContext(Context)

  let stockTicker = ""

  // records the user inputed stock ticker
  const handleChange = (e) => {
    stockTicker = e.target.value.toUpperCase()
    console.log(stockTicker)      //remove beore submitting project
    console.log(stocks)           //remove before submitting project
  }

  // Adds stock to the stockList
  const addStock = (e) => {
    e.preventDefault()
    let tempState = [...stocks]
    let url = `${baseURL}${stockTicker}&types=chart,quote&range=1m&token=${token}${urlParams}`
    
    // need to update with if statement for if the stock already exists, dont do anything
    fetch(url)
    .then(result => result.json())
    .then(res => {
      let latestPrice = res[stockTicker].quote.latestPrice
      let monthPrice = res[stockTicker].chart[0].close
      // let weekPrice = res[stockTicker].chart[0].close
      let dayPrice = res[stockTicker].quote.previousClose

      let dayPerformance = (latestPrice - dayPrice)/dayPrice * 100
      // let weekPerformance = (latestPrice - weekPrice)/weekPrice * 100
      let monthPerformance = (latestPrice - monthPrice)/monthPrice * 100

      res.symbol = stockTicker
      res.name = res[stockTicker].quote.companyName
      res.dayPerformance = +dayPerformance.toFixed(2)
      // res.weekPerformance = +weekPerformance.toFixed(2)
      res.monthPerformance = +monthPerformance.toFixed(2)

      tempState.push(res)
      setStocks(tempState)
    })
    .catch(error => console.log('something went wrong', error))
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
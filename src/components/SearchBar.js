import React, { useContext } from 'react';
import { Context } from './Context';

function SearchBar() {
  const {stocks, setStocks} = useContext(Context)

  const token = process.env.REACT_APP_SANDBOX_TOKEN
  const baseURL = 'https://sandbox.iexapis.com/stable/stock/market/batch?symbols='
  const apiParams = '&filter=companyName,latestPrice,previousClose,close,open,high,low,peRatio,week52High,week52Low,ytdChange,date'

  // Records the user inputed stock ticker
  let stockTicker = ""
  function recordStockTicker(e) {
    stockTicker = e.target.value.toUpperCase()
    console.log(stocks)             //remove before submitting project
  }


  // Adds stock to the stocks array
  function addStock(e) {
    if (stocks.every(stock => stock.symbol !== stockTicker)) {
      e.preventDefault()
      let tempState = [...stocks]
      let url = `${baseURL}${stockTicker}&types=chart,quote&range=1m&token=${token}${apiParams}`
      console.log(url)
      
      fetch(url)
      .then(result => result.json())
      .then(res => {
        const latestPrice = res[stockTicker].quote.latestPrice
        const monthPrice = res[stockTicker].chart[0].close
        const weekPrice = res[stockTicker].chart[(res[stockTicker].chart.length - 5)].close
        const dayPrice = res[stockTicker].quote.previousClose
  
        const dayPerformance = (latestPrice - dayPrice)/dayPrice * 100
        const weekPerformance = (latestPrice - weekPrice)/weekPrice * 100
        const monthPerformance = (latestPrice - monthPrice)/monthPrice * 100
  
        res.symbol = stockTicker
        res.name = res[stockTicker].quote.companyName
        res.dayPerformance = +dayPerformance.toFixed(2)
        res.weekPerformance = +weekPerformance.toFixed(2)
        res.monthPerformance = +monthPerformance.toFixed(2)
  
        tempState.push(res)
        setStocks(tempState)
      })
      .catch(console.error)
    } else {
      alert(`${stockTicker} is already being tracked. Choose a different stock.`)
    }
  }

  return (
    <div>
      <input
        placeholder="search stock ticker"
        type="text"
        onChange={recordStockTicker}
      />

      <button 
        type="button"
        onClick={addStock}
      >Add</button>

    </div>
  );
}

export default SearchBar;
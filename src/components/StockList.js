import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Context } from './Context';

function StockList() {

  const {stocks, setStocks} = useContext(Context)
  const [sortBy, setSortBy] = useState('dayPerformance')

  const sortStocks = (sortPram) => {
    let sortedStocks = [...stocks]
    sortedStocks.sort((a,b) => b[sortPram] - a[sortPram])
    setStocks(sortStocks)
  }
  // this isn't working, keeps looping forever
  // useEffect(() => {
  //   sortStocks(sortBy)
  // }, [])

  // Creating a <div> for each stock in the array to be rendered
  let stockList = stocks.map(stock => {
    let stockTicker = stock.symbol
    return (
      <Link to={"/stock/"+stockTicker}>
        <div className="stockDiv" key={stock.symbol}>
          <h4>{stock.symbol}</h4>
          <p>{stock.name}</p>
          <p>${stock[stockTicker].quote.latestPrice.toFixed(2)}</p>
          <p>{stock[sortBy]}%</p>
        </div>
      </Link>
    )
  })

  return (
    <div>
      {/* <button id="dayPerformance" onClick={setSortBy('dayPerformance')}>24 H</button>
      <button id="weekPerformance" onClick={setSortBy('dayPerformance')}>Week</button>
      <button id="monthPerformance" onClick={setSortBy('dayPerformance')}>Month</button> */}
      {stockList}
    </div>
  );
}

export default StockList;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import BestStock from './BestStock';
import { Context } from './Context';

function StockList() {

  const {stocks, setStocks} = useContext(Context)
  const [sortBy, setSortBy] = useState('dayPerformance')

  // Sorts the stock list.  Had to do it this way instead of setStocks,
  // because changing the stocks state triggers an infinite loop of rendering
  let sortedStocks = [...stocks]
  const sortStocks = (sortPram) => {
    sortedStocks.sort((a,b) => b[sortPram] - a[sortPram])
  }
  sortStocks(sortBy)

  // Removes the selected stock from the stocks array
  const removeStock = (e) => {
    e.preventDefault()
    let tempStocks = stocks.filter((stock)=> stock.symbol !== e.target.id)
    setStocks(tempStocks)
  }

  // Creating a <div> for each stock in the array to be rendered
  const stockList = sortedStocks.map(stock => {
    const stockTicker = stock.symbol
    return (
      <div className="stockDiv" key={stock.symbol}>
        <button className='deleteStockBtn' id={stock.symbol} onClick={removeStock}>X</button>
        <Link to={"/stock/"+stockTicker}>
          <h4>{stock.symbol}</h4>
        </Link>
        <p>{stock.name}</p>
        <p>${stock[stockTicker].quote.latestPrice.toFixed(2)}</p>
        <p>{stock[sortBy]}%</p>
      </div>
    )
  })

  return (
    <div>
      <BestStock />
      {/* <button onClick={() => {
        setSortBy('dayPerformance')
        console.log(sortBy)}}>24 H</button> */}
      {/* <button onClick={setSortBy('dayPerformance')}>Week</button>
      <button onClick={setSortBy('dayPerformance')}>Month</button> */}
      {stockList}
    </div>
  );
}

export default StockList;
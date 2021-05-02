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
    const tempStocks = stocks.filter((stock)=> stock.symbol !== e.target.id)
    setStocks(tempStocks)
  }

  // Handles the click of the sort buttons, which changes sortBy state, which rerenders page
  const changeSortParam = (e) => {
    e.preventDefault()
    setSortBy(e.target.id)
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
      <BestStock bestStock={stockList[0]}/>
      <button id="dayPerformance" onClick={changeSortParam}>24 H</button> {' '}
      <button id="weekPerformance" onClick={changeSortParam}>Week</button> {' '}
      <button id="monthPerformance" onClick={changeSortParam}>Month</button>
      {stockList}
    </div>
  );
}

export default StockList;
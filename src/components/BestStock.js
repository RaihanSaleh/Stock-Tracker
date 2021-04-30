import React, { useContext } from 'react';
import { Context } from './Context';

function BestStock() {
  const {stocks, setStocks} = useContext(Context)

  // let stockTicker = stocks[0].symbol

  return (
    <div>
      <h4>Best Performing Company</h4>
      <div className="bestStockDiv">
          {/* <h4>{stocks[0].symbol}</h4>
          <p>{stocks[0].name}</p>
          <p>${stocks[0][stockTicker].quote.latestPrice.toFixed(2)}</p>
          <p>{stocks[0][sortBy]}%</p> */}
      </div>
    </div>
  );
}

export default BestStock;
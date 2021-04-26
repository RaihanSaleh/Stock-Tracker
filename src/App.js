import React, { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import StockList from './components/StockList'
import { Context } from './components/Context'
import './App.css';

function App() {

  const [stockTickers, setStockTickers] = useState([])
  const [portfolio, setPortfolio] = useState({})



  return (
    <div className="App">
      <Context.Provider >
        <Header />
        <Home />
        <StockList />
      </Context.Provider>
    </div>
  );
}

export default App;

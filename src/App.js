import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'
import StockInfo from './components/StockInfo'
import { Context } from './components/Context'
import { Route, Switch } from 'react-router-dom'

import './App.css';

function App() {

  const [stocks, setStocks] = useState([])

  return (
    <div className="App">
      <Nav />
        <Switch>
          <Context.Provider value={{stocks, setStocks}}>
            <Route exact path="/" component={Home}/>
            <Route 
              exact path="/stock/:stockTicker" 
              render={(routerProps) => <StockInfo match={routerProps.match}/>}
            />
          </Context.Provider>
          <Route exact path="/about" component={About}/>
        </Switch>
    </div>
  );
}

export default App;
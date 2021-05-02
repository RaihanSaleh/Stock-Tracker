import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import StockInfo from './components/StockInfo'
import { Context } from './components/Context'
import { Route, Switch } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

import './App.css';

function App() {

  const [stocks, setStocks] = useState([])

  return (
    <div className="App">
      <Header />
        <Switch>
          <Context.Provider value={{stocks, setStocks}}>
            <Route exact path="/" component={Home}/>
            <Route 
              exact path="/stock/:stockTicker" 
              render={(routerProps) => <StockInfo match={routerProps.match}/>}
            />
            <Route exact path="/about" component={About}/>
          </Context.Provider>
        </Switch>
    </div>
  );
}

export default App;
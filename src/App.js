import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import {Context} from './components/Context'
import Router from 'react-router-dom'

import './App.css';

function App() {

  const [stocks, setStocks] = useState([])

  return (
    <div className="App">
      <Context.Provider value={{stocks, setStocks}}>
        <Home />

      </Context.Provider>
    </div>
  );
}

export default App;

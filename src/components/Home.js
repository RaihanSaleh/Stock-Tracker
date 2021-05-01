import React from 'react';
import SearchBar from './SearchBar'
import StockList from './StockList'

function Home() {
  return (
    <div>
      <SearchBar />
      <StockList />
    </div>
  );
}

export default Home;
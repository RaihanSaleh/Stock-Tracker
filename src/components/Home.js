import React from 'react';
import SearchBar from './SearchBar'
import BestStock from './BestStock'
import StockList from './StockList'

function Home() {
  return (
    <div>
      <BestStock />
      <SearchBar />
      <StockList />
    </div>
  );
}

export default Home;
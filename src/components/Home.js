import React from 'react';
import SearchBar from './SearchBar'
import BestStock from './BestStock'
import StockList from './StockList'

function Home() {
  return (
    <div>
      <SearchBar />
      <BestStock />
      <StockList />
    </div>
  );
}

export default Home;
import React from 'react';

function BestStock({bestStock}) {

  return (
    <div>
      <h4>Best Performing Company</h4>
      <div className="bestStockDiv">
        {bestStock}
      </div>
    </div>
  );
}

export default BestStock;
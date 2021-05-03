import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { Context } from './Context';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
      <ListGroup.Item key={stock.symbol}>
        <Container as="div">
          <Row className="align-items-center">
            <Col>
              <Row className="h4 bold line-height-3">
                <Col className="text-left">{stock.symbol}</Col>
                <Col className="text-right col-4">${stock[stockTicker].quote.latestPrice.toFixed(2)}</Col>
              </Row>
              <Row>
                <Col className="text-left">{stock.name}</Col>
                <Col className="text-right col-4">{stock[sortBy]<0 ? stock[sortBy] : `+${stock[sortBy]}`}%</Col>
              </Row>
              <Row>
                <Col className="text-left"><Link to={"/stock/"+stockTicker}>more info...</Link></Col>
              </Row>
            </Col>
            <Col className="text-right col-1">
              <button className="btn btn-danger" center id={stock.symbol} onClick={removeStock}>X</button>
            </Col>
          </Row>
        </Container>        
      </ListGroup.Item>
    )
  })

  return (
    <div className="m-2">
      <button 
      className="btn btn-secondary m-1 rounded" 
      id="dayPerformance" 
      onClick={changeSortParam}
      >24 H</button>

      <button 
      className="btn btn-secondary m-1 rounded" 
      id="weekPerformance" 
      onClick={changeSortParam}
      >Week</button>
      
      <button 
      className="btn btn-secondary m-1 rounded" 
      id="monthPerformance" 
      onClick={changeSortParam}
      >Month</button>
      
      <ListGroup className="mt-2">
        {stockList}
      </ListGroup>

      <div className="text-left" style={{fontSize: 10}}>
        {stocks.length === 0 ? "" : <a href="https://iexcloud.io">Data provided by IEX Cloud</a>}
      </div>

    </div>
  );
}

export default StockList;
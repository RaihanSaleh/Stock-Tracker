import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StockInfo({match, stocks}) {
  const stockTicker = match.params.stockTicker
  const stock = stocks.filter((stock)=> stock.symbol === stockTicker)[0]
  const price = stock[stockTicker].quote.latestPrice
  const dayChange = stock.dayChange<0 ? `-$${Math.abs(stock.dayChange)}` : `+$${stock.dayChange}`
  const weekChange = stock.weekChange<0 ? `-$${Math.abs(stock.weekChange)}` : `+$${stock.weekChange}`
  const monthChange = stock.monthChange<0 ? `-$${Math.abs(stock.monthChange)}` : `+$${stock.monthChange}`
  const dayPerformance = stock.dayPerformance<0 ? `${stock.dayPerformance}%` : `+${stock.dayPerformance}%`
  const weekPerformance = stock.weekPerformance<0 ? `${stock.weekPerformance}%` : `+${stock.weekPerformance}%`
  const monthPerformance = stock.monthPerformance<0 ? `${stock.monthPerformance}%` : `+${stock.monthPerformance}%`

  return (
    <div>
      <div className="jumbotron text-left">
        <h1 className="display-5">{stock.name} {"("} {stock.symbol} {")"}</h1>
        <h3 className="display-5">${stock[stockTicker].quote.latestPrice}</h3>
        <h5 className="">{dayChange} {"("} {dayPerformance} {")"}</h5>
      </div>
      <Container as="div" >
        <Row>
          <Col className="col-6">
            <table className="table table-hover m-2">
              <tbody>
                <tr>
                  <th scope="row" className="text-left">Market Price</th>
                  <td className="text-right">${price.toFixed(2)}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-left">Previous Close</th>
                  <td className="text-right">${stock[stockTicker].quote.previousClose.toFixed(2)}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-left">Day Change</th>
                  <td className="text-right">{dayChange} {"("} {dayPerformance} {")"}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-left">Week Change</th>
                  <td className="text-right">{weekChange} {"("} {weekPerformance} {")"}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-left">Month Change</th>
                  <td className="text-right">{monthChange} {"("} {monthPerformance} {")"}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-left">52 Week High</th>
                  <td className="text-right">${stock[stockTicker].quote.week52High.toFixed(2)}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-left">52 Week Low</th>
                  <td className="text-right">${stock[stockTicker].quote.week52Low.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      <div className="text-left m-2" style={{fontSize: 10}}>
        <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
      </div>
    </div>
  );
}

export default StockInfo;
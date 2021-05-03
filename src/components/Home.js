import React from 'react';
import SearchBar from './SearchBar'
import StockList from './StockList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  return (
    <Container>
      <Row> 
        <Col className="col-4"> 
          <SearchBar />
        </Col>
        <Col>
          <StockList />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
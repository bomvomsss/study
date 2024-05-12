import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import Item from './Item.js';

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">BOMVOMSSS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">메인</Nav.Link>
            <Nav.Link href="#best">베스트</Nav.Link>
            <Nav.Link href="#new">신상품</Nav.Link>
            <Nav.Link href="#all">전체상품</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <div className='row'>
          {shoes.map((shoes,index) => {
            return (
              <Item shoes={shoes} id={index}></Item>
            );
          })} 
        </div>
      </Container>
    </div>
  );
}

export default App;

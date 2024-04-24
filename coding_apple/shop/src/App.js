import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
      <Row>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;

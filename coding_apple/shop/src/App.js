import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import Item from './Item.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.js';
import axios from 'axios'

function App() {
  
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate(); //페이지 이동 기능
  
  const sortShoes = () => {
    const sortedShoes = shoes.slice().sort((a,b) => a.id - b.id);
    setShoes(sortedShoes);
  }

  return (
    <div className="App"> 

       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/') }}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event') }}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
        <div>
          <div className="main-bg"></div>
          <Container>
            <div className='row'>
              <button onClick={sortShoes}>정렬</button>
              {shoes.map((shoes,index) => {
                return (
                  <Item shoes={shoes} id={index}></Item>
                );
              })}
            </div>
          </Container>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                let newData = [...data, ...result.data]
                setShoes(newData)
                console.log(result.data)
              })
              .catch(()=>{
                console.log('데이터 로딩 실패')
              })

              axios.post('/safdfas', {name : 'kim'})
              
            }}>더보기</button>
        </div>
        }/>

        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        
      </Routes>

    </div>
  );
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;

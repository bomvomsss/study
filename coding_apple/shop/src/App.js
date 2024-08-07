import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.js";
import Item from "./Item.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";
import Cart from "./pages/Cart.js";
import axios from "axios";
import {useQuery} from 'react-query';

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(0);
  let [loading, setLoading] = useState(false);
  let [warnpop, setWarnpop] = useState(false);
  let [name, setName] = useState('');
  
  axios.get('/username.json')
    .then((result)=>{
      setName(result.data)
    })

  useEffect(() => {
    let check = localStorage.getItem("watch");
    let info = JSON.parse(check)

    if(check === null || info.length === 0){
      localStorage.setItem("watch", JSON.stringify([]));
    }else{
      return;
    }
  },[]);
  let watchedArr = JSON.parse(localStorage.getItem("watch"))

  let result = useQuery(['dataFrom'], ()=>
    axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      // console.log('요청됨')
      return a.data
    }),
    { staleTime : 2000 }
  )

  let navigate = useNavigate(); //페이지 이동 기능

  let clickBtn = () => {
    setCount(count + 1);
  };

  let moreProduct = () => {
    setLoading(true);

    let url;
    if (count === 1) {
      url = "https://codingapple1.github.io/shop/data2.json";
    } else if (count === 2) {
      url = "https://codingapple1.github.io/shop/data3.json";
    } else if (count > 2) {
      setWarnpop(true);
      setLoading(false);
      return;
    }

    axios
      .get(url)
      .then((result) => {
        let baseData = result.data;
        let newData = [...shoes, ...baseData];
        setShoes(newData);
        setLoading(false);
      })
      .catch(() => {
        console.log("데이터 로딩 실패");
      });
  };

  useEffect(() => {
    if (count !== 0) {
      moreProduct();
    }
  }, [count]);

  const sortShoes = () => {
    const sortedShoes = shoes.slice().sort((a, b) => a.id - b.id);
    setShoes(sortedShoes);
  };

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            ShoeShop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            { name }
              { result.isLoading ? '로딩중' : result.data.name }
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <Container>
                <Popup></Popup>
                <div className="recent">
                  <p>최근 본 상품</p>
                  <ul>
                    {watchedArr && watchedArr.map((a, i)=>{
                      return(
                        <li>
                          <Link to={`/detail/${i}`}>
                            {shoes[i].title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <button onClick={sortShoes}>정렬</button>
                <div className="row">
                  {shoes.map((shoes, index) => {
                    return (
                      <Link to={`/detail/${index}`} className="col-md-4">
                        <Item shoes={shoes} id={index}></Item>
                      </Link>
                    );
                  })}
                </div>
              </Container>
              {loading && <Loading />}
              {warnpop && <WarnPop />}
              <button onClick={() => {clickBtn();}}>
                더보기
              </button>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Loading() {
  return <div className="alert alert-warning">상품로딩중</div>
}

function WarnPop() {
  return <div className="alert alert-warning">더이상 상품이 없습니다.</div>
}

function Popup(){
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  useEffect(()=>{
    if(count !== 0 && count < 3){
      setAge(age + 1);
    }
  },[count])

  return(
    <div>
      <div>안녕하십니까 전 {age}</div>
      <div>{count}</div>
      <button onClick={()=>{
        setCount(count+1);
        console.log(count)
      }}>누르면한살먹기</button>
      
    </div>
  )
}

export default App;

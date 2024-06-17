import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap'

function Detail(props){
  const {id} = useParams();
  let [count, setCount] = useState(0);
  let [box, setBox] = useState(true);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState(0);

  useEffect(()=>{
    let a = setTimeout(() => { setBox(false) }, 2000) // 타이머
    return ()=>{
      clearTimeout(a)
    }
  }, [])
  
 useEffect(()=>{
  if(isNaN(num) === true){
    alert('그러지마세요')
  }
  }, [num])
  
  return(
  <div className="container">
    {
      box === true
      ? <div className='alert alert-warning'>
          2초 이내 구매시 할인
        </div>
        : null 
    }
    {count} 
    <button onClick={()=>{setCount(count+1)}}>up</button>
    <div className="row">
      <div className="col-md-6">
        <img src={props.shoes[id].src} width="100%" alt=""/>
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{props.shoes[id].title}</h4>
        <p>{props.shoes[id].content}</p>
        <p>{props.shoes[id].price}</p>

        <p><input id="test-target" onChange={(e)=>{setNum(e.target.value)}}/></p>
        
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>

    <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
    {/* { tab === 0 ? <div>내용0</div> : null } */}
    <TabContent tab={tab}/>

  </div>
  )
}

function TabContent({tab}){
  
  let [fade, setFade] = useState('');

  useEffect(()=>{ 
    setTimeout(()=>{ setFade('end') }, 100)
    
    return ()=>{
      setFade('')
    }
  }, [tab]) 
  
  // if( tab===0 ){
  //   return <div>content 0</div>
  // }else if( tab===1 ){
  //   return <div>content 1</div>
  // }else if( tab ===2 ){
  //   return <div>content 2</div>
  // }
  return (<div className={'start ' + fade}>
    { [<div>content 0</div>, <div>content 1</div>, <div>content 2</div>][tab] }
  </div>)
}

export default Detail;
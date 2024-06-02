import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail(props){

  const {id} = useParams();
  let [count, setCount] = useState(0);
  let [box, setBox] = useState(true);
  let [num, setNum] = useState('');

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
  </div>
  )
}

export default Detail;
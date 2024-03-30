import './App.css';
import {useState} from 'react';

function App() {
  let [tit, setTit] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal]= useState(false);
  let [title, setTitle] = useState(0);

  let change = () => {
    let copy = [...tit];
    copy[0] = '여자 코트 추천';
    setTit(copy);
  }

  let likeBtn = () => { 
    setLike(like+1);
  }

  let sort = () => {
    let copy2 = [...tit];
    copy2.sort();
    setTit(copy2);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h3>블로그뀨</h3>
      </div>

      <button onClick={change}>변신</button>
      <button onClick={sort}>가나다순정렬</button>

      {/* <div className="list">
        <h4>{tit[0]} <span onClick={like} >👍</span> {like} </h4>    
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{tit[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 
        onClick={()=>{
          modal == true ? setModal(false) : setModal(true)
          //setModal(!modal) 이렇게도 가능
        }}
        >{tit[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      
      {
        tit.map((a, i)=>{
          return (
            <div className="list" key={i}>
              <h4 onClick={
                ()=>{
                  setModal(!modal)
                  setTitle(i)
                  }
                }>{ a }
              </h4>
              <span 
              onClick={() => {
                let likeNum = [...like];
                likeNum[i]++;
                setLike(likeNum);
              }}
              > 👍 
              {like[i]}
              </span>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {  
        modal === true ? <Modal title={title} color={'yellow'} tit={tit} change={change}/> : null
      }

    </div>
  );
}

let Modal = (props) => {
  return(
    <div className="modal" style={{background:props.color}}>
      <h4>{props.tit[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.change}>글수정</button>
    </div>
  )
}
// function Modal(){
//   return(
//     <div className="modal">
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   )
// }

export default App
import './App.css';
import {useState} from 'react';

function App() {
  let [tit, setTit] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal]= useState(false);
  let [title, setTitle] = useState(0);
  let [data, setData] = useState('');

  let change = () => {
    let copy = [...tit];
    copy[0] = '여자 코트 추천';
    setTit(copy);
  }

  let sort = () => {
    let copy2 = [...tit];
    copy2.sort();
    setTit(copy2);
  }

  let saveData = (e) => {
    setData(e.target.value);
  }

  let newTit = () => {
    let copy3 = [...tit];
    copy3.push(data);//맨 아래에 생성
    //copy3.unshift(data); 맨 위에 생성
    setTit(copy3);
  }

  let reset = () => {
    let select = document.querySelector('.list');
    select.remove();
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h3>블로그뀨</h3>
      </div>

      <button onClick={change}>변신</button>
      <button onClick={sort}>가나다순정렬</button>
      {
        tit.map((a, i)=>{
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                setModal(!modal)
                setTitle(i)
                }}>{a}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let likeNum = [...like];
                  likeNum[i]++;
                  setLike(likeNum);
                }}> 👍 {like[i]}</span>
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={reset} type="button">삭제</button>
            </div>
          )
        })
      }

      <div>

        <input type="text" onChange={saveData} />
        <button type="submit" 
          onClick={newTit}
        >작성하기</button>
      </div>

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
export default App
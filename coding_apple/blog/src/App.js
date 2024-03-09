import './App.css';
import {useState} from 'react';

function App() {
  let [tit, tit2] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [thumb, thumb2] = useState(0);

  let change = () => {
    let copy = [...tit];
    copy[0] = '여자 코트 추천';
    tit2(copy);
  }

  let like = () => { 
    thumb2(thumb+1)
  }

  let sort = () => {
    let copy2 = [...tit];
    copy2.sort();
    tit2(copy2);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h3>블로그뀨</h3>
      </div>

      <button onClick={change}>변신</button>
      <button onClick={sort}>가나다순정렬</button>

      <div className='list'>
        <h4>{tit[0]} <span onClick={like} >👍</span> {thumb} </h4>    
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{tit[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{tit[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
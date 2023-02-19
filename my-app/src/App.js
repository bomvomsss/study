import './App.css';
import Hello from './component/Hello'

function App() {
  return (
    <div className="App"> 
      <Hello />
      <div className="box">
        Hello
      </div>
    </div>
    // Fragment(빈태그) - 의미 없이 div 태그를 쓰면 후에 css에서 불편할 수 있음
  );
}

export default App;

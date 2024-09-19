import './App.scss';
import List from './components/todoList'

function Head(){
  return(
    <div className='box__head'>
      <p className='subtitle'>조금만 더 화이팅 !</p>
      <h1>✨TODO LIST ✨</h1>
    </div>
  )
}

function Content(){
  return(
    <div className='box__list'>
      <div className="listBox">
        <h2 className='note'>TASK</h2>
        <List />
      </div>
    </div>
  )
}

function App(){
  
  return (
    <div className="App">
      <Head />
      <Content />
    </div>
  );
}

export default App;

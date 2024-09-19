import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* main */}
        <Route path='/' element={
          <div>
            <Main />

          </div>
        }/>

        <Route path='/voyager' element={
          <div>voyager</div>

        } />  
        <Route path='/youth' element={
          <div>youth</div>

        } />  
        <Route path='/stardust' element={
          <div>stardust</div>

        } />  
        <Route path='/gravity' element={
          <div>gravity</div>

        } />
      </Routes>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import Create from './todoCreate'
import Item from './todoItem'

function List(){
  const [input, setInput] = useState('');
  let [list, setList] = useState(['Initial List', 'Test List']);

  useEffect(()=>{
    const curList = localStorage.getItem('todoList');
    setList(JSON.parse(curList))
    const loadList = JSON.parse(curList)
    
    if(curList === null || loadList.length === 0){
      localStorage.setItem('todoList', JSON.stringify(list))
    }else{
      return
    }
  },[])
  // 비었을때 세팅용
  
  const handleSubmit = (updated, index) => {
    const newList = [...list];
    newList[index] = updated;
    localStorage.setItem('todoList', JSON.stringify(newList))
    setList(newList)
  };
  
  const handleAdd = (e) => {
    e.preventDefault();
    if(input.trim() !== ''){
      let addedList = [...list, input];
      localStorage.setItem('todoList', JSON.stringify(addedList))
      setList(addedList)
      setInput('');
    }
  }
  // 투두 등록
  
  return(
    <div className='todoListBox'>
      <ul>
        {list.map((data, i) => (
          <li key={i} className='listItem'>
            <Item data={data} list={list} setList={setList} handleSubmit={handleSubmit} index={i}></Item>
          </li>
        ))}
      </ul>
      <Create input={input} setInput={setInput} handleAdd={handleAdd}/>
    </div>
  )
}

export default List;
import { useState, useRef } from 'react';

function Item({data, list, setList, handleSubmit, index}){
  const editingText = useRef(null);
  const [isEditing, setIsEditing] = useState(false); // 수정 버튼 눌렸을 때 & 아닐 때
  const [updated, setUpdated] = useState(''); // 수정된 텍스트
  const [isChecked, setIsChecked] = useState(false)
  
  const handleDelete = () => {
    const newList = [...list];
    newList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(newList));
    setList(newList);
  }
  // 투두 삭제

  const handleEdit = () => {
    if(updated === ''){
      setIsEditing(false);
      return;
    }
    handleSubmit(updated, index);
    setUpdated('');
    setIsEditing(false);
  }
  // 투두 수정

  const openEdit = () => {
    setUpdated(data)
    setIsEditing(true);
  }
  const cancleEdit = () => {
    setUpdated('');
    setIsEditing(false);
  }
  
  const handleChk = () => {
    setIsChecked(!isChecked)
  }

  return(
    <>
    { isEditing
      ? (
        <>
          <label className={isChecked ? 'box__txt checked' : 'box__txt'}>
            <input type="text"
              value={updated}
              onChange={(e) => {setUpdated(e.target.value)}}
              ref={editingText}
            />
          </label>
          <div className="box__btn">
            <button type='button' className='btn__edit' onClick={handleEdit}>✔️</button>
            <button type='button' className='btn__del' onClick={cancleEdit}>취소</button>
          </div>
        </>
      ) : (
        <>
          <label className={isChecked ? 'box__txt checked' : 'box__txt'}>
            <input type="checkbox" checked={isChecked} onChange={handleChk}/>
            <span className={'box__txt'}>{data}</span>
          </label>
          <div className="box__btn">
            <button type='button' className='btn__edit' onClick={openEdit}>수정</button>
            <button type='button' className='btn__del' onClick={handleDelete}>삭제</button>
          </div>
        </>
      )
    }  
  </>
  )
}

export default Item;
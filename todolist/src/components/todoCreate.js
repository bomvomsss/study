function Create({input, setInput, handleAdd}){
  
  return(
    <form onSubmit={handleAdd}>
      <div className="box__input">
        <input type="text" name='list' className="input__add" placeholder="할 일을 입력하세요!" value={input} onChange={(e) => {setInput(e.target.value)}}/>
        <button className='btn__add'><span className="arrowIcon"></span>
          Enter</button>
      </div>
    </form>
  )
}

export default Create;
import {Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {changeName, changeAge, addCount, removeItem} from '../store.js'

function Cart(){

  let firState = useSelector((state)=> state )
  let dispatch = useDispatch()


  return(
    <div>

      <h6>{firState.user.name}({firState.user.age}) 의 장바구니</h6>
      <button onClick={()=>{ dispatch(changeName()) }}>이름</button>
      <button onClick={()=>{ dispatch(changeAge(1)) }}>나이</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            firState.cart.map((a, i)=>
              <tr key={i}>
                <td>{firState.cart[i].id}</td>
                <td>{firState.cart[i].name}</td>
                <td>{firState.cart[i].count}</td>
                <td>
                  <button onClick={()=>{
                    dispatch(addCount(firState.cart[i].id))
                  }}>+</button> <button onClick={()=>{
                    dispatch(removeItem(i)) 
                  }}
                  >🗑️</button>
                </td>
              </tr>
            )
          }
       </tbody>
      </Table>
    </div>
  )
}

export default Cart
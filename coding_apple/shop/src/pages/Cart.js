import {Table} from 'react-bootstrap'
import {useSelector} from 'react-redux'

function Cart(){

  let firState = useSelector((state)=> state )

  return(
    <div>
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
                <td><button>변경</button></td>
              </tr>
            )
          }
       </tbody>
      </Table>
    </div>
  )
}

export default Cart
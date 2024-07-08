
function Item(props){

  return(
    <div>
      <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id + 1}.jpg`} alt="" width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default Item;
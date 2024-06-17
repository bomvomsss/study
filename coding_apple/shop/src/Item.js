
function Item(props){

  return(
    <div>
      <img src={props.shoes.src} alt="" width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default Item;
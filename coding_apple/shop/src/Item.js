/* eslint-disable */

function Item(props){
  return(
    <div className='row'>
      {props.data.map((shoes,index) => {
        return (
          <div className='col' key={index}>
            <img src={shoes.src} alt="" width="80%"/>
            <h4>{shoes.title}</h4>
            <p>{shoes.content}</p>
            <p>{shoes.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Item;
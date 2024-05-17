import {useParams} from 'react-router-dom';

function Detail(props){

  const {id} = useParams();

  return(
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src={props.shoes[id].src} width="100%" alt=""/>
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{props.shoes[id].title}</h4>
        <p>{props.shoes[id].content}</p>
        <p>{props.shoes[id].price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div>
  )
}

export default Detail;
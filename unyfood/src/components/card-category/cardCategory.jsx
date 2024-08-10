import "./cardCategory.css";

import img from "../../imgs/beer.svg";
import img2 from "../../imgs/hamburguer.svg";

export default function CardCategory(props){
  return(
    <div className="cardCategory_container" style={{backgroundColor: props.color}}>
      <div className="content">
        <p> {props.title} </p>
        <button>See Options</button>
      </div>
    
      <div>
        <img className=".cardCategory_container" src={props.title === "Foods" ? img2 : img} />
      </div>

    </div>
  );
}
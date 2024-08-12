import "./restaurants.css";
import RESTAURANTS from "./mock";
import RestaurantCard from "../restaurants-card/restaurantCard";

export default function Restaurants(){
  return(
    <div className="restaurants_container">
      <h4>Discover our restaurants</h4>

      <div className="container_cards">
        {
          RESTAURANTS.map((item) => (
            <RestaurantCard 
            key={item.id}
              title={item.title}
              category={item.category}
              color={item.color}/>
          ))
        }
      </div>

        <button className="btn-standard">See More</button>
    </div>
  )
}


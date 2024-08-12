import "./home.css"

import Header from "../../components/header/header";
import Search from "../../components/search/search";
import CardCategory from "../../components/card-category/cardCategory";
import Restaurants from "../../components/restaurants/restaurants";

export default function Home(){
  return(
    <div>
      <Header />

      <Search />

      <div className="home_container_category">
        <CardCategory title="Foods" color="#ed1c16"/>
        <CardCategory title="Beers" color="#009432"/>
      </div>

      <Restaurants/>
    </div>
  );
}
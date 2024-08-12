import "./restaurants.css";

const RESTAURANTS = [
  {
    id: 1,
    title: "Restaurant 1",
    category: "Fast Food",
    color: "red",
  },
  {
    id: 2,
    title: "Bistro Bella",
    category: "Italian",
    color: "green",
  },
  {
    id: 3,
    title: "Sushi Samba",
    category: "Japanese",
    color: "blue",
  },
  {
    id: 4,
    title: "Taco Town",
    category: "Mexican",
    color: "orange",
  },
  {
    id: 5,
    title: "Burger Barn",
    category: "Fast Food",
    color: "yellow",
  },
  {
    id: 6,
    title: "Curry Corner",
    category: "Indian",
    color: "purple",
  },
  {
    id: 7,
    title: "Pasta Palace",
    category: "Italian",
    color: "red",
  },
  {
    id: 8,
    title: "Green Garden",
    category: "Vegan",
    color: "green",
  },
  {
    id: 9,
    title: "BBQ Bliss",
    category: "Barbecue",
    color: "brown",
  },
  {
    id: 10,
    title: "Pho Fever",
    category: "Vietnamese",
    color: "cyan",
  },
  {
    id: 11,
    title: "Pizza Paradise",
    category: "Pizza",
    color: "red",
  },
  {
    id: 12,
    title: "Ocean's Catch",
    category: "Seafood",
    color: "blue",
  }
];


export default function Restaurants(){
  return(
    <div className="restaurants_container">
      <h4>Discover our restaurants</h4>

      <div className="container_cards">
        {
          RESTAURANTS.map(() => (
            <RestaurantCard 
              title="Restaurant 1" 
              category="Fast Food" 
              color="red"/>
          ))
        }
      </div>

    </div>
  )
}

function RestaurantCard({title, category, color}){
  return (
    <div className="restaurant_card">

        <div className="avatar" style={{background: color}}></div>

        <div className="content_info">
          <p>{title}</p>
          <p>{category}</p>
        </div>


      </div>
  )
}
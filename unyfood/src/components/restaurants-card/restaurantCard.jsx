export default function RestaurantCard({title, category, color}){
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
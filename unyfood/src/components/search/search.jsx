import Button from "../button/button";
import "./search.css";

export default function Search(){
  return(
    <section className="search_container">
      <h3>Our goal is to serve you</h3>

      <div className="container_input">
        <input placeholder="Find a restaurant near you"/>
        <Button title="Search"/>
      </div>
    </section>
  );
}
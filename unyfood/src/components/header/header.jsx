import Button from "../button/button";
import "./header.css";


export default function Header(){
  return(
    <header>
      <h1>UnyFood</h1>

      <nav>
        <ul>
          <li>Categories</li>
          <li>Restaurants</li>
          <li>Information</li>
          <li>Register</li>
          <li>
            <Button title="Log in" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
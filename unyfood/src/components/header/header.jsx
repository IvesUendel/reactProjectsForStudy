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
            <button>Log in</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
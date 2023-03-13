import React from "react";
import { Link } from "react-router-dom";
import welcome from "./welcome.css";

function Home() {
  return (
    <div className="homeClass">
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/Signup">SignUp</Link>
        </h1>
      </div>
      <br />
      <br />
      <br />
     
    </div>
  );
}

export default Home;

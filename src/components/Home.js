import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__bannerHeading">Home</h1>
        <p className="home__para">
          Order Now, and get more Offers. Best Deal in whole India.
        </p>
        <Link to="/shop">
          <button className="btn btn-bg">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./index.css";
import HpComponentsPage from "../HpComponentsPage";

const Home = () => {
  return (
    <div className="home">
      {/*
            <div className="home__imgContainer">
        <img src="https://www.decathlon.ca/themes/decashop_v5/assets/img/logo-decathlon-blue.svg" />
      </div>
      <HpComponentsPage />
      */}
      <div className="home__img-container">
        <img
          alt=""
          src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
    </div>
  );
};

export default Home;

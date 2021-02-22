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
      */}
      <HpComponentsPage />
    </div>
  );
};

export default Home;

import React from "react";
import ImgMediaCard from "../ImgMediaCard";
import "./index.css";

const HpComponentsPage = () => {
  return (
    <div className="hpComponentsPage">
      <h2 className="hpComponentsPage__title"> Home Page Components</h2>
      <div className="hpComponentsPage__cardsContainer">
        <div className="hpComponentsPage__card">
          <ImgMediaCard
            imageUrl="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            componentTitle="HP Top Banner"
          />
        </div>
        <div className="hpComponentsPage__card">
          <ImgMediaCard
            imageUrl="https://images.pexels.com/photos/835240/pexels-photo-835240.jpeg?cs=srgb&dl=pexels-sarah-schorer-835240.jpg&fm=jpg"
            componentTitle="Kategories"
          />
        </div>
        <div className="hpComponentsPage__card">
          <ImgMediaCard
            imageUrl="https://images.pexels.com/photos/261045/pexels-photo-261045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            componentTitle="Artikle"
          />
        </div>

        <div className="hpComponentsPage__card">
          <ImgMediaCard
            imageUrl="https://images.pexels.com/photos/1006321/pexels-photo-1006321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            componentTitle="Unsere Filialen"
          />
        </div>
        <div className="hpComponentsPage__card">
          <ImgMediaCard
            imageUrl="https://images.pexels.com/photos/1006321/pexels-photo-1006321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            componentTitle="Unsere Filialen"
          />
        </div>
      </div>
    </div>
  );
};

export default HpComponentsPage;

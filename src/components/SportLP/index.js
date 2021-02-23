import React, { useState } from "react";
import ImgMediaCard from "../ImgMediaCard";

// import screenshots
import screenshotTwoCategories from "../../img/two-categories-screenshot.png";

import "./index.css";
import PopupModalUseComponent from "../PopupModalUseComponent";

const SportLP = () => {
  const [open2CategoriesComponent, setOpen2CategoriesComponent] = useState(
    false
  );
  return (
    <div className="sprortLP">
      <h2 className="title"> Sport LP Components</h2>
      <div className="cards">
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotTwoCategories}
            componentTitle="Display 2 Categories"
            onClick={() => setOpen2CategoriesComponent(true)}
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            componentTitle="HP Top Banner"
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            componentTitle="HP Top Banner"
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            componentTitle="HP Top Banner"
          />
        </div>
      </div>
      <PopupModalUseComponent
        imgUrl={screenshotTwoCategories}
        open={open2CategoriesComponent}
        handleClose={() => setOpen2CategoriesComponent(false)}
      />
    </div>
  );
};

export default SportLP;

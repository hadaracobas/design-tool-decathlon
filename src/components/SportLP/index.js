import React, { useState } from "react";
import ImgMediaCard from "../ImgMediaCard";

// import screenshots
import screenshotTwoCategories from "../../img/two-categories-screenshot.png";
import screenshotThreeCategories from "../../img/three-categories-screenshot.png";
import screenshotFourCategories from "../../img/four-categories-screenshot.png";
import screenshotBanner1 from "../../img/banner1-screenshot.png";
import screenshotArticle1 from "../../img/article1-screenshot.png";

import "./index.css";
import PopupModalUseComponent from "../PopupModalUseComponent";
import Popup2Categories from "../../sportLpPopupComponents/Popup2Categories";
import Popup3Categories from "../../sportLpPopupComponents/Popup3Categories";
import Popup4Categories from "../../sportLpPopupComponents/Popup4Categories";
import PopupBanner1 from "../../sportLpPopupComponents/PopupBanner1";
import PopupArticle1 from "../../sportLpPopupComponents/PopupArticle1";

const SportLP = () => {
  const [open2CategoriesComponent, setOpen2CategoriesComponent] = useState(
    false
  );

  const [open3CategoriesComponent, setOpen3CategoriesComponent] = useState(
    false
  );

  const [open4CategoriesComponent, setOpen4CategoriesComponent] = useState(
    false
  );

  const [openBanner1Component, setOpenBanner1Component] = useState(false);

  const [openArticle1Component, setOpenArticle1Component] = useState(false);

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
            imageUrl={screenshotThreeCategories}
            componentTitle="Display 3 Categories"
            onClick={() => setOpen3CategoriesComponent(true)}
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotFourCategories}
            componentTitle="Display 4 Categories"
            onClick={() => setOpen4CategoriesComponent(true)}
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotBanner1}
            componentTitle="Display Banner"
            onClick={() => setOpenBanner1Component(true)}
          />
        </div>
        <div className="card">
          <ImgMediaCard
            imageUrl={screenshotArticle1}
            componentTitle="Display Article"
            onClick={() => setOpenArticle1Component(true)}
          />
        </div>
      </div>
      {/*
       <PopupModalUseComponent
        imgUrl={screenshotTwoCategories}
        open={open2CategoriesComponent}
        handleClose={() => setOpen2CategoriesComponent(false)}
      />
      */}

      <div>--------------------------------</div>
      <Popup2Categories
        imgUrl={screenshotTwoCategories}
        open={open2CategoriesComponent}
        handleClose={() => setOpen2CategoriesComponent(false)}
      />
      <Popup3Categories
        imgUrl={screenshotThreeCategories}
        open={open3CategoriesComponent}
        handleClose={() => setOpen3CategoriesComponent(false)}
      />
      <Popup4Categories
        imgUrl={screenshotFourCategories}
        open={open4CategoriesComponent}
        handleClose={() => setOpen4CategoriesComponent(false)}
      />
      <PopupBanner1
        imgUrl={screenshotBanner1}
        open={openBanner1Component}
        handleClose={() => setOpenBanner1Component(false)}
      />
      <PopupArticle1
        imgUrl={screenshotArticle1}
        open={openArticle1Component}
        handleClose={() => setOpenArticle1Component(false)}
      />
    </div>
  );
};

export default SportLP;

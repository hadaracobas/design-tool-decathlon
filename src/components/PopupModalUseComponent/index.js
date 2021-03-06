import React, { useState } from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";

import copy from "copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "90%",
    maxHeight: "75%",
    overflowY: "auto",
    textAlign: "left",
  },
}));

export default function PopupModalUseComponent(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // display cta btn state and func toggle
  const [displayCtaBtn, setDisplayCtaBtn] = useState("yes");

  const handleChangeDisplayCtaBtn = (event) => {
    setDisplayCtaBtn(event.target.value);
  };

  //  get input states and on change func
  const [sectionTitleInput, setSectionTitleInput] = useState("");
  const sectionTitleHandleOnChange = (e) => {
    setSectionTitleInput(e.target.value);
  };

  const [btnCtaText, setBtnCtaText] = useState("");
  const btnCtaTextHandleOnChange = (e) => {
    setBtnCtaText(e.target.value);
  };
  const [btnCtaUrl, setBtnCtaUrl] = useState("");
  const btnCtaUrlHandleOnChange = (e) => {
    setBtnCtaUrl(e.target.value);
  };

  const [category1ImgUrl, setCategory1ImgUrl] = useState("");
  const category1ImgUrlHandleOnChange = (e) => {
    setCategory1ImgUrl(e.target.value);
  };
  const [category1ImgLinkUrl, setCategory1ImgLinkUrl] = useState("");
  const category1ImgLinkUrlHandleOnChange = (e) => {
    setCategory1ImgLinkUrl(e.target.value);
  };
  const [category1NameLabel, setCategory1NameLabel] = useState("");
  const category1NameLabelHandleOnChange = (e) => {
    setCategory1NameLabel(e.target.value);
  };

  const [category2ImgUrl, setCategory2ImgUrl] = useState("");
  const category2ImgUrlHandleOnChange = (e) => {
    setCategory2ImgUrl(e.target.value);
  };
  const [category2ImgLinkUrl, setCategory2ImgLinkUrl] = useState("");
  const category2ImgLinkUrlHandleOnChange = (e) => {
    setCategory2ImgLinkUrl(e.target.value);
  };
  const [category2NameLabel, setCategory2NameLabel] = useState("");
  const category2NameLabelHandleOnChange = (e) => {
    setCategory2NameLabel(e.target.value);
  };

  // code of component
  const [generateCode, setGenerateCode] = useState(false);
  const [codeOfComponent, setCodeOfComponent] = useState("");

  const generateCodeFunc = () => {
    setGenerateCode(true);
    setCodeOfComponent(`
    <link
    rel="stylesheet"
    href="https://www.decathlon.at/ecat/static/sport-lp-css/categories-css/style.css"
  />
  
  <style>
    .two-categories .first-category {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)),
        url("${category1ImgUrl}") !important;
      background-position: center !important;
      background-size: cover !important;
    }
    .two-categories .second-category {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)),
        url("${category2ImgUrl}") !important;
      background-position: center !important;
      background-size: cover !important;
    }
  </style>
  <div class="two-categories">
    <div class="title-container">
      <h3>${sectionTitleInput}</h3>
      ${
        displayCtaBtn === "yes"
          ? ` <a href="${btnCtaUrl}" class="title-container__cta">${btnCtaText}</a>`
          : ' <!--<a href="#" class="title-container__cta">Alle Produkte</a>--> '
      }
      
    </div>
    <div class="categories-container">
      <a href="${category1ImgLinkUrl}">
        <div class="category first-category">
          <div class="category-content">
            <p class="category__title">${category1NameLabel}</p>
          </div>
        </div>
      </a>
      <a href="${category2ImgLinkUrl}">
        <div class="category second-category">
          <div class="category-content">
            <p class="category__title">${category2NameLabel}</p>
          </div>
        </div>
      </a>
    </div>
    <!-- end .categories-container -->
  </div>
    `);
  };

  // copy to clip func
  const [showSuccessCopied, setShowSuccessCopied] = useState(false);
  const copyToClipFunc = () => {
    setShowSuccessCopied(true);
    copy(codeOfComponent);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <img src={props.imgUrl} className="popupImg" />
            <h2 id="transition-modal-title">{props.title}</h2>
            <p id="transition-modal-description">{props.text}</p>
            <div className="popupInputsContainer">
              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  header of component:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="add section title"
                    style={{ width: "80%" }}
                    onChange={sectionTitleHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Do you want to display cta button?
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={displayCtaBtn}
                      onChange={handleChangeDisplayCtaBtn}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                {displayCtaBtn === "yes" ? (
                  <div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add cta button text"
                        style={{ width: "80%" }}
                        onChange={btnCtaTextHandleOnChange}
                      />
                    </div>
                    <div className="popupInputsContainer__wrapper">
                      <TextField
                        id="standard-basic"
                        label="add cta button link url"
                        style={{ width: "80%" }}
                        onChange={btnCtaUrlHandleOnChange}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  category 1:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="image url category 1"
                    style={{ width: "80%" }}
                    onChange={category1ImgUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="link URL category 1"
                    style={{ width: "80%" }}
                    onChange={category1ImgLinkUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="label name category 1"
                    style={{ width: "80%" }}
                    onChange={category1NameLabelHandleOnChange}
                  />
                </div>
              </div>

              <div className="popupInputsContainer__sectionWrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  category 2:
                </p>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="image url category 2"
                    style={{ width: "80%" }}
                    onChange={category2ImgUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="link URL category 2"
                    style={{ width: "80%" }}
                    onChange={category2ImgLinkUrlHandleOnChange}
                  />
                </div>
                <div className="popupInputsContainer__wrapper">
                  <TextField
                    id="standard-basic"
                    label="label name category 2"
                    style={{ width: "80%" }}
                    onChange={category2NameLabelHandleOnChange}
                  />
                </div>
              </div>
              <div className="popupInputsContainer__wrapper">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={generateCodeFunc}
                >
                  Generate Component Code
                </Button>
              </div>

              {generateCode && (
                <div>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={copyToClipFunc}
                  >
                    copy code
                  </button>
                  {showSuccessCopied && (
                    <div style={{ margin: "10px 0", position: "relative" }}>
                      <DoneIcon
                        style={{ color: "green", position: "absolute" }}
                        fontSize="small"
                      />
                    </div>
                  )}

                  <pre>
                    <code>{codeOfComponent}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/figures.js":
/*!********************************!*\
  !*** ./src/modules/figures.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   thrdPage: () => (/* binding */ thrdPage)
/* harmony export */ });
/* harmony import */ var _mainSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainSection.js */ "./src/modules/mainSection.js");
/* harmony import */ var _assets_Abdul_Rahman_Al_Ghafiqi_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Abdul_Rahman_Al_Ghafiqi.png */ "./src/assets/Abdul_Rahman_Al_Ghafiqi.png");
/* harmony import */ var _assets_Queen_of_Sheba_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Queen_of_Sheba.jpg */ "./src/assets/Queen_of_Sheba.jpg");
/* harmony import */ var _assets_SalimRubai_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/SalimRubai.jpg */ "./src/assets/SalimRubai.jpg");
/* harmony import */ var _assets_Abdrahman_al_Eryani_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/Abdrahman_al-Eryani.jpg */ "./src/assets/Abdrahman_al-Eryani.jpg");
/* harmony import */ var _assets_Imam_qasam_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Imam_qasam.png */ "./src/assets/Imam_qasam.png");
/* harmony import */ var _assets_IbrahimAl_Hamdi_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/IbrahimAl_Hamdi.jpg */ "./src/assets/IbrahimAl_Hamdi.jpg");
/* harmony import */ var _assets_title_underline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/title_underline.svg */ "./src/assets/title_underline.svg");
/* harmony import */ var _assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/arrow_down.svg */ "./src/assets/arrow_down.svg");


// figures








var page3 = document.createElement('section');

// list of the other figures
var figuresArray = [{
  img: _assets_IbrahimAl_Hamdi_jpg__WEBPACK_IMPORTED_MODULE_6__,
  name: ' Ibrahim al-Hamdi',
  occupation: 'President',
  description: 'was the leader of a military coup in the Yemen Arab Republic that overthrew the regime of President Abdul Rahman al-Iryani on 13 June 1974. After the revolt, he was President of the Military Command Council that governed the country.'
}, {
  img: _assets_SalimRubai_jpg__WEBPACK_IMPORTED_MODULE_3__,
  name: 'Salim Rubai Ali',
  occupation: 'President',
  description: 'known by his comrades as "Salimin", was the Marxist head of state of the Peoples Democratic Republic of Yemen (South Yemen) from 22 June 1969 until his executionon 26 June 1978.'
}, {
  img: _assets_Abdrahman_al_Eryani_jpg__WEBPACK_IMPORTED_MODULE_4__,
  name: 'Abdul Rahman Yahya al-Eryani',
  occupation: 'President',
  description: 'was the President of the Yemen Arab Republic (North Yemen) from 5 November 1967 to 13 June 1974'
}, {
  img: _assets_Imam_qasam_png__WEBPACK_IMPORTED_MODULE_5__,
  name: 'Al-Mansur al-Qasim',
  occupation: 'Imam',
  description: ' was an Imam of Yemen, who commenced the struggle to liberate Yemen from the Ottoman occupiers. He was the founder of a Zaidi kingdom that endured, under many vicissitudes, until 1970.'
}];
page3.classList.add('page3');
var thrdPage = function thrdPage() {
  page3.innerHTML = "\n  <div class=\"Page\">\n  <div class=\"fstPart\">\n    <h2>National Figures</h2>\n    <img src=\"".concat(_assets_title_underline_svg__WEBPACK_IMPORTED_MODULE_7__, "\" alt=\"\" />\n  </div>\n  <ul class=\"UL\">\n    <li>\n      <div class=\"imgPart\">\n        <img src=\"").concat(_assets_Abdul_Rahman_Al_Ghafiqi_png__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"Program icon\" />\n      </div>\n      <div class=\"contentPart\">\n        <h2>Abd al-Rahman ibn Abd Allah Al-Ghafiqi</h2>\n        <h3>commander of the Andalusian Muslims</h3>\n        <p>The governor of Andalusia (Spain nowadays) for two times.</p>\n      </div>\n    </li>\n    <li>\n      <div class=\"imgPart\">\n        <img src=\"").concat(_assets_Queen_of_Sheba_jpg__WEBPACK_IMPORTED_MODULE_2__, "\" alt=\"Program icon\" />\n      </div>\n      <div class=\"contentPart\">\n        <h2>The Queen of Sheba</h2>\n        <h3>The Queen of Sheba Kingdom</h3>\n        <p>She was one of few great leaders that was wise and kind</p>\n      </div>\n    </li>\n  </ul>\n  <button class=\"viewMore\">View More <img src=\"").concat(_assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_8__, "\" alt=\"More\" /></button>\n</div>\n  \n  ");
  _mainSection_js__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(page3);
};

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerSection: () => (/* binding */ headerSection)
/* harmony export */ });
/* harmony import */ var _assets_twitter_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/twitter.svg */ "./src/assets/twitter.svg");
/* harmony import */ var _assets_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/facebook.svg */ "./src/assets/facebook.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_mobile_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/mobile_menu.svg */ "./src/assets/mobile_menu.svg");




var header = document.querySelector('header');
var nav = document.createElement('nav');
var headerSection = function headerSection() {
  nav.innerHTML = " <nav>\n    <div class=\"fstHead\">\n      <ul id=\"fstHead\">\n        <li><img src=\"".concat(_assets_facebook_svg__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"facebook\" /></li>\n        <li><img src=\"").concat(_assets_twitter_svg__WEBPACK_IMPORTED_MODULE_0__, "\" alt=\"twitter\" /></li>\n        <li><a href=\"#\">English</a></li>\n        <li><a href=\"index.html\">My Page</a></li>\n        <li><a href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n    <div id=\"sndHead\">\n      <img id=\"menuBtn\" src=\"").concat(_assets_mobile_menu_svg__WEBPACK_IMPORTED_MODULE_3__, "\" alt=\"\" />\n      <img id=\"logo\" src=\"").concat(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__, "\" alt=\"Party logo\" />\n      <ul id=\"labels\">\n        <li><a href=\"about.html\">About</a></li>\n        <li><a href=\".programs\">Program</a></li>\n        <li><a href=\"#\">Donate</a></li>\n        <li><a href=\"#\">Join</a></li>\n        <li><a href=\"#\">News</a></li>\n        <li><a id=\"borderLabel\" href=\"#fst_page\">YNY Campaign</a></li>\n      </ul>\n    </div>\n    </nav>");
  header.appendChild(nav);
};

/***/ }),

/***/ "./src/modules/mainSection.js":
/*!************************************!*\
  !*** ./src/modules/mainSection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fstPage: () => (/* binding */ fstPage),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   scdPage: () => (/* binding */ scdPage)
/* harmony export */ });
/* harmony import */ var _assets_program_icon_01_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/program_icon_01.svg */ "./src/assets/program_icon_01.svg");
/* harmony import */ var _assets_program_icon_02_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/program_icon_02.svg */ "./src/assets/program_icon_02.svg");
/* harmony import */ var _assets_program_icon_03_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/program_icon_03.svg */ "./src/assets/program_icon_03.svg");
/* harmony import */ var _assets_program_icon_04_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/program_icon_04.svg */ "./src/assets/program_icon_04.svg");
/* harmony import */ var _assets_program_icon_05_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/program_icon_05.svg */ "./src/assets/program_icon_05.svg");
/* harmony import */ var _assets_title_underline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/title_underline.svg */ "./src/assets/title_underline.svg");
// programs icons






// partners images
// import ssss from '../1328850086.svg';
// import BRICS from '../BRICS.svg';
// import Fist from '../Clenched-Fist.svg';
// import Marx from '../Nightingale_Marx_Lenin.svg';
// import YemenFlag from '../Yemen-Map-Flag-With-Stroke-And-Emblem.svg';

// other icons

// import X from '../x.svg';
// import logo from '../logo.svg';

var main = document.querySelector('main');
var page1 = document.createElement('section');
var page2 = document.createElement('section');
page1.classList.add('page1');
var fstPage = function fstPage() {
  page1.innerHTML = "\n    <div class=\"hero\">\n    <h1>\n      <span>\"Hello! Yemeni People\"</span> PATRIOTIC COMMONS <br />\n      NATIONAL SUMMIT 2024\n    </h1>\n    <p class=\"fstPageP\">\n      Those national figures are the lighthouse we must seek during our dark times, therefore, it's a must for every Yemeni\n      to remember them and teach the next generation about them.\n    </p>\n    <h2>2024.10.14(THU) ~ 15(FRI)</h2>\n    <p class=\"adress\">@Alsabeen Street, the revolution square.</p>\n    </div>\n    ";
  main.appendChild(page1);
};
page2.classList.add('page2');
var scdPage = function scdPage() {
  page2.innerHTML = "\n<div class=\"Page\">\n          <div class=\"fstPart\">\n            <h2>Main Program</h2>\n            <img src=\"".concat(_assets_title_underline_svg__WEBPACK_IMPORTED_MODULE_5__, "\" alt=\"\" />\n          </div>\n          <ul class=\"UL\">\n            <li>\n              <img src=\"").concat(_assets_program_icon_01_svg__WEBPACK_IMPORTED_MODULE_0__, "\" alt=\"\" />\n              <h3>Lecture</h3>\n              <p>Listen about Yemeni figures and get inspired to the change for better future.</p>\n            </li>\n            <li>\n              <img src=\"").concat(_assets_program_icon_02_svg__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"\" />\n              <h3>Exhibitions</h3>\n              <p>Appreciate various creations applying YNY ID and be part of patriotic community</p>\n            </li>\n            <li>\n              <img src=\"").concat(_assets_program_icon_03_svg__WEBPACK_IMPORTED_MODULE_2__, "\" alt=\"\" />\n              <h3>Forum</h3>\n              <p>Have the time to share your thoughts and opinions with experts for each topic.</p>\n            </li>\n            <li>\n              <img src=\"").concat(_assets_program_icon_04_svg__WEBPACK_IMPORTED_MODULE_3__, "\" alt=\"\" />\n              <h3>Workshop</h3>\n              <p>Try creating your own work using open source license rather than just watching at it.</p>\n            </li>\n            <li>\n              <img src=\"").concat(_assets_program_icon_05_svg__WEBPACK_IMPORTED_MODULE_4__, "\" alt=\"\" />\n              <h3>Ignite</h3>\n              <p>get opportunities to network with CC affiliates around the world, also after the summit.</p>\n            </li>\n          </ul>\n\n          <h3 class=\"endPart\">Join YNY National Summit 2024</h3>\n        </div>\n");
  main.appendChild(page2);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.sass":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.sass ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Flag-Yemen.webp */ "./src/assets/Flag-Yemen.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/program_content.svg */ "./src/assets/program_content.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
  text-decoration: none;
}

body {
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin: 0;
  text-shadow: 0.4px 0.2 black;
  background-color: rgba(150, 150, 150, 0.2);
}

a, img {
  color: #fbfaf8;
  transition: all 0.5;
}
a:hover, img:hover {
  opacity: 0.7;
  cursor: pointer;
  transform: scale(1.1);
  color: black !important;
}
a:active, img:active {
  transform: scale(1.3);
  color: #a7b7bd;
}
a:focus, img:focus {
  outline: 0;
  color: #a7b7bd;
}

nav {
  display: flex;
  flex-direction: column;
}

.fstHead {
  display: none;
}

#fstHead {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  gap: 1rem;
}

#sndHead {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  gap: 0.2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  background: #a7b7bd;
  height: 3.2rem;
}

#menuBtn {
  flex: 0.2;
}

#logo {
  flex: 2;
  height: 2.8rem;
}

#labels {
  display: none;
}

.page1 {
  display: flex;
  flex-direction: column;
  margin: 3rem 0.15rem 2rem 0.15rem;
  padding: 0.5rem;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
}
.hero h1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}
.hero .fstPageP {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  border: 3px solid #a7b7bd;
  padding: 0.3rem;
  font-size: 0.9rem;
  text-shadow: 0.4px 0.2 black;
}
.hero h2 {
  margin-top: 1rem;
  font-size: 1.1rem;
}

.page2 {
  display: flex;
  flex-direction: column;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-blend-mode: color-burn;
  background-repeat: no-repeat;
}

.Page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 1.5rem;
  gap: 2rem;
  color: #a7b7bd;
}

.fstPart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fstPart h2 {
  margin-bottom: 0.4rem;
}

.UL {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
}
.UL li {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(150, 150, 150, 0.2);
  stroke-opacity: 1;
  padding: 0.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  max-width: 450px;
}
.UL li img {
  flex: 0.4;
}
.UL li h3 {
  flex: 0.4;
}
.UL li p {
  flex: 1;
  text-align: left;
}

.endPart {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(87, 85, 85, 0.7);
  color: #a7b7bd;
  white-space: nowrap;
  padding: 1rem;
}

@media (min-width: 375px) and (max-width: 500px) {
  .hero h1 {
    font-size: 1.922rem;
  }
  .hero .fstPageP {
    font-size: 1.1rem;
  }
  .hero h2 {
    font-size: 1.2rem;
  }
  .hero .adress {
    font-size: 0.9rem;
  }
}
@media (min-width: 500px) and (max-width: 650px) {
  .hero h1 {
    font-size: 2.55rem;
  }
  .hero .fstPageP {
    font-size: 1.4rem;
  }
  .hero h2 {
    font-size: 1.5rem;
  }
  .hero .adress {
    font-size: 1.2rem;
  }
}
@media (min-width: 650px) and (max-width: 768px) {
  .hero h1 {
    font-size: 3.1rem;
  }
  .hero .fstPageP {
    font-size: 1.5rem;
  }
  .hero h2 {
    font-size: 1.6rem;
  }
  .hero .adress {
    font-size: 1.3rem;
  }
}
@media (min-width: 768px) {
  nav {
    gap: 0;
  }
  .fstHead {
    display: flex;
    flex-direction: row;
    justify-content: end;
    background: #434c5e;
  }
  #fstHead, #sndHead {
    padding-right: calc(20% - 100px);
  }
  #fstHead {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-right: calc(25% - 120px);
  }
  #sndHead {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    background: #fbfaf8;
    gap: 2rem;
  }
  #sndHead a {
    color: #495057;
  }
  #menuBtn {
    display: none;
  }
  #logo {
    flex: 2;
    height: 3rem;
  }
  #labels {
    flex: 6;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.8rem;
  }
  #labels #borderLabel {
    color: #a7b7bd;
    border: 3px solid #a7b7bd;
    white-space: nowrap;
    padding: 0.3rem;
  }
  .page1 {
    margin-top: 4rem;
    padding-right: calc(25% - 120px);
    padding-left: calc(25% - 120px);
  }
  .hero h1 {
    font-size: 3.3rem;
  }
  .hero .fstPageP {
    font-size: 1.5rem;
  }
  .hero h2 {
    font-size: 2.2rem;
  }
  .hero .adress {
    font-size: 1.5rem;
  }
  .programs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
  }
  .programs li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .programs li p {
    text-align: center;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/global.sass","webpack://./src/styles/main.sass"],"names":[],"mappings":"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","sourcesContent":["$InterFont: \"Inter\", sans-serif\r\n$primary-color: rgba(150, 150, 150, 0.2)\r\n$secondary-color: #a7b7bd\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)\r\n$qrpadding: calc( 20% - 100px )\r\n$Qrpadding: calc( 25% - 120px )\r\n$qlpadding: calc( 20% - 100px )\r\n$Qlpadding: calc( 25% - 120px )\r\n*\r\n    box-sizing: border-box\r\n    margin: 0\r\n    padding: 0\r\n    list-style: none\r\n    outline: none\r\n    text-decoration: none\r\n\r\n// mixings\r\n\r\n@mixin columnFlex\r\n    display: flex\r\n    flex-direction: column\r\n@mixin rowFlex\r\n    display: flex\r\n    flex-direction: row\r\n@mixin button\r\n    transition: all 0.5s\r\n    border-radius: 2px\r\n    font-family: $InterFont\r\n    font-weight: 500\r\n    font-size: 1rem\r\n    letter-spacing: 0.001em\r\n    word-spacing: normal\r\n    background-color: $primary-color\r\n    color: $secondary-color\r\n    border: 0\r\n    box-shadow: $box-shadow\r\n    padding: 10px\r\n    cursor: pointer\r\n    text-align: center\r\n\r\n@mixin oneFiveGrid\r\n    display: grid\r\n    grid-template-columns: 1fr\r\n    grid-auto-rows: 1fr 1fr 1fr 1fr 1fr\r\n@mixin fiveOneGrid\r\n    display: grid\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr\r\n    grid-auto-rows: 1fr\r\n@mixin twoThreeGrid\r\n    display: grid\r\n    grid-template-columns: 1fr 1fr\r\n    grid-template-rows: 1fr 1fr 1fr\r\n\r\n@mixin globalFont\r\n    font-family: $InterFont\r\n    font-weight: 500\r\n    font-size: 1.2rem\r\n@mixin smlInterH1\r\n    color: black\r\n    font-size: 2rem\r\n    font-family: $InterFont\r\n    font-weight: 800\r\n    letter-spacing: -0.0525rem\r\n@mixin smlInterH2\r\n    color: black\r\n    font-size: 1.5rem\r\n    font-family: $InterFont\r\n    font-weight: 800\r\n    letter-spacing: -0.0225rem\r\n@mixin smlInterH3\r\n    color: black\r\n    font-size: 1.2rem\r\n    font-family: $InterFont\r\n    font-weight: 600\r\n    letter-spacing: 0.0025rem\r\n@mixin smlInterP\r\n    color: black\r\n    font-size: .9rem\r\n    font-family: $InterFont\r\n    letter-spacing: 0.0125rem\r\n@mixin transparentText\r\n    background-image: url('#{$assetsPath}/Flag-Yemen.webp')\r\n    background-size: 100% 100%\r\n    background-repeat: no-repeat\r\n    -webkit-background-clip: text\r\n    -webkit-text-fill-color: transparent\r\n@mixin transparentBg\r\n    background-image: url('#{$assetsPath}/Flag-Yemen.webp')\r\n    background-size: 100% 100%\r\n    background-blend-mode: color-burn\r\n    background-repeat: no-repeat\r\n","@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap')\r\n@import global\r\n$assetsPath: '../assets'\r\nbody\r\n    background-color: transparent\r\n    font-family: 'Roboto', sans-serif\r\n    font-size: 14px\r\n    // overflow: hidden\r\n    margin: 0\r\n    text-shadow: 0.4px .2 black\r\n    background-color: $primary-color\r\n\r\na,img\r\n    color: #fbfaf8\r\n    transition: all 0.5\r\n\r\n    &:hover\r\n        opacity: .7\r\n        cursor: pointer\r\n        transform: scale(1.1)\r\n        color: black !important\r\n\r\n    &:active\r\n        transform: scale(1.3)\r\n        color: $secondary-color\r\n\r\n    &:focus\r\n        outline: 0\r\n        color: $secondary-color\r\n\r\n// nav section mobile section\r\nnav\r\n    @include columnFlex\r\n\r\n.fstHead\r\n    display: none\r\n\r\n#fstHead\r\n    @include rowFlex\r\n    justify-content: space-between\r\n    align-items: center\r\n    padding: .3rem\r\n    gap: 1rem\r\n\r\n#sndHead\r\n    @include rowFlex\r\n    justify-content: space-between\r\n    align-items: center\r\n    padding: .3rem\r\n    gap: .2rem\r\n    box-shadow: $box-shadow\r\n    background: $secondary-color\r\n    height: 3.2rem\r\n\r\n#menuBtn\r\n    flex: .2\r\n\r\n#logo\r\n    flex: 2\r\n    height: 2.8rem\r\n\r\n#labels\r\n    display: none\r\n\r\n// Main section \r\n\r\n.page1\r\n    @include columnFlex\r\n    margin: 3rem 0.15rem 2rem 0.15rem\r\n    padding: .5rem\r\n.hero\r\n    @include columnFlex\r\n    justify-content: left\r\n    align-items: flex-start\r\n\r\n    h1\r\n        @include transparentText\r\n        font-weight: 800\r\n        font-size: 1.5rem\r\n        margin-bottom: 1.5rem\r\n    .fstPageP\r\n        box-shadow: $box-shadow\r\n        border: 3px solid $secondary-color\r\n        padding: .3rem\r\n        font-size: .9rem\r\n        // color: $secondary-color\r\n        text-shadow: 0.4px .2 black\r\n        // background-color: rgba(150, 150, 150, 0.2)\r\n\r\n    h2\r\n        margin-top: 1rem\r\n        font-size: 1.1rem\r\n\r\n.page2\r\n    @include columnFlex\r\n    background-image: url('#{$assetsPath}/program_content.svg')\r\n    background-size: cover\r\n    background-blend-mode: color-burn\r\n    background-repeat: no-repeat\r\n\r\n.Page\r\n    @include columnFlex\r\n    justify-content: center\r\n    align-items: center\r\n    margin: .5rem 1.5rem\r\n    gap: 2rem\r\n    color: $secondary-color\r\n\r\n.fstPart\r\n    @include columnFlex\r\n    justify-content: center\r\n    align-items: center\r\n    h2\r\n        margin-bottom: .4rem\r\n\r\n.UL\r\n    @include oneFiveGrid\r\n    gap: .5rem\r\n    li\r\n        box-shadow: $box-shadow\r\n        background-color: rgba(150, 150, 150, 0.2)\r\n        stroke-opacity: 1\r\n        padding: .2rem\r\n        @include rowFlex\r\n        justify-content: center\r\n        align-items: center\r\n        gap: .25rem\r\n        max-width: 450px\r\n\r\n        img\r\n            flex: .4\r\n        h3\r\n            flex: .4\r\n        p\r\n            flex: 1\r\n            text-align: left\r\n\r\n.endPart\r\n    box-shadow: $box-shadow\r\n    background-color: rgba(87, 85, 85, 0.7)\r\n    color: $secondary-color\r\n    white-space: nowrap\r\n    padding: 1rem\r\n\r\n// font adjustment \r\n\r\n@media (min-width: 375px) and ( max-width: 500px  )\r\n    .hero\r\n        h1\r\n            font-size: 1.922rem\r\n        .fstPageP\r\n            font-size: 1.1rem\r\n        h2\r\n            font-size: 1.2rem\r\n        .adress\r\n            font-size: .9rem\r\n\r\n@media (min-width: 500px) and ( max-width: 650px  )\r\n    .hero\r\n        h1\r\n            font-size: 2.55rem\r\n        .fstPageP\r\n            font-size: 1.4rem\r\n        h2\r\n            font-size: 1.5rem\r\n        .adress\r\n            font-size: 1.2rem\r\n\r\n@media (min-width: 650px) and ( max-width: 768px  )\r\n    .hero\r\n        h1\r\n            font-size: 3.1rem\r\n        .fstPageP\r\n            font-size: 1.5rem\r\n        h2\r\n            font-size: 1.6rem\r\n        .adress\r\n            font-size: 1.3rem\r\n\r\n// desktop \r\n\r\n@media ( min-width: 768px  )\r\n    nav\r\n        gap: 0\r\n\r\n    .fstHead\r\n        @include rowFlex\r\n        justify-content: end\r\n        background: #434c5e\r\n\r\n    #fstHead, #sndHead\r\n        padding-right: $qrpadding\r\n\r\n    #fstHead\r\n        @include rowFlex\r\n        justify-content: space-evenly\r\n        align-items: center\r\n        padding-right: $Qrpadding\r\n\r\n    #sndHead\r\n        @include rowFlex\r\n        justify-content: space-between\r\n        align-items: center\r\n        box-shadow: $box-shadow\r\n        background: #fbfaf8\r\n        gap: 2rem\r\n\r\n        a\r\n            color: #495057\r\n\r\n    #menuBtn\r\n        display: none\r\n\r\n    #logo\r\n        flex: 2\r\n        height: 3rem\r\n\r\n    #labels\r\n        flex: 6\r\n        @include rowFlex\r\n        justify-content: space-evenly\r\n        align-items: center\r\n        font-size: .8rem\r\n\r\n        #borderLabel\r\n            color: $secondary-color\r\n            border: 3px solid $secondary-color\r\n            white-space: nowrap\r\n            padding: 0.3rem\r\n    // main section\r\n\r\n    .page1\r\n        margin-top: 4rem\r\n        padding-right: $Qrpadding\r\n        padding-left: $Qlpadding\r\n    .hero\r\n        h1\r\n            font-size: 3.3rem\r\n        .fstPageP\r\n            font-size: 1.5rem\r\n        h2\r\n            font-size: 2.2rem\r\n        .adress\r\n            font-size: 1.5rem\r\n\r\n    // page2\r\n    .programs\r\n        @include fiveOneGrid\r\n        li\r\n            @include columnFlex\r\n            // height: 12rem\r\n            gap: .5rem\r\n            p\r\n                text-align: center\r\n\r\n// .btn\r\n//     background-color: $primary-color\r\n//     color: $secondary-color\r\n//     border: 0\r\n//     border-radius: 10px\r\n//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)\r\n//     padding: 14px 40px\r\n//     font-size: 16px\r\n//     cursor: pointer\r\n\r\n//     &:active\r\n//         transform: scale(0.98)\r\n\r\n//     &:focus\r\n//         outline: 0\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.sass":
/*!******************************!*\
  !*** ./src/styles/main.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/Abdrahman_al-Eryani.jpg":
/*!********************************************!*\
  !*** ./src/assets/Abdrahman_al-Eryani.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Abdrahman_al-Eryani.jpg";

/***/ }),

/***/ "./src/assets/Abdul_Rahman_Al_Ghafiqi.png":
/*!************************************************!*\
  !*** ./src/assets/Abdul_Rahman_Al_Ghafiqi.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Abdul_Rahman_Al_Ghafiqi.png";

/***/ }),

/***/ "./src/assets/Flag-Yemen.webp":
/*!************************************!*\
  !*** ./src/assets/Flag-Yemen.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Flag-Yemen.webp";

/***/ }),

/***/ "./src/assets/IbrahimAl_Hamdi.jpg":
/*!****************************************!*\
  !*** ./src/assets/IbrahimAl_Hamdi.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "IbrahimAl_Hamdi.jpg";

/***/ }),

/***/ "./src/assets/Imam_qasam.png":
/*!***********************************!*\
  !*** ./src/assets/Imam_qasam.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Imam_qasam.png";

/***/ }),

/***/ "./src/assets/Queen_of_Sheba.jpg":
/*!***************************************!*\
  !*** ./src/assets/Queen_of_Sheba.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Queen_of_Sheba.jpg";

/***/ }),

/***/ "./src/assets/SalimRubai.jpg":
/*!***********************************!*\
  !*** ./src/assets/SalimRubai.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "SalimRubai.jpg";

/***/ }),

/***/ "./src/assets/arrow_down.svg":
/*!***********************************!*\
  !*** ./src/assets/arrow_down.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow_down.svg";

/***/ }),

/***/ "./src/assets/facebook.svg":
/*!*********************************!*\
  !*** ./src/assets/facebook.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "facebook.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/mobile_menu.svg":
/*!************************************!*\
  !*** ./src/assets/mobile_menu.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mobile_menu.svg";

/***/ }),

/***/ "./src/assets/program_content.svg":
/*!****************************************!*\
  !*** ./src/assets/program_content.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "program_content.svg";

/***/ }),

/***/ "./src/assets/program_icon_01.svg":
/*!****************************************!*\
  !*** ./src/assets/program_icon_01.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "program_icon_01.svg";

/***/ }),

/***/ "./src/assets/program_icon_02.svg":
/*!****************************************!*\
  !*** ./src/assets/program_icon_02.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "program_icon_02.svg";

/***/ }),

/***/ "./src/assets/program_icon_03.svg":
/*!****************************************!*\
  !*** ./src/assets/program_icon_03.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "program_icon_03.svg";

/***/ }),

/***/ "./src/assets/program_icon_04.svg":
/*!****************************************!*\
  !*** ./src/assets/program_icon_04.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "program_icon_04.svg";

/***/ }),

/***/ "./src/assets/program_icon_05.svg":
/*!****************************************!*\
  !*** ./src/assets/program_icon_05.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "program_icon_05.svg";

/***/ }),

/***/ "./src/assets/title_underline.svg":
/*!****************************************!*\
  !*** ./src/assets/title_underline.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "title_underline.svg";

/***/ }),

/***/ "./src/assets/twitter.svg":
/*!********************************!*\
  !*** ./src/assets/twitter.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "twitter.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.sass */ "./src/styles/main.sass");
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _modules_mainSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mainSection.js */ "./src/modules/mainSection.js");
/* harmony import */ var _modules_figures_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/figures.js */ "./src/modules/figures.js");




window.onload = function () {
  (0,_modules_header_js__WEBPACK_IMPORTED_MODULE_1__.headerSection)();
  (0,_modules_mainSection_js__WEBPACK_IMPORTED_MODULE_2__.fstPage)();
  (0,_modules_mainSection_js__WEBPACK_IMPORTED_MODULE_2__.scdPage)();
  (0,_modules_figures_js__WEBPACK_IMPORTED_MODULE_3__.thrdPage)();
};
})();

/******/ })()
;
//# sourceMappingURL=bundlea6461cb2cec50b208646.js.map
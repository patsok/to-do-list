(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-template-rows: 40px 1fr 40px;\n  min-height: 100vh;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: #db4c3f;\n  color: white;\n  padding: 0.7rem 0;\n  font-size: 1rem;\n  text-align: center;\n  z-index: 1;\n}\n.footer a {\n  text-decoration: none;\n  color: white;\n}\n\n.header {\n  grid-area: 1/1/2/3;\n  background-color: #db4c3f;\n  color: white;\n  padding: 0 3rem;\n  font-size: 1rem;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header .left-header {\n  display: flex;\n  gap: 16px;\n  height: 20px;\n}\n.header .right-header {\n  height: 20px;\n}\n.header img {\n  height: 20px;\n  cursor: pointer;\n}\n\n.nav {\n  grid-area: 2/1/3/2;\n  background-color: #f7f7f7;\n  padding: 3rem 3rem;\n  color: rgb(33, 37, 41);\n  font-size: 16px;\n}\n.nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  justify-content: center;\n}\n.nav ul li {\n  display: flex;\n  gap: 8px;\n  cursor: pointer;\n}\n.nav ul li span {\n  display: flex;\n  align-items: center;\n}\n.nav ul img {\n  margin: auto;\n  height: 16px;\n  filter: brightness(0) saturate(100%) invert(9%) sepia(5%) saturate(1850%) hue-rotate(169deg) brightness(98%) contrast(87%);\n}\n.nav ul ul {\n  gap: 12px;\n  padding-left: 16px;\n  color: #4d4d4d;\n  margin-top: -12px;\n}\n.nav ul ul li {\n  align-items: center;\n}\n.nav ul ul .dot {\n  background-color: rgb(33, 37, 41);\n  opacity: 0.3;\n  border-radius: 50%;\n  height: 8px;\n  width: 8px;\n}\n\n.main {\n  grid-area: 2/2/3/3;\n  padding: 3rem 8rem;\n}\n\n.task-container {\n  padding: 1rem 0;\n}\n\n.task-card {\n  width: 100%;\n  padding: 0.7rem;\n  background-color: #f7f7f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.task-card:hover {\n  transform: scale(1.003);\n  transform-origin: 50% 50%;\n  box-shadow: 2px 2px 5px 2px rgba(77, 77, 77, 0.2);\n  transition: all 0.2s ease-out;\n}\n.task-card.high {\n  border-left: rgb(226, 57, 57) 8px solid;\n}\n.task-card.low {\n  border-left: rgb(169, 76, 231) 8px solid;\n}\n.task-card.medium {\n  border-left: rgb(218, 188, 19) 8px solid;\n}\n.task-card .task-card-left {\n  padding-left: 2px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.task-card .task-card-right {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.task-card .task-card-right .task-date {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.task-card .task-details {\n  border: 1px solid #3ba395;\n  color: #3ba395;\n  padding: 4px 8px;\n  border-radius: 3px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.task-card .task-details:hover {\n  color: rgb(241, 241, 241);\n  background-color: #3ba395;\n}\n.task-card .task-icon img {\n  height: 17px;\n  cursor: pointer;\n}\n\n.task-popup {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(33, 37, 41, 0.6);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 99;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.task-popup .task-popup-content {\n  width: 50%;\n  height: 40%;\n  position: absolute;\n  background-color: rgb(241, 241, 241);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  border-radius: 10px;\n  padding: 32px;\n}\n.task-popup .task-popup-content .title {\n  font-size: 24px;\n  padding: 0 0 12px 0;\n  border-bottom: 1px solid black;\n}\n.task-popup .task-popup-content form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding-top: 24px;\n  position: relative;\n}\n.task-popup .task-popup-content form .input-field {\n  display: flex;\n  width: 100%;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.task-popup .task-popup-content form .input-field label:not(.radios > label) {\n  padding-right: 2rem;\n  width: 100px;\n}\n.task-popup .task-popup-content form .input-field input[type=text] {\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  appearance: none;\n  outline: none;\n  width: 80%;\n  padding: 8px;\n  height: 32px;\n  border-radius: 5px;\n  border: 1px solid rgba(77, 77, 77, 0.2);\n}\n.task-popup .task-popup-content form .input-field input[type=text]:active, .task-popup .task-popup-content form .input-field input[type=text]:focus {\n  border: 1px solid rgba(77, 77, 77, 0.6);\n}\n.task-popup .task-popup-content form .input-field textarea {\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  appearance: none;\n  outline: none;\n  width: 80%;\n  resize: none;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid rgba(77, 77, 77, 0.2);\n}\n.task-popup .task-popup-content form .input-field textarea:active, .task-popup .task-popup-content form .input-field textarea:focus {\n  border: 1px solid rgba(77, 77, 77, 0.6);\n}\n.task-popup .task-popup-content form .input-field input[type=date] {\n  appearance: none;\n  border: 1px solid #3ba395;\n  border-radius: 5px;\n  color: #3ba395;\n  text-transform: uppercase;\n  padding: 8px;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  background-color: transparent;\n}\n.task-popup .task-popup-content form .input-field input[type=radio] {\n  width: 50px;\n  border: 1px solid #3ba395;\n  border-radius: 5px;\n  padding: 8px;\n}\n.task-popup .task-popup-content form .input-field .priority {\n  padding-right: 2rem;\n  width: 100px;\n}\n.task-popup .task-popup-content form .input-field .radios input {\n  display: none;\n}\n.task-popup .task-popup-content form .input-field .radios label {\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=low] {\n  border: 1px solid rgb(169, 76, 231);\n  border-radius: 5px;\n  color: rgb(169, 76, 231);\n  padding: 4px 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=low].prio-checked {\n  color: white;\n  background-color: rgb(169, 76, 231);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=low]:hover {\n  color: white;\n  background-color: rgb(169, 76, 231);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=medium] {\n  border: 1px solid rgb(218, 188, 19);\n  border-radius: 5px;\n  color: rgb(218, 188, 19);\n  padding: 4px 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=medium].prio-checked {\n  color: white;\n  background-color: rgb(218, 188, 19);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=medium]:hover {\n  color: white;\n  background-color: rgb(218, 188, 19);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=high] {\n  border: 1px solid rgb(226, 57, 57);\n  border-radius: 5px;\n  color: rgb(226, 57, 57);\n  padding: 4px 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=high].prio-checked {\n  color: white;\n  background-color: rgb(226, 57, 57);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=high]:hover {\n  color: white;\n  background-color: rgb(226, 57, 57);\n}\n.task-popup .task-popup-content form button {\n  appearance: none;\n  width: 150px;\n  border: 1px solid #3ba395;\n  color: #3ba395;\n  border-radius: 5px;\n  padding: 8px;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  position: absolute;\n  bottom: -6px;\n  right: 10px;\n}\n.task-popup .task-popup-content form button:hover {\n  background-color: #3ba395;\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.scss","webpack://./src/styles/footer.scss","webpack://./src/styles/header.scss","webpack://./src/styles/nav.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AAGA;;;EAGI,sBAAA;EACA,SAAA;EACA,UAAA;AAAJ;;AAeA;EACI,aAAA;EACA,gCAAA;EACA,iCAAA;EACA,iBAAA;EACA,oEAZS;AAAb;;AChBA;EACI,kBAAA;EACA,yBDSW;ECRX,YAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;ADmBJ;ACjBI;EACI,qBAAA;EACA,YAAA;ADmBR;;AE9BA;EACI,kBAAA;EACA,yBFSW;EERX,YAAA;EACA,eAAA;EACA,eAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AFiCJ;AE/BI;EACI,aAAA;EACA,SAAA;EACA,YAAA;AFiCR;AE/BI;EACI,YAAA;AFiCR;AE/BI;EACI,YAAA;EACA,eAAA;AFiCR;;AGtDA;EACI,kBAAA;EACA,yBHWc;EGVd,kBAAA;EACA,sBHUS;EGTT,eAAA;AHyDJ;AGvDI;EACI,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,uBAAA;AHyDR;AGvDQ;EACE,aAAA;EACA,QAAA;EACA,eAAA;AHyDV;AGvDU;EACE,aAAA;EACA,mBAAA;AHyDZ;AGrDQ;EACI,YAAA;EACA,YAAA;EACA,0HAAA;AHuDZ;AGpDQ;EACI,SAAA;EACA,kBAAA;EACA,cHnBE;EGoBF,iBAAA;AHsDZ;AGpDY;EACI,mBAAA;AHsDhB;AGpDY;EACI,iCH3BH;EG4BG,YAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;AHsDhB;;AInGA;EACI,kBAAA;EACA,kBAAA;AJsGJ;;AInGA;EACI,eAAA;AJsGJ;;AInGA;EACI,WAAA;EACA,eAAA;EACA,yBJCc;EIAd,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AJsGJ;AIpGI;EACI,uBAAA;EACA,yBAAA;EACA,iDAAA;EACA,6BAAA;AJsGR;AInGI;EACI,uCAAA;AJqGR;AIlGI;EACI,wCAAA;AJoGR;AIjGI;EACI,wCAAA;AJmGR;AIhGI;EACI,iBAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;AJkGR;AI3FI;EACI,aAAA;EACA,SAAA;EACA,mBAAA;AJ6FR;AI3FQ;EACI,cJvCE;EIwCF,eAAA;AJ6FZ;AIzFI;EACI,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;AJ2FR;AIzFQ;EACI,yBJxDI;EIyDJ,yBAAA;AJ2FZ;AItFQ;EACI,YAAA;EACA,eAAA;AJwFZ;;AInFA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,uCAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,WAAA;EACA,oEJ1ES;AAgKb;AIpFI;EACI,UAAA;EACA,WAAA;EACA,kBAAA;EACA,oCJpFQ;EIqFR,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;AJsFR;AIpFQ;EACI,eAAA;EACA,mBAAA;EACA,8BAAA;AJsFZ;AInFQ;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,iBAAA;EACA,kBAAA;AJqFZ;AInFY;EACI,aAAA;EACA,WAAA;EACA,oEJxGH;AA6Lb;AInFgB;EACI,mBAAA;EACA,YAAA;AJqFpB;AIjFgB;EACI,oEJjHP;EIkHO,gBAAA;EACA,aAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,uCAAA;AJmFpB;AIlFoB;EACI,uCAAA;AJoFxB;AIhFgB;EACI,oEJ/HP;EIiIO,gBAAA;EACA,aAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EAEA,kBAAA;EACA,uCAAA;AJgFpB;AI/EoB;EACI,uCAAA;AJiFxB;AI7EgB;EACI,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cJ7Ib;EI8Ia,yBAAA;EACA,YAAA;EACA,oEJrJP;EIsJO,gBAAA;EACA,eAAA;EACA,6BAAA;AJ+EpB;AIxEgB;EAEI,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,YAAA;AJyEpB;AItEgB;EACI,mBAAA;EACA,YAAA;AJwEpB;AIxDoB;EACI,aAAA;AJ0DxB;AIxDoB;EACI,oEJ7LX;EI8LW,gBAAA;EACA,eAAA;AJ0DxB;AIzDwB;EAlBJ,mCAAA;EACA,kBAAA;EACA,wBJ5Kd;EI6Kc,iBAAA;AJ8EpB;AI5D4B;EAfR,YAAA;EACA,mCJjLd;AA+PN;AI7D4B;EAlBR,YAAA;EACA,mCJjLd;AAmQN;AI7DwB;EA5BJ,mCAAA;EACA,kBAAA;EACA,wBJ7KX;EI8KW,iBAAA;AJ4FpB;AIhE4B;EAzBR,YAAA;EACA,mCJlLX;AA8QT;AIjE4B;EA5BR,YAAA;EACA,mCJlLX;AAkRT;AIjEwB;EAtCJ,kCAAA;EACA,kBAAA;EACA,uBJ9Kb;EI+Ka,iBAAA;AJ0GpB;AIpE4B;EAnCR,YAAA;EACA,kCJnLb;AA6RP;AIrE4B;EAtCR,YAAA;EACA,kCJnLb;AAiSP;AI9DY;EACI,gBAAA;EACA,YAAA;EACA,yBAAA;EACA,cJpOT;EIqOS,kBAAA;EACA,YAAA;EACA,oEJ5OH;EI6OG,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;AJgEhB;AI/DgB;EACI,yBJ9Ob;EI+Oa,YAAA;AJiEpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n$accent-color: #db4c3f;\n$primary-color: rgb(241, 241, 241);\n$secondary-color: #f7f7f7;\n$text-color: rgb(33, 37, 41);\n$text-accent: #4d4d4d;\n$font-stack: lato, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n$high: rgb(226, 57, 57);\n$medium: rgb(218, 188, 19);\n$low: rgb(169, 76, 231);\n$date: #3ba395;\n\n#content{\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    grid-template-rows: 40px 1fr 40px;\n    min-height: 100vh;\n    font-family: $font-stack;\n}\n\n@import \"./footer.scss\";\n@import \"./header.scss\";\n@import \"./nav.scss\";\n@import \"./main.scss\";\n\n",".footer{\n    grid-area: 3 / 1 / 4 / 3;\n    background-color: $accent-color;\n    color: white;\n    padding: 0.7rem 0;\n    font-size: 1rem;\n    text-align: center;\n    z-index: 1;\n\n    a {\n        text-decoration: none;\n        color: white;\n    }\n    \n}",".header{\n    grid-area: 1 / 1 / 2 / 3;\n    background-color: $accent-color;\n    color: white;\n    padding: 0 3rem;\n    font-size: 1rem;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    .left-header{\n        display: flex;\n        gap:16px;\n        height: 20px;\n    }\n    .right-header{\n        height: 20px;\n    }\n    img{\n        height: 20px;\n        cursor: pointer;\n    }\n}",".nav{\n    grid-area: 2 / 1 / 3 / 2;\n    background-color: $secondary-color;\n    padding: 3rem 3rem;\n    color: $text-color;\n    font-size: 16px;\n\n    ul{\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        gap: 24px;\n        justify-content: center;\n\n        li{\n          display: flex;\n          gap: 8px;\n          cursor: pointer;\n          \n          span{\n            display:flex;\n            align-items: center;\n          }\n        }\n\n        img{\n            margin: auto;\n            height: 16px;\n            filter: brightness(0) saturate(100%) invert(9%) sepia(5%) saturate(1850%) hue-rotate(169deg) brightness(98%) contrast(87%);\n        }\n\n        ul{\n            gap:12px;\n            padding-left: 16px;\n            color:$text-accent;\n            margin-top: -12px;\n\n            li{\n                align-items: center;\n            }\n            .dot{\n                background-color: $text-color;\n                opacity: 0.3;\n                border-radius: 50%;\n                height: 8px;\n                width: 8px;\n            }\n        }\n    }\n\n\n}\n\n",".main{\n    grid-area: 2 / 2 / 3 / 3;\n    padding: 3rem 8rem;\n}\n\n.task-container{\n    padding: 1rem 0;\n}\n\n.task-card{\n    width:100%;\n    padding: 0.7rem;\n    background-color: $secondary-color;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 12px;\n\n    &:hover{\n        transform: scale(1.003);\n        transform-origin: 50% 50%;\n        box-shadow: 2px 2px 5px 2px rgba($text-accent,0.2);\n        transition: all .2s ease-out;\n    }\n\n    &.high{\n        border-left: $high 8px solid;\n    }\n\n    &.low{\n        border-left: $low 8px solid;\n    }\n\n    &.medium{\n        border-left: $medium 8px solid;\n    }\n\n    .task-card-left{\n        padding-left: 2px;\n        display: flex;\n        gap:10px;\n        align-items: center;\n        \n        // input{\n        //     height: 120%;\n        // }\n    }\n\n    .task-card-right{\n        display: flex;\n        gap:16px;\n        align-items: center;\n\n        .task-date{\n            color: $text-accent;\n            font-size: 12px;\n        }\n    }\n\n    .task-details{\n        border: 1px solid #3ba395;\n        color: #3ba395;\n        padding: 4px 8px;\n        border-radius: 3px;\n        font-size: 12px;\n        cursor: pointer;\n\n        &:hover{\n            color: $primary-color;\n            background-color: #3ba395;\n        }\n    }\n\n    .task-icon{\n        img{\n            height: 17px;\n            cursor: pointer;\n        }\n    }\n\n}\n.task-popup{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: rgba($text-color,0.6);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index:99;\n    font-family: $font-stack;\n\n    .task-popup-content{\n        width: 50%;\n        height: 40%;\n        position: absolute;\n        background-color: $primary-color;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 100;\n        border-radius: 10px;\n        padding: 32px;\n\n        .title{\n            font-size: 24px;\n            padding: 0 0 12px 0;\n            border-bottom: 1px solid black;\n        }\n\n        form{\n            display: flex;\n            flex-direction: column;\n            gap: 16px;\n            padding-top: 24px;\n            position: relative;\n\n            .input-field{\n                display: flex;\n                width: 100%;\n                font-family: $font-stack;\n\n                label:not(.radios > label){\n                    padding-right: 2rem;\n                    width: 100px;\n\n                }\n\n                input[type='text']{\n                    font-family: $font-stack;\n                    appearance: none;\n                    outline: none;\n                    width: 80%;\n                    padding: 8px;\n                    height: 32px;\n                    border-radius: 5px;\n                    border: 1px solid rgba($text-accent,0.2);\n                    &:active, &:focus{\n                        border: 1px solid rgba($text-accent,0.6);\n                    }\n                }\n\n                textarea {\n                    font-family: $font-stack;\n\n                    appearance: none;\n                    outline: none;\n                    width: 80%;\n                    resize: none;\n                    padding: 8px;\n\n                    border-radius: 5px;\n                    border: 1px solid rgba($text-accent,0.2);\n                    &:active, &:focus{\n                        border: 1px solid rgba($text-accent,0.6);\n                    }\n                }\n\n                input[type='date']{\n                    appearance: none;\n                    border: 1px solid $date;\n                    border-radius: 5px;\n                    color: $date;\n                    text-transform: uppercase;\n                    padding: 8px;\n                    font-family: $font-stack;\n                    font-weight: 700;\n                    font-size: 12px;\n                    background-color:transparent;\n\n                    // &:hover, &:active, &:focus-visible{\n                    //     border: inline 2px solid $date;\n                    // }\n                }\n\n                input[type='radio']{\n                    // appearance: none;\n                    width: 50px;\n                    border: 1px solid $date;\n                    border-radius: 5px;\n                    padding: 8px;\n                }\n\n                .priority{\n                    padding-right: 2rem;\n                    width: 100px;\n\n                }\n\n                @mixin setColors ($colors){\n                    border: 1px solid $colors;\n                    border-radius: 5px;\n                    color: $colors;\n                    padding: 4px 12px;\n                }\n                @mixin setPrio ($colors){\n                    color: white;\n                    background-color: $colors;\n                }\n\n                .radios{\n                    input{\n                        display: none;\n                    }\n                    label{\n                        font-family: $font-stack;\n                        font-weight: 700;\n                        font-size: 12px;\n                        &[for=\"low\"]{\n                            @include setColors($low);\n\n                            &.prio-checked{\n                                @include setPrio($low)\n                            }\n                            &:hover{\n                                @include setPrio($low)\n                            }\n                        }\n                        &[for=\"medium\"]{\n                            @include setColors($medium);\n\n                            &.prio-checked{\n                                @include setPrio($medium)\n                            }\n                            &:hover{\n                                @include setPrio($medium)\n                            }\n                        }\n                        &[for=\"high\"]{\n                            @include setColors($high);\n\n                            &.prio-checked{\n                                @include setPrio($high)\n                            }\n                            &:hover{\n                                @include setPrio($high)\n                            }\n                        }\n\n                    }\n\n            }\n\n\n            }\n            button{\n                appearance: none;\n                width: 150px;\n                border: 1px solid $date;\n                color: $date;\n                border-radius: 5px;\n                padding: 8px;\n                font-family: $font-stack;\n                font-weight: 700;\n                font-size: 12px;\n                position: absolute;\n                bottom: -6px;\n                right: 10px;\n                &:hover{\n                    background-color: $date;\n                    color: white;\n                }\n            }\n\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/img sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/":
/*!**********************************************************!*\
  !*** ./src/img/ sync \.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./footer/heart.png": "./src/img/footer/heart.png",
	"./header/avatar.png": "./src/img/header/avatar.png",
	"./header/home.svg": "./src/img/header/home.svg",
	"./header/menu.svg": "./src/img/header/menu.svg",
	"./nav/community.svg": "./src/img/nav/community.svg",
	"./nav/delete.svg": "./src/img/nav/delete.svg",
	"./nav/edit.svg": "./src/img/nav/edit.svg",
	"./nav/privacy.svg": "./src/img/nav/privacy.svg",
	"./nav/profile.svg": "./src/img/nav/profile.svg",
	"./nav/search.svg": "./src/img/nav/search.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");


const path = __webpack_require__("./src/img sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/")
const image = path.keys().map(path);
// console.log(image);

const displayController = (() => {
    const renderHeader = () => {
        document.querySelector('.header').innerHTML = `
        <div class="left-header">
        <img src=${image[3]} alt="hamburger menu">
        <img src=${image[2]} alt="home">
        </div>
        <div class="right-header"><img src=${image[1]} alt="avatar"></div>`;
    }
    const renderFooter = () => {
        document.querySelector('.footer').innerHTML = `
        <div class="author">Made with <img src=${image[0]} width="15rem"> 
        by <a href="https://github.com/patsok" target="_blank">Falco</a></div>`;
    }
    const renderNav = () => {
        document.querySelector('.nav').innerHTML = `
        <ul>
            <li>
                <span class="icon">
                    <img src="${image[4]}" alt="">
                </span>
                <span class="nav-elem">Inbox</span>
            </li>
            <li>
                <span class="icon">
                    <img src="${image[5]}" alt="">
                </span>
                <span class="nav-elem">Today</span>
            </li>
            <li>
                <span class="icon">
                    <img src="${image[6]}" alt="">
                </span>
                <span class="nav-elem">Filter</span>
            </li>
            <li>
                <span class="icon">
                    <img src="${image[7]}" alt="">
                </span>
                <span class="nav-elem">Projects</span>
            </li>
            <ul>
            <li><span class="dot"></span><span class="nav-project-elem">Work</span></li>
            <li><span class="dot"></span><span class="nav-project-elem">Personal</span></li>
            <li><span class="dot"></span><span class="nav-project-elem">Shopping</span></li>
        </ul>
        </ul>`;
    }
    const renderMain = () => {
        document.querySelector('.main').innerHTML = `
        <h1>Project Title</h1>
        <div class="task-container">
            <div class="task-card high">
                <div class="task-card-left">
                    <input type="checkbox" name="checkbox">
                    <span class="task-title">Task title</span>
                </div>
                <div class="task-card-right">
                    <span class="task-date">Nov 11th</span>
                    <span class="task-details">DETAILS</span>
                    <span class="task-icon"><img src="${image[5]}" alt=""></span>
                    <span class="task-icon"><img src="${image[6]}" alt=""></span>
                </div>
            </div>
            <div class="task-card low">
                <div class="task-card-left">
                    <input type="checkbox" name="checkbox" checked>
                    <span class="task-title">Task title</span>
                </div>
                <div class="task-card-right">
                    <span class="task-date">Nov 11th</span>
                    <span class="task-details">DETAILS</span>
                    <span class="task-icon"><img src="${image[5]}" alt=""></span>
                    <span class="task-icon"><img src="${image[6]}" alt=""></span>
                </div>
            </div>
        </div>`
    }
    const renderDetails = (index) => {
        const card = document.querySelector('body');
        let div = document.createElement('div');
        let contentDiv = document.createElement('div');
        div.classList.add('task-popup')
        contentDiv.classList.add('task-popup-content');
        contentDiv.innerHTML = `
        <div class="title">New Task</div>
        <form action="">
            <div class="input-field">
                <label for="t-title">Title</label>
                <input type="text" name="t-title" id="t-title">
            </div>
            <div class="input-field">
                <label for="t-details">Details</label>
                <textarea id="t-details" name="t-details" rows="6"></textarea>
            </div>
            <div class="input-field">
                <label for="t-date">Date</label>
                <input type="date" name="t-date" id="t-date">
            </div>
            <div class="input-field">
                <div class="priority">Priority</div>
                <div class="radios">
                    <label for="low">LOW</label>
                    <input type="radio" name="t-priority" id="low" value="low" required>
                    <label for="medium">MEDIUM</label>
                    <input type="radio" name="t-priority" id="medium" value="medium">
                    <label for="high">HIGH</label>
                    <input type="radio" name="t-priority" id="high" value="high">
                </div>
            </div>
            <button type="submit">ADD TASK</button>
        </form>        
        `;
        div.appendChild(contentDiv);
        card.appendChild(div);
        let priority = document.querySelectorAll('.radios > label');
        priority.forEach((button,index) => {
        button.addEventListener('click',()=>changePriority(button,index))
        });

        const form = document.querySelector('form');
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            let title = form.querySelector('input#t-title').value;
            let details = form.querySelector('#t-details').value;
            let date = form.querySelector('input#t-date').value;
            let priority = form.elements["t-priority"].value;
            dataHandler.addTask(title,details,date,priority);
        })
    }

    renderHeader();
    renderFooter();
    renderNav();
    renderMain();

    return {renderDetails};
})()

class Project{
    constructor(name){
        this.name = name;
        this.taskArray = [];
    }
    addTaskToCurrentProject(task) {
        this.taskArray.push(task);
    }
}

class Task{
    constructor(title, details, date, priority, project){
        this.title = title;
        this.details = details;
        this.date = date;
        this.priority = priority;
        this.project = project;
    }
}

const testFunc = (()=>{
    let testproject = new Project("Boi");

    let testtasks = new Task("Boi1",'Boi2','BOi3','Boi4','BOu5');
    let testtasks1 = new Task("Boi1",'Boi2','BOi3','Boi4','BOu5');
    let testtasks2 = new Task("Boi1",'Boi2','BOi3','Boi4','BOu5');
    
    testproject.addTaskToCurrentProject(testtasks);
    testproject.addTaskToCurrentProject(testtasks1);
    testproject.addTaskToCurrentProject(testtasks2);
    console.log(testproject);
    return {testproject};
})()

const dataHandler = (()=>{
    const addTask = (title,details,date,priority) =>{
        let newTask = new Task(title,details,date,priority,"test");
        testproject.addTaskToCurrentProject(newTask);
    }
    return {addTask}
})()

let tasks = document.querySelectorAll('.task-card');
tasks.forEach((task, index) => {
    task.addEventListener('click',()=>displayController.renderDetails(index));
});


const changePriority = (button,index) => {
    let labels = document.querySelectorAll(`.radios label`);
    labels.forEach(label => {
        label.classList.remove('prio-checked')
    });
    button.classList.add('prio-checked');
}



/***/ }),

/***/ "./src/img/footer/heart.png":
/*!**********************************!*\
  !*** ./src/img/footer/heart.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c9ebe03a1cdd52bf06ba.png";

/***/ }),

/***/ "./src/img/header/avatar.png":
/*!***********************************!*\
  !*** ./src/img/header/avatar.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c0e4699d64eafc1211a4.png";

/***/ }),

/***/ "./src/img/header/home.svg":
/*!*********************************!*\
  !*** ./src/img/header/home.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9edde7dc62976e5bc79e.svg";

/***/ }),

/***/ "./src/img/header/menu.svg":
/*!*********************************!*\
  !*** ./src/img/header/menu.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f00e2080025681cdfae3.svg";

/***/ }),

/***/ "./src/img/nav/community.svg":
/*!***********************************!*\
  !*** ./src/img/nav/community.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "720f3849cb05204947d2.svg";

/***/ }),

/***/ "./src/img/nav/delete.svg":
/*!********************************!*\
  !*** ./src/img/nav/delete.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3672ce28d245c8f7bbef.svg";

/***/ }),

/***/ "./src/img/nav/edit.svg":
/*!******************************!*\
  !*** ./src/img/nav/edit.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "419ce92ba256ec17110b.svg";

/***/ }),

/***/ "./src/img/nav/privacy.svg":
/*!*********************************!*\
  !*** ./src/img/nav/privacy.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5a6c88224cdbf7952607.svg";

/***/ }),

/***/ "./src/img/nav/profile.svg":
/*!*********************************!*\
  !*** ./src/img/nav/profile.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c3a7edf0ed65d12ea35e.svg";

/***/ }),

/***/ "./src/img/nav/search.svg":
/*!********************************!*\
  !*** ./src/img/nav/search.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d7fc435256618462c7d6.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxZQUFZLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsWUFBWSxZQUFZLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxZQUFZLFlBQVksVUFBVSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLE1BQU0sT0FBTyxXQUFXLFlBQVksTUFBTSxPQUFPLFlBQVksV0FBVyxZQUFZLFlBQVksT0FBTyxPQUFPLFdBQVcsWUFBWSxNQUFNLE9BQU8sV0FBVyxZQUFZLE1BQU0sT0FBTyxZQUFZ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QTtBQUNBO0FBQ0Esd0RBQXdELFNBQVM7QUFDakUsd0RBQXdELFNBQVM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzPzIwM2IiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltZy8gc3luYyBcXC4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkLyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnIgNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IGxhdG8sIFJvYm90bywgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0YzNmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMCAzcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5sZWZ0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4uaGVhZGVyIC5yaWdodC1oZWFkZXIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gIHBhZGRpbmc6IDNyZW0gM3JlbTtcXG4gIGNvbG9yOiByZ2IoMzMsIDM3LCA0MSk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5uYXYgdWwgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2IHVsIGxpIHNwYW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXYgdWwgaW1nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogMTZweDtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoOSUpIHNlcGlhKDUlKSBzYXR1cmF0ZSgxODUwJSkgaHVlLXJvdGF0ZSgxNjlkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCg4NyUpO1xcbn1cXG4ubmF2IHVsIHVsIHtcXG4gIGdhcDogMTJweDtcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG4gIGNvbG9yOiAjNGQ0ZDRkO1xcbiAgbWFyZ2luLXRvcDogLTEycHg7XFxufVxcbi5uYXYgdWwgdWwgbGkge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdiB1bCB1bCAuZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMzcsIDQxKTtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogOHB4O1xcbiAgd2lkdGg6IDhweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgcGFkZGluZzogM3JlbSA4cmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC43cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuLnRhc2stY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAzKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiYSg3NywgNzcsIDc3LCAwLjIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxufVxcbi50YXNrLWNhcmQuaGlnaCB7XFxuICBib3JkZXItbGVmdDogcmdiKDIyNiwgNTcsIDU3KSA4cHggc29saWQ7XFxufVxcbi50YXNrLWNhcmQubG93IHtcXG4gIGJvcmRlci1sZWZ0OiByZ2IoMTY5LCA3NiwgMjMxKSA4cHggc29saWQ7XFxufVxcbi50YXNrLWNhcmQubWVkaXVtIHtcXG4gIGJvcmRlci1sZWZ0OiByZ2IoMjE4LCAxODgsIDE5KSA4cHggc29saWQ7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY2FyZC1sZWZ0IHtcXG4gIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY2FyZC1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jYXJkLXJpZ2h0IC50YXNrLWRhdGUge1xcbiAgY29sb3I6ICM0ZDRkNGQ7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stZGV0YWlscyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM2JhMzk1O1xcbiAgY29sb3I6ICMzYmEzOTU7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWRldGFpbHM6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYmEzOTU7XFxufVxcbi50YXNrLWNhcmQgLnRhc2staWNvbiBpbWcge1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1wb3B1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDM3LCA0MSwgMC42KTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiA5OTtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMzJweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogMCAwIDEycHggMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAgcGFkZGluZy10b3A6IDI0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IGxhdG8sIFJvYm90bywgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgbGFiZWw6bm90KC5yYWRpb3MgPiBsYWJlbCkge1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NywgNzcsIDc3LCAwLjIpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9dGV4dF06YWN0aXZlLCAudGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NywgNzcsIDc3LCAwLjYpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIHRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogODAlO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NywgNzcsIDc3LCAwLjIpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIHRleHRhcmVhOmFjdGl2ZSwgLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc3LCA3NywgNzcsIDAuNik7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1kYXRlXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiYTM5NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjM2JhMzk1O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiYTM5NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCAucHJpb3JpdHkge1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCAucmFkaW9zIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbCB7XFxuICBmb250LWZhbWlseTogbGF0bywgUm9ib3RvLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbFtmb3I9bG93XSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY5LCA3NiwgMjMxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiByZ2IoMTY5LCA3NiwgMjMxKTtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPWxvd10ucHJpby1jaGVja2VkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjksIDc2LCAyMzEpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPWxvd106aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgNzYsIDIzMSk7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbFtmb3I9bWVkaXVtXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE4LCAxODgsIDE5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiByZ2IoMjE4LCAxODgsIDE5KTtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPW1lZGl1bV0ucHJpby1jaGVja2VkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE4OCwgMTkpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPW1lZGl1bV06aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTg4LCAxOSk7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbFtmb3I9aGlnaF0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyNiwgNTcsIDU3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiByZ2IoMjI2LCA1NywgNTcpO1xcbiAgcGFkZGluZzogNHB4IDEycHg7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbFtmb3I9aGlnaF0ucHJpby1jaGVja2VkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDU3LCA1Nyk7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbFtmb3I9aGlnaF06aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgNTcsIDU3KTtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIGJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiYTM5NTtcXG4gIGNvbG9yOiAjM2JhMzk1O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1mYW1pbHk6IGxhdG8sIFJvYm90bywgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtNnB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9uYXYuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7OztFQUdJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFl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QTtFQUNBLHlCQUFBO0VBQ0EsY0pwT1Q7RUlxT1Msa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0VKNU9IO0VJNk9HLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUpnRWhCO0FJL0RnQjtFQUNJLHlCSjlPYjtFSStPYSxZQUFBO0FKaUVwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuJGFjY2VudC1jb2xvcjogI2RiNGMzZjtcXG4kcHJpbWFyeS1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xcbiRzZWNvbmRhcnktY29sb3I6ICNmN2Y3Zjc7XFxuJHRleHQtY29sb3I6IHJnYigzMywgMzcsIDQxKTtcXG4kdGV4dC1hY2NlbnQ6ICM0ZDRkNGQ7XFxuJGZvbnQtc3RhY2s6IGxhdG8sIFJvYm90bywgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuXFxuJGhpZ2g6IHJnYigyMjYsIDU3LCA1Nyk7XFxuJG1lZGl1bTogcmdiKDIxOCwgMTg4LCAxOSk7XFxuJGxvdzogcmdiKDE2OSwgNzYsIDIzMSk7XFxuJGRhdGU6ICMzYmEzOTU7XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJGZvbnQtc3RhY2s7XFxufVxcblxcbkBpbXBvcnQgXFxcIi4vZm9vdGVyLnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vaGVhZGVyLnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vbmF2LnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vbWFpbi5zY3NzXFxcIjtcXG5cXG5cIixcIi5mb290ZXJ7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjdyZW0gMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGEge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuICAgIFxcbn1cIixcIi5oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAubGVmdC1oZWFkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOjE2cHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIH1cXG4gICAgLnJpZ2h0LWhlYWRlcntcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgfVxcbiAgICBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XCIsXCIubmF2e1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICAgIHBhZGRpbmc6IDNyZW0gM3JlbTtcXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgIHVse1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyNHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBsaXtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZ2FwOiA4cHg7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgXFxuICAgICAgICAgIHNwYW57XFxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoOSUpIHNlcGlhKDUlKSBzYXR1cmF0ZSgxODUwJSkgaHVlLXJvdGF0ZSgxNjlkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCg4NyUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdWx7XFxuICAgICAgICAgICAgZ2FwOjEycHg7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgICAgICAgICAgIGNvbG9yOiR0ZXh0LWFjY2VudDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcXG5cXG4gICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmRvdHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtY29sb3I7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuXCIsXCIubWFpbntcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICBwYWRkaW5nOiAzcmVtIDhyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1jYXJke1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjdyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDMpO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2JhKCR0ZXh0LWFjY2VudCwwLjIpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG4gICAgfVxcblxcbiAgICAmLmhpZ2h7XFxuICAgICAgICBib3JkZXItbGVmdDogJGhpZ2ggOHB4IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgICYubG93e1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRsb3cgOHB4IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgICYubWVkaXVte1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRtZWRpdW0gOHB4IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWNhcmQtbGVmdHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDoxMHB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICAgICAgLy8gaW5wdXR7XFxuICAgICAgICAvLyAgICAgaGVpZ2h0OiAxMjAlO1xcbiAgICAgICAgLy8gfVxcbiAgICB9XFxuXFxuICAgIC50YXNrLWNhcmQtcmlnaHR7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOjE2cHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgLnRhc2stZGF0ZXtcXG4gICAgICAgICAgICBjb2xvcjogJHRleHQtYWNjZW50O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAudGFzay1kZXRhaWxze1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNiYTM5NTtcXG4gICAgICAgIGNvbG9yOiAjM2JhMzk1O1xcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYmEzOTU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnRhc2staWNvbntcXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxufVxcbi50YXNrLXBvcHVwe1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRleHQtY29sb3IsMC42KTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6OTk7XFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG5cXG4gICAgLnRhc2stcG9wdXAtY29udGVudHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBoZWlnaHQ6IDQwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nOiAzMnB4O1xcblxcbiAgICAgICAgLnRpdGxle1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMTJweCAwO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGZvcm17XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAgICAgLmlucHV0LWZpZWxke1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcblxcbiAgICAgICAgICAgICAgICBsYWJlbDpub3QoLnJhZGlvcyA+IGxhYmVsKXtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0ndGV4dCdde1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkdGV4dC1hY2NlbnQsMC4yKTtcXG4gICAgICAgICAgICAgICAgICAgICY6YWN0aXZlLCAmOmZvY3Vze1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJHRleHQtYWNjZW50LDAuNik7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcblxcbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcblxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkdGV4dC1hY2NlbnQsMC4yKTtcXG4gICAgICAgICAgICAgICAgICAgICY6YWN0aXZlLCAmOmZvY3Vze1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJHRleHQtYWNjZW50LDAuNik7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0nZGF0ZSdde1xcbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRkYXRlO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXRlO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xcblxcbiAgICAgICAgICAgICAgICAgICAgLy8gJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMtdmlzaWJsZXtcXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXI6IGlubGluZSAycHggc29saWQgJGRhdGU7XFxuICAgICAgICAgICAgICAgICAgICAvLyB9XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0ncmFkaW8nXXtcXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRkYXRlO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5wcmlvcml0eXtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgQG1peGluIHNldENvbG9ycyAoJGNvbG9ycyl7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JzO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcnM7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBAbWl4aW4gc2V0UHJpbyAoJGNvbG9ycyl7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JzO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5yYWRpb3N7XFxuICAgICAgICAgICAgICAgICAgICBpbnB1dHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWx7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICZbZm9yPVxcXCJsb3dcXFwiXXtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0Q29sb3JzKCRsb3cpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnByaW8tY2hlY2tlZHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldFByaW8oJGxvdylcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0UHJpbygkbG93KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICZbZm9yPVxcXCJtZWRpdW1cXFwiXXtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0Q29sb3JzKCRtZWRpdW0pO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnByaW8tY2hlY2tlZHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldFByaW8oJG1lZGl1bSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0UHJpbygkbWVkaXVtKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICZbZm9yPVxcXCJoaWdoXFxcIl17XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldENvbG9ycygkaGlnaCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYucHJpby1jaGVja2Vke1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0UHJpbygkaGlnaClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0UHJpbygkaGlnaClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB9XFxuXFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGF0ZTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXRlO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtNnB4O1xcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRlO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2Zvb3Rlci9oZWFydC5wbmdcIjogXCIuL3NyYy9pbWcvZm9vdGVyL2hlYXJ0LnBuZ1wiLFxuXHRcIi4vaGVhZGVyL2F2YXRhci5wbmdcIjogXCIuL3NyYy9pbWcvaGVhZGVyL2F2YXRhci5wbmdcIixcblx0XCIuL2hlYWRlci9ob21lLnN2Z1wiOiBcIi4vc3JjL2ltZy9oZWFkZXIvaG9tZS5zdmdcIixcblx0XCIuL2hlYWRlci9tZW51LnN2Z1wiOiBcIi4vc3JjL2ltZy9oZWFkZXIvbWVudS5zdmdcIixcblx0XCIuL25hdi9jb21tdW5pdHkuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9jb21tdW5pdHkuc3ZnXCIsXG5cdFwiLi9uYXYvZGVsZXRlLnN2Z1wiOiBcIi4vc3JjL2ltZy9uYXYvZGVsZXRlLnN2Z1wiLFxuXHRcIi4vbmF2L2VkaXQuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9lZGl0LnN2Z1wiLFxuXHRcIi4vbmF2L3ByaXZhY3kuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9wcml2YWN5LnN2Z1wiLFxuXHRcIi4vbmF2L3Byb2ZpbGUuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9wcm9maWxlLnN2Z1wiLFxuXHRcIi4vbmF2L3NlYXJjaC5zdmdcIjogXCIuL3NyYy9pbWcvbmF2L3NlYXJjaC5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC9cIjsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5zY3NzJztcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUuY29udGV4dCgnLi9pbWcnLCB0cnVlLCAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaSlcbmNvbnN0IGltYWdlID0gcGF0aC5rZXlzKCkubWFwKHBhdGgpO1xuLy8gY29uc29sZS5sb2coaW1hZ2UpO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1oZWFkZXJcIj5cbiAgICAgICAgPGltZyBzcmM9JHtpbWFnZVszXX0gYWx0PVwiaGFtYnVyZ2VyIG1lbnVcIj5cbiAgICAgICAgPGltZyBzcmM9JHtpbWFnZVsyXX0gYWx0PVwiaG9tZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWhlYWRlclwiPjxpbWcgc3JjPSR7aW1hZ2VbMV19IGFsdD1cImF2YXRhclwiPjwvZGl2PmA7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlckZvb3RlciA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPk1hZGUgd2l0aCA8aW1nIHNyYz0ke2ltYWdlWzBdfSB3aWR0aD1cIjE1cmVtXCI+IFxuICAgICAgICBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3BhdHNva1wiIHRhcmdldD1cIl9ibGFua1wiPkZhbGNvPC9hPjwvZGl2PmA7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlck5hdiA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VbNF19XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LWVsZW1cIj5JbmJveDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVs1XX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtZWxlbVwiPlRvZGF5PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlWzZdfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1lbGVtXCI+RmlsdGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlWzddfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1lbGVtXCI+UHJvamVjdHM8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwibmF2LXByb2plY3QtZWxlbVwiPldvcms8L3NwYW4+PC9saT5cbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cIm5hdi1wcm9qZWN0LWVsZW1cIj5QZXJzb25hbDwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwibmF2LXByb2plY3QtZWxlbVwiPlNob3BwaW5nPC9zcGFuPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDwvdWw+YDtcbiAgICB9XG4gICAgY29uc3QgcmVuZGVyTWFpbiA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMT5Qcm9qZWN0IFRpdGxlPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkIGhpZ2hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stdGl0bGVcIj5UYXNrIHRpdGxlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNhcmQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWRhdGVcIj5Ob3YgMTF0aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWRldGFpbHNcIj5ERVRBSUxTPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2staWNvblwiPjxpbWcgc3JjPVwiJHtpbWFnZVs1XX1cIiBhbHQ9XCJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay1pY29uXCI+PGltZyBzcmM9XCIke2ltYWdlWzZdfVwiIGFsdD1cIlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY2FyZCBsb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIGNoZWNrZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay10aXRsZVwiPlRhc2sgdGl0bGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY2FyZC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGF0ZVwiPk5vdiAxMXRoPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGV0YWlsc1wiPkRFVEFJTFM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay1pY29uXCI+PGltZyBzcmM9XCIke2ltYWdlWzVdfVwiIGFsdD1cIlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWljb25cIj48aW1nIHNyYz1cIiR7aW1hZ2VbNl19XCIgYWx0PVwiXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbiAgICB9XG4gICAgY29uc3QgcmVuZGVyRGV0YWlscyA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXBvcHVwJylcbiAgICAgICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXBvcHVwLWNvbnRlbnQnKTtcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPk5ldyBUYXNrPC9kaXY+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInQtdGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInQtdGl0bGVcIiBpZD1cInQtdGl0bGVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInQtZGV0YWlsc1wiPkRldGFpbHM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInQtZGV0YWlsc1wiIG5hbWU9XCJ0LWRldGFpbHNcIiByb3dzPVwiNlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0LWRhdGVcIj5EYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwidC1kYXRlXCIgaWQ9XCJ0LWRhdGVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW9zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5MT1c8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInQtcHJpb3JpdHlcIiBpZD1cImxvd1wiIHZhbHVlPVwibG93XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NRURJVU08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInQtcHJpb3JpdHlcIiBpZD1cIm1lZGl1bVwiIHZhbHVlPVwibWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoaWdoXCI+SElHSDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidC1wcmlvcml0eVwiIGlkPVwiaGlnaFwiIHZhbHVlPVwiaGlnaFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BREQgVEFTSzwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+ICAgICAgICBcbiAgICAgICAgYDtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYWRpb3MgPiBsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eS5mb3JFYWNoKChidXR0b24saW5kZXgpID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+Y2hhbmdlUHJpb3JpdHkoYnV0dG9uLGluZGV4KSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCN0LXRpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgZGV0YWlscyA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3QtZGV0YWlscycpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3QtZGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1tcInQtcHJpb3JpdHlcIl0udmFsdWU7XG4gICAgICAgICAgICBkYXRhSGFuZGxlci5hZGRUYXNrKHRpdGxlLGRldGFpbHMsZGF0ZSxwcmlvcml0eSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVySGVhZGVyKCk7XG4gICAgcmVuZGVyRm9vdGVyKCk7XG4gICAgcmVuZGVyTmF2KCk7XG4gICAgcmVuZGVyTWFpbigpO1xuXG4gICAgcmV0dXJuIHtyZW5kZXJEZXRhaWxzfTtcbn0pKClcblxuY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrQXJyYXkgPSBbXTtcbiAgICB9XG4gICAgYWRkVGFza1RvQ3VycmVudFByb2plY3QodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAgIH1cbn1cblxuY2xhc3MgVGFza3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3Qpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG59XG5cbmNvbnN0IHRlc3RGdW5jID0gKCgpPT57XG4gICAgbGV0IHRlc3Rwcm9qZWN0ID0gbmV3IFByb2plY3QoXCJCb2lcIik7XG5cbiAgICBsZXQgdGVzdHRhc2tzID0gbmV3IFRhc2soXCJCb2kxXCIsJ0JvaTInLCdCT2kzJywnQm9pNCcsJ0JPdTUnKTtcbiAgICBsZXQgdGVzdHRhc2tzMSA9IG5ldyBUYXNrKFwiQm9pMVwiLCdCb2kyJywnQk9pMycsJ0JvaTQnLCdCT3U1Jyk7XG4gICAgbGV0IHRlc3R0YXNrczIgPSBuZXcgVGFzayhcIkJvaTFcIiwnQm9pMicsJ0JPaTMnLCdCb2k0JywnQk91NScpO1xuICAgIFxuICAgIHRlc3Rwcm9qZWN0LmFkZFRhc2tUb0N1cnJlbnRQcm9qZWN0KHRlc3R0YXNrcyk7XG4gICAgdGVzdHByb2plY3QuYWRkVGFza1RvQ3VycmVudFByb2plY3QodGVzdHRhc2tzMSk7XG4gICAgdGVzdHByb2plY3QuYWRkVGFza1RvQ3VycmVudFByb2plY3QodGVzdHRhc2tzMik7XG4gICAgY29uc29sZS5sb2codGVzdHByb2plY3QpO1xuICAgIHJldHVybiB7dGVzdHByb2plY3R9O1xufSkoKVxuXG5jb25zdCBkYXRhSGFuZGxlciA9ICgoKT0+e1xuICAgIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsZGV0YWlscyxkYXRlLHByaW9yaXR5KSA9PntcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSxkZXRhaWxzLGRhdGUscHJpb3JpdHksXCJ0ZXN0XCIpO1xuICAgICAgICB0ZXN0cHJvamVjdC5hZGRUYXNrVG9DdXJyZW50UHJvamVjdChuZXdUYXNrKTtcbiAgICB9XG4gICAgcmV0dXJuIHthZGRUYXNrfVxufSkoKVxuXG5sZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jYXJkJyk7XG50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5kaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEZXRhaWxzKGluZGV4KSk7XG59KTtcblxuXG5jb25zdCBjaGFuZ2VQcmlvcml0eSA9IChidXR0b24saW5kZXgpID0+IHtcbiAgICBsZXQgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnJhZGlvcyBsYWJlbGApO1xuICAgIGxhYmVscy5mb3JFYWNoKGxhYmVsID0+IHtcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgncHJpby1jaGVja2VkJylcbiAgICB9KTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpby1jaGVja2VkJyk7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
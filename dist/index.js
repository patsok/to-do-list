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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-template-rows: 40px 1fr 40px;\n  min-height: 100vh;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: #db4c3f;\n  color: white;\n  padding: 0.7rem 0;\n  font-size: 1rem;\n  text-align: center;\n  z-index: 1;\n}\n.footer a {\n  text-decoration: none;\n  color: white;\n}\n\n.header {\n  grid-area: 1/1/2/3;\n  background-color: #db4c3f;\n  color: white;\n  padding: 0 3rem;\n  font-size: 1rem;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header .left-header {\n  display: flex;\n  gap: 16px;\n  height: 20px;\n}\n.header .right-header {\n  height: 20px;\n}\n.header img {\n  height: 20px;\n  cursor: pointer;\n}\n\n.nav {\n  grid-area: 2/1/3/2;\n  background-color: #f7f7f7;\n  padding: 3rem 3rem;\n  color: rgb(33, 37, 41);\n  font-size: 16px;\n}\n.nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  justify-content: center;\n}\n.nav ul li {\n  display: flex;\n  gap: 8px;\n  cursor: pointer;\n}\n.nav ul li span {\n  display: flex;\n  align-items: center;\n}\n.nav ul img {\n  margin: auto;\n  height: 16px;\n  filter: brightness(0) saturate(100%) invert(9%) sepia(5%) saturate(1850%) hue-rotate(169deg) brightness(98%) contrast(87%);\n}\n.nav ul ul {\n  gap: 12px;\n  padding-left: 16px;\n  color: #4d4d4d;\n  margin-top: -8px;\n}\n.nav ul ul li {\n  align-items: center;\n}\n.nav ul ul .dot {\n  background-color: rgb(33, 37, 41);\n  opacity: 0.3;\n  border-radius: 50%;\n  height: 8px;\n  width: 8px;\n}\n\n.main {\n  grid-area: 2/2/3/3;\n  padding: 3rem 8rem;\n}\n\n.task-container {\n  padding: 1rem 0;\n}\n\n.task-card {\n  width: 100%;\n  padding: 0.7rem;\n  background-color: #f7f7f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.task-card:hover {\n  transform: scale(1.003);\n  transform-origin: 50% 50%;\n  box-shadow: 2px 2px 5px 2px rgba(77, 77, 77, 0.2);\n  transition: all 0.2s ease-out;\n}\n.task-card.high {\n  border-left: rgb(226, 57, 57) 8px solid;\n}\n.task-card.low {\n  border-left: rgb(169, 76, 231) 8px solid;\n}\n.task-card.medium {\n  border-left: rgb(218, 188, 19) 8px solid;\n}\n.task-card .task-card-left {\n  padding-left: 2px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.task-card .task-card-right {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.task-card .task-card-right .task-date {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.task-card .task-details {\n  border: 1px solid #3ba395;\n  color: #3ba395;\n  padding: 4px 8px;\n  border-radius: 3px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.task-card .task-details:hover {\n  color: rgb(241, 241, 241);\n  background-color: #3ba395;\n}\n.task-card .task-icon img {\n  height: 17px;\n  cursor: pointer;\n}\n\n.task-popup {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(33, 37, 41, 0.6);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 99;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.task-popup .task-popup-content {\n  width: 50%;\n  height: 40%;\n  position: absolute;\n  background-color: rgb(241, 241, 241);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  border-radius: 10px;\n  padding: 32px;\n}\n.task-popup .task-popup-content .title {\n  font-size: 24px;\n  padding: 0 0 12px 0;\n  border-bottom: 1px solid black;\n}\n.task-popup .task-popup-content form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding-top: 24px;\n  position: relative;\n}\n.task-popup .task-popup-content form .input-field {\n  display: flex;\n  width: 100%;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.task-popup .task-popup-content form .input-field label:not(.radios > label) {\n  padding-right: 2rem;\n  width: 100px;\n}\n.task-popup .task-popup-content form .input-field input[type=text] {\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  appearance: none;\n  outline: none;\n  width: 80%;\n  padding: 8px;\n  height: 32px;\n  border-radius: 5px;\n  border: 1px solid rgba(77, 77, 77, 0.2);\n}\n.task-popup .task-popup-content form .input-field input[type=text]:active, .task-popup .task-popup-content form .input-field input[type=text]:focus {\n  border: 1px solid rgba(77, 77, 77, 0.6);\n}\n.task-popup .task-popup-content form .input-field textarea {\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  appearance: none;\n  outline: none;\n  width: 80%;\n  resize: none;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid rgba(77, 77, 77, 0.2);\n}\n.task-popup .task-popup-content form .input-field textarea:active, .task-popup .task-popup-content form .input-field textarea:focus {\n  border: 1px solid rgba(77, 77, 77, 0.6);\n}\n.task-popup .task-popup-content form .input-field input[type=date] {\n  appearance: none;\n  border: 1px solid #3ba395;\n  border-radius: 5px;\n  color: #3ba395;\n  text-transform: uppercase;\n  padding: 8px;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  background-color: transparent;\n}\n.task-popup .task-popup-content form .input-field input[type=radio] {\n  width: 50px;\n  border: 1px solid #3ba395;\n  border-radius: 5px;\n  padding: 8px;\n}\n.task-popup .task-popup-content form .input-field .priority {\n  padding-right: 2rem;\n  width: 100px;\n}\n.task-popup .task-popup-content form .input-field .radios input {\n  display: none;\n}\n.task-popup .task-popup-content form .input-field .radios label {\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=low] {\n  border: 1px solid rgb(169, 76, 231);\n  border-radius: 5px;\n  color: rgb(169, 76, 231);\n  padding: 4px 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=low].prio-checked {\n  color: white;\n  background-color: rgb(169, 76, 231);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=low]:hover {\n  color: white;\n  background-color: rgb(169, 76, 231);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=medium] {\n  border: 1px solid rgb(218, 188, 19);\n  border-radius: 5px;\n  color: rgb(218, 188, 19);\n  padding: 4px 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=medium].prio-checked {\n  color: white;\n  background-color: rgb(218, 188, 19);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=medium]:hover {\n  color: white;\n  background-color: rgb(218, 188, 19);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=high] {\n  border: 1px solid rgb(226, 57, 57);\n  border-radius: 5px;\n  color: rgb(226, 57, 57);\n  padding: 4px 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=high].prio-checked {\n  color: white;\n  background-color: rgb(226, 57, 57);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=high]:hover {\n  color: white;\n  background-color: rgb(226, 57, 57);\n}\n.task-popup .task-popup-content form button {\n  appearance: none;\n  width: 150px;\n  border: 1px solid #3ba395;\n  color: #3ba395;\n  border-radius: 5px;\n  padding: 8px;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  position: absolute;\n  bottom: -6px;\n  right: 10px;\n}\n.task-popup .task-popup-content form button:hover {\n  background-color: #3ba395;\n  color: white;\n}\n.task-popup .task-popup-content form .close-button {\n  position: absolute;\n  top: -60px;\n  right: -15px;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.add-task {\n  color: rgba(77, 77, 77, 0.8);\n  padding: 0 1rem;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.scss","webpack://./src/styles/footer.scss","webpack://./src/styles/header.scss","webpack://./src/styles/nav.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n$accent-color: #db4c3f;\n$primary-color: rgb(241, 241, 241);\n$secondary-color: #f7f7f7;\n$text-color: rgb(33, 37, 41);\n$text-accent: #4d4d4d;\n$font-stack: lato, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n$high: rgb(226, 57, 57);\n$medium: rgb(218, 188, 19);\n$low: rgb(169, 76, 231);\n$date: #3ba395;\n\n#content{\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    grid-template-rows: 40px 1fr 40px;\n    min-height: 100vh;\n    font-family: $font-stack;\n}\n\n@import \"./footer.scss\";\n@import \"./header.scss\";\n@import \"./nav.scss\";\n@import \"./main.scss\";\n\n",".footer{\n    grid-area: 3 / 1 / 4 / 3;\n    background-color: $accent-color;\n    color: white;\n    padding: 0.7rem 0;\n    font-size: 1rem;\n    text-align: center;\n    z-index: 1;\n\n    a {\n        text-decoration: none;\n        color: white;\n    }\n    \n}",".header{\n    grid-area: 1 / 1 / 2 / 3;\n    background-color: $accent-color;\n    color: white;\n    padding: 0 3rem;\n    font-size: 1rem;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    .left-header{\n        display: flex;\n        gap:16px;\n        height: 20px;\n    }\n    .right-header{\n        height: 20px;\n    }\n    img{\n        height: 20px;\n        cursor: pointer;\n    }\n}",".nav{\n    grid-area: 2 / 1 / 3 / 2;\n    background-color: $secondary-color;\n    padding: 3rem 3rem;\n    color: $text-color;\n    font-size: 16px;\n\n    ul{\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        gap: 24px;\n        justify-content: center;\n\n        li{\n          display: flex;\n          gap: 8px;\n          cursor: pointer;\n          \n          span{\n            display:flex;\n            align-items: center;\n          }\n        }\n\n        img{\n            margin: auto;\n            height: 16px;\n            filter: brightness(0) saturate(100%) invert(9%) sepia(5%) saturate(1850%) hue-rotate(169deg) brightness(98%) contrast(87%);\n        }\n\n        ul{\n            gap:12px;\n            padding-left: 16px;\n            color:$text-accent;\n            margin-top: -8px;\n\n            li{\n                align-items: center;\n            }\n            .dot{\n                background-color: $text-color;\n                opacity: 0.3;\n                border-radius: 50%;\n                height: 8px;\n                width: 8px;\n            }\n        }\n    }\n\n\n}\n\n",".main{\n    grid-area: 2 / 2 / 3 / 3;\n    padding: 3rem 8rem;\n}\n\n.task-container{\n    padding: 1rem 0;\n}\n\n.task-card{\n    width:100%;\n    padding: 0.7rem;\n    background-color: $secondary-color;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 12px;\n\n    &:hover{\n        transform: scale(1.003);\n        transform-origin: 50% 50%;\n        box-shadow: 2px 2px 5px 2px rgba($text-accent,0.2);\n        transition: all .2s ease-out;\n    }\n\n    &.high{\n        border-left: $high 8px solid;\n    }\n\n    &.low{\n        border-left: $low 8px solid;\n    }\n\n    &.medium{\n        border-left: $medium 8px solid;\n    }\n\n    .task-card-left{\n        padding-left: 2px;\n        display: flex;\n        gap:10px;\n        align-items: center;\n        \n        // input{\n        //     height: 120%;\n        // }\n    }\n\n    .task-card-right{\n        display: flex;\n        gap:16px;\n        align-items: center;\n\n        .task-date{\n            color: $text-accent;\n            font-size: 12px;\n        }\n    }\n\n    .task-details{\n        border: 1px solid #3ba395;\n        color: #3ba395;\n        padding: 4px 8px;\n        border-radius: 3px;\n        font-size: 12px;\n        cursor: pointer;\n\n        &:hover{\n            color: $primary-color;\n            background-color: #3ba395;\n        }\n    }\n\n    .task-icon{\n        img{\n            height: 17px;\n            cursor: pointer;\n        }\n    }\n    \n\n}\n.task-popup{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: rgba($text-color,0.6);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index:99;\n    font-family: $font-stack;\n\n    .task-popup-content{\n        width: 50%;\n        height: 40%;\n        position: absolute;\n        background-color: $primary-color;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 100;\n        border-radius: 10px;\n        padding: 32px;\n\n        .title{\n            font-size: 24px;\n            padding: 0 0 12px 0;\n            border-bottom: 1px solid black;\n        }\n\n        form{\n            display: flex;\n            flex-direction: column;\n            gap: 16px;\n            padding-top: 24px;\n            position: relative;\n\n            .input-field{\n                display: flex;\n                width: 100%;\n                font-family: $font-stack;\n\n                label:not(.radios > label){\n                    padding-right: 2rem;\n                    width: 100px;\n\n                }\n\n                input[type='text']{\n                    font-family: $font-stack;\n                    appearance: none;\n                    outline: none;\n                    width: 80%;\n                    padding: 8px;\n                    height: 32px;\n                    border-radius: 5px;\n                    border: 1px solid rgba($text-accent,0.2);\n                    &:active, &:focus{\n                        border: 1px solid rgba($text-accent,0.6);\n                    }\n                }\n\n                textarea {\n                    font-family: $font-stack;\n\n                    appearance: none;\n                    outline: none;\n                    width: 80%;\n                    resize: none;\n                    padding: 8px;\n\n                    border-radius: 5px;\n                    border: 1px solid rgba($text-accent,0.2);\n                    &:active, &:focus{\n                        border: 1px solid rgba($text-accent,0.6);\n                    }\n                }\n\n                input[type='date']{\n                    appearance: none;\n                    border: 1px solid $date;\n                    border-radius: 5px;\n                    color: $date;\n                    text-transform: uppercase;\n                    padding: 8px;\n                    font-family: $font-stack;\n                    font-weight: 700;\n                    font-size: 12px;\n                    background-color:transparent;\n\n                    // &:hover, &:active, &:focus-visible{\n                    //     border: inline 2px solid $date;\n                    // }\n                }\n\n                input[type='radio']{\n                    // appearance: none;\n                    width: 50px;\n                    border: 1px solid $date;\n                    border-radius: 5px;\n                    padding: 8px;\n                }\n\n                .priority{\n                    padding-right: 2rem;\n                    width: 100px;\n\n                }\n\n                @mixin setColors ($colors){\n                    border: 1px solid $colors;\n                    border-radius: 5px;\n                    color: $colors;\n                    padding: 4px 12px;\n                }\n                @mixin setPrio ($colors){\n                    color: white;\n                    background-color: $colors;\n                }\n\n                .radios{\n                    input{\n                        display: none;\n                    }\n                    label{\n                        font-family: $font-stack;\n                        font-weight: 700;\n                        font-size: 12px;\n                        &[for=\"low\"]{\n                            @include setColors($low);\n\n                            &.prio-checked{\n                                @include setPrio($low)\n                            }\n                            &:hover{\n                                @include setPrio($low)\n                            }\n                        }\n                        &[for=\"medium\"]{\n                            @include setColors($medium);\n\n                            &.prio-checked{\n                                @include setPrio($medium)\n                            }\n                            &:hover{\n                                @include setPrio($medium)\n                            }\n                        }\n                        &[for=\"high\"]{\n                            @include setColors($high);\n\n                            &.prio-checked{\n                                @include setPrio($high)\n                            }\n                            &:hover{\n                                @include setPrio($high)\n                            }\n                        }\n\n                    }\n\n            }\n\n\n            }\n            button{\n                appearance: none;\n                width: 150px;\n                border: 1px solid $date;\n                color: $date;\n                border-radius: 5px;\n                padding: 8px;\n                font-family: $font-stack;\n                font-weight: 700;\n                font-size: 12px;\n                position: absolute;\n                bottom: -6px;\n                right: 10px;\n                &:hover{\n                    background-color: $date;\n                    color: white;\n                }\n            }\n            .close-button{\n                position: absolute;\n                top: -60px;\n                right: -15px;\n                font-size: 24px;\n                cursor: pointer;\n            }\n\n        }\n    }\n\n    \n\n}\n\n.add-task{\n    color:rgba($text-accent,0.8);\n    padding: 0 1rem;\n    cursor: pointer;\n}\n\n"],"sourceRoot":""}]);
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

let projectList = [];

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

        </ul>
        </ul>`;
        let projectUL = document.querySelector('ul>ul');
        projectList.forEach(project => {
            let newLi = document.createElement('li');
            newLi.innerHTML = `<span class="dot"></span><span class="nav-project-elem">${project.name}</span>`;
            projectUL.appendChild(newLi);
        });
    }
    const renderMain = (projectName) => {
        document.querySelector('.main').innerHTML = `
            <h1>Inbox</h1>
            <div class="task-container">
            </div>
            <div class="add-task">+ New Task</div>
            `;
        let currentProjectTasks = []; 
        let test = testFunc.getProjectList();    
        test.forEach(project => {
            project.taskArray.forEach(task => {
                currentProjectTasks.push(task);
            })
        })

        let taskContainer = document.querySelector('.task-container');

        testFunc.getProjectList().forEach(project => {
            console.log(projectName);
            if (project.name == projectName) {
                console.log("test");
                currentProjectTasks = project.taskArray;
                document.querySelector('h1').textContent = project.name;
            }
        });

        currentProjectTasks.forEach(task => {
            let priority = task.priority;
            let taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.classList.add(`${priority}`);
            taskCard.innerHTML = `
            <div class="task-card-left">
                <input type="checkbox" name="checkbox">
                <span class="task-title">${task.title}</span>
            </div>
            <div class="task-card-right">
                <span class="task-date">${task.date}</span>
                <span class="task-details">DETAILS</span>
                <span class="task-icon"><img src="${image[5]}" alt=""></span>
                <span class="task-icon"><img src="${image[6]}" alt=""></span>
            </div>`;
            taskContainer.appendChild(taskCard);
            let taskDetails = taskCard.querySelector('.task-details');
            taskDetails.addEventListener('click',() => renderDetails(task));
        });
        document.querySelector('.add-task').addEventListener('click',renderDetails);
    }
    const renderDetails = (task) => {
        console.log(task);
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
            <div class="close-button">X</div>
        </form>`;
        div.appendChild(contentDiv);
        card.appendChild(div);
        let priority = document.querySelectorAll('.radios > label');
        priority.forEach((button,index) => {
        button.addEventListener('click',()=>changePriority(button,index))
        });

        const closePopup = () => {
            document.querySelector('.task-popup').remove();
        }

        document.querySelector('.close-button').addEventListener('click',closePopup);
        const taskPopup = document.querySelector('.task-popup');
        taskPopup.addEventListener('click',(e)=> {if (e.target==taskPopup) {closePopup()}});

        const form = document.querySelector('form');
        form.querySelector('input#t-title').value = task.title;
        form.querySelector('#t-details').value = task.details;
        form.querySelector('input#t-date').value = task.date;
        console.log(form.querySelector(`.radios #${task.priority}`));
        form.querySelector(`.radios label[for=${task.priority}`).classList.add('prio-checked');

        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            let title = form.querySelector('input#t-title').value;
            let details = form.querySelector('#t-details').value;
            let date = form.querySelector('input#t-date').value;
            let priority = form.elements["t-priority"].value;
            dataHandler.addTask(title,details,date,priority);
            closePopup();
            renderMain(document.querySelector('h1').textContent);
        })
    }

    const renderAll = () => {
        renderHeader();
        renderFooter();
        renderNav();
        renderMain();
    }
    return {renderDetails, renderNav, renderMain,renderAll};
})()


class Project{
    constructor(name){
        this.name = name;
        this.taskArray = [];
        this.addToProjectsArray();

    }
    addTaskToCurrentProject(task) {
        this.taskArray.push(task);
    }

    addToProjectsArray(){
        projectList.push(this);
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
    let testproject2 = new Project("Klawisz");
    let testproject3 = new Project("Test97");

    let testtask1 = new Task("Tytul1","Desc1","2022-08-04","high","Boi");
    let testtask2 = new Task("Tytul2","Desc2","2022-08-06","medium","Boi");
    let testtask3 = new Task("Tytul3","Desc3","2022-07-04","low","Klawisz");

    testproject.addTaskToCurrentProject(testtask1);
    testproject.addTaskToCurrentProject(testtask2);
    testproject2.addTaskToCurrentProject(testtask3);

    const getProjectList = () => {
        return projectList;
    }
    const getProject = () => {
        return testproject;
    }
    displayController.renderNav();

    return {getProject,getProjectList};
})()

const dataHandler = (()=>{
    const addTask = (title,details,date,priority) =>{
        let projectName = document.querySelector('h1').textContent;
        let newTask = new Task(title,details,date,priority,"test");
        testFunc.getProjectList().forEach(project => {
            if(project.name == projectName){
                project.addTaskToCurrentProject(newTask);
            }
        })
    }
    return {addTask}
})()

// let tasks = document.querySelectorAll('.task-card');
// tasks.forEach((task, index) => {
//     task.addEventListener('click',()=>displayController.renderDetails(index));
// });




const changePriority = (button,index) => {
    let labels = document.querySelectorAll(`.radios label`);
    labels.forEach(label => {
        label.classList.remove('prio-checked')
    });
    button.classList.add('prio-checked');
}



displayController.renderAll();

let visibleProjects = document.querySelectorAll('ul ul li');
visibleProjects.forEach(project => {
    project.addEventListener('click',() => displayController.renderMain(project.querySelector('span + span').textContent));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLFVBQVUsUUFBUSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksTUFBTSxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFlBQVksWUFBWSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sWUFBWSxZQUFZLFVBQVUsT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxNQUFNLE9BQU8sV0FBVyxZQUFZLE1BQU0sT0FB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7Ozs7QUFLSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzcz8yMDNiIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbWcvIHN5bmMgXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC8iLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDQwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjRjM2Y7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjdyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAgM3JlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAubGVmdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLmhlYWRlciAucmlnaHQtaGVhZGVyIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICBwYWRkaW5nOiAzcmVtIDNyZW07XFxuICBjb2xvcjogcmdiKDMzLCAzNywgNDEpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjRweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubmF2IHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdiB1bCBsaSBzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2IHVsIGltZyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDklKSBzZXBpYSg1JSkgc2F0dXJhdGUoMTg1MCUpIGh1ZS1yb3RhdGUoMTY5ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoODclKTtcXG59XFxuLm5hdiB1bCB1bCB7XFxuICBnYXA6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBjb2xvcjogIzRkNGQ0ZDtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5uYXYgdWwgdWwgbGkge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdiB1bCB1bCAuZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMzcsIDQxKTtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogOHB4O1xcbiAgd2lkdGg6IDhweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgcGFkZGluZzogM3JlbSA4cmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC43cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuLnRhc2stY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAzKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiYSg3NywgNzcsIDc3LCAwLjIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxufVxcbi50YXNrLWNhcmQuaGlnaCB7XFxuICBib3JkZXItbGVmdDogcmdiKDIyNiwgNTcsIDU3KSA4cHggc29saWQ7XFxufVxcbi50YXNrLWNhcmQubG93IHtcXG4gIGJvcmRlci1sZWZ0OiByZ2IoMTY5LCA3NiwgMjMxKSA4cHggc29saWQ7XFxufVxcbi50YXNrLWNhcmQubWVkaXVtIHtcXG4gIGJvcmRlci1sZWZ0OiByZ2IoMjE4LCAxODgsIDE5KSA4cHggc29saWQ7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY2FyZC1sZWZ0IHtcXG4gIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY2FyZC1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jYXJkLXJpZ2h0IC50YXNrLWRhdGUge1xcbiAgY29sb3I6ICM0ZDRkNGQ7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stZGV0YWlscyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM2JhMzk1O1xcbiAgY29sb3I6ICMzYmEzOTU7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWRldGFpbHM6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYmEzOTU7XFxufVxcbi50YXNrLWNhcmQgLnRhc2staWNvbiBpbWcge1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1wb3B1cCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDM3LCA0MSwgMC42KTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiA5OTtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMzJweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogMCAwIDEycHggMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAgcGFkZGluZy10b3A6IDI0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IGxhdG8sIFJvYm90bywgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgbGFiZWw6bm90KC5yYWRpb3MgPiBsYWJlbCkge1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NywgNzcsIDc3LCAwLjIpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9dGV4dF06YWN0aXZlLCAudGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NywgNzcsIDc3LCAwLjYpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIHRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogODAlO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NywgNzcsIDc3LCAwLjIpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIHRleHRhcmVhOmFjdGl2ZSwgLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc3LCA3NywgNzcsIDAuNik7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1kYXRlXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiYTM5NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjM2JhMzk1O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiYTM5NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCAucHJpb3JpdHkge1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCAucmFkaW9zIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbCB7XFxuICBmb250LWZhbWlseTogbGF0bywgUm9ib3RvLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbFtmb3I9bG93XSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY5LCA3NiwgMjMxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiByZ2IoMTY5LCA3NiwgMjMxKTtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPWxvd10ucHJpby1jaGVja2VkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjksIDc2LCAyMzEpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPWxvd106aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgNzYsIDIzMSk7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbFtmb3I9bWVkaXVtXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE4LCAxODgsIDE5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiByZ2IoMjE4LCAxODgsIDE5KTtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPW1lZGl1bV0ucHJpby1jaGVja2VkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE4OCwgMTkpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPW1lZGl1bV06aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTg4LCAxOSk7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbFtmb3I9aGlnaF0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyNiwgNTcsIDU3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiByZ2IoMjI2LCA1NywgNTcpO1xcbiAgcGFkZGluZzogNHB4IDEycHg7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbFtmb3I9aGlnaF0ucHJpby1jaGVja2VkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDU3LCA1Nyk7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgLnJhZGlvcyBsYWJlbFtmb3I9aGlnaF06aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgNTcsIDU3KTtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIGJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiYTM5NTtcXG4gIGNvbG9yOiAjM2JhMzk1O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1mYW1pbHk6IGxhdG8sIFJvYm90bywgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtNnB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5jbG9zZS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNjBweDtcXG4gIHJpZ2h0OiAtMTVweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIGNvbG9yOiByZ2JhKDc3LCA3NywgNzcsIDAuOCk7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbmF2LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBZUE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxp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LGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9FSjdPSDtFSThPRyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FKK0RoQjtBSTlEZ0I7RUFDSSx5QkovT2I7RUlnUGEsWUFBQTtBSmdFcEI7QUk3RFk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUorRGhCOztBSXJEQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUp3REpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiRhY2NlbnQtY29sb3I6ICNkYjRjM2Y7XFxuJHByaW1hcnktY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZjdmN2Y3O1xcbiR0ZXh0LWNvbG9yOiByZ2IoMzMsIDM3LCA0MSk7XFxuJHRleHQtYWNjZW50OiAjNGQ0ZDRkO1xcbiRmb250LXN0YWNrOiBsYXRvLCBSb2JvdG8sICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcblxcbiRoaWdoOiByZ2IoMjI2LCA1NywgNTcpO1xcbiRtZWRpdW06IHJnYigyMTgsIDE4OCwgMTkpO1xcbiRsb3c6IHJnYigxNjksIDc2LCAyMzEpO1xcbiRkYXRlOiAjM2JhMzk1O1xcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciA0MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbn1cXG5cXG5AaW1wb3J0IFxcXCIuL2Zvb3Rlci5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2hlYWRlci5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL25hdi5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL21haW4uc2Nzc1xcXCI7XFxuXFxuXCIsXCIuZm9vdGVye1xcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC43cmVtIDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBhIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgICBcXG59XCIsXCIuaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLmxlZnQtaGVhZGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDoxNnB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB9XFxuICAgIC5yaWdodC1oZWFkZXJ7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIH1cXG4gICAgaW1ne1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVwiLFwiLm5hdntcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgICBwYWRkaW5nOiAzcmVtIDNyZW07XFxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgICB1bHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMjRweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgbGl7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGdhcDogOHB4O1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIFxcbiAgICAgICAgICBzcGFue1xcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDklKSBzZXBpYSg1JSkgc2F0dXJhdGUoMTg1MCUpIGh1ZS1yb3RhdGUoMTY5ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoODclKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHVse1xcbiAgICAgICAgICAgIGdhcDoxMnB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG4gICAgICAgICAgICBjb2xvcjokdGV4dC1hY2NlbnQ7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcXG5cXG4gICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmRvdHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtY29sb3I7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuXCIsXCIubWFpbntcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICBwYWRkaW5nOiAzcmVtIDhyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1jYXJke1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjdyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDMpO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2JhKCR0ZXh0LWFjY2VudCwwLjIpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG4gICAgfVxcblxcbiAgICAmLmhpZ2h7XFxuICAgICAgICBib3JkZXItbGVmdDogJGhpZ2ggOHB4IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgICYubG93e1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRsb3cgOHB4IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgICYubWVkaXVte1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRtZWRpdW0gOHB4IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWNhcmQtbGVmdHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDoxMHB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICAgICAgLy8gaW5wdXR7XFxuICAgICAgICAvLyAgICAgaGVpZ2h0OiAxMjAlO1xcbiAgICAgICAgLy8gfVxcbiAgICB9XFxuXFxuICAgIC50YXNrLWNhcmQtcmlnaHR7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOjE2cHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgLnRhc2stZGF0ZXtcXG4gICAgICAgICAgICBjb2xvcjogJHRleHQtYWNjZW50O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAudGFzay1kZXRhaWxze1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNiYTM5NTtcXG4gICAgICAgIGNvbG9yOiAjM2JhMzk1O1xcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYmEzOTU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnRhc2staWNvbntcXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcblxcbn1cXG4udGFzay1wb3B1cHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR0ZXh0LWNvbG9yLDAuNik7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4Ojk5O1xcbiAgICBmb250LWZhbWlseTogJGZvbnQtc3RhY2s7XFxuXFxuICAgIC50YXNrLXBvcHVwLWNvbnRlbnR7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogMzJweDtcXG5cXG4gICAgICAgIC50aXRsZXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEycHggMDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBmb3Jte1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgIC5pbnB1dC1maWVsZHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG5cXG4gICAgICAgICAgICAgICAgbGFiZWw6bm90KC5yYWRpb3MgPiBsYWJlbCl7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcblxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9J3RleHQnXXtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJHRleHQtYWNjZW50LDAuMik7XFxuICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSwgJjpmb2N1c3tcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCR0ZXh0LWFjY2VudCwwLjYpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG5cXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG5cXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJHRleHQtYWNjZW50LDAuMik7XFxuICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSwgJjpmb2N1c3tcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCR0ZXh0LWFjY2VudCwwLjYpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9J2RhdGUnXXtcXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGF0ZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGF0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtc3RhY2s7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcXG5cXG4gICAgICAgICAgICAgICAgICAgIC8vICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzLXZpc2libGV7XFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyOiBpbmxpbmUgMnB4IHNvbGlkICRkYXRlO1xcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9J3JhZGlvJ117XFxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGF0ZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAucHJpb3JpdHl7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcblxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIEBtaXhpbiBzZXRDb2xvcnMgKCRjb2xvcnMpe1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9ycztcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JzO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgQG1peGluIHNldFByaW8gKCRjb2xvcnMpe1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9ycztcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAucmFkaW9ze1xcbiAgICAgICAgICAgICAgICAgICAgaW5wdXR7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGxhYmVse1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAmW2Zvcj1cXFwibG93XFxcIl17XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldENvbG9ycygkbG93KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5wcmlvLWNoZWNrZWR7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzZXRQcmlvKCRsb3cpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldFByaW8oJGxvdylcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAmW2Zvcj1cXFwibWVkaXVtXFxcIl17XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldENvbG9ycygkbWVkaXVtKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5wcmlvLWNoZWNrZWR7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzZXRQcmlvKCRtZWRpdW0pXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldFByaW8oJG1lZGl1bSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAmW2Zvcj1cXFwiaGlnaFxcXCJde1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzZXRDb2xvcnMoJGhpZ2gpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnByaW8tY2hlY2tlZHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldFByaW8oJGhpZ2gpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldFByaW8oJGhpZ2gpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgfVxcblxcblxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhdGU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZGF0ZTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTZweDtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XFxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0ZTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuY2xvc2UtYnV0dG9ue1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRvcDogLTYwcHg7XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTVweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIFxcblxcbn1cXG5cXG4uYWRkLXRhc2t7XFxuICAgIGNvbG9yOnJnYmEoJHRleHQtYWNjZW50LDAuOCk7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9mb290ZXIvaGVhcnQucG5nXCI6IFwiLi9zcmMvaW1nL2Zvb3Rlci9oZWFydC5wbmdcIixcblx0XCIuL2hlYWRlci9hdmF0YXIucG5nXCI6IFwiLi9zcmMvaW1nL2hlYWRlci9hdmF0YXIucG5nXCIsXG5cdFwiLi9oZWFkZXIvaG9tZS5zdmdcIjogXCIuL3NyYy9pbWcvaGVhZGVyL2hvbWUuc3ZnXCIsXG5cdFwiLi9oZWFkZXIvbWVudS5zdmdcIjogXCIuL3NyYy9pbWcvaGVhZGVyL21lbnUuc3ZnXCIsXG5cdFwiLi9uYXYvY29tbXVuaXR5LnN2Z1wiOiBcIi4vc3JjL2ltZy9uYXYvY29tbXVuaXR5LnN2Z1wiLFxuXHRcIi4vbmF2L2RlbGV0ZS5zdmdcIjogXCIuL3NyYy9pbWcvbmF2L2RlbGV0ZS5zdmdcIixcblx0XCIuL25hdi9lZGl0LnN2Z1wiOiBcIi4vc3JjL2ltZy9uYXYvZWRpdC5zdmdcIixcblx0XCIuL25hdi9wcml2YWN5LnN2Z1wiOiBcIi4vc3JjL2ltZy9uYXYvcHJpdmFjeS5zdmdcIixcblx0XCIuL25hdi9wcm9maWxlLnN2Z1wiOiBcIi4vc3JjL2ltZy9uYXYvcHJvZmlsZS5zdmdcIixcblx0XCIuL25hdi9zZWFyY2guc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9zZWFyY2guc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5cbmNvbnN0IHBhdGggPSByZXF1aXJlLmNvbnRleHQoJy4vaW1nJywgdHJ1ZSwgL1xcLihwbmd8c3ZnfGpwZ3xqcGVnfGdpZikkL2kpXG5jb25zdCBpbWFnZSA9IHBhdGgua2V5cygpLm1hcChwYXRoKTtcblxubGV0IHByb2plY3RMaXN0ID0gW107XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWhlYWRlclwiPlxuICAgICAgICA8aW1nIHNyYz0ke2ltYWdlWzNdfSBhbHQ9XCJoYW1idXJnZXIgbWVudVwiPlxuICAgICAgICA8aW1nIHNyYz0ke2ltYWdlWzJdfSBhbHQ9XCJob21lXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtaGVhZGVyXCI+PGltZyBzcmM9JHtpbWFnZVsxXX0gYWx0PVwiYXZhdGFyXCI+PC9kaXY+YDtcbiAgICB9XG4gICAgY29uc3QgcmVuZGVyRm9vdGVyID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+TWFkZSB3aXRoIDxpbWcgc3JjPSR7aW1hZ2VbMF19IHdpZHRoPVwiMTVyZW1cIj4gXG4gICAgICAgIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcGF0c29rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RmFsY288L2E+PC9kaXY+YDtcbiAgICB9XG4gICAgY29uc3QgcmVuZGVyTmF2ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JykuaW5uZXJIVE1MID0gYFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVs0XX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtZWxlbVwiPkluYm94PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlWzVdfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1lbGVtXCI+VG9kYXk8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VbNl19XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LWVsZW1cIj5GaWx0ZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VbN119XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LWVsZW1cIj5Qcm9qZWN0czwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8dWw+XG5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPC91bD5gO1xuICAgICAgICBsZXQgcHJvamVjdFVMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWw+dWwnKTtcbiAgICAgICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBuZXdMaS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJuYXYtcHJvamVjdC1lbGVtXCI+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPmA7XG4gICAgICAgICAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQobmV3TGkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcmVuZGVyTWFpbiA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMT5JbmJveDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrXCI+KyBOZXcgVGFzazwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0VGFza3MgPSBbXTsgXG4gICAgICAgIGxldCB0ZXN0ID0gdGVzdEZ1bmMuZ2V0UHJvamVjdExpc3QoKTsgICAgXG4gICAgICAgIHRlc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3QudGFza0FycmF5LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHRlc3RGdW5jLmdldFByb2plY3RMaXN0KCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RUYXNrcyA9IHByb2plY3QudGFza0FycmF5O1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgICAgICBsZXQgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2FyZCcpO1xuICAgICAgICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChgJHtwcmlvcml0eX1gKTtcbiAgICAgICAgICAgIHRhc2tDYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWRhdGVcIj4ke3Rhc2suZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWRldGFpbHNcIj5ERVRBSUxTPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay1pY29uXCI+PGltZyBzcmM9XCIke2ltYWdlWzVdfVwiIGFsdD1cIlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2staWNvblwiPjxpbWcgc3JjPVwiJHtpbWFnZVs2XX1cIiBhbHQ9XCJcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gICAgICAgICAgICBsZXQgdGFza0RldGFpbHMgPSB0YXNrQ2FyZC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzJyk7XG4gICAgICAgICAgICB0YXNrRGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gcmVuZGVyRGV0YWlscyh0YXNrKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVuZGVyRGV0YWlscyk7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlckRldGFpbHMgPSAodGFzaykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cCcpXG4gICAgICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cC1jb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5OZXcgVGFzazwvZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0LXRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0LXRpdGxlXCIgaWQ9XCJ0LXRpdGxlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0LWRldGFpbHNcIj5EZXRhaWxzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0LWRldGFpbHNcIiBuYW1lPVwidC1kZXRhaWxzXCIgcm93cz1cIjZcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidC1kYXRlXCI+RGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInQtZGF0ZVwiIGlkPVwidC1kYXRlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG93XCI+TE9XPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0LXByaW9yaXR5XCIgaWQ9XCJsb3dcIiB2YWx1ZT1cImxvd1wiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TUVESVVNPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0LXByaW9yaXR5XCIgaWQ9XCJtZWRpdW1cIiB2YWx1ZT1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhJR0g8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInQtcHJpb3JpdHlcIiBpZD1cImhpZ2hcIiB2YWx1ZT1cImhpZ2hcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QUREIFRBU0s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1idXR0b25cIj5YPC9kaXY+XG4gICAgICAgIDwvZm9ybT5gO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvcyA+IGxhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5LmZvckVhY2goKGJ1dHRvbixpbmRleCkgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5jaGFuZ2VQcmlvcml0eShidXR0b24saW5kZXgpKVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stcG9wdXAnKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY2xvc2VQb3B1cCk7XG4gICAgICAgIGNvbnN0IHRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXBvcHVwJyk7XG4gICAgICAgIHRhc2tQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT4ge2lmIChlLnRhcmdldD09dGFza1BvcHVwKSB7Y2xvc2VQb3B1cCgpfX0pO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQjdC10aXRsZScpLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcjdC1kZXRhaWxzJykudmFsdWUgPSB0YXNrLmRldGFpbHM7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQjdC1kYXRlJykudmFsdWUgPSB0YXNrLmRhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0ucXVlcnlTZWxlY3RvcihgLnJhZGlvcyAjJHt0YXNrLnByaW9yaXR5fWApKTtcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKGAucmFkaW9zIGxhYmVsW2Zvcj0ke3Rhc2sucHJpb3JpdHl9YCkuY2xhc3NMaXN0LmFkZCgncHJpby1jaGVja2VkJyk7XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCN0LXRpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgZGV0YWlscyA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3QtZGV0YWlscycpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3QtZGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1tcInQtcHJpb3JpdHlcIl0udmFsdWU7XG4gICAgICAgICAgICBkYXRhSGFuZGxlci5hZGRUYXNrKHRpdGxlLGRldGFpbHMsZGF0ZSxwcmlvcml0eSk7XG4gICAgICAgICAgICBjbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICByZW5kZXJNYWluKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykudGV4dENvbnRlbnQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckFsbCA9ICgpID0+IHtcbiAgICAgICAgcmVuZGVySGVhZGVyKCk7XG4gICAgICAgIHJlbmRlckZvb3RlcigpO1xuICAgICAgICByZW5kZXJOYXYoKTtcbiAgICAgICAgcmVuZGVyTWFpbigpO1xuICAgIH1cbiAgICByZXR1cm4ge3JlbmRlckRldGFpbHMsIHJlbmRlck5hdiwgcmVuZGVyTWFpbixyZW5kZXJBbGx9O1xufSkoKVxuXG5cbmNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza0FycmF5ID0gW107XG4gICAgICAgIHRoaXMuYWRkVG9Qcm9qZWN0c0FycmF5KCk7XG5cbiAgICB9XG4gICAgYWRkVGFza1RvQ3VycmVudFByb2plY3QodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIGFkZFRvUHJvamVjdHNBcnJheSgpe1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHRoaXMpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbn1cblxuY29uc3QgdGVzdEZ1bmMgPSAoKCk9PntcbiAgICBsZXQgdGVzdHByb2plY3QgPSBuZXcgUHJvamVjdChcIkJvaVwiKTtcbiAgICBsZXQgdGVzdHByb2plY3QyID0gbmV3IFByb2plY3QoXCJLbGF3aXN6XCIpO1xuICAgIGxldCB0ZXN0cHJvamVjdDMgPSBuZXcgUHJvamVjdChcIlRlc3Q5N1wiKTtcblxuICAgIGxldCB0ZXN0dGFzazEgPSBuZXcgVGFzayhcIlR5dHVsMVwiLFwiRGVzYzFcIixcIjIwMjItMDgtMDRcIixcImhpZ2hcIixcIkJvaVwiKTtcbiAgICBsZXQgdGVzdHRhc2syID0gbmV3IFRhc2soXCJUeXR1bDJcIixcIkRlc2MyXCIsXCIyMDIyLTA4LTA2XCIsXCJtZWRpdW1cIixcIkJvaVwiKTtcbiAgICBsZXQgdGVzdHRhc2szID0gbmV3IFRhc2soXCJUeXR1bDNcIixcIkRlc2MzXCIsXCIyMDIyLTA3LTA0XCIsXCJsb3dcIixcIktsYXdpc3pcIik7XG5cbiAgICB0ZXN0cHJvamVjdC5hZGRUYXNrVG9DdXJyZW50UHJvamVjdCh0ZXN0dGFzazEpO1xuICAgIHRlc3Rwcm9qZWN0LmFkZFRhc2tUb0N1cnJlbnRQcm9qZWN0KHRlc3R0YXNrMik7XG4gICAgdGVzdHByb2plY3QyLmFkZFRhc2tUb0N1cnJlbnRQcm9qZWN0KHRlc3R0YXNrMyk7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RMaXN0O1xuICAgIH1cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGVzdHByb2plY3Q7XG4gICAgfVxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlck5hdigpO1xuXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0LGdldFByb2plY3RMaXN0fTtcbn0pKClcblxuY29uc3QgZGF0YUhhbmRsZXIgPSAoKCk9PntcbiAgICBjb25zdCBhZGRUYXNrID0gKHRpdGxlLGRldGFpbHMsZGF0ZSxwcmlvcml0eSkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsZGV0YWlscyxkYXRlLHByaW9yaXR5LFwidGVzdFwiKTtcbiAgICAgICAgdGVzdEZ1bmMuZ2V0UHJvamVjdExpc3QoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRhc2tUb0N1cnJlbnRQcm9qZWN0KG5ld1Rhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4ge2FkZFRhc2t9XG59KSgpXG5cbi8vIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNhcmQnKTtcbi8vIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4vLyAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRldGFpbHMoaW5kZXgpKTtcbi8vIH0pO1xuXG5cblxuXG5jb25zdCBjaGFuZ2VQcmlvcml0eSA9IChidXR0b24saW5kZXgpID0+IHtcbiAgICBsZXQgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnJhZGlvcyBsYWJlbGApO1xuICAgIGxhYmVscy5mb3JFYWNoKGxhYmVsID0+IHtcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgncHJpby1jaGVja2VkJylcbiAgICB9KTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpby1jaGVja2VkJyk7XG59XG5cblxuXG5kaXNwbGF5Q29udHJvbGxlci5yZW5kZXJBbGwoKTtcblxubGV0IHZpc2libGVQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsIHVsIGxpJyk7XG52aXNpYmxlUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJNYWluKHByb2plY3QucXVlcnlTZWxlY3Rvcignc3BhbiArIHNwYW4nKS50ZXh0Q29udGVudCkpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-template-rows: 40px 1fr 40px;\n  min-height: 100vh;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: #db4c3f;\n  color: white;\n  padding: 0.7rem 0;\n  font-size: 1rem;\n  text-align: center;\n  z-index: 1;\n}\n.footer a {\n  text-decoration: none;\n  color: white;\n}\n\n.header {\n  grid-area: 1/1/2/3;\n  background-color: #db4c3f;\n  color: white;\n  padding: 0 3rem;\n  font-size: 1rem;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header .left-header {\n  display: flex;\n  gap: 16px;\n  height: 20px;\n}\n.header .right-header {\n  height: 20px;\n}\n.header img {\n  height: 20px;\n  cursor: pointer;\n}\n\n.nav {\n  grid-area: 2/1/3/2;\n  background-color: #f7f7f7;\n  padding: 3rem 3rem;\n  color: rgb(33, 37, 41);\n  font-size: 16px;\n}\n.nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  justify-content: center;\n}\n.nav ul li {\n  display: flex;\n  gap: 8px;\n  cursor: pointer;\n}\n.nav ul li span {\n  display: flex;\n  align-items: center;\n}\n.nav ul img {\n  margin: auto;\n  height: 16px;\n  filter: brightness(0) saturate(100%) invert(9%) sepia(5%) saturate(1850%) hue-rotate(169deg) brightness(98%) contrast(87%);\n}\n.nav ul ul {\n  gap: 12px;\n  padding-left: 16px;\n  color: #4d4d4d;\n  margin-top: -8px;\n}\n.nav ul ul li {\n  align-items: center;\n}\n.nav ul ul .dot {\n  background-color: rgb(33, 37, 41);\n  opacity: 0.3;\n  border-radius: 50%;\n  height: 8px;\n  width: 8px;\n}\n.nav ul ul .add-project {\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.main {\n  grid-area: 2/2/3/3;\n  padding: 3rem 8rem;\n}\n\n.task-container {\n  padding: 1rem 0;\n}\n\n.task-card {\n  width: 100%;\n  padding: 0.7rem;\n  background-color: #f7f7f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.task-card:hover {\n  transform: scale(1.003);\n  transform-origin: 50% 50%;\n  box-shadow: 2px 2px 5px 2px rgba(77, 77, 77, 0.2);\n  transition: all 0.2s ease-out;\n}\n.task-card.high {\n  border-left: rgb(226, 57, 57) 8px solid;\n}\n.task-card.low {\n  border-left: rgb(169, 76, 231) 8px solid;\n}\n.task-card.medium {\n  border-left: rgb(218, 188, 19) 8px solid;\n}\n.task-card .task-card-left {\n  padding-left: 2px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.task-card .task-card-right {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.task-card .task-card-right .task-date {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.task-card .task-details {\n  border: 1px solid #3ba395;\n  color: #3ba395;\n  padding: 4px 8px;\n  border-radius: 3px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.task-card .task-details:hover {\n  color: rgb(241, 241, 241);\n  background-color: #3ba395;\n}\n.task-card .task-icon img {\n  height: 17px;\n  cursor: pointer;\n}\n\n.task-popup {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(33, 37, 41, 0.6);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 99;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.task-popup .task-popup-content {\n  width: 50%;\n  position: absolute;\n  background-color: rgb(241, 241, 241);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  border-radius: 10px;\n  padding: 32px;\n}\n.task-popup .task-popup-content .title {\n  font-size: 24px;\n  padding: 0 0 12px 0;\n  border-bottom: 1px solid black;\n}\n.task-popup .task-popup-content form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding-top: 24px;\n  position: relative;\n}\n.task-popup .task-popup-content form .input-field {\n  display: flex;\n  width: 100%;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.task-popup .task-popup-content form .input-field label:not(.radios > label) {\n  padding-right: 2rem;\n  width: 100px;\n}\n.task-popup .task-popup-content form .input-field input[type=text] {\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  appearance: none;\n  outline: none;\n  width: 80%;\n  padding: 8px;\n  height: 32px;\n  border-radius: 5px;\n  border: 1px solid rgba(77, 77, 77, 0.2);\n}\n.task-popup .task-popup-content form .input-field input[type=text]:active, .task-popup .task-popup-content form .input-field input[type=text]:focus {\n  border: 1px solid rgba(77, 77, 77, 0.6);\n}\n.task-popup .task-popup-content form .input-field textarea {\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  appearance: none;\n  outline: none;\n  width: 80%;\n  resize: none;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid rgba(77, 77, 77, 0.2);\n}\n.task-popup .task-popup-content form .input-field textarea:active, .task-popup .task-popup-content form .input-field textarea:focus {\n  border: 1px solid rgba(77, 77, 77, 0.6);\n}\n.task-popup .task-popup-content form .input-field input[type=date] {\n  appearance: none;\n  border: 1px solid #3ba395;\n  border-radius: 5px;\n  color: #3ba395;\n  text-transform: uppercase;\n  padding: 8px;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  background-color: transparent;\n}\n.task-popup .task-popup-content form .input-field input[type=radio] {\n  width: 50px;\n  border: 1px solid #3ba395;\n  border-radius: 5px;\n  padding: 8px;\n}\n.task-popup .task-popup-content form .input-field .priority {\n  padding-right: 2rem;\n  width: 100px;\n}\n.task-popup .task-popup-content form .input-field .radios input {\n  width: 1px;\n  opacity: 0.01;\n}\n.task-popup .task-popup-content form .input-field .radios label {\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=low] {\n  border: 1px solid rgb(169, 76, 231);\n  border-radius: 5px;\n  color: rgb(169, 76, 231);\n  padding: 4px 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=low].prio-checked {\n  color: white;\n  background-color: rgb(169, 76, 231);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=low]:hover {\n  color: white;\n  background-color: rgb(169, 76, 231);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=medium] {\n  border: 1px solid rgb(218, 188, 19);\n  border-radius: 5px;\n  color: rgb(218, 188, 19);\n  padding: 4px 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=medium].prio-checked {\n  color: white;\n  background-color: rgb(218, 188, 19);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=medium]:hover {\n  color: white;\n  background-color: rgb(218, 188, 19);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=high] {\n  border: 1px solid rgb(226, 57, 57);\n  border-radius: 5px;\n  color: rgb(226, 57, 57);\n  padding: 4px 12px;\n}\n.task-popup .task-popup-content form .input-field .radios label[for=high].prio-checked {\n  color: white;\n  background-color: rgb(226, 57, 57);\n}\n.task-popup .task-popup-content form .input-field .radios label[for=high]:hover {\n  color: white;\n  background-color: rgb(226, 57, 57);\n}\n.task-popup .task-popup-content form button {\n  appearance: none;\n  width: 150px;\n  border: 1px solid #3ba395;\n  color: #3ba395;\n  border-radius: 5px;\n  padding: 8px;\n  font-family: lato, Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  position: absolute;\n  bottom: -6px;\n  right: 10px;\n}\n.task-popup .task-popup-content form button:hover {\n  background-color: #3ba395;\n  color: white;\n}\n.task-popup .task-popup-content form .close-button {\n  position: absolute;\n  top: -60px;\n  right: -15px;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.add-task {\n  color: rgba(77, 77, 77, 0.8);\n  padding: 0 1rem;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.scss","webpack://./src/styles/footer.scss","webpack://./src/styles/header.scss","webpack://./src/styles/nav.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n$accent-color: #db4c3f;\n$primary-color: rgb(241, 241, 241);\n$secondary-color: #f7f7f7;\n$text-color: rgb(33, 37, 41);\n$text-accent: #4d4d4d;\n$font-stack: lato, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n$high: rgb(226, 57, 57);\n$medium: rgb(218, 188, 19);\n$low: rgb(169, 76, 231);\n$date: #3ba395;\n\n#content{\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    grid-template-rows: 40px 1fr 40px;\n    min-height: 100vh;\n    font-family: $font-stack;\n}\n\n@import \"./footer.scss\";\n@import \"./header.scss\";\n@import \"./nav.scss\";\n@import \"./main.scss\";\n\n",".footer{\n    grid-area: 3 / 1 / 4 / 3;\n    background-color: $accent-color;\n    color: white;\n    padding: 0.7rem 0;\n    font-size: 1rem;\n    text-align: center;\n    z-index: 1;\n\n    a {\n        text-decoration: none;\n        color: white;\n    }\n    \n}",".header{\n    grid-area: 1 / 1 / 2 / 3;\n    background-color: $accent-color;\n    color: white;\n    padding: 0 3rem;\n    font-size: 1rem;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    .left-header{\n        display: flex;\n        gap:16px;\n        height: 20px;\n    }\n    .right-header{\n        height: 20px;\n    }\n    img{\n        height: 20px;\n        cursor: pointer;\n    }\n}",".nav{\n    grid-area: 2 / 1 / 3 / 2;\n    background-color: $secondary-color;\n    padding: 3rem 3rem;\n    color: $text-color;\n    font-size: 16px;\n\n    ul{\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        gap: 24px;\n        justify-content: center;\n\n        li{\n          display: flex;\n          gap: 8px;\n          cursor: pointer;\n          \n          span{\n            display:flex;\n            align-items: center;\n          }\n        }\n\n        img{\n            margin: auto;\n            height: 16px;\n            filter: brightness(0) saturate(100%) invert(9%) sepia(5%) saturate(1850%) hue-rotate(169deg) brightness(98%) contrast(87%);\n        }\n\n        ul{\n            gap:12px;\n            padding-left: 16px;\n            color:$text-accent;\n            margin-top: -8px;\n\n            li{\n                align-items: center;\n            }\n            .dot{\n                background-color: $text-color;\n                opacity: 0.3;\n                border-radius: 50%;\n                height: 8px;\n                width: 8px;\n            }\n            .add-project{\n                font-size: 14px;\n                cursor: pointer;\n            }\n        }\n    }\n\n\n}\n\n",".main{\n    grid-area: 2 / 2 / 3 / 3;\n    padding: 3rem 8rem;\n}\n\n.task-container{\n    padding: 1rem 0;\n}\n\n.task-card{\n    width:100%;\n    padding: 0.7rem;\n    background-color: $secondary-color;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 12px;\n\n    &:hover{\n        transform: scale(1.003);\n        transform-origin: 50% 50%;\n        box-shadow: 2px 2px 5px 2px rgba($text-accent,0.2);\n        transition: all .2s ease-out;\n    }\n\n    &.high{\n        border-left: $high 8px solid;\n    }\n\n    &.low{\n        border-left: $low 8px solid;\n    }\n\n    &.medium{\n        border-left: $medium 8px solid;\n    }\n\n    .task-card-left{\n        padding-left: 2px;\n        display: flex;\n        gap:10px;\n        align-items: center;\n        \n        // input{\n        //     height: 120%;\n        // }\n    }\n\n    .task-card-right{\n        display: flex;\n        gap:16px;\n        align-items: center;\n\n        .task-date{\n            color: $text-accent;\n            font-size: 12px;\n        }\n    }\n\n    .task-details{\n        border: 1px solid #3ba395;\n        color: #3ba395;\n        padding: 4px 8px;\n        border-radius: 3px;\n        font-size: 12px;\n        cursor: pointer;\n\n        &:hover{\n            color: $primary-color;\n            background-color: #3ba395;\n        }\n    }\n\n    .task-icon{\n        img{\n            height: 17px;\n            cursor: pointer;\n        }\n    }\n    \n\n}\n.task-popup{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: rgba($text-color,0.6);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index:99;\n    font-family: $font-stack;\n\n    .task-popup-content{\n        width: 50%;\n        position: absolute;\n        background-color: $primary-color;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 100;\n        border-radius: 10px;\n        padding: 32px;\n\n        .title{\n            font-size: 24px;\n            padding: 0 0 12px 0;\n            border-bottom: 1px solid black;\n        }\n\n        form{\n            display: flex;\n            flex-direction: column;\n            gap: 16px;\n            padding-top: 24px;\n            position: relative;\n\n            .input-field{\n                display: flex;\n                width: 100%;\n                font-family: $font-stack;\n\n                label:not(.radios > label){\n                    padding-right: 2rem;\n                    width: 100px;\n\n                }\n\n                input[type='text']{\n                    font-family: $font-stack;\n                    appearance: none;\n                    outline: none;\n                    width: 80%;\n                    padding: 8px;\n                    height: 32px;\n                    border-radius: 5px;\n                    border: 1px solid rgba($text-accent,0.2);\n                    &:active, &:focus{\n                        border: 1px solid rgba($text-accent,0.6);\n                    }\n                }\n\n                textarea {\n                    font-family: $font-stack;\n\n                    appearance: none;\n                    outline: none;\n                    width: 80%;\n                    resize: none;\n                    padding: 8px;\n\n                    border-radius: 5px;\n                    border: 1px solid rgba($text-accent,0.2);\n                    &:active, &:focus{\n                        border: 1px solid rgba($text-accent,0.6);\n                    }\n                }\n\n                input[type='date']{\n                    appearance: none;\n                    border: 1px solid $date;\n                    border-radius: 5px;\n                    color: $date;\n                    text-transform: uppercase;\n                    padding: 8px;\n                    font-family: $font-stack;\n                    font-weight: 700;\n                    font-size: 12px;\n                    background-color:transparent;\n\n                    // &:hover, &:active, &:focus-visible{\n                    //     border: inline 2px solid $date;\n                    // }\n                }\n\n                input[type='radio']{\n                    // appearance: none;\n                    width: 50px;\n                    border: 1px solid $date;\n                    border-radius: 5px;\n                    padding: 8px;\n                }\n\n                .priority{\n                    padding-right: 2rem;\n                    width: 100px;\n\n                }\n\n                @mixin setColors ($colors){\n                    border: 1px solid $colors;\n                    border-radius: 5px;\n                    color: $colors;\n                    padding: 4px 12px;\n                }\n                @mixin setPrio ($colors){\n                    color: white;\n                    background-color: $colors;\n                }\n\n                .radios{\n                    input{\n                        width: 1px;\n                        opacity: 0.01;\n                    }\n                    label{\n                        font-family: $font-stack;\n                        font-weight: 700;\n                        font-size: 12px;\n                        &[for=\"low\"]{\n                            @include setColors($low);\n\n                            &.prio-checked{\n                                @include setPrio($low)\n                            }\n                            &:hover{\n                                @include setPrio($low)\n                            }\n                        }\n                        &[for=\"medium\"]{\n                            @include setColors($medium);\n\n                            &.prio-checked{\n                                @include setPrio($medium)\n                            }\n                            &:hover{\n                                @include setPrio($medium)\n                            }\n                        }\n                        &[for=\"high\"]{\n                            @include setColors($high);\n\n                            &.prio-checked{\n                                @include setPrio($high)\n                            }\n                            &:hover{\n                                @include setPrio($high)\n                            }\n                        }\n\n                    }\n\n            }\n\n\n            }\n            button{\n                appearance: none;\n                width: 150px;\n                border: 1px solid $date;\n                color: $date;\n                border-radius: 5px;\n                padding: 8px;\n                font-family: $font-stack;\n                font-weight: 700;\n                font-size: 12px;\n                position: absolute;\n                bottom: -6px;\n                right: 10px;\n                &:hover{\n                    background-color: $date;\n                    color: white;\n                }\n            }\n            .close-button{\n                position: absolute;\n                top: -60px;\n                right: -15px;\n                font-size: 24px;\n                cursor: pointer;\n            }\n\n        }\n    }\n\n    \n\n}\n\n.add-task{\n    color:rgba($text-accent,0.8);\n    padding: 0 1rem;\n    cursor: pointer;\n}\n\n"],"sourceRoot":""}]);
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

const renderController = (() => {
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
            let dotColor = document.createElement('span');
            dotColor.classList.add('dot');
            dotColor.style.backgroundColor = project.color;
            dotColor.style.opacity = 0.8;
            let spanProject = document.createElement('span');
            spanProject.classList.add('nav-project-elem')
            spanProject.textContent = project.name;
            newLi.appendChild(dotColor);
            newLi.appendChild(spanProject);
            // newLi.innerHTML = `<span class="dot"></span><span class="nav-project-elem">${project.name}</span>`;
            projectUL.appendChild(newLi);
            newLi.addEventListener('click',() => renderMain(newLi.querySelector('span + span').textContent));
        });
        let projectDiv = document.createElement('div');
        projectDiv.classList.add("add-project");
        projectDiv.textContent = '+ New Project'
        projectUL.appendChild(projectDiv);
        projectDiv.addEventListener('click',() => renderProjectDetails());
        
    }
    const renderMain = (projectName) => {
        document.querySelector('.main').innerHTML = `
            <h1>Inbox</h1>
            <div class="task-container">
            </div>
            <div class="add-task">+ New Task</div>
            `;
        let currentProjectTasks = []; 
        let test = dataHandler.getProjectList();    
        test.forEach(project => {
            project.taskArray.forEach(task => {
                currentProjectTasks.push(task);
            })
        })

        let taskContainer = document.querySelector('.task-container');

        dataHandler.getProjectList().forEach(project => {
            if (project.name == projectName) {
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
                <span class="task-icon delete"><img src="${image[5]}" alt=""></span>
            </div>`;
            taskContainer.appendChild(taskCard);
            taskCard.querySelector('.task-details').addEventListener('click',() => renderDetails(task));
            taskCard.querySelector('.task-icon').addEventListener('click',() => deleteTask(task));
        });
        document.querySelector('.add-task').addEventListener('click',renderDetails);
    }

    const deleteTask = (task) => {
        projectList.forEach(project => {
            if (project.name == task.project){
                project.getTaskArray().forEach((tk,index) => {
                    if(tk.title == task.title){
                        project.deleteTaskFromArray(index);
                        renderMain(project.name);
                    }
                });
            }
        });
    }

    const renderDetails = (task) => {
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
            <div class="input-field">
                <label for="t-project">Project</label>
                <select name="t-project" id="t-project">               
                </select>
            </div>
            <button type="submit">ADD TASK</button>
            <div class="close-button">X</div>
        </form>`;




        div.appendChild(contentDiv);
        card.appendChild(div);
        let priority = document.querySelectorAll('.radios > label');
        priority.forEach((button,index) => {
        button.addEventListener('click',()=>displayController.changePriority(button,index))
        });

        const closePopup = () => {
            document.querySelector('.task-popup').remove();
        }

        document.querySelector('.close-button').addEventListener('click',closePopup);
        const taskPopup = document.querySelector('.task-popup');
        taskPopup.addEventListener('click',(e)=> {if (e.target==taskPopup) {closePopup()}});

        const form = document.querySelector('form');

        if(typeof(task.title) !== 'undefined'){
            form.querySelector('input#t-title').value = task.title;
            form.querySelector('#t-details').value = task.details;
            form.querySelector('input#t-date').value = task.date;
            console.log(form.querySelector(`.radios #${task.priority}`));
            form.querySelector(`.radios label[for=${task.priority}`).classList.add('prio-checked');
        }

        let select = document.querySelector('#t-project');
        let projectNam = document.querySelector('h1').textContent;
        dataHandler.getProjectList().forEach(proj => {
            let option = document.createElement('option');
            option.value = proj.name;
            option.textContent = proj.name;
            if (projectNam == proj.name){
                option.selected = true;
            }
            select.appendChild(option);
        })

        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            let title = form.querySelector('input#t-title').value;
            let details = form.querySelector('#t-details').value;
            let date = form.querySelector('input#t-date').value;
            let priority = form.elements["t-priority"].value;
            let project = form.querySelector('select').value;
            dataHandler.addTask(title,details,date,priority,project);
            closePopup();
            renderMain(document.querySelector('h1').textContent);
        })
    }


    const renderProjectDetails = () => {
        const card = document.querySelector('body');
        let div = document.createElement('div');
        let contentDiv = document.createElement('div');
        div.classList.add('task-popup')
        contentDiv.classList.add('task-popup-content');
        contentDiv.innerHTML = `
        <div class="title">New Project</div>
        <form action="">
            <div class="input-field">
                <label for="p-title">Title</label>
                <input type="text" name="p-title" id="p-title" required>
            </div>
            <div class="input-field">
                <label for="p-color">Color</label>
                <input type="color" name="p-color" id="p-color">
            </div>
            <button type="submit">ADD PROJECT</button>
            <div class="close-button">X</div>
        </form>`;
        div.appendChild(contentDiv);
        card.appendChild(div);

        const closePopup = () => {
            document.querySelector('.task-popup').remove();
        }

        document.querySelector('.close-button').addEventListener('click',closePopup);
        const taskPopup = document.querySelector('.task-popup');
        taskPopup.addEventListener('click',(e)=> {if (e.target==taskPopup) {closePopup()}});

        const form = document.querySelector('form');
        // form.querySelector('input#p-title').value = task.title;
        // form.querySelector('input#p-color').value = task.details;

        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            let title = form.querySelector('input#p-title').value;
            let color = form.querySelector('input#p-color').value;
            dataHandler.addProject(title,color);
            closePopup();
            renderNav();
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

const displayController = (() => {
    const changePriority = (button,index) => {
        let labels = document.querySelectorAll(`.radios label`);
        labels.forEach(label => {
            label.classList.remove('prio-checked')
        });
        button.classList.add('prio-checked');
    }
    return {changePriority};
})()


class Project{
    constructor(name, color = 'white'){
        this.name = name;
        this.color = color;
        this.taskArray = [];
        this.addToProjectsArray();

    }
    addTaskToCurrentProject(task) {
        this.taskArray.push(task);
    }

    addToProjectsArray(){
        projectList.push(this);
    }

    getTaskArray(){
        return this.taskArray;
    }

    deleteTaskFromArray(index){
        this.taskArray.splice(index,1);
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

const dataHandler = (()=>{
    let testproject = new Project("Boi",'green');
    let testproject2 = new Project("Klawisz",'yellow');
    let testproject3 = new Project("Test97",'black');

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

    const addTask = (title,details,date,priority,project) =>{
        let newTask = new Task(title,details,date,priority,project);
        dataHandler.getProjectList().forEach(proj => {
            if(proj.name == project){
                proj.addTaskToCurrentProject(newTask);
            }
        })
    }

    const addProject = (title, color) => {
        let newProject = new Project(title,color);
        console.log(dataHandler.getProjectList());
    }

    return {addTask,addProject,getProjectList,getProject}
})()

renderController.renderAll();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxRQUFRLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksTUFBTSxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxZQUFZLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFlBQVksWUFBWSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxZQUFZLFlBQVksVUFBVSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksWUFBWSxPQUFP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cGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzcz8yMDNiIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbWcvIHN5bmMgXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC8iLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDQwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjRjM2Y7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjdyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAgM3JlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAubGVmdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLmhlYWRlciAucmlnaHQtaGVhZGVyIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICBwYWRkaW5nOiAzcmVtIDNyZW07XFxuICBjb2xvcjogcmdiKDMzLCAzNywgNDEpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjRweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubmF2IHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdiB1bCBsaSBzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2IHVsIGltZyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDklKSBzZXBpYSg1JSkgc2F0dXJhdGUoMTg1MCUpIGh1ZS1yb3RhdGUoMTY5ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoODclKTtcXG59XFxuLm5hdiB1bCB1bCB7XFxuICBnYXA6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBjb2xvcjogIzRkNGQ0ZDtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5uYXYgdWwgdWwgbGkge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdiB1bCB1bCAuZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMzcsIDQxKTtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogOHB4O1xcbiAgd2lkdGg6IDhweDtcXG59XFxuLm5hdiB1bCB1bCAuYWRkLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBwYWRkaW5nOiAzcmVtIDhyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWNhcmQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG4udGFzay1jYXJkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMDMpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2JhKDc3LCA3NywgNzcsIDAuMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG59XFxuLnRhc2stY2FyZC5oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiByZ2IoMjI2LCA1NywgNTcpIDhweCBzb2xpZDtcXG59XFxuLnRhc2stY2FyZC5sb3cge1xcbiAgYm9yZGVyLWxlZnQ6IHJnYigxNjksIDc2LCAyMzEpIDhweCBzb2xpZDtcXG59XFxuLnRhc2stY2FyZC5tZWRpdW0ge1xcbiAgYm9yZGVyLWxlZnQ6IHJnYigyMTgsIDE4OCwgMTkpIDhweCBzb2xpZDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jYXJkLWxlZnQge1xcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jYXJkLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNhcmQtcmlnaHQgLnRhc2stZGF0ZSB7XFxuICBjb2xvcjogIzRkNGQ0ZDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1kZXRhaWxzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYmEzOTU7XFxuICBjb2xvcjogIzNiYTM5NTtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stZGV0YWlsczpob3ZlciB7XFxuICBjb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcXG59XFxuLnRhc2stY2FyZCAudGFzay1pY29uIGltZyB7XFxuICBoZWlnaHQ6IDE3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXBvcHVwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzcsIDQxLCAwLjYpO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDk5O1xcbiAgZm9udC1mYW1pbHk6IGxhdG8sIFJvYm90bywgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMzJweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZzogMCAwIDEycHggMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAgcGFkZGluZy10b3A6IDI0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IGxhdG8sIFJvYm90bywgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgbGFiZWw6bm90KC5yYWRpb3MgPiBsYWJlbCkge1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NywgNzcsIDc3LCAwLjIpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9dGV4dF06YWN0aXZlLCAudGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NywgNzcsIDc3LCAwLjYpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIHRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogODAlO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NywgNzcsIDc3LCAwLjIpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIHRleHRhcmVhOmFjdGl2ZSwgLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc3LCA3NywgNzcsIDAuNik7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1kYXRlXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiYTM5NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjM2JhMzk1O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiYTM5NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCAucHJpb3JpdHkge1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCAucmFkaW9zIGlucHV0IHtcXG4gIHdpZHRoOiAxcHg7XFxuICBvcGFjaXR5OiAwLjAxO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IGxhdG8sIFJvYm90bywgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPWxvd10ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2OSwgNzYsIDIzMSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogcmdiKDE2OSwgNzYsIDIzMSk7XFxuICBwYWRkaW5nOiA0cHggMTJweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCAucmFkaW9zIGxhYmVsW2Zvcj1sb3ddLnByaW8tY2hlY2tlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY5LCA3NiwgMjMxKTtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCAucmFkaW9zIGxhYmVsW2Zvcj1sb3ddOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjksIDc2LCAyMzEpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPW1lZGl1bV0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxOCwgMTg4LCAxOSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogcmdiKDIxOCwgMTg4LCAxOSk7XFxuICBwYWRkaW5nOiA0cHggMTJweDtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCAucmFkaW9zIGxhYmVsW2Zvcj1tZWRpdW1dLnByaW8tY2hlY2tlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxODgsIDE5KTtcXG59XFxuLnRhc2stcG9wdXAgLnRhc2stcG9wdXAtY29udGVudCBmb3JtIC5pbnB1dC1maWVsZCAucmFkaW9zIGxhYmVsW2Zvcj1tZWRpdW1dOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE4OCwgMTkpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPWhpZ2hdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjYsIDU3LCA1Nyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogcmdiKDIyNiwgNTcsIDU3KTtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPWhpZ2hdLnByaW8tY2hlY2tlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCA1NywgNTcpO1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gLmlucHV0LWZpZWxkIC5yYWRpb3MgbGFiZWxbZm9yPWhpZ2hdOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDU3LCA1Nyk7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSBidXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYmEzOTU7XFxuICBjb2xvcjogIzNiYTM5NTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBSb2JvdG8sIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTZweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbn1cXG4udGFzay1wb3B1cCAudGFzay1wb3B1cC1jb250ZW50IGZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYmEzOTU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi50YXNrLXBvcHVwIC50YXNrLXBvcHVwLWNvbnRlbnQgZm9ybSAuY2xvc2UtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTYwcHg7XFxuICByaWdodDogLTE1cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICBjb2xvcjogcmdiYSg3NywgNzcsIDc3LCAwLjgpO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7O0VBR0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFKOztBQWVBO0VBQ0ksYUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLG9FQVpTO0FBQWI7O0FDaEJBO0VBQ0ksa0JBQUE7RUFDQSx5QkRTVztFQ1JYLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURtQko7QUNqQkk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QURtQlI7O0FFOUJBO0VBQ0ksa0JBQUE7RUFDQSx5QkZTVztFRVJYLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRmlDSjtBRS9CSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBRmlDUjtBRS9CSTtF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cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuJGFjY2VudC1jb2xvcjogI2RiNGMzZjtcXG4kcHJpbWFyeS1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xcbiRzZWNvbmRhcnktY29sb3I6ICNmN2Y3Zjc7XFxuJHRleHQtY29sb3I6IHJnYigzMywgMzcsIDQxKTtcXG4kdGV4dC1hY2NlbnQ6ICM0ZDRkNGQ7XFxuJGZvbnQtc3RhY2s6IGxhdG8sIFJvYm90bywgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuXFxuJGhpZ2g6IHJnYigyMjYsIDU3LCA1Nyk7XFxuJG1lZGl1bTogcmdiKDIxOCwgMTg4LCAxOSk7XFxuJGxvdzogcmdiKDE2OSwgNzYsIDIzMSk7XFxuJGRhdGU6ICMzYmEzOTU7XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJGZvbnQtc3RhY2s7XFxufVxcblxcbkBpbXBvcnQgXFxcIi4vZm9vdGVyLnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vaGVhZGVyLnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vbmF2LnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vbWFpbi5zY3NzXFxcIjtcXG5cXG5cIixcIi5mb290ZXJ7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjdyZW0gMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGEge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuICAgIFxcbn1cIixcIi5oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAubGVmdC1oZWFkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOjE2cHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIH1cXG4gICAgLnJpZ2h0LWhlYWRlcntcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgfVxcbiAgICBpbWd7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XCIsXCIubmF2e1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICAgIHBhZGRpbmc6IDNyZW0gM3JlbTtcXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgIHVse1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyNHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBsaXtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZ2FwOiA4cHg7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgXFxuICAgICAgICAgIHNwYW57XFxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoOSUpIHNlcGlhKDUlKSBzYXR1cmF0ZSgxODUwJSkgaHVlLXJvdGF0ZSgxNjlkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCg4NyUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdWx7XFxuICAgICAgICAgICAgZ2FwOjEycHg7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgICAgICAgICAgIGNvbG9yOiR0ZXh0LWFjY2VudDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xcblxcbiAgICAgICAgICAgIGxpe1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuZG90e1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1jb2xvcjtcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuYWRkLXByb2plY3R7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcblxcbn1cXG5cXG5cIixcIi5tYWlue1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIHBhZGRpbmc6IDNyZW0gOHJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWNhcmR7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHBhZGRpbmc6IDAuN3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMyk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYmEoJHRleHQtYWNjZW50LDAuMik7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbiAgICB9XFxuXFxuICAgICYuaGlnaHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAkaGlnaCA4cHggc29saWQ7XFxuICAgIH1cXG5cXG4gICAgJi5sb3d7XFxuICAgICAgICBib3JkZXItbGVmdDogJGxvdyA4cHggc29saWQ7XFxuICAgIH1cXG5cXG4gICAgJi5tZWRpdW17XFxuICAgICAgICBib3JkZXItbGVmdDogJG1lZGl1bSA4cHggc29saWQ7XFxuICAgIH1cXG5cXG4gICAgLnRhc2stY2FyZC1sZWZ0e1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOjEwcHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgXFxuICAgICAgICAvLyBpbnB1dHtcXG4gICAgICAgIC8vICAgICBoZWlnaHQ6IDEyMCU7XFxuICAgICAgICAvLyB9XFxuICAgIH1cXG5cXG4gICAgLnRhc2stY2FyZC1yaWdodHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6MTZweDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAudGFzay1kYXRle1xcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dC1hY2NlbnQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC50YXNrLWRldGFpbHN7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2JhMzk1O1xcbiAgICAgICAgY29sb3I6ICMzYmEzOTU7XFxuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAudGFzay1pY29ue1xcbiAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgXFxuXFxufVxcbi50YXNrLXBvcHVwe1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRleHQtY29sb3IsMC42KTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6OTk7XFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG5cXG4gICAgLnRhc2stcG9wdXAtY29udGVudHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogMzJweDtcXG5cXG4gICAgICAgIC50aXRsZXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEycHggMDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBmb3Jte1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgICAgIC5pbnB1dC1maWVsZHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG5cXG4gICAgICAgICAgICAgICAgbGFiZWw6bm90KC5yYWRpb3MgPiBsYWJlbCl7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcblxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9J3RleHQnXXtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJHRleHQtYWNjZW50LDAuMik7XFxuICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSwgJjpmb2N1c3tcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCR0ZXh0LWFjY2VudCwwLjYpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG5cXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG5cXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJHRleHQtYWNjZW50LDAuMik7XFxuICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSwgJjpmb2N1c3tcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCR0ZXh0LWFjY2VudCwwLjYpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9J2RhdGUnXXtcXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGF0ZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGF0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtc3RhY2s7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcXG5cXG4gICAgICAgICAgICAgICAgICAgIC8vICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzLXZpc2libGV7XFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyOiBpbmxpbmUgMnB4IHNvbGlkICRkYXRlO1xcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9J3JhZGlvJ117XFxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGF0ZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAucHJpb3JpdHl7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcblxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIEBtaXhpbiBzZXRDb2xvcnMgKCRjb2xvcnMpe1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9ycztcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JzO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgQG1peGluIHNldFByaW8gKCRjb2xvcnMpe1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9ycztcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAucmFkaW9ze1xcbiAgICAgICAgICAgICAgICAgICAgaW5wdXR7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjAxO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWx7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICZbZm9yPVxcXCJsb3dcXFwiXXtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0Q29sb3JzKCRsb3cpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnByaW8tY2hlY2tlZHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldFByaW8oJGxvdylcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0UHJpbygkbG93KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICZbZm9yPVxcXCJtZWRpdW1cXFwiXXtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0Q29sb3JzKCRtZWRpdW0pO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnByaW8tY2hlY2tlZHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldFByaW8oJG1lZGl1bSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0UHJpbygkbWVkaXVtKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICZbZm9yPVxcXCJoaWdoXFxcIl17XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNldENvbG9ycygkaGlnaCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYucHJpby1jaGVja2Vke1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0UHJpbygkaGlnaClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2V0UHJpbygkaGlnaClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB9XFxuXFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGF0ZTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXRlO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtNnB4O1xcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRlO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5jbG9zZS1idXR0b257XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiAtNjBweDtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xNXB4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgXFxuXFxufVxcblxcbi5hZGQtdGFza3tcXG4gICAgY29sb3I6cmdiYSgkdGV4dC1hY2NlbnQsMC44KTtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2Zvb3Rlci9oZWFydC5wbmdcIjogXCIuL3NyYy9pbWcvZm9vdGVyL2hlYXJ0LnBuZ1wiLFxuXHRcIi4vaGVhZGVyL2F2YXRhci5wbmdcIjogXCIuL3NyYy9pbWcvaGVhZGVyL2F2YXRhci5wbmdcIixcblx0XCIuL2hlYWRlci9ob21lLnN2Z1wiOiBcIi4vc3JjL2ltZy9oZWFkZXIvaG9tZS5zdmdcIixcblx0XCIuL2hlYWRlci9tZW51LnN2Z1wiOiBcIi4vc3JjL2ltZy9oZWFkZXIvbWVudS5zdmdcIixcblx0XCIuL25hdi9jb21tdW5pdHkuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9jb21tdW5pdHkuc3ZnXCIsXG5cdFwiLi9uYXYvZGVsZXRlLnN2Z1wiOiBcIi4vc3JjL2ltZy9uYXYvZGVsZXRlLnN2Z1wiLFxuXHRcIi4vbmF2L2VkaXQuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9lZGl0LnN2Z1wiLFxuXHRcIi4vbmF2L3ByaXZhY3kuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9wcml2YWN5LnN2Z1wiLFxuXHRcIi4vbmF2L3Byb2ZpbGUuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9wcm9maWxlLnN2Z1wiLFxuXHRcIi4vbmF2L3NlYXJjaC5zdmdcIjogXCIuL3NyYy9pbWcvbmF2L3NlYXJjaC5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC9cIjsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5zY3NzJztcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUuY29udGV4dCgnLi9pbWcnLCB0cnVlLCAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaSlcbmNvbnN0IGltYWdlID0gcGF0aC5rZXlzKCkubWFwKHBhdGgpO1xuXG5sZXQgcHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgcmVuZGVyQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1oZWFkZXJcIj5cbiAgICAgICAgPGltZyBzcmM9JHtpbWFnZVszXX0gYWx0PVwiaGFtYnVyZ2VyIG1lbnVcIj5cbiAgICAgICAgPGltZyBzcmM9JHtpbWFnZVsyXX0gYWx0PVwiaG9tZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWhlYWRlclwiPjxpbWcgc3JjPSR7aW1hZ2VbMV19IGFsdD1cImF2YXRhclwiPjwvZGl2PmA7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlckZvb3RlciA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPk1hZGUgd2l0aCA8aW1nIHNyYz0ke2ltYWdlWzBdfSB3aWR0aD1cIjE1cmVtXCI+IFxuICAgICAgICBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3BhdHNva1wiIHRhcmdldD1cIl9ibGFua1wiPkZhbGNvPC9hPjwvZGl2PmA7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlck5hdiA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VbNF19XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LWVsZW1cIj5JbmJveDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVs1XX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtZWxlbVwiPlRvZGF5PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlWzZdfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1lbGVtXCI+RmlsdGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlWzddfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1lbGVtXCI+UHJvamVjdHM8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPHVsPlxuXG4gICAgICAgIDwvdWw+XG4gICAgICAgIDwvdWw+YDtcbiAgICAgICAgbGV0IHByb2plY3RVTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsPnVsJyk7XG4gICAgICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGV0IGRvdENvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgZG90Q29sb3IuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgICAgICAgICBkb3RDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9qZWN0LmNvbG9yO1xuICAgICAgICAgICAgZG90Q29sb3Iuc3R5bGUub3BhY2l0eSA9IDAuODtcbiAgICAgICAgICAgIGxldCBzcGFuUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW5Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25hdi1wcm9qZWN0LWVsZW0nKVxuICAgICAgICAgICAgc3BhblByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBuZXdMaS5hcHBlbmRDaGlsZChkb3RDb2xvcik7XG4gICAgICAgICAgICBuZXdMaS5hcHBlbmRDaGlsZChzcGFuUHJvamVjdCk7XG4gICAgICAgICAgICAvLyBuZXdMaS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJuYXYtcHJvamVjdC1lbGVtXCI+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPmA7XG4gICAgICAgICAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQobmV3TGkpO1xuICAgICAgICAgICAgbmV3TGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHJlbmRlck1haW4obmV3TGkucXVlcnlTZWxlY3Rvcignc3BhbiArIHNwYW4nKS50ZXh0Q29udGVudCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3RcIik7XG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSAnKyBOZXcgUHJvamVjdCdcbiAgICAgICAgcHJvamVjdFVMLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgICAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiByZW5kZXJQcm9qZWN0RGV0YWlscygpKTtcbiAgICAgICAgXG4gICAgfVxuICAgIGNvbnN0IHJlbmRlck1haW4gPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aDE+SW5ib3g8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFza1wiPisgTmV3IFRhc2s8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdFRhc2tzID0gW107IFxuICAgICAgICBsZXQgdGVzdCA9IGRhdGFIYW5kbGVyLmdldFByb2plY3RMaXN0KCk7ICAgIFxuICAgICAgICB0ZXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0VGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcblxuICAgICAgICBkYXRhSGFuZGxlci5nZXRQcm9qZWN0TGlzdCgpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RUYXNrcyA9IHByb2plY3QudGFza0FycmF5O1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgICAgICBsZXQgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2FyZCcpO1xuICAgICAgICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChgJHtwcmlvcml0eX1gKTtcbiAgICAgICAgICAgIHRhc2tDYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWRhdGVcIj4ke3Rhc2suZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWRldGFpbHNcIj5ERVRBSUxTPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay1pY29uIGRlbGV0ZVwiPjxpbWcgc3JjPVwiJHtpbWFnZVs1XX1cIiBhbHQ9XCJcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gICAgICAgICAgICB0YXNrQ2FyZC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHJlbmRlckRldGFpbHModGFzaykpO1xuICAgICAgICAgICAgdGFza0NhcmQucXVlcnlTZWxlY3RvcignLnRhc2staWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBkZWxldGVUYXNrKHRhc2spKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZW5kZXJEZXRhaWxzKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gdGFzay5wcm9qZWN0KXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldFRhc2tBcnJheSgpLmZvckVhY2goKHRrLGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRrLnRpdGxlID09IHRhc2sudGl0bGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5kZWxldGVUYXNrRnJvbUFycmF5KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck1haW4ocHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJEZXRhaWxzID0gKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cCcpXG4gICAgICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cC1jb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5OZXcgVGFzazwvZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0LXRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0LXRpdGxlXCIgaWQ9XCJ0LXRpdGxlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0LWRldGFpbHNcIj5EZXRhaWxzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0LWRldGFpbHNcIiBuYW1lPVwidC1kZXRhaWxzXCIgcm93cz1cIjZcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidC1kYXRlXCI+RGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInQtZGF0ZVwiIGlkPVwidC1kYXRlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG93XCI+TE9XPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0LXByaW9yaXR5XCIgaWQ9XCJsb3dcIiB2YWx1ZT1cImxvd1wiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TUVESVVNPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0LXByaW9yaXR5XCIgaWQ9XCJtZWRpdW1cIiB2YWx1ZT1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhJR0g8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInQtcHJpb3JpdHlcIiBpZD1cImhpZ2hcIiB2YWx1ZT1cImhpZ2hcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInQtcHJvamVjdFwiPlByb2plY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInQtcHJvamVjdFwiIGlkPVwidC1wcm9qZWN0XCI+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFERCBUQVNLPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtYnV0dG9uXCI+WDwvZGl2PlxuICAgICAgICA8L2Zvcm0+YDtcblxuXG5cblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvcyA+IGxhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5LmZvckVhY2goKGJ1dHRvbixpbmRleCkgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5kaXNwbGF5Q29udHJvbGxlci5jaGFuZ2VQcmlvcml0eShidXR0b24saW5kZXgpKVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stcG9wdXAnKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY2xvc2VQb3B1cCk7XG4gICAgICAgIGNvbnN0IHRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXBvcHVwJyk7XG4gICAgICAgIHRhc2tQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT4ge2lmIChlLnRhcmdldD09dGFza1BvcHVwKSB7Y2xvc2VQb3B1cCgpfX0pO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbiAgICAgICAgaWYodHlwZW9mKHRhc2sudGl0bGUpICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3QtdGl0bGUnKS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0LWRldGFpbHMnKS52YWx1ZSA9IHRhc2suZGV0YWlscztcbiAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQjdC1kYXRlJykudmFsdWUgPSB0YXNrLmRhdGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtLnF1ZXJ5U2VsZWN0b3IoYC5yYWRpb3MgIyR7dGFzay5wcmlvcml0eX1gKSk7XG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoYC5yYWRpb3MgbGFiZWxbZm9yPSR7dGFzay5wcmlvcml0eX1gKS5jbGFzc0xpc3QuYWRkKCdwcmlvLWNoZWNrZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1wcm9qZWN0Jyk7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS50ZXh0Q29udGVudDtcbiAgICAgICAgZGF0YUhhbmRsZXIuZ2V0UHJvamVjdExpc3QoKS5mb3JFYWNoKHByb2ogPT4ge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvai5uYW1lO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvai5uYW1lO1xuICAgICAgICAgICAgaWYgKHByb2plY3ROYW0gPT0gcHJvai5uYW1lKXtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCN0LXRpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgZGV0YWlscyA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3QtZGV0YWlscycpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3QtZGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1tcInQtcHJpb3JpdHlcIl0udmFsdWU7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IGZvcm0ucXVlcnlTZWxlY3Rvcignc2VsZWN0JykudmFsdWU7XG4gICAgICAgICAgICBkYXRhSGFuZGxlci5hZGRUYXNrKHRpdGxlLGRldGFpbHMsZGF0ZSxwcmlvcml0eSxwcm9qZWN0KTtcbiAgICAgICAgICAgIGNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgIHJlbmRlck1haW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS50ZXh0Q29udGVudCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0RGV0YWlscyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cCcpXG4gICAgICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgndGFzay1wb3B1cC1jb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5OZXcgUHJvamVjdDwvZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwLXRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwLXRpdGxlXCIgaWQ9XCJwLXRpdGxlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwLWNvbG9yXCI+Q29sb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiBuYW1lPVwicC1jb2xvclwiIGlkPVwicC1jb2xvclwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BREQgUFJPSkVDVDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLWJ1dHRvblwiPlg8L2Rpdj5cbiAgICAgICAgPC9mb3JtPmA7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1wb3B1cCcpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjbG9zZVBvcHVwKTtcbiAgICAgICAgY29uc3QgdGFza1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stcG9wdXAnKTtcbiAgICAgICAgdGFza1BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PiB7aWYgKGUudGFyZ2V0PT10YXNrUG9wdXApIHtjbG9zZVBvcHVwKCl9fSk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgLy8gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNwLXRpdGxlJykudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgICAgICAvLyBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3AtY29sb3InKS52YWx1ZSA9IHRhc2suZGV0YWlscztcblxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGUpPT57XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3AtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQjcC1jb2xvcicpLnZhbHVlO1xuICAgICAgICAgICAgZGF0YUhhbmRsZXIuYWRkUHJvamVjdCh0aXRsZSxjb2xvcik7XG4gICAgICAgICAgICBjbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICByZW5kZXJOYXYoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG4gICAgICAgIHJlbmRlckhlYWRlcigpO1xuICAgICAgICByZW5kZXJGb290ZXIoKTtcbiAgICAgICAgcmVuZGVyTmF2KCk7XG4gICAgICAgIHJlbmRlck1haW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3JlbmRlckRldGFpbHMsIHJlbmRlck5hdiwgcmVuZGVyTWFpbixyZW5kZXJBbGx9O1xufSkoKVxuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAoYnV0dG9uLGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucmFkaW9zIGxhYmVsYCk7XG4gICAgICAgIGxhYmVscy5mb3JFYWNoKGxhYmVsID0+IHtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW8tY2hlY2tlZCcpXG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJpby1jaGVja2VkJyk7XG4gICAgfVxuICAgIHJldHVybiB7Y2hhbmdlUHJpb3JpdHl9O1xufSkoKVxuXG5cbmNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY29sb3IgPSAnd2hpdGUnKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnRhc2tBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmFkZFRvUHJvamVjdHNBcnJheSgpO1xuXG4gICAgfVxuICAgIGFkZFRhc2tUb0N1cnJlbnRQcm9qZWN0KHRhc2spIHtcbiAgICAgICAgdGhpcy50YXNrQXJyYXkucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBhZGRUb1Byb2plY3RzQXJyYXkoKXtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRUYXNrQXJyYXkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0FycmF5O1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2tGcm9tQXJyYXkoaW5kZXgpe1xuICAgICAgICB0aGlzLnRhc2tBcnJheS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxufVxuY2xhc3MgVGFza3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3Qpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG59XG5cbmNvbnN0IGRhdGFIYW5kbGVyID0gKCgpPT57XG4gICAgbGV0IHRlc3Rwcm9qZWN0ID0gbmV3IFByb2plY3QoXCJCb2lcIiwnZ3JlZW4nKTtcbiAgICBsZXQgdGVzdHByb2plY3QyID0gbmV3IFByb2plY3QoXCJLbGF3aXN6XCIsJ3llbGxvdycpO1xuICAgIGxldCB0ZXN0cHJvamVjdDMgPSBuZXcgUHJvamVjdChcIlRlc3Q5N1wiLCdibGFjaycpO1xuXG4gICAgbGV0IHRlc3R0YXNrMSA9IG5ldyBUYXNrKFwiVHl0dWwxXCIsXCJEZXNjMVwiLFwiMjAyMi0wOC0wNFwiLFwiaGlnaFwiLFwiQm9pXCIpO1xuICAgIGxldCB0ZXN0dGFzazIgPSBuZXcgVGFzayhcIlR5dHVsMlwiLFwiRGVzYzJcIixcIjIwMjItMDgtMDZcIixcIm1lZGl1bVwiLFwiQm9pXCIpO1xuICAgIGxldCB0ZXN0dGFzazMgPSBuZXcgVGFzayhcIlR5dHVsM1wiLFwiRGVzYzNcIixcIjIwMjItMDctMDRcIixcImxvd1wiLFwiS2xhd2lzelwiKTtcblxuICAgIHRlc3Rwcm9qZWN0LmFkZFRhc2tUb0N1cnJlbnRQcm9qZWN0KHRlc3R0YXNrMSk7XG4gICAgdGVzdHByb2plY3QuYWRkVGFza1RvQ3VycmVudFByb2plY3QodGVzdHRhc2syKTtcbiAgICB0ZXN0cHJvamVjdDIuYWRkVGFza1RvQ3VycmVudFByb2plY3QodGVzdHRhc2szKTtcblxuICAgIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gICAgfVxuICAgIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0ZXN0cHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrID0gKHRpdGxlLGRldGFpbHMsZGF0ZSxwcmlvcml0eSxwcm9qZWN0KSA9PntcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSxkZXRhaWxzLGRhdGUscHJpb3JpdHkscHJvamVjdCk7XG4gICAgICAgIGRhdGFIYW5kbGVyLmdldFByb2plY3RMaXN0KCkuZm9yRWFjaChwcm9qID0+IHtcbiAgICAgICAgICAgIGlmKHByb2oubmFtZSA9PSBwcm9qZWN0KXtcbiAgICAgICAgICAgICAgICBwcm9qLmFkZFRhc2tUb0N1cnJlbnRQcm9qZWN0KG5ld1Rhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIGNvbG9yKSA9PiB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsY29sb3IpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhSGFuZGxlci5nZXRQcm9qZWN0TGlzdCgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZFRhc2ssYWRkUHJvamVjdCxnZXRQcm9qZWN0TGlzdCxnZXRQcm9qZWN0fVxufSkoKVxuXG5yZW5kZXJDb250cm9sbGVyLnJlbmRlckFsbCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
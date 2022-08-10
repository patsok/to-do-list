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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-template-rows: 40px 1fr 40px;\n  min-height: 100vh;\n  font-family: Roboto, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.footer {\n  grid-area: 3/1/4/3;\n  background-color: #db4c3f;\n  color: white;\n  padding: 0.7rem 0;\n  font-size: 1rem;\n  text-align: center;\n  z-index: 1;\n}\n.footer a {\n  text-decoration: none;\n  color: white;\n}\n\n.header {\n  grid-area: 1/1/2/3;\n  background-color: #db4c3f;\n  color: white;\n  padding: 0 3rem;\n  font-size: 1rem;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header .left-header {\n  display: flex;\n  gap: 16px;\n  height: 20px;\n}\n.header .right-header {\n  height: 20px;\n}\n.header img {\n  height: 20px;\n  cursor: pointer;\n}\n\n.nav {\n  grid-area: 2/1/3/2;\n  background-color: #f7f7f7;\n  padding: 3rem 3rem;\n  color: rgb(33, 37, 41);\n  font-size: 16px;\n}\n.nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  justify-content: center;\n}\n.nav ul li {\n  display: flex;\n  gap: 8px;\n  cursor: pointer;\n}\n.nav ul li span {\n  display: flex;\n  align-items: center;\n}\n.nav ul img {\n  margin: auto;\n  height: 16px;\n  filter: brightness(0) saturate(100%) invert(9%) sepia(5%) saturate(1850%) hue-rotate(169deg) brightness(98%) contrast(87%);\n}\n.nav ul ul {\n  gap: 12px;\n  padding-left: 16px;\n  color: #4d4d4d;\n  margin-top: -12px;\n}\n.nav ul ul li {\n  align-items: center;\n}\n.nav ul ul .dot {\n  background-color: rgb(33, 37, 41);\n  opacity: 0.3;\n  border-radius: 50%;\n  height: 8px;\n  width: 8px;\n}\n\n.main {\n  grid-area: 2/2/3/3;\n  padding: 3rem 8rem;\n}\n\n.task-container {\n  padding: 1rem 0;\n}\n\n.task-card {\n  width: 100%;\n  padding: 0.7rem;\n  background-color: #f7f7f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.task-card:hover {\n  transform: scale(1.003);\n  transform-origin: 50% 50%;\n  box-shadow: 2px 2px 5px 2px rgba(77, 77, 77, 0.2);\n  transition: all 0.2s ease-out;\n}\n.task-card.high {\n  border-left: rgb(226, 57, 57) 8px solid;\n}\n.task-card.low {\n  border-left: rgb(169, 76, 231) 8px solid;\n}\n.task-card.medium {\n  border-left: rgb(247, 221, 77) 8px solid;\n}\n.task-card .task-card-left {\n  padding-left: 2px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.task-card .task-card-right {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.task-card .task-card-right .task-date {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.task-card .task-details {\n  border: 1px solid #3ba395;\n  color: #3ba395;\n  padding: 4px 8px;\n  border-radius: 3px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.task-card .task-details:hover {\n  color: rgb(241, 241, 241);\n  background-color: #3ba395;\n}\n.task-card .task-icon img {\n  height: 17px;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.scss","webpack://./src/styles/footer.scss","webpack://./src/styles/header.scss","webpack://./src/styles/nav.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AAEA;;;EAGI,sBAAA;EACA,SAAA;EACA,UAAA;AAAJ;;AAUA;EACI,aAAA;EACA,gCAAA;EACA,iCAAA;EACA,iBAAA;EACA,8DAPS;AAAb;;ACfA;EACI,kBAAA;EACA,yBDQW;ECPX,YAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;ADkBJ;AChBI;EACI,qBAAA;EACA,YAAA;ADkBR;;AE7BA;EACI,kBAAA;EACA,yBFQW;EEPX,YAAA;EACA,eAAA;EACA,eAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AFgCJ;AE9BI;EACI,aAAA;EACA,SAAA;EACA,YAAA;AFgCR;AE9BI;EACI,YAAA;AFgCR;AE9BI;EACI,YAAA;EACA,eAAA;AFgCR;;AGrDA;EACI,kBAAA;EACA,yBHUc;EGTd,kBAAA;EACA,sBHSS;EGRT,eAAA;AHwDJ;AGtDI;EACI,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,uBAAA;AHwDR;AGtDQ;EACE,aAAA;EACA,QAAA;EACA,eAAA;AHwDV;AGtDU;EACE,aAAA;EACA,mBAAA;AHwDZ;AGpDQ;EACI,YAAA;EACA,YAAA;EACA,0HAAA;AHsDZ;AGnDQ;EACI,SAAA;EACA,kBAAA;EACA,cHpBE;EGqBF,iBAAA;AHqDZ;AGnDY;EACI,mBAAA;AHqDhB;AGnDY;EACI,iCH5BH;EG6BG,YAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;AHqDhB;;AIlGA;EACI,kBAAA;EACA,kBAAA;AJqGJ;;AIlGA;EACI,eAAA;AJqGJ;;AIlGA;EACI,WAAA;EACA,eAAA;EACA,yBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AJqGJ;AInGI;EACI,uBAAA;EACA,yBAAA;EACA,iDAAA;EACA,6BAAA;AJqGR;AIlGI;EACI,uCAAA;AJoGR;AIjGI;EACI,wCAAA;AJmGR;AIhGI;EACI,wCAAA;AJkGR;AI/FI;EACI,iBAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;AJiGR;AI1FI;EACI,aAAA;EACA,SAAA;EACA,mBAAA;AJ4FR;AI1FQ;EACI,cJxCE;EIyCF,eAAA;AJ4FZ;AIxFI;EACI,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;AJ0FR;AIxFQ;EACI,yBJzDI;EI0DJ,yBAAA;AJ0FZ;AIrFQ;EACI,YAAA;EACA,eAAA;AJuFZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n$accent-color: #db4c3f;\n$primary-color: rgb(241, 241, 241);\n$secondary-color: #f7f7f7;\n$text-color: rgb(33, 37, 41);\n$text-accent: #4d4d4d;\n$font-stack: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n#content{\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    grid-template-rows: 40px 1fr 40px;\n    min-height: 100vh;\n    font-family: $font-stack;\n}\n\n@import \"./footer.scss\";\n@import \"./header.scss\";\n@import \"./nav.scss\";\n@import \"./main.scss\";\n\n",".footer{\n    grid-area: 3 / 1 / 4 / 3;\n    background-color: $accent-color;\n    color: white;\n    padding: 0.7rem 0;\n    font-size: 1rem;\n    text-align: center;\n    z-index: 1;\n\n    a {\n        text-decoration: none;\n        color: white;\n    }\n    \n}",".header{\n    grid-area: 1 / 1 / 2 / 3;\n    background-color: $accent-color;\n    color: white;\n    padding: 0 3rem;\n    font-size: 1rem;\n    z-index: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    .left-header{\n        display: flex;\n        gap:16px;\n        height: 20px;\n    }\n    .right-header{\n        height: 20px;\n    }\n    img{\n        height: 20px;\n        cursor: pointer;\n    }\n}",".nav{\n    grid-area: 2 / 1 / 3 / 2;\n    background-color: $secondary-color;\n    padding: 3rem 3rem;\n    color: $text-color;\n    font-size: 16px;\n\n    ul{\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        gap: 24px;\n        justify-content: center;\n\n        li{\n          display: flex;\n          gap: 8px;\n          cursor: pointer;\n          \n          span{\n            display:flex;\n            align-items: center;\n          }\n        }\n\n        img{\n            margin: auto;\n            height: 16px;\n            filter: brightness(0) saturate(100%) invert(9%) sepia(5%) saturate(1850%) hue-rotate(169deg) brightness(98%) contrast(87%);\n        }\n\n        ul{\n            gap:12px;\n            padding-left: 16px;\n            color:$text-accent;\n            margin-top: -12px;\n\n            li{\n                align-items: center;\n            }\n            .dot{\n                background-color: $text-color;\n                opacity: 0.3;\n                border-radius: 50%;\n                height: 8px;\n                width: 8px;\n            }\n        }\n    }\n\n\n}\n\n",".main{\n    grid-area: 2 / 2 / 3 / 3;\n    padding: 3rem 8rem;\n}\n\n.task-container{\n    padding: 1rem 0;\n}\n\n.task-card{\n    width:100%;\n    padding: 0.7rem;\n    background-color: $secondary-color;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 12px;\n\n    &:hover{\n        transform: scale(1.003);\n        transform-origin: 50% 50%;\n        box-shadow: 2px 2px 5px 2px rgba($text-accent,0.2);\n        transition: all .2s ease-out;\n    }\n\n    &.high{\n        border-left: rgb(226, 57, 57) 8px solid;\n    }\n\n    &.low{\n        border-left: rgb(169, 76, 231) 8px solid;\n    }\n\n    &.medium{\n        border-left: rgb(247, 221, 77) 8px solid;\n    }\n\n    .task-card-left{\n        padding-left: 2px;\n        display: flex;\n        gap:10px;\n        align-items: center;\n        \n        // input{\n        //     height: 120%;\n        // }\n    }\n\n    .task-card-right{\n        display: flex;\n        gap:16px;\n        align-items: center;\n\n        .task-date{\n            color: $text-accent;\n            font-size: 12px;\n        }\n    }\n\n    .task-details{\n        border: 1px solid #3ba395;\n        color: #3ba395;\n        padding: 4px 8px;\n        border-radius: 3px;\n        font-size: 12px;\n        cursor: pointer;\n\n        &:hover{\n            color: $primary-color;\n            background-color: #3ba395;\n        }\n    }\n\n    .task-icon{\n        img{\n            height: 17px;\n            cursor: pointer;\n        }\n    }\n    \n}\n"],"sourceRoot":""}]);
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
console.log(image);

document.querySelector('.header').innerHTML = `<div class="left-header">
    <img src=${image[3]} alt="hamburger menu">
    <img src=${image[2]} alt="home">
</div>
<div class="right-header"><img src=${image[1]} alt="avatar"></div>`;

document.querySelector('.footer').innerHTML = `<div class="author">Made with <img src=${image[0]} width="15rem"> 
by <a href="https://github.com/patsok" target="_blank">Falco</a></div>`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9COEI7O0FBRTlCLGFBQWEsbUZBQTREO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCO0FBQ0EscUNBQXFDLFVBQVU7O0FBRS9DLHdGQUF3RixVQUFVO0FBQ2xHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RCxnREFBZ0QsU0FBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pELGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzcz8yMDNiIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbWcvIHN5bmMgXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC8iLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciA0MHB4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDMvMS80LzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0YzNmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC43cmVtIDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uZm9vdGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjRjM2Y7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDNyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmxlZnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5oZWFkZXIgLnJpZ2h0LWhlYWRlciB7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdiB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgcGFkZGluZzogM3JlbSAzcmVtO1xcbiAgY29sb3I6IHJnYigzMywgMzcsIDQxKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI0cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm5hdiB1bCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXYgdWwgbGkgc3BhbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdiB1bCBpbWcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg5JSkgc2VwaWEoNSUpIHNhdHVyYXRlKDE4NTAlKSBodWUtcm90YXRlKDE2OWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDg3JSk7XFxufVxcbi5uYXYgdWwgdWwge1xcbiAgZ2FwOiAxMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgY29sb3I6ICM0ZDRkNGQ7XFxuICBtYXJnaW4tdG9wOiAtMTJweDtcXG59XFxuLm5hdiB1bCB1bCBsaSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2IHVsIHVsIC5kb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAzNywgNDEpO1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiA4cHg7XFxuICB3aWR0aDogOHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBwYWRkaW5nOiAzcmVtIDhyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWNhcmQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG4udGFzay1jYXJkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMDMpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCByZ2JhKDc3LCA3NywgNzcsIDAuMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG59XFxuLnRhc2stY2FyZC5oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiByZ2IoMjI2LCA1NywgNTcpIDhweCBzb2xpZDtcXG59XFxuLnRhc2stY2FyZC5sb3cge1xcbiAgYm9yZGVyLWxlZnQ6IHJnYigxNjksIDc2LCAyMzEpIDhweCBzb2xpZDtcXG59XFxuLnRhc2stY2FyZC5tZWRpdW0ge1xcbiAgYm9yZGVyLWxlZnQ6IHJnYigyNDcsIDIyMSwgNzcpIDhweCBzb2xpZDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jYXJkLWxlZnQge1xcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jYXJkLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNhcmQtcmlnaHQgLnRhc2stZGF0ZSB7XFxuICBjb2xvcjogIzRkNGQ0ZDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1kZXRhaWxzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYmEzOTU7XFxuICBjb2xvcjogIzNiYTM5NTtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stZGV0YWlsczpob3ZlciB7XFxuICBjb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcXG59XFxuLnRhc2stY2FyZCAudGFzay1pY29uIGltZyB7XFxuICBoZWlnaHQ6IDE3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbmF2LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBVUE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsOERBUFM7QUFBYjs7QUNmQTtFQUNJLGtCQUFBO0VBQ0EseUJEUVc7RUNQWCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEa0JKO0FDaEJJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FEa0JSOztBRTdCQTtFQUNJLGtCQUFBO0VBQ0EseUJGUVc7RUVQWCxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUZnQ0o7QUU5Qkk7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUZnQ1I7QUU5Qkk7RUFDSSxZQUFBO0FGZ0NSO0FFOUJJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUZnQ1I7O0FHckRBO0VBQ0ksa0JBQUE7RUFDQSx5QkhVYztFR1RkLGtCQUFBO0VBQ0Esc0JIU1M7RUdSVCxlQUFBO0FId0RKO0FHdERJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUh3RFI7QUd0RFE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUh3RFY7QUd0RFU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUh3RFo7QUdwRFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBIQUFBO0FIc0RaO0FHbkRRO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0hwQkU7RUdxQkYsaUJBQUE7QUhxRFo7QUduRFk7RUFDSSxtQkFBQTtBSHFEaEI7QUduRFk7RUFDSSxpQ0g1Qkg7RUc2QkcsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUhxRGhCOztBSWxHQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUpxR0o7O0FJbEdBO0VBQ0ksZUFBQTtBSnFHSjs7QUlsR0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBSnFHSjtBSW5HSTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxpREFBQTtFQUNBLDZCQUFBO0FKcUdSO0FJbEdJO0VBQ0ksdUNBQUE7QUpvR1I7QUlqR0k7RUFDSSx3Q0FBQTtBSm1HUjtBSWhHSTtFQUNJLHdDQUFBO0FKa0dSO0FJL0ZJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FKaUdSO0FJMUZJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBSjRGUjtBSTFGUTtFQUNJLGNKeENFO0VJeUNGLGVBQUE7QUo0Rlo7QUl4Rkk7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUowRlI7QUl4RlE7RUFDSSx5Qkp6REk7RUkwREoseUJBQUE7QUowRlo7QUlyRlE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBSnVGWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiRhY2NlbnQtY29sb3I6ICNkYjRjM2Y7XFxuJHByaW1hcnktY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZjdmN2Y3O1xcbiR0ZXh0LWNvbG9yOiByZ2IoMzMsIDM3LCA0MSk7XFxuJHRleHQtYWNjZW50OiAjNGQ0ZDRkO1xcbiRmb250LXN0YWNrOiBSb2JvdG8sICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciA0MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbn1cXG5cXG5AaW1wb3J0IFxcXCIuL2Zvb3Rlci5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2hlYWRlci5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL25hdi5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL21haW4uc2Nzc1xcXCI7XFxuXFxuXCIsXCIuZm9vdGVye1xcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC43cmVtIDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBhIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgICBcXG59XCIsXCIuaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLmxlZnQtaGVhZGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDoxNnB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB9XFxuICAgIC5yaWdodC1oZWFkZXJ7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIH1cXG4gICAgaW1ne1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVwiLFwiLm5hdntcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgICBwYWRkaW5nOiAzcmVtIDNyZW07XFxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgICB1bHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMjRweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgbGl7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGdhcDogOHB4O1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIFxcbiAgICAgICAgICBzcGFue1xcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDklKSBzZXBpYSg1JSkgc2F0dXJhdGUoMTg1MCUpIGh1ZS1yb3RhdGUoMTY5ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoODclKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHVse1xcbiAgICAgICAgICAgIGdhcDoxMnB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG4gICAgICAgICAgICBjb2xvcjokdGV4dC1hY2NlbnQ7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XFxuXFxuICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5kb3R7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWNvbG9yO1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxufVxcblxcblwiLFwiLm1haW57XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgcGFkZGluZzogM3JlbSA4cmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stY2FyZHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgcGFkZGluZzogMC43cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuXFxuICAgICY6aG92ZXJ7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAzKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiYSgkdGV4dC1hY2NlbnQsMC4yKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxuICAgIH1cXG5cXG4gICAgJi5oaWdoe1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHJnYigyMjYsIDU3LCA1NykgOHB4IHNvbGlkO1xcbiAgICB9XFxuXFxuICAgICYubG93e1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHJnYigxNjksIDc2LCAyMzEpIDhweCBzb2xpZDtcXG4gICAgfVxcblxcbiAgICAmLm1lZGl1bXtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiByZ2IoMjQ3LCAyMjEsIDc3KSA4cHggc29saWQ7XFxuICAgIH1cXG5cXG4gICAgLnRhc2stY2FyZC1sZWZ0e1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOjEwcHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgXFxuICAgICAgICAvLyBpbnB1dHtcXG4gICAgICAgIC8vICAgICBoZWlnaHQ6IDEyMCU7XFxuICAgICAgICAvLyB9XFxuICAgIH1cXG5cXG4gICAgLnRhc2stY2FyZC1yaWdodHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6MTZweDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAudGFzay1kYXRle1xcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dC1hY2NlbnQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC50YXNrLWRldGFpbHN7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2JhMzk1O1xcbiAgICAgICAgY29sb3I6ICMzYmEzOTU7XFxuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAudGFzay1pY29ue1xcbiAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2Zvb3Rlci9oZWFydC5wbmdcIjogXCIuL3NyYy9pbWcvZm9vdGVyL2hlYXJ0LnBuZ1wiLFxuXHRcIi4vaGVhZGVyL2F2YXRhci5wbmdcIjogXCIuL3NyYy9pbWcvaGVhZGVyL2F2YXRhci5wbmdcIixcblx0XCIuL2hlYWRlci9ob21lLnN2Z1wiOiBcIi4vc3JjL2ltZy9oZWFkZXIvaG9tZS5zdmdcIixcblx0XCIuL2hlYWRlci9tZW51LnN2Z1wiOiBcIi4vc3JjL2ltZy9oZWFkZXIvbWVudS5zdmdcIixcblx0XCIuL25hdi9jb21tdW5pdHkuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9jb21tdW5pdHkuc3ZnXCIsXG5cdFwiLi9uYXYvZGVsZXRlLnN2Z1wiOiBcIi4vc3JjL2ltZy9uYXYvZGVsZXRlLnN2Z1wiLFxuXHRcIi4vbmF2L2VkaXQuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9lZGl0LnN2Z1wiLFxuXHRcIi4vbmF2L3ByaXZhY3kuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9wcml2YWN5LnN2Z1wiLFxuXHRcIi4vbmF2L3Byb2ZpbGUuc3ZnXCI6IFwiLi9zcmMvaW1nL25hdi9wcm9maWxlLnN2Z1wiLFxuXHRcIi4vbmF2L3NlYXJjaC5zdmdcIjogXCIuL3NyYy9pbWcvbmF2L3NlYXJjaC5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC9cIjsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5zY3NzJztcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUuY29udGV4dCgnLi9pbWcnLCB0cnVlLCAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaSlcbmNvbnN0IGltYWdlID0gcGF0aC5rZXlzKCkubWFwKHBhdGgpO1xuY29uc29sZS5sb2coaW1hZ2UpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJsZWZ0LWhlYWRlclwiPlxuICAgIDxpbWcgc3JjPSR7aW1hZ2VbM119IGFsdD1cImhhbWJ1cmdlciBtZW51XCI+XG4gICAgPGltZyBzcmM9JHtpbWFnZVsyXX0gYWx0PVwiaG9tZVwiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicmlnaHQtaGVhZGVyXCI+PGltZyBzcmM9JHtpbWFnZVsxXX0gYWx0PVwiYXZhdGFyXCI+PC9kaXY+YDtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+TWFkZSB3aXRoIDxpbWcgc3JjPSR7aW1hZ2VbMF19IHdpZHRoPVwiMTVyZW1cIj4gXG5ieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3BhdHNva1wiIHRhcmdldD1cIl9ibGFua1wiPkZhbGNvPC9hPjwvZGl2PmA7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKS5pbm5lckhUTUwgPSBgXG48dWw+XG4gICAgPGxpPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVs0XX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1lbGVtXCI+SW5ib3g8L3NwYW4+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlWzVdfVwiIGFsdD1cIlwiPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LWVsZW1cIj5Ub2RheTwvc3Bhbj5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VbNl19XCIgYWx0PVwiXCI+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtZWxlbVwiPkZpbHRlcjwvc3Bhbj5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VbN119XCIgYWx0PVwiXCI+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtZWxlbVwiPlByb2plY3RzPC9zcGFuPlxuICAgIDwvbGk+XG4gICAgPHVsPlxuICAgIDxsaT48c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cIm5hdi1wcm9qZWN0LWVsZW1cIj5Xb3JrPC9zcGFuPjwvbGk+XG4gICAgPGxpPjxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwibmF2LXByb2plY3QtZWxlbVwiPlBlcnNvbmFsPC9zcGFuPjwvbGk+XG4gICAgPGxpPjxzcGFuIGNsYXNzPVwiZG90XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwibmF2LXByb2plY3QtZWxlbVwiPlNob3BwaW5nPC9zcGFuPjwvbGk+XG48L3VsPlxuPC91bD5gO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmlubmVySFRNTCA9IGBcbjxoMT5Qcm9qZWN0IFRpdGxlPC9oMT5cbjxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNhcmQgaGlnaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay10aXRsZVwiPlRhc2sgdGl0bGU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkLXJpZ2h0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGF0ZVwiPk5vdiAxMXRoPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWRldGFpbHNcIj5ERVRBSUxTPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWljb25cIj48aW1nIHNyYz1cIiR7aW1hZ2VbNV19XCIgYWx0PVwiXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWljb25cIj48aW1nIHNyYz1cIiR7aW1hZ2VbNl19XCIgYWx0PVwiXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkIGxvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIiBjaGVja2VkPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLXRpdGxlXCI+VGFzayB0aXRsZTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNhcmQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay1kYXRlXCI+Tm92IDExdGg8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGV0YWlsc1wiPkRFVEFJTFM8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2staWNvblwiPjxpbWcgc3JjPVwiJHtpbWFnZVs1XX1cIiBhbHQ9XCJcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2staWNvblwiPjxpbWcgc3JjPVwiJHtpbWFnZVs2XX1cIiBhbHQ9XCJcIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+YCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
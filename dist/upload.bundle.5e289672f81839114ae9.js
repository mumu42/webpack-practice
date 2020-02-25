/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views/upload/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/css/base.scss":
/*!**********************************!*\
  !*** ./src/common/css/base.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common/css/base.scss?");

/***/ }),

/***/ "./src/common/ts/base.ts":
/*!*******************************!*\
  !*** ./src/common/ts/base.ts ***!
  \*******************************/
/*! exports provided: $, click */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"click\", function() { return click; });\nfunction $(name, type) {\r\n    var doms;\r\n    if (name.indexOf('#') === 0) {\r\n        doms = [document.getElementById(name.substr(1))];\r\n    }\r\n    else if (name.indexOf('.') === 0) {\r\n        doms = Array.from(document.getElementsByTagName(\"*\")).filter(function (item) { return item.className.indexOf(name.substr(1)) !== -1; });\r\n    }\r\n    else {\r\n        doms = document.getElementsByTagName(\"\" + name);\r\n    }\r\n    if (!doms.length) {\r\n        console.log('找不到目标元素');\r\n        return;\r\n    }\r\n    if (type && type === 'all') {\r\n        return doms;\r\n    }\r\n    else {\r\n        return doms[0];\r\n    }\r\n}\r\nfunction click(target, callBack) {\r\n    target.onclick = function (e) {\r\n        var event = e || window.event;\r\n        callBack && callBack(event);\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/common/ts/base.ts?");

/***/ }),

/***/ "./src/views/upload/index.scss":
/*!*************************************!*\
  !*** ./src/views/upload/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/views/upload/index.scss?");

/***/ }),

/***/ "./src/views/upload/index.ts":
/*!***********************************!*\
  !*** ./src/views/upload/index.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/css/base.scss */ \"./src/common/css/base.scss\");\n/* harmony import */ var _common_css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/views/upload/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_ts_base_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/ts/base.ts */ \"./src/common/ts/base.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = undefined;\r\n\r\n\r\n\r\n(function () { return __awaiter(_this, void 0, void 0, function () {\r\n    var imgs;\r\n    return __generator(this, function (_a) {\r\n        imgs = [];\r\n        Object(_common_ts_base_ts__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('#upload').onchange = function (e) {\r\n            // 添加图片\r\n            var event = e || window.event;\r\n            var fileDom = event.target;\r\n            var fileName = fileDom.files[0];\r\n            var fileRead = new FileReader();\r\n            fileRead.readAsDataURL(fileName);\r\n            fileRead.onload = function () {\r\n                imgs.push({\r\n                    isUse: true,\r\n                    name: fileName.name,\r\n                    url: fileRead.result\r\n                });\r\n                Object(_common_ts_base_ts__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.images-box').innerHTML += \"<p class=\\\"upload-img\\\" style=\\\"background: url(\" + fileRead.result + \") center center no-repeat; background-size: cover;\\\"><span></span><i flag=\\\"\" + (imgs.length - 1) + \"\\\">\\u7F16\\u8F91</i><i flag=\\\"\" + (imgs.length - 1) + \"\\\">\\u5220\\u9664</i></p>\";\r\n            };\r\n        };\r\n        Object(_common_ts_base_ts__WEBPACK_IMPORTED_MODULE_2__[\"click\"])(Object(_common_ts_base_ts__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.images-box'), function (e) {\r\n            // 删除图片\r\n            var el = e.target;\r\n            if (el.nodeName === 'I' || el.nodeName === 'i') {\r\n                if (el.innerHTML === '删除') {\r\n                    el.parentNode.parentNode.removeChild(el.parentNode);\r\n                    imgs[+el.getAttribute('flag')] = {\r\n                        isUse: false,\r\n                        name: '',\r\n                        url: ''\r\n                    };\r\n                }\r\n                el.innerHTML !== '删除' && dialog(el);\r\n            }\r\n        });\r\n        return [2 /*return*/];\r\n    });\r\n}); })();\r\nfunction dialog(ele) {\r\n    console.log(ele);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/views/upload/index.ts?");

/***/ })

/******/ });
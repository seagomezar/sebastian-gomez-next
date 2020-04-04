module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CodeBlock.js":
/*!*********************************!*\
  !*** ./components/CodeBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prism-react-renderer */ "prism-react-renderer");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-live */ "react-live");
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_live__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/CodeBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/jsx-key: 0 */




/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  className,
  live,
  render
}) => {
  const language = className.replace(/language-/, "");

  if (live) {
    return __jsx("div", {
      style: {
        marginTop: "40px",
        backgroundColor: "black"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_2__["LiveProvider"], {
      code: children.trim(),
      transformCode: code => "/** @jsx mdx */" + code,
      scope: {
        mdx: _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"]
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_2__["LivePreview"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_2__["LiveEditor"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_2__["LiveError"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    })));
  }

  if (render) {
    return __jsx("div", {
      style: {
        marginTop: "40px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_2__["LiveProvider"], {
      code: children,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_2__["LivePreview"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    })));
  }

  return __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_1__["defaultProps"], {
    code: children.trim(),
    language: language,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), ({
    className,
    style,
    tokens,
    getLineProps,
    getTokenProps
  }) => __jsx("pre", {
    className: className,
    style: _objectSpread({}, style, {
      padding: "20px"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, tokens.map((line, i) => __jsx("div", _extends({
    key: i
  }, getLineProps({
    line,
    key: i
  }), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), line.map((token, key) => __jsx("span", _extends({
    key: key
  }, getTokenProps({
    token,
    key
  }), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })))))));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Layout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.children);
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CodeBlock */ "./components/CodeBlock.js");
/* harmony import */ var unified_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unified-ui */ "unified-ui");
/* harmony import */ var unified_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unified_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const mdComponents = {
  h1: props => __jsx("h1", _extends({
    style: {
      color: "tomato"
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })),
  pre: props => __jsx("div", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })),
  code: _components_CodeBlock__WEBPACK_IMPORTED_MODULE_2__["default"]
};

const Style = ({
  children
}) => __jsx("style", {
  dangerouslySetInnerHTML: {
    __html: children
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (({
  Component,
  pageProps
}) => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["MDXProvider"], {
  components: mdComponents,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(Style, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, unified_ui__WEBPACK_IMPORTED_MODULE_3__["baseStyles"]), __jsx(Component, _extends({}, pageProps, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
})))));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "prism-react-renderer":
/*!***************************************!*\
  !*** external "prism-react-renderer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prism-react-renderer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-live":
/*!*****************************!*\
  !*** external "react-live" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-live");

/***/ }),

/***/ "unified-ui":
/*!*****************************!*\
  !*** external "unified-ui" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("unified-ui");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map
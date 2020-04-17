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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostNav */ "./components/PostNav.js");
var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Layout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const props = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(_PostNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("article", {
      className: "jsx-3081000413" + " " + "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3081000413",
      __self: this
    }, ".post.jsx-3081000413{max-width:1024px;margin:4rem auto 1rem auto;text-align:justify;text-rendering:optimizelegibility;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;font-family:\"Merriweather\",serif;color:#5d686f;font-weight:400;font-size:20px;line-height:30px;padding:1rem 1rem;-webkit-transition:0.3s all;transition:0.3s all;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3NCLEFBR2dDLGlCQUNVLDJCQUNSLG1CQUNlLGtDQUNaLHlHQUNZLGlDQUNwQixjQUNFLGdCQUNELGVBQ0UsaUJBQ0Msa0JBQ0UsZ0RBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdE5hdiBmcm9tIFwiLi9Qb3N0TmF2XCI7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFBvc3ROYXYgLz5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDRyZW0gYXV0byAxcmVtIGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiLCBzZXJpZjtcbiAgICAgICAgICAgICAgY29sb3I6ICM1ZDY4NmY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxmb290ZXI+PC9mb290ZXI+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Layout.js */")), __jsx("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/PostNav.js":
/*!*******************************!*\
  !*** ./components/PostNav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class PostNav extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.menuOpened = false;
  }

  toggleMenu() {
    const links = document.querySelector(".links");
    const content = document.querySelector(".post");
    const topBar = document.querySelector(".top-bar");
    const footer = document.querySelector("footer");

    if (!this.menuOpened) {
      links.style["display"] = "flex";
      setTimeout(() => {
        links.style["width"] = "250px";
        content.style["transform"] = "translate3d(250px, 0, 0)";
        topBar.style["transform"] = "translate3d(250px, 0, 0)";
        footer.style["transform"] = "translate3d(250px, 0, 0)";
      }, 100);
      this.menuOpened = true;
    } else {
      links.style["width"] = "0";
      content.style["transform"] = "translate3d(0, 0, 0)";
      topBar.style["transform"] = "translate3d(0, 0, 0)";
      footer.style["transform"] = "translate3d(0, 0, 0)";
      setTimeout(() => {
        links.style["display"] = "none";
      }, 100);
      this.menuOpened = false;
    }
  }

  render() {
    return __jsx("nav", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2179332405" + " " + "top-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("i", {
      onClick: this.toggleMenu,
      className: "jsx-2179332405" + " " + "icon ion-md-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx("h1", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Sebastian Gomez"), __jsx("img", {
      src: "/foto_personal.jpg",
      width: "32px",
      height: "32px",
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), __jsx("ul", {
      className: "jsx-2179332405" + " " + "links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2179332405" + " " + "menu-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("img", {
      src: "/foto_personal.jpg",
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("h2", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Sebastian Gomez")), __jsx("li", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("i", {
      className: "jsx-2179332405" + " " + "icon ion-md-home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), " ", __jsx("span", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Inicio"))), __jsx("li", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("i", {
      className: "jsx-2179332405" + " " + "icon ion-md-bookmark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), " ", __jsx("span", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Categor\xEDas"))), __jsx("li", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("i", {
      className: "jsx-2179332405" + " " + "icon ion-md-clipboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), " ", __jsx("span", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Docencia"))), __jsx("li", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("i", {
      className: "jsx-2179332405" + " " + "icon ion-md-contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), " ", __jsx("span", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Sobre M\xED"))), __jsx("li", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("i", {
      className: "jsx-2179332405" + " " + "icon ion-md-search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), " ", __jsx("span", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Buscar"))), __jsx("li", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("i", {
      className: "jsx-2179332405" + " " + "icon ion-md-mic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), " ", __jsx("span", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Charlas"))), __jsx("li", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("i", {
      className: "jsx-2179332405" + " " + "icon ion-logo-rss",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), " ", __jsx("span", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Rss"))), __jsx("li", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("i", {
      className: "jsx-2179332405" + " " + "icon ion-logo-twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), " ", __jsx("span", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Twitter"))), __jsx("li", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("i", {
      className: "jsx-2179332405" + " " + "icon ion-logo-facebook",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), " ", __jsx("span", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Facebook"))), __jsx("li", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("i", {
      className: "jsx-2179332405" + " " + "icon ion-logo-linkedin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), " ", __jsx("span", {
      className: "jsx-2179332405",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "LinkedIn")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2179332405",
      __self: this
    }, ".top-bar.jsx-2179332405{width:100%;height:55px;top:0;position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #eef2f8;color:#88909a;background-color:white;z-index:1;-webkit-transition:0.3s all;transition:0.3s all;}.links.jsx-2179332405{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-image:linear-gradient( 141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75% );overflow-x:hidden;-webkit-transition:0.3s;transition:0.3s;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#eeeeee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-2179332405 a.jsx-2179332405{padding:8px 8px 8px 32px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#818181;display:block;-webkit-transition:0.3s;transition:0.3s;}.links.jsx-2179332405 h2.jsx-2179332405{font-size:2em;}.links.jsx-2179332405 .menu-header.jsx-2179332405{text-align:center;}.links.jsx-2179332405 img.jsx-2179332405{max-width:100px;}.links.jsx-2179332405 li.jsx-2179332405{list-style:none;padding-left:1em;}img.jsx-2179332405{border-radius:50%;margin-right:1em;}.links.jsx-2179332405>li.jsx-2179332405>a.jsx-2179332405{color:white;font-size:25px;}.top-bar.jsx-2179332405>.icon.jsx-2179332405{font-size:1.5em;color:#5d686f;padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0TmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHb0IsQUFHd0IsQUFjQyxBQXFCYSxBQVFYLEFBR0ksQUFHRixBQUdBLEFBSUUsQUFJTixBQUlJLFdBL0RKLENBY0osQUE4Q08sRUFqQmpCLEVBTUEsQUFHbUIsQUFZSCxFQWxCaEIsQUFVbUIsRUF6Q0YsR0FkVCxFQWtDZSxFQTBCdkIsRUEzRGlCLENBK0RFLEdBWm5CLEVBckNZLEFBeUNaLFNBdERlLENBY1AsRUFpRFIsSUFoRFMsT0FNTixpQkFZYyxlQUNELGNBQ0EsY0FsQ0ssQUFtQ0gscUJBZEUsa0JBQ0YsQ0FjbEIsdUNBYitCLGNBdEJDLDZHQXVCZixNQXRCaUIsZ0NBQ2xCLGNBQ1MsS0FxQkQsa0JBcEJaLFVBQ1UsZ0RBQ3RCLEVBbUJnQixjQUNELDBFQUNmIiwiZmlsZSI6Ii9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0TmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBQb3N0TmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50b2dnbGVNZW51ID0gdGhpcy50b2dnbGVNZW51LmJpbmQodGhpcyk7XG4gICAgdGhpcy5tZW51T3BlbmVkID0gZmFsc2U7XG4gIH1cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua3NcIik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zdFwiKTtcbiAgICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1iYXJcIik7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcbiAgICBpZiAoIXRoaXMubWVudU9wZW5lZCkge1xuICAgICAgbGlua3Muc3R5bGVbXCJkaXNwbGF5XCJdID0gXCJmbGV4XCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGlua3Muc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMjUwcHhcIjtcbiAgICAgICAgY29udGVudC5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMjUwcHgsIDAsIDApXCI7XG4gICAgICAgIHRvcEJhci5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMjUwcHgsIDAsIDApXCI7XG4gICAgICAgIGZvb3Rlci5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMjUwcHgsIDAsIDApXCI7XG4gICAgICB9LCAxMDApO1xuICAgICAgdGhpcy5tZW51T3BlbmVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlua3Muc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMFwiO1xuICAgICAgY29udGVudC5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMCwgMCwgMClcIjtcbiAgICAgIHRvcEJhci5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMCwgMCwgMClcIjtcbiAgICAgIGZvb3Rlci5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMCwgMCwgMClcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsaW5rcy5zdHlsZVtcImRpc3BsYXlcIl0gPSBcIm5vbmVcIjtcbiAgICAgIH0sIDEwMCk7XG4gICAgICB0aGlzLm1lbnVPcGVuZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXJcIj5cbiAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1lbnV9IGNsYXNzTmFtZT1cImljb24gaW9uLW1kLW1lbnVcIj48L2k+XG4gICAgICAgICAgPGgxPlNlYmFzdGlhbiBHb21lejwvaDE+XG4gICAgICAgICAgPGltZyBzcmM9XCIvZm90b19wZXJzb25hbC5qcGdcIiB3aWR0aD1cIjMycHhcIiBoZWlnaHQ9XCIzMnB4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ZvdG9fcGVyc29uYWwuanBnXCIgLz5cbiAgICAgICAgICAgIDxoMj5TZWJhc3RpYW4gR29tZXo8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1ob21lXCI+PC9pPiA8c3Bhbj5JbmljaW88L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtYm9va21hcmtcIj48L2k+IDxzcGFuPkNhdGVnb3LDrWFzPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWNsaXBib2FyZFwiPjwvaT4gPHNwYW4+RG9jZW5jaWE8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtY29udGFjdFwiPjwvaT4gPHNwYW4+U29icmUgTcOtPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLXNlYXJjaFwiPjwvaT4gPHNwYW4+QnVzY2FyPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLW1pY1wiPjwvaT4gPHNwYW4+Q2hhcmxhczwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLXJzc1wiPjwvaT4gPHNwYW4+UnNzPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tdHdpdHRlclwiPjwvaT4gPHNwYW4+VHdpdHRlcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLWZhY2Vib29rXCI+PC9pPiA8c3Bhbj5GYWNlYm9vazwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLWxpbmtlZGluXCI+PC9pPiA8c3Bhbj5MaW5rZWRJbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVmMmY4O1xuICAgICAgICAgICAgY29sb3I6ICM4ODkwOWE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDsgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiB0aGUgc2lkZW5hdiAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXG4gICAgICAgICAgICB3aWR0aDogMDsgLyogMCB3aWR0aCAtIGNoYW5nZSB0aGlzIHdpdGggSmF2YVNjcmlwdCAqL1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgICAgICAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgICAgICAgICAgdG9wOiAwOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIDE0MWRlZyxcbiAgICAgICAgICAgICAgIzlmYjhhZCAwJSxcbiAgICAgICAgICAgICAgIzFmYzhkYiA1MSUsXG4gICAgICAgICAgICAgICMyY2I1ZTggNzUlXG4gICAgICAgICAgICApOyAvKiBCbGFjayovXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGNvbG9yOiAjZWVlZWVlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIGEge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODE4MTgxO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3MgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcyAubWVudS1oZWFkZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3MgaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcyBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzID4gbGkgPiBhIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvcC1iYXIgPiAuaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgY29sb3I6ICM1ZDY4NmY7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdE5hdjtcbiJdfQ== */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostNav.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PostNav);

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
      color: "#4a4a4a",
      fontSize: "2.7rem",
      textAlign: "left",
      lineHeight: "3.7rem"
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })),
  p: props => __jsx("p", _extends({
    style: {
      marginBottom: "1rem",
      marginTop: "1rem"
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })),
  pre: props => __jsx("div", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })),
  code: _components_CodeBlock__WEBPACK_IMPORTED_MODULE_2__["default"],
  li: props => __jsx("li", _extends({
    style: {
      marginLeft: "2rem"
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })),
  img: props => __jsx("img", _extends({
    style: {
      width: "100%"
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })),
  a: props => __jsx("a", _extends({
    style: {
      textDecoration: "none",
      color: "rgb(52, 158, 243)"
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))
};

const Style = ({
  children
}) => __jsx("style", {
  dangerouslySetInnerHTML: {
    __html: children
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (({
  Component,
  pageProps
}) => {
  if (Component.isMDXComponent) {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["MDXProvider"], {
      components: mdComponents,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, __jsx(Style, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, unified_ui__WEBPACK_IMPORTED_MODULE_3__["baseStyles"]), __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }))));
  } else {
    return __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }));
  }
});

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
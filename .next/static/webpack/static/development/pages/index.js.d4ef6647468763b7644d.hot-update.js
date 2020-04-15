webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Profile */ "./components/Profile.js");






var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var Nav =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Nav, _React$Component);

  function Nav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).call(this, props));
    _this.toggleMenu = _this.toggleMenu.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.menuOpened = false;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      var links = document.querySelector(".links");
      var content = document.querySelector(".content");
      var topBar = document.querySelector(".top-bar");
      var footer = document.querySelector("footer");

      if (!this.menuOpened) {
        links.style["display"] = "flex";
        setTimeout(function () {
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
        setTimeout(function () {
          links.style["display"] = "none";
        }, 100);
        this.menuOpened = false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1924329216" + " " + "top-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("i", {
        onClick: this.toggleMenu,
        className: "jsx-1924329216" + " " + "icon ion-md-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Sebastian Gomez"), __jsx("img", {
        src: "foto_personal.jpg",
        width: "32px",
        height: "32px",
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("ul", {
        className: "jsx-1924329216" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1924329216" + " " + "menu-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("img", {
        src: "foto_personal.jpg",
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx("h2", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Sebastian Gomez")), __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("li", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1924329216" + " " + "icon ion-md-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Inicio"))), __jsx("li", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1924329216" + " " + "icon ion-md-bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Categor\xEDas"))), __jsx("li", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1924329216" + " " + "icon ion-md-clipboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Docencia"))), __jsx("li", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1924329216" + " " + "icon ion-md-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Sobre M\xED"))), __jsx("li", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1924329216" + " " + "icon ion-md-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Buscar"))), __jsx("li", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1924329216" + " " + "icon ion-md-mic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Charlas"))), __jsx("li", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1924329216" + " " + "icon ion-logo-rss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Rss"))), __jsx("li", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1924329216" + " " + "icon ion-logo-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Twitter"))), __jsx("li", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1924329216" + " " + "icon ion-logo-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Facebook"))), __jsx("li", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1924329216" + " " + "icon ion-logo-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-1924329216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "LinkedIn")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1924329216",
        __self: this
      }, ".top-bar.jsx-1924329216{width:100%;height:3em;top:0;position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #eef2f8;color:#88909a;background-color:white;z-index:1;-webkit-transition:0.3s;transition:0.3s;}.links.jsx-1924329216{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-image:linear-gradient( 141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75% );overflow-x:hidden;-webkit-transition:0.3s;transition:0.3s;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#eeeeee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-1924329216 a.jsx-1924329216{padding:8px 8px 8px 32px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#818181;display:block;-webkit-transition:0.3s;transition:0.3s;}.links.jsx-1924329216 h2.jsx-1924329216{font-size:1.2em;}.links.jsx-1924329216 .menu-header.jsx-1924329216{text-align:center;}.links.jsx-1924329216 img.jsx-1924329216{max-width:100px;}.links.jsx-1924329216 li.jsx-1924329216{list-style:none;padding-left:1em;}img.jsx-1924329216{border-radius:50%;margin-right:1em;}.links.jsx-1924329216>li.jsx-1924329216>a.jsx-1924329216{color:white;font-size:1rem;}.top-bar.jsx-1924329216>.icon.jsx-1924329216{font-size:1.5em;color:#5d686f;padding-left:1em;}@media screen and (min-width:767px){.top-bar.jsx-1924329216{display:none;}.links.jsx-1924329216{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (max-width:767px){nav.jsx-1924329216{margin-top:4rem;}.top-bar.jsx-1924329216{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-1924329216{display:none;}}@media screen and (min-width:768px) and (max-width:1024px){nav.jsx-1924329216{margin-top:4rem;}.links.jsx-1924329216{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:75px;}img.jsx-1924329216{width:40px;margin:1em 1em;}h2.jsx-1924329216{display:none;}span.jsx-1924329216{display:none;}.links.jsx-1924329216>li.jsx-1924329216>a.jsx-1924329216{text-align:center;color:white;padding:0 0 1rem 0;font-size:1.5rem;}.links.jsx-1924329216 li.jsx-1924329216{padding-left:0;padding-bottom:1rem;}}@media screen and (min-width:1025px) and (max-width:1280px){.links.jsx-1924329216{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:250px;padding-top:1rem;}.links.jsx-1924329216 h2.jsx-1924329216{font-size:1.2em;margin:1rem 0;}.links.jsx-1924329216 li.jsx-1924329216{padding-left:0;padding-bottom:1rem;}}@media screen and (min-width:1281px){.links.jsx-1924329216{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:500px;padding-top:1rem;}.links.jsx-1924329216 li.jsx-1924329216 a.jsx-1924329216{font-size:1.2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdvQixBQUd3QixBQWNDLEFBcUJhLEFBUVQsQUFHRSxBQUdGLEFBR0EsQUFJRSxBQUlOLEFBSUksQUFNRCxBQUdBLEFBS0csQUFHSCxBQUdBLEFBS0csQUFHSCxBQUlGLEFBSUUsQUFHQSxBQUdLLEFBTUgsQUFNRixBQUtHLEFBSUQsQUFNRixBQUtJLFdBeklSLEFBZ0dNLENBbEZULEFBOENPLENBVWYsQUFjQSxBQWdCQSxBQUdBLEVBU3NCLEFBZUEsQ0FwRnhCLEFBTUEsQUFHbUIsQUFZSCxBQWNkLEFBV0EsQUFrQ2dCLENBZWhCLENBNUZGLEFBVW1CLEFBa0RILEVBM0ZDLEVBZFQsR0FrQ2UsQ0E4RHJCLENBcENGLENBM0RpQixFQStERSxBQTBDSSxBQWlCckIsR0F2RUYsRUFyQ1ksQUF5Q1osQUF3REUsQUFlQSxRQTdIYSxFQWNQLEVBaURSLEVBMENxQixFQTFGWixPQU1OLFFBcUZELFFBcENBLEFBUUEsQUFXYSxBQTBCQyxBQWVBLENBakdDLFVBeURmLENBMEJtQixBQWVBLElBakdMLGFBbUZkLEFBZUEsQ0FqR2MsYUFsQ0ssQ0FtQ0gscUJBZEUsa0JBQ0YsQ0FjbEIsdUNBYmdDLGFBdEJBLHNHQXVCZixhQXRCaUIsZ0NBQ2xCLFlBc0JRLEVBckJDLHVCQUNiLFVBQ00sd0NBQ2xCLEdBbUJnQixjQUNELDBFQUNmIiwiZmlsZSI6Ii9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9OYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlXCI7XG5cbmNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubWVudU9wZW5lZCA9IGZhbHNlO1xuICB9XG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtzXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3AtYmFyXCIpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG4gICAgaWYgKCF0aGlzLm1lbnVPcGVuZWQpIHtcbiAgICAgIGxpbmtzLnN0eWxlW1wiZGlzcGxheVwiXSA9IFwiZmxleFwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxpbmtzLnN0eWxlW1wid2lkdGhcIl0gPSBcIjI1MHB4XCI7XG4gICAgICAgIGNvbnRlbnQuc3R5bGVbXCJ0cmFuc2Zvcm1cIl0gPSBcInRyYW5zbGF0ZTNkKDI1MHB4LCAwLCAwKVwiO1xuICAgICAgICB0b3BCYXIuc3R5bGVbXCJ0cmFuc2Zvcm1cIl0gPSBcInRyYW5zbGF0ZTNkKDI1MHB4LCAwLCAwKVwiO1xuICAgICAgICBmb290ZXIuc3R5bGVbXCJ0cmFuc2Zvcm1cIl0gPSBcInRyYW5zbGF0ZTNkKDI1MHB4LCAwLCAwKVwiO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIHRoaXMubWVudU9wZW5lZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmtzLnN0eWxlW1wid2lkdGhcIl0gPSBcIjBcIjtcbiAgICAgIGNvbnRlbnQuc3R5bGVbXCJ0cmFuc2Zvcm1cIl0gPSBcInRyYW5zbGF0ZTNkKDAsIDAsIDApXCI7XG4gICAgICB0b3BCYXIuc3R5bGVbXCJ0cmFuc2Zvcm1cIl0gPSBcInRyYW5zbGF0ZTNkKDAsIDAsIDApXCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGlua3Muc3R5bGVbXCJkaXNwbGF5XCJdID0gXCJub25lXCI7XG4gICAgICB9LCAxMDApO1xuICAgICAgdGhpcy5tZW51T3BlbmVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFyXCI+XG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy50b2dnbGVNZW51fSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1tZW51XCI+PC9pPlxuICAgICAgICAgIDxoMT5TZWJhc3RpYW4gR29tZXo8L2gxPlxuICAgICAgICAgIDxpbWcgc3JjPVwiZm90b19wZXJzb25hbC5qcGdcIiB3aWR0aD1cIjMycHhcIiBoZWlnaHQ9XCIzMnB4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiZm90b19wZXJzb25hbC5qcGdcIiAvPlxuICAgICAgICAgICAgPGgyPlNlYmFzdGlhbiBHb21lejwvaDI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8UHJvZmlsZSAvPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1ob21lXCI+PC9pPiA8c3Bhbj5JbmljaW88L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtYm9va21hcmtcIj48L2k+IDxzcGFuPkNhdGVnb3LDrWFzPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWNsaXBib2FyZFwiPjwvaT4gPHNwYW4+RG9jZW5jaWE8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtY29udGFjdFwiPjwvaT4gPHNwYW4+U29icmUgTcOtPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLXNlYXJjaFwiPjwvaT4gPHNwYW4+QnVzY2FyPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLW1pY1wiPjwvaT4gPHNwYW4+Q2hhcmxhczwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLXJzc1wiPjwvaT4gPHNwYW4+UnNzPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tdHdpdHRlclwiPjwvaT4gPHNwYW4+VHdpdHRlcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLWZhY2Vib29rXCI+PC9pPiA8c3Bhbj5GYWNlYm9vazwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLWxpbmtlZGluXCI+PC9pPiA8c3Bhbj5MaW5rZWRJbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWYyZjg7XG4gICAgICAgICAgICBjb2xvcjogIzg4OTA5YTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xuICAgICAgICAgICAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgICAgICAgICAgei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cbiAgICAgICAgICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAxNDFkZWcsXG4gICAgICAgICAgICAgICM5ZmI4YWQgMCUsXG4gICAgICAgICAgICAgICMxZmM4ZGIgNTElLFxuICAgICAgICAgICAgICAjMmNiNWU4IDc1JVxuICAgICAgICAgICAgKTsgLyogQmxhY2sqL1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzOyAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgY29sb3I6ICNlZWVlZWU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3MgYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MTgxODE7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcyBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3MgLm1lbnUtaGVhZGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3MgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcyA+IGxpID4gYSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b3AtYmFyID4gLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNWQ2ODZmO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxZW0gMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3MgPiBsaSA+IGEge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDFyZW0gMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3MgbGkge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3MgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyBsaSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODFweCkge1xuICAgICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyBsaSBhIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdfQ== */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Nav.js */"));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.d4ef6647468763b7644d.hot-update.js.map
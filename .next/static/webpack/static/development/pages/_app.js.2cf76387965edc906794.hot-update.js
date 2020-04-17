webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/PostNav.js":
/*!*******************************!*\
  !*** ./components/PostNav.js ***!
  \*******************************/
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






var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var PostNav =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostNav, _React$Component);

  function PostNav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostNav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostNav).call(this, props));
    _this.toggleMenu = _this.toggleMenu.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.menuOpened = false;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostNav, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      var links = document.querySelector(".links");
      var content = document.querySelector(".post");
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
        footer.style["transform"] = "translate3d(0, 0, 0)";
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
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3464989089" + " " + "top-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("i", {
        onClick: this.toggleMenu,
        className: "jsx-3464989089" + " " + "icon ion-md-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Sebastian Gomez"), __jsx("img", {
        src: "/foto_personal.jpg",
        width: "32px",
        height: "32px",
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("ul", {
        className: "jsx-3464989089" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3464989089" + " " + "menu-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("img", {
        src: "/foto_personal.jpg",
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx("h2", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Sebastian Gomez")), __jsx("li", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3464989089" + " " + "icon ion-md-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Inicio"))), __jsx("li", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3464989089" + " " + "icon ion-md-bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Categor\xEDas"))), __jsx("li", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3464989089" + " " + "icon ion-md-clipboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Docencia"))), __jsx("li", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3464989089" + " " + "icon ion-md-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Sobre M\xED"))), __jsx("li", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3464989089" + " " + "icon ion-md-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Buscar"))), __jsx("li", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3464989089" + " " + "icon ion-md-mic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Charlas"))), __jsx("li", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3464989089" + " " + "icon ion-logo-rss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Rss"))), __jsx("li", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3464989089" + " " + "icon ion-logo-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Twitter"))), __jsx("li", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3464989089" + " " + "icon ion-logo-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Facebook"))), __jsx("li", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3464989089" + " " + "icon ion-logo-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3464989089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "LinkedIn")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3464989089",
        __self: this
      }, ".top-bar.jsx-3464989089{width:100%;height:55px;top:0;position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #eef2f8;color:#88909a;background-color:white;z-index:1;-webkit-transition:0.3s;transition:0.3s;}.links.jsx-3464989089{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-image:linear-gradient( 141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75% );overflow-x:hidden;-webkit-transition:0.3s;transition:0.3s;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#eeeeee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-3464989089 a.jsx-3464989089{padding:8px 8px 8px 32px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#818181;display:block;-webkit-transition:0.3s;transition:0.3s;}.links.jsx-3464989089 h2.jsx-3464989089{font-size:2em;}.links.jsx-3464989089 .menu-header.jsx-3464989089{text-align:center;}.links.jsx-3464989089 img.jsx-3464989089{max-width:100px;}.links.jsx-3464989089 li.jsx-3464989089{list-style:none;padding-left:1em;}img.jsx-3464989089{border-radius:50%;margin-right:1em;}.links.jsx-3464989089>li.jsx-3464989089>a.jsx-3464989089{color:white;font-size:25px;}.top-bar.jsx-3464989089>.icon.jsx-3464989089{font-size:1.5em;color:#5d686f;padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0TmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHb0IsQUFHd0IsQUFjQyxBQW9CYSxBQVFYLEFBR0ksQUFHRixBQUdBLEFBSUUsQUFJTixBQUlJLFdBOURKLENBY0osQUE2Q08sRUFqQmpCLEVBTUEsQUFHbUIsQUFZSCxFQWxCaEIsQUFVbUIsRUF4Q0YsR0FkVCxFQWlDZSxFQTBCdkIsRUExRGlCLENBOERFLEdBWm5CLEVBcENZLEFBd0NaLFNBckRlLENBY1AsRUFnRFIsSUEvQ1MsT0FNTixpQkFXYyxlQUNELGNBQ0EsY0FqQ0ssQUFrQ0gscUJBYkUsa0JBQ0YsQ0FhbEIsdUNBWmlCLGNBdEJlLDJDQXVCUix3RUF0QlUsTUF1QmxCLGNBQ0QsWUF2QkMsY0FDUyx1QkFDYixVQUNNLGVBcUJsQix5QkFwQkEiLCJmaWxlIjoiL1VzZXJzL3MuZ29tZXovRGVza3RvcC9zZWJhc3RpYW4tZ29tZXotbmV4dC9jb21wb25lbnRzL1Bvc3ROYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFBvc3ROYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnRvZ2dsZU1lbnUgPSB0aGlzLnRvZ2dsZU1lbnUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1lbnVPcGVuZWQgPSBmYWxzZTtcbiAgfVxuICB0b2dnbGVNZW51KCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rc1wiKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3N0XCIpO1xuICAgIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wLWJhclwiKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuICAgIGlmICghdGhpcy5tZW51T3BlbmVkKSB7XG4gICAgICBsaW5rcy5zdHlsZVtcImRpc3BsYXlcIl0gPSBcImZsZXhcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsaW5rcy5zdHlsZVtcIndpZHRoXCJdID0gXCIyNTBweFwiO1xuICAgICAgICBjb250ZW50LnN0eWxlW1widHJhbnNmb3JtXCJdID0gXCJ0cmFuc2xhdGUzZCgyNTBweCwgMCwgMClcIjtcbiAgICAgICAgdG9wQmFyLnN0eWxlW1widHJhbnNmb3JtXCJdID0gXCJ0cmFuc2xhdGUzZCgyNTBweCwgMCwgMClcIjtcbiAgICAgICAgZm9vdGVyLnN0eWxlW1widHJhbnNmb3JtXCJdID0gXCJ0cmFuc2xhdGUzZCgyNTBweCwgMCwgMClcIjtcbiAgICAgIH0sIDEwMCk7XG4gICAgICB0aGlzLm1lbnVPcGVuZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5rcy5zdHlsZVtcIndpZHRoXCJdID0gXCIwXCI7XG4gICAgICBjb250ZW50LnN0eWxlW1widHJhbnNmb3JtXCJdID0gXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiO1xuICAgICAgdG9wQmFyLnN0eWxlW1widHJhbnNmb3JtXCJdID0gXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiO1xuICAgICAgZm9vdGVyLnN0eWxlW1widHJhbnNmb3JtXCJdID0gXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxpbmtzLnN0eWxlW1wiZGlzcGxheVwiXSA9IFwibm9uZVwiO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIHRoaXMubWVudU9wZW5lZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhclwiPlxuICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWVudX0gY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtbWVudVwiPjwvaT5cbiAgICAgICAgICA8aDE+U2ViYXN0aWFuIEdvbWV6PC9oMT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9mb3RvX3BlcnNvbmFsLmpwZ1wiIHdpZHRoPVwiMzJweFwiIGhlaWdodD1cIjMycHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWhlYWRlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvZm90b19wZXJzb25hbC5qcGdcIiAvPlxuICAgICAgICAgICAgPGgyPlNlYmFzdGlhbiBHb21lejwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWhvbWVcIj48L2k+IDxzcGFuPkluaWNpbzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1ib29rbWFya1wiPjwvaT4gPHNwYW4+Q2F0ZWdvcsOtYXM8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtY2xpcGJvYXJkXCI+PC9pPiA8c3Bhbj5Eb2NlbmNpYTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1jb250YWN0XCI+PC9pPiA8c3Bhbj5Tb2JyZSBNw608L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtc2VhcmNoXCI+PC9pPiA8c3Bhbj5CdXNjYXI8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtbWljXCI+PC9pPiA8c3Bhbj5DaGFybGFzPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tcnNzXCI+PC9pPiA8c3Bhbj5Sc3M8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby10d2l0dGVyXCI+PC9pPiA8c3Bhbj5Ud2l0dGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tZmFjZWJvb2tcIj48L2k+IDxzcGFuPkZhY2Vib29rPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tbGlua2VkaW5cIj48L2k+IDxzcGFuPkxpbmtlZEluPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWYyZjg7XG4gICAgICAgICAgICBjb2xvcjogIzg4OTA5YTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xuICAgICAgICAgICAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgICAgICAgICAgei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cbiAgICAgICAgICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAxNDFkZWcsXG4gICAgICAgICAgICAgICM5ZmI4YWQgMCUsXG4gICAgICAgICAgICAgICMxZmM4ZGIgNTElLFxuICAgICAgICAgICAgICAjMmNiNWU4IDc1JVxuICAgICAgICAgICAgKTsgLyogQmxhY2sqL1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzOyAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgY29sb3I6ICNlZWVlZWU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3MgYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MTgxODE7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcyBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIC5tZW51LWhlYWRlciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcyBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3MgPiBsaSA+IGEge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9wLWJhciA+IC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBjb2xvcjogIzVkNjg2ZjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0TmF2O1xuIl19 */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostNav.js */"));
    }
  }]);

  return PostNav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostNav);

/***/ })

})
//# sourceMappingURL=_app.js.2cf76387965edc906794.hot-update.js.map
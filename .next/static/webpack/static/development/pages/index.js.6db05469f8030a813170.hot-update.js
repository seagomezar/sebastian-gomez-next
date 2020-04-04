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
    _this.openMenu = _this.openMenu.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "openMenu",
    value: function openMenu() {
      var links = document.querySelector(".links");
      links.style["display"] = "block";
      links.style["width"] = "250px";
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      var links = document.querySelector(".links");
      links.style["display"] = "none";
      links.style["width"] = "0";
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1830618881" + " " + "top-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("i", {
        onClick: this.openMenu,
        className: "jsx-1830618881" + " " + "icon ion-md-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Sebastian Gomez"), __jsx("img", {
        src: "foto_personal.jpg",
        width: "32px",
        height: "32px",
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), __jsx("ul", {
        className: "jsx-1830618881" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        onClick: this.closeMenu,
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Close"), __jsx("li", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1830618881" + " " + "icon ion-md-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), " Inicio"), __jsx("li", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1830618881" + " " + "icon ion-md-bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), " Categor\xEDas"), __jsx("li", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1830618881" + " " + "icon ion-md-clipboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), " Docencia"), __jsx("li", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1830618881" + " " + "icon ion-md-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), " Sobre M\xED"), __jsx("li", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1830618881" + " " + "icon ion-md-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), " Buscar"), __jsx("li", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1830618881" + " " + "icon ion-md-mic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), " Charlas"), __jsx("li", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1830618881" + " " + "icon ion-logo-rss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), " Rss"), __jsx("li", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1830618881" + " " + "icon ion-logo-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), " Twitter"), __jsx("li", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1830618881" + " " + "icon ion-logo-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), " Facebook"), __jsx("li", {
        className: "jsx-1830618881",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1830618881" + " " + "icon ion-logo-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), " LinkedIn")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1830618881",
        __self: this
      }, ".top-bar.jsx-1830618881{width:100%;height:3em;position:fixed;padding-bottom:3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border-bottom:1px solid #eef2f8;color:#88909a;}.links.jsx-1830618881{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-image:linear-gradient( 141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75% );overflow-x:hidden;padding-top:60px;-webkit-transition:all 0.5s;transition:all 0.5s;}.links.jsx-1830618881 a.jsx-1830618881{padding:8px 8px 8px 32px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#818181;display:block;-webkit-transition:0.3s;transition:0.3s;}img.jsx-1830618881{border-radius:50%;}.top-bar.jsx-1830618881>.icon.jsx-1830618881{font-size:1.5em;color:#5d686f;}@media screen and (min-width:728px){.top-bar.jsx-1830618881{display:none;}.links.jsx-1830618881{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (max-width:728px){.top-bar.jsx-1830618881{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-1830618881{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERvQixBQUd3QixBQVdDLEFBaUJhLEFBUVAsQUFHRixBQUtELEFBR0EsQUFLQSxBQUdBLFdBdERKLENBV0gsQ0FpQ1IsQUFXQSxHQWhCYyxFQUhoQixFQXhCaUIsRUFYQSxHQTJCTSxLQVl2QixLQTNCWSxFQVhTLFFBWWIsTUFDQyxLQVpNLEVBa0JaLGdCQTBCRCxBQUtBLENBdkJlLGVBQ0QsY0FDQSxjQUNFLFlBNUJHLFNBa0JELGtCQUNELENBVW5CLGdCQVRzQixnREFDdEIsQ0FwQitCLDJIQUNHLGdDQUNsQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvcy5nb21lei9EZXNrdG9wL3NlYmFzdGlhbi1nb21lei1uZXh0L2NvbXBvbmVudHMvTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9wZW5NZW51ID0gdGhpcy5vcGVuTWVudS5iaW5kKHRoaXMpO1xuICB9XG4gIG9wZW5NZW51KCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rc1wiKTtcbiAgICBsaW5rcy5zdHlsZVtcImRpc3BsYXlcIl0gPSBcImJsb2NrXCI7XG4gICAgbGlua3Muc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMjUwcHhcIjtcbiAgfVxuICBjbG9zZU1lbnUoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtzXCIpO1xuICAgIGxpbmtzLnN0eWxlW1wiZGlzcGxheVwiXSA9IFwibm9uZVwiO1xuICAgIGxpbmtzLnN0eWxlW1wid2lkdGhcIl0gPSBcIjBcIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhclwiPlxuICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMub3Blbk1lbnV9IGNsYXNzTmFtZT1cImljb24gaW9uLW1kLW1lbnVcIj48L2k+XG4gICAgICAgICAgPGgxPlNlYmFzdGlhbiBHb21lejwvaDE+XG4gICAgICAgICAgPGltZyBzcmM9XCJmb3RvX3BlcnNvbmFsLmpwZ1wiIHdpZHRoPVwiMzJweFwiIGhlaWdodD1cIjMycHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmNsb3NlTWVudX0+Q2xvc2U8L2Rpdj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1ob21lXCI+PC9pPiBJbmljaW9cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWJvb2ttYXJrXCI+PC9pPiBDYXRlZ29yw61hc1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtY2xpcGJvYXJkXCI+PC9pPiBEb2NlbmNpYVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtY29udGFjdFwiPjwvaT4gU29icmUgTcOtXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1zZWFyY2hcIj48L2k+IEJ1c2NhclxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtbWljXCI+PC9pPiBDaGFybGFzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLXJzc1wiPjwvaT4gUnNzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLXR3aXR0ZXJcIj48L2k+IFR3aXR0ZXJcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tZmFjZWJvb2tcIj48L2k+IEZhY2Vib29rXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLWxpbmtlZGluXCI+PC9pPiBMaW5rZWRJblxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZjJmODtcbiAgICAgICAgICAgIGNvbG9yOiAjODg5MDlhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXG4gICAgICAgICAgICB3aWR0aDogMDsgLyogMCB3aWR0aCAtIGNoYW5nZSB0aGlzIHdpdGggSmF2YVNjcmlwdCAqL1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgICAgICAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgICAgICAgICAgdG9wOiAwOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIDE0MWRlZyxcbiAgICAgICAgICAgICAgIzlmYjhhZCAwJSxcbiAgICAgICAgICAgICAgIzFmYzhkYiA1MSUsXG4gICAgICAgICAgICAgICMyY2I1ZTggNzUlXG4gICAgICAgICAgICApOyAvKiBCbGFjayovXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41czsgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiB0aGUgc2lkZW5hdiAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3MgYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MTgxODE7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b3AtYmFyID4gLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNWQ2ODZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjhweCkge1xuICAgICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI4cHgpIHtcbiAgICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdfQ== */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Nav.js */"));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.6db05469f8030a813170.hot-update.js.map
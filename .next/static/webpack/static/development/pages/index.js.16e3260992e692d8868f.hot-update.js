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
      links.classList.add("links-opened");
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
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4054020444" + " " + "top-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("i", {
        onClick: this.openMenu,
        className: "jsx-4054020444" + " " + "icon ion-md-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Sebastian Gomez"), __jsx("img", {
        src: "foto_personal.jpg",
        width: "32px",
        height: "32px",
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), __jsx("ul", {
        className: "jsx-4054020444" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("div", {
        onClick: this.closeMenu,
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Close"), __jsx("li", {
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4054020444" + " " + "icon ion-md-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), " Inicio"), __jsx("li", {
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4054020444" + " " + "icon ion-md-bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), " Categor\xEDas"), __jsx("li", {
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4054020444" + " " + "icon ion-md-clipboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), " Docencia"), __jsx("li", {
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4054020444" + " " + "icon ion-md-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), " Sobre M\xED"), __jsx("li", {
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4054020444" + " " + "icon ion-md-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), " Buscar"), __jsx("li", {
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4054020444" + " " + "icon ion-md-mic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), " Charlas"), __jsx("li", {
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4054020444" + " " + "icon ion-logo-rss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), " Rss"), __jsx("li", {
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4054020444" + " " + "icon ion-logo-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), " Twitter"), __jsx("li", {
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4054020444" + " " + "icon ion-logo-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), " Facebook"), __jsx("li", {
        className: "jsx-4054020444",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4054020444" + " " + "icon ion-logo-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), " LinkedIn")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4054020444",
        __self: this
      }, ".top-bar.jsx-4054020444{width:100%;height:3em;top:0;position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border-bottom:1px solid #eef2f8;color:#88909a;background-color:white;z-index:1;}.links-opened.jsx-4054020444{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-image:linear-gradient( 141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75% );overflow-x:hidden;padding-top:60px;-webkit-transition:width 2s ease;transition:width 2s ease;}.links-opened.jsx-4054020444 a.jsx-4054020444{padding:8px 8px 8px 32px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#818181;display:block;-webkit-transition:0.3s;transition:0.3s;}img.jsx-4054020444{border-radius:50%;}.top-bar.jsx-4054020444>.icon.jsx-4054020444{font-size:1.5em;color:#5d686f;}@media screen and (min-width:728px){.top-bar.jsx-4054020444{display:none;}.links.jsx-4054020444{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (max-width:728px){nav.jsx-4054020444{margin-top:4rem;}.top-bar.jsx-4054020444{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-4054020444{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURvQixBQUd3QixBQWFDLEFBaUJhLEFBUVAsQUFHRixBQUtELEFBR0EsQUFLRyxBQUdILEFBR0EsV0EzREosQ0FhSCxDQWlDUixBQWNBLEdBbkJjLEFBYWQsRUFoQkYsRUF4QmlCLEVBYlQsR0E2QmUsR0E1Qk4sRUF3Q2pCLEtBM0JZLFFBWkcsRUFhUCxNQUNDLE9BTU4sZ0JBMEJELEFBUUEsQ0ExQmUsZUFDRCxjQUNBLGFBN0JLLENBOEJILHFCQVZFLGtCQUNELENBVW5CLGdCQVQyQixvQ0FyQkksc0JBc0IvQixxR0FyQmtDLGdDQUNsQixjQUNTLHVCQUNiLFVBQ1oiLCJmaWxlIjoiL1VzZXJzL3MuZ29tZXovRGVza3RvcC9zZWJhc3RpYW4tZ29tZXotbmV4dC9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKTtcbiAgfVxuICBvcGVuTWVudSgpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua3NcIik7XG4gICAgbGlua3MuY2xhc3NMaXN0LmFkZChcImxpbmtzLW9wZW5lZFwiKTtcbiAgfVxuICBjbG9zZU1lbnUoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtzXCIpO1xuICAgIGxpbmtzLnN0eWxlW1wiZGlzcGxheVwiXSA9IFwibm9uZVwiO1xuICAgIGxpbmtzLnN0eWxlW1wid2lkdGhcIl0gPSBcIjBcIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhclwiPlxuICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMub3Blbk1lbnV9IGNsYXNzTmFtZT1cImljb24gaW9uLW1kLW1lbnVcIj48L2k+XG4gICAgICAgICAgPGgxPlNlYmFzdGlhbiBHb21lejwvaDE+XG4gICAgICAgICAgPGltZyBzcmM9XCJmb3RvX3BlcnNvbmFsLmpwZ1wiIHdpZHRoPVwiMzJweFwiIGhlaWdodD1cIjMycHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmNsb3NlTWVudX0+Q2xvc2U8L2Rpdj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1ob21lXCI+PC9pPiBJbmljaW9cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWJvb2ttYXJrXCI+PC9pPiBDYXRlZ29yw61hc1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtY2xpcGJvYXJkXCI+PC9pPiBEb2NlbmNpYVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtY29udGFjdFwiPjwvaT4gU29icmUgTcOtXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1zZWFyY2hcIj48L2k+IEJ1c2NhclxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtbWljXCI+PC9pPiBDaGFybGFzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLXJzc1wiPjwvaT4gUnNzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLXR3aXR0ZXJcIj48L2k+IFR3aXR0ZXJcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tZmFjZWJvb2tcIj48L2k+IEZhY2Vib29rXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLWxpbmtlZGluXCI+PC9pPiBMaW5rZWRJblxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVmMmY4O1xuICAgICAgICAgICAgY29sb3I6ICM4ODkwOWE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcy1vcGVuZWQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXG4gICAgICAgICAgICB3aWR0aDogMDsgLyogMCB3aWR0aCAtIGNoYW5nZSB0aGlzIHdpdGggSmF2YVNjcmlwdCAqL1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgICAgICAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgICAgICAgICAgdG9wOiAwOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIDE0MWRlZyxcbiAgICAgICAgICAgICAgIzlmYjhhZCAwJSxcbiAgICAgICAgICAgICAgIzFmYzhkYiA1MSUsXG4gICAgICAgICAgICAgICMyY2I1ZTggNzUlXG4gICAgICAgICAgICApOyAvKiBCbGFjayovXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAycyBlYXNlOyAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcy1vcGVuZWQgYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MTgxODE7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b3AtYmFyID4gLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNWQ2ODZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjhweCkge1xuICAgICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI4cHgpIHtcbiAgICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXX0= */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Nav.js */"));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.16e3260992e692d8868f.hot-update.js.map
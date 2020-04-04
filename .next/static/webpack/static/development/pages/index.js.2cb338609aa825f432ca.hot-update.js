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
      links.classList.padEnd(" links-opened");
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
      }, ".top-bar.jsx-4054020444{width:100%;height:3em;top:0;position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border-bottom:1px solid #eef2f8;color:#88909a;background-color:white;z-index:1;}.links-opened.jsx-4054020444{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-image:linear-gradient( 141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75% );overflow-x:hidden;padding-top:60px;-webkit-transition:width 2s ease;transition:width 2s ease;}.links-opened.jsx-4054020444 a.jsx-4054020444{padding:8px 8px 8px 32px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#818181;display:block;-webkit-transition:0.3s;transition:0.3s;}img.jsx-4054020444{border-radius:50%;}.top-bar.jsx-4054020444>.icon.jsx-4054020444{font-size:1.5em;color:#5d686f;}@media screen and (min-width:728px){.top-bar.jsx-4054020444{display:none;}.links.jsx-4054020444{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (max-width:728px){nav.jsx-4054020444{margin-top:4rem;}.top-bar.jsx-4054020444{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-4054020444{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURvQixBQUd3QixBQWFDLEFBaUJhLEFBUVAsQUFHRixBQUtELEFBR0EsQUFLRyxBQUdILEFBR0EsV0EzREosQ0FhSCxDQWlDUixBQWNBLEdBbkJjLEFBYWQsRUFoQkYsRUF4QmlCLEVBYlQsR0E2QmUsR0E1Qk4sRUF3Q2pCLEtBM0JZLFFBWkcsRUFhUCxNQUNDLE9BTU4sZ0JBMEJELEFBUUEsQ0ExQmUsZUFDRCxjQUNBLGFBN0JLLENBOEJILHFCQVZFLGtCQUNELENBVW5CLGdCQVQyQixvQ0FyQkksc0JBc0IvQixxR0FyQmtDLGdDQUNsQixjQUNTLHVCQUNiLFVBQ1oiLCJmaWxlIjoiL1VzZXJzL3MuZ29tZXovRGVza3RvcC9zZWJhc3RpYW4tZ29tZXotbmV4dC9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKTtcbiAgfVxuICBvcGVuTWVudSgpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua3NcIik7XG4gICAgbGlua3MuY2xhc3NMaXN0LnBhZEVuZChcIiBsaW5rcy1vcGVuZWRcIik7XG4gIH1cbiAgY2xvc2VNZW51KCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rc1wiKTtcbiAgICBsaW5rcy5zdHlsZVtcImRpc3BsYXlcIl0gPSBcIm5vbmVcIjtcbiAgICBsaW5rcy5zdHlsZVtcIndpZHRoXCJdID0gXCIwXCI7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXJcIj5cbiAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLm9wZW5NZW51fSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1tZW51XCI+PC9pPlxuICAgICAgICAgIDxoMT5TZWJhc3RpYW4gR29tZXo8L2gxPlxuICAgICAgICAgIDxpbWcgc3JjPVwiZm90b19wZXJzb25hbC5qcGdcIiB3aWR0aD1cIjMycHhcIiBoZWlnaHQ9XCIzMnB4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbG9zZU1lbnV9PkNsb3NlPC9kaXY+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtaG9tZVwiPjwvaT4gSW5pY2lvXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1ib29rbWFya1wiPjwvaT4gQ2F0ZWdvcsOtYXNcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWNsaXBib2FyZFwiPjwvaT4gRG9jZW5jaWFcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWNvbnRhY3RcIj48L2k+IFNvYnJlIE3DrVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtc2VhcmNoXCI+PC9pPiBCdXNjYXJcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLW1pY1wiPjwvaT4gQ2hhcmxhc1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby1yc3NcIj48L2k+IFJzc1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby10d2l0dGVyXCI+PC9pPiBUd2l0dGVyXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLWZhY2Vib29rXCI+PC9pPiBGYWNlYm9va1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby1saW5rZWRpblwiPjwvaT4gTGlua2VkSW5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZjJmODtcbiAgICAgICAgICAgIGNvbG9yOiAjODg5MDlhO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3Mtb3BlbmVkIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xuICAgICAgICAgICAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgICAgICAgICAgei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cbiAgICAgICAgICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAxNDFkZWcsXG4gICAgICAgICAgICAgICM5ZmI4YWQgMCUsXG4gICAgICAgICAgICAgICMxZmM4ZGIgNTElLFxuICAgICAgICAgICAgICAjMmNiNWU4IDc1JVxuICAgICAgICAgICAgKTsgLyogQmxhY2sqL1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMnMgZWFzZTsgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiB0aGUgc2lkZW5hdiAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3Mtb3BlbmVkIGEge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODE4MTgxO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9wLWJhciA+IC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBjb2xvcjogIzVkNjg2ZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzI4cHgpIHtcbiAgICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyOHB4KSB7XG4gICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl19 */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Nav.js */"));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.2cb338609aa825f432ca.hot-update.js.map
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
    _this.toogleLinks = _this.toogleLinks.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "toogleLinks",
    value: function toogleLinks(event) {
      var links = document.querySelector(".links");
      links.style["display"] = "block";
      links.style["width"] = "250px";
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2374059578" + " " + "top-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("i", {
        onClick: this.toogleLinks,
        className: "jsx-2374059578" + " " + "icon ion-md-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Sebastian Gomez"), __jsx("img", {
        src: "foto_personal.jpg",
        width: "32px",
        height: "32px",
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), __jsx("ul", {
        className: "jsx-2374059578" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), " Inicio"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), " Categor\xEDas"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-clipboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), " Docencia"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), " Sobre M\xED"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), " Buscar"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-mic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), " Charlas"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-logo-rss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), " Rss"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-logo-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), " Twitter"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-logo-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), " Facebook"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-logo-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), " LinkedIn")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2374059578",
        __self: this
      }, ".top-bar.jsx-2374059578{width:100%;height:3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border-bottom:1px solid #eef2f8;color:#88909a;}.links.jsx-2374059578{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-image:linear-gradient( 141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75% );overflow-x:hidden;padding-top:60px;-webkit-transition:all 0.5s;transition:all 0.5s;}.links.jsx-2374059578 a.jsx-2374059578{padding:8px 8px 8px 32px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#818181;display:block;-webkit-transition:0.3s;transition:0.3s;}img.jsx-2374059578{border-radius:50%;}.top-bar.jsx-2374059578>.icon.jsx-2374059578{font-size:1.5em;color:#5d686f;}@media screen and (min-width:728px){.top-bar.jsx-2374059578{display:none;}.links.jsx-2374059578{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (max-width:728px){.top-bar.jsx-2374059578{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-2374059578{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RvQixBQUd3QixBQVNDLEFBaUJhLEFBUVAsQUFHRixBQUtELEFBR0EsQUFLQSxBQUdBLFdBcERKLENBU0gsQ0FpQ1IsQUFXQSxHQWhCYyxFQUhoQixFQXhCaUIsRUFURixHQXlCUSxLQVl2QixLQTNCWSxVQUNKLE1BQ0MsT0FNTixnQkEwQkQsQUFLQSxDQXZCZSxlQUNELE1BMUJLLFFBMkJMLGNBQ0UscUJBVkUsa0JBQ0QsQ0FVbkIsZ0JBVHNCLGVBbkJTLGlDQW9CL0IsMEZBbkJrQyxnQ0FDbEIsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL3MuZ29tZXovRGVza3RvcC9zZWJhc3RpYW4tZ29tZXotbmV4dC9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50b29nbGVMaW5rcyA9IHRoaXMudG9vZ2xlTGlua3MuYmluZCh0aGlzKTtcbiAgfVxuICB0b29nbGVMaW5rcyhldmVudCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rc1wiKTtcbiAgICBsaW5rcy5zdHlsZVtcImRpc3BsYXlcIl0gPSBcImJsb2NrXCI7XG4gICAgbGlua3Muc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMjUwcHhcIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhclwiPlxuICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMudG9vZ2xlTGlua3N9IGNsYXNzTmFtZT1cImljb24gaW9uLW1kLW1lbnVcIj48L2k+XG4gICAgICAgICAgPGgxPlNlYmFzdGlhbiBHb21lejwvaDE+XG4gICAgICAgICAgPGltZyBzcmM9XCJmb3RvX3BlcnNvbmFsLmpwZ1wiIHdpZHRoPVwiMzJweFwiIGhlaWdodD1cIjMycHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtaG9tZVwiPjwvaT4gSW5pY2lvXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1ib29rbWFya1wiPjwvaT4gQ2F0ZWdvcsOtYXNcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWNsaXBib2FyZFwiPjwvaT4gRG9jZW5jaWFcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWNvbnRhY3RcIj48L2k+IFNvYnJlIE3DrVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtc2VhcmNoXCI+PC9pPiBCdXNjYXJcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLW1pY1wiPjwvaT4gQ2hhcmxhc1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby1yc3NcIj48L2k+IFJzc1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby10d2l0dGVyXCI+PC9pPiBUd2l0dGVyXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLWZhY2Vib29rXCI+PC9pPiBGYWNlYm9va1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby1saW5rZWRpblwiPjwvaT4gTGlua2VkSW5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZjJmODtcbiAgICAgICAgICAgIGNvbG9yOiAjODg5MDlhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXG4gICAgICAgICAgICB3aWR0aDogMDsgLyogMCB3aWR0aCAtIGNoYW5nZSB0aGlzIHdpdGggSmF2YVNjcmlwdCAqL1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgICAgICAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgICAgICAgICAgdG9wOiAwOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIDE0MWRlZyxcbiAgICAgICAgICAgICAgIzlmYjhhZCAwJSxcbiAgICAgICAgICAgICAgIzFmYzhkYiA1MSUsXG4gICAgICAgICAgICAgICMyY2I1ZTggNzUlXG4gICAgICAgICAgICApOyAvKiBCbGFjayovXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41czsgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiB0aGUgc2lkZW5hdiAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3MgYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MTgxODE7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b3AtYmFyID4gLmljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNWQ2ODZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjhweCkge1xuICAgICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI4cHgpIHtcbiAgICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdfQ== */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Nav.js */"));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.3c4495594db72796459d.hot-update.js.map
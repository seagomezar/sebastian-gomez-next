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
      console.log(links.style);
      links.style["display"] = "block";
      links.style["width"] = "250px";
      console.log(links.style);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1095382473" + " " + "top-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("i", {
        onClick: this.toogleLinks,
        className: "jsx-1095382473" + " " + "icon ion-md-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Sebastian Gomez"), __jsx("img", {
        src: "foto_personal.jpg",
        width: "32px",
        height: "32px",
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), __jsx("ul", {
        className: "jsx-1095382473" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("li", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1095382473" + " " + "icon ion-md-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), " Inicio"), __jsx("li", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1095382473" + " " + "icon ion-md-bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), " Categor\xEDas"), __jsx("li", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1095382473" + " " + "icon ion-md-clipboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), " Docencia"), __jsx("li", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1095382473" + " " + "icon ion-md-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), " Sobre M\xED"), __jsx("li", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1095382473" + " " + "icon ion-md-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), " Buscar"), __jsx("li", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1095382473" + " " + "icon ion-md-mic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), " Charlas"), __jsx("li", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1095382473" + " " + "icon ion-logo-rss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), " Rss"), __jsx("li", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1095382473" + " " + "icon ion-logo-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), " Twitter"), __jsx("li", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1095382473" + " " + "icon ion-logo-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), " Facebook"), __jsx("li", {
        className: "jsx-1095382473",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1095382473" + " " + "icon ion-logo-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), " LinkedIn")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1095382473",
        __self: this
      }, ".top-bar.jsx-1095382473{width:100%;height:3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border-bottom:1px solid #eef2f8;color:#88909a;}.links.jsx-1095382473{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-image:linear-gradient( 141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75% );overflow-x:hidden;padding-top:60px;-webkit-transition:0.5s;transition:0.5s;}.links.jsx-1095382473 a.jsx-1095382473{padding:8px 8px 8px 32px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#818181;display:block;-webkit-transition:0.3s;transition:0.3s;}img.jsx-1095382473{border-radius:50%;}.top-bar.jsx-1095382473>.icon.jsx-1095382473{font-size:1.5em;color:#5d686f;}@media screen and (min-width:728px){.top-bar.jsx-1095382473{display:none;}.links.jsx-1095382473{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (max-width:728px){.top-bar.jsx-1095382473{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-1095382473{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RvQixBQUd3QixBQVNDLEFBaUJhLEFBUVAsQUFHRixBQUtELEFBR0EsQUFLQSxBQUdBLFdBcERKLENBU0gsQ0FpQ1IsQUFXQSxHQWhCYyxFQUhoQixFQXhCaUIsRUFURixHQXlCUSxLQVl2QixLQTNCWSxVQUNKLE1BQ0MsT0FNTixnQkEwQkQsQUFLQSxDQXZCZSxlQUNELE1BMUJLLFFBMkJMLGNBQ0UscUJBVkUsa0JBQ0QsQ0FVbkIsZ0JBVGtCLGVBbkJhLHlCQW9CL0Isa0dBbkJrQyxnQ0FDbEIsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL3MuZ29tZXovRGVza3RvcC9zZWJhc3RpYW4tZ29tZXotbmV4dC9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50b29nbGVMaW5rcyA9IHRoaXMudG9vZ2xlTGlua3MuYmluZCh0aGlzKTtcbiAgfVxuICB0b29nbGVMaW5rcyhldmVudCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rc1wiKTtcbiAgICBjb25zb2xlLmxvZyhsaW5rcy5zdHlsZSk7XG4gICAgbGlua3Muc3R5bGVbXCJkaXNwbGF5XCJdID0gXCJibG9ja1wiO1xuICAgIGxpbmtzLnN0eWxlW1wid2lkdGhcIl0gPSBcIjI1MHB4XCI7XG4gICAgY29uc29sZS5sb2cobGlua3Muc3R5bGUpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFyXCI+XG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy50b29nbGVMaW5rc30gY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtbWVudVwiPjwvaT5cbiAgICAgICAgICA8aDE+U2ViYXN0aWFuIEdvbWV6PC9oMT5cbiAgICAgICAgICA8aW1nIHNyYz1cImZvdG9fcGVyc29uYWwuanBnXCIgd2lkdGg9XCIzMnB4XCIgaGVpZ2h0PVwiMzJweFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1ob21lXCI+PC9pPiBJbmljaW9cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWJvb2ttYXJrXCI+PC9pPiBDYXRlZ29yw61hc1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtY2xpcGJvYXJkXCI+PC9pPiBEb2NlbmNpYVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtY29udGFjdFwiPjwvaT4gU29icmUgTcOtXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1zZWFyY2hcIj48L2k+IEJ1c2NhclxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtbWljXCI+PC9pPiBDaGFybGFzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLXJzc1wiPjwvaT4gUnNzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLXR3aXR0ZXJcIj48L2k+IFR3aXR0ZXJcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tZmFjZWJvb2tcIj48L2k+IEZhY2Vib29rXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLWxpbmtlZGluXCI+PC9pPiBMaW5rZWRJblxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVmMmY4O1xuICAgICAgICAgICAgY29sb3I6ICM4ODkwOWE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cbiAgICAgICAgICAgIHdpZHRoOiAwOyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICAgICAgICAgIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXG4gICAgICAgICAgICB0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgMTQxZGVnLFxuICAgICAgICAgICAgICAjOWZiOGFkIDAlLFxuICAgICAgICAgICAgICAjMWZjOGRiIDUxJSxcbiAgICAgICAgICAgICAgIzJjYjVlOCA3NSVcbiAgICAgICAgICAgICk7IC8qIEJsYWNrKi9cbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7IC8qIFBsYWNlIGNvbnRlbnQgNjBweCBmcm9tIHRoZSB0b3AgKi9cbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIGEge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODE4MTgxO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9wLWJhciA+IC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBjb2xvcjogIzVkNjg2ZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzI4cHgpIHtcbiAgICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyOHB4KSB7XG4gICAgICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXX0= */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Nav.js */"));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.ce5b9ab0e468977cd707.hot-update.js.map
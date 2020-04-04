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
      links.style["width"] = "250px";
      console.log(links.style);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2374059578" + " " + "top-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("i", {
        onClick: this.toogleLinks,
        className: "jsx-2374059578" + " " + "icon ion-md-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Sebastian Gomez"), __jsx("img", {
        src: "foto_personal.jpg",
        width: "32px",
        height: "32px",
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })), __jsx("ul", {
        className: "jsx-2374059578" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), " Inicio"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), " Categor\xEDas"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-clipboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), " Docencia"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), " Sobre M\xED"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), " Buscar"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-md-mic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), " Charlas"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-logo-rss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), " Rss"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-logo-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), " Twitter"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-logo-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), " Facebook"), __jsx("li", {
        className: "jsx-2374059578",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-2374059578" + " " + "icon ion-logo-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), " LinkedIn")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2374059578",
        __self: this
      }, ".top-bar.jsx-2374059578{width:100%;height:3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border-bottom:1px solid #eef2f8;color:#88909a;}.links.jsx-2374059578{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-image:linear-gradient( 141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75% );overflow-x:hidden;padding-top:60px;-webkit-transition:all 0.5s;transition:all 0.5s;}.links.jsx-2374059578 a.jsx-2374059578{padding:8px 8px 8px 32px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#818181;display:block;-webkit-transition:0.3s;transition:0.3s;}img.jsx-2374059578{border-radius:50%;}.top-bar.jsx-2374059578>.icon.jsx-2374059578{font-size:1.5em;color:#5d686f;}@media screen and (min-width:728px){.top-bar.jsx-2374059578{display:none;}.links.jsx-2374059578{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (max-width:728px){.top-bar.jsx-2374059578{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-2374059578{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURvQixBQUd3QixBQVNDLEFBaUJhLEFBUVAsQUFHRixBQUtELEFBR0EsQUFLQSxBQUdBLFdBcERKLENBU0gsQ0FpQ1IsQUFXQSxHQWhCYyxFQUhoQixFQXhCaUIsRUFURixHQXlCUSxLQVl2QixLQTNCWSxVQUNKLE1BQ0MsT0FNTixnQkEwQkQsQUFLQSxDQXZCZSxlQUNELE1BMUJLLFFBMkJMLGNBQ0UscUJBVkUsa0JBQ0QsQ0FVbkIsZ0JBVHNCLGVBbkJTLGlDQW9CL0IsMEZBbkJrQyxnQ0FDbEIsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL3MuZ29tZXovRGVza3RvcC9zZWJhc3RpYW4tZ29tZXotbmV4dC9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50b29nbGVMaW5rcyA9IHRoaXMudG9vZ2xlTGlua3MuYmluZCh0aGlzKTtcbiAgfVxuICB0b29nbGVMaW5rcyhldmVudCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rc1wiKTtcbiAgICBjb25zb2xlLmxvZyhsaW5rcy5zdHlsZSk7XG4gICAgbGlua3Muc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMjUwcHhcIjtcbiAgICBjb25zb2xlLmxvZyhsaW5rcy5zdHlsZSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXJcIj5cbiAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnRvb2dsZUxpbmtzfSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1tZW51XCI+PC9pPlxuICAgICAgICAgIDxoMT5TZWJhc3RpYW4gR29tZXo8L2gxPlxuICAgICAgICAgIDxpbWcgc3JjPVwiZm90b19wZXJzb25hbC5qcGdcIiB3aWR0aD1cIjMycHhcIiBoZWlnaHQ9XCIzMnB4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWhvbWVcIj48L2k+IEluaWNpb1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtYm9va21hcmtcIj48L2k+IENhdGVnb3LDrWFzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1jbGlwYm9hcmRcIj48L2k+IERvY2VuY2lhXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1jb250YWN0XCI+PC9pPiBTb2JyZSBNw61cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLXNlYXJjaFwiPjwvaT4gQnVzY2FyXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1taWNcIj48L2k+IENoYXJsYXNcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tcnNzXCI+PC9pPiBSc3NcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tdHdpdHRlclwiPjwvaT4gVHdpdHRlclxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby1mYWNlYm9va1wiPjwvaT4gRmFjZWJvb2tcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tbGlua2VkaW5cIj48L2k+IExpbmtlZEluXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWYyZjg7XG4gICAgICAgICAgICBjb2xvcjogIzg4OTA5YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xuICAgICAgICAgICAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgICAgICAgICAgei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cbiAgICAgICAgICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAxNDFkZWcsXG4gICAgICAgICAgICAgICM5ZmI4YWQgMCUsXG4gICAgICAgICAgICAgICMxZmM4ZGIgNTElLFxuICAgICAgICAgICAgICAjMmNiNWU4IDc1JVxuICAgICAgICAgICAgKTsgLyogQmxhY2sqL1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIGEge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODE4MTgxO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9wLWJhciA+IC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBjb2xvcjogIzVkNjg2ZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzI4cHgpIHtcbiAgICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyOHB4KSB7XG4gICAgICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXX0= */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Nav.js */"));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.05dc0c469680b4268216.hot-update.js.map
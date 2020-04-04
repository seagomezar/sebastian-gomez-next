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
      console.log(links.style);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4019237356" + " " + "top-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("i", {
        onClick: this.toogleLinks,
        className: "jsx-4019237356" + " " + "icon ion-md-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Sebastian Gomez"), __jsx("img", {
        src: "foto_personal.jpg",
        width: "32px",
        height: "32px",
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })), __jsx("ul", {
        className: "jsx-4019237356" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("li", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4019237356" + " " + "icon ion-md-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), " Inicio"), __jsx("li", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4019237356" + " " + "icon ion-md-bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), " Categor\xEDas"), __jsx("li", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4019237356" + " " + "icon ion-md-clipboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), " Docencia"), __jsx("li", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4019237356" + " " + "icon ion-md-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), " Sobre M\xED"), __jsx("li", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4019237356" + " " + "icon ion-md-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), " Buscar"), __jsx("li", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4019237356" + " " + "icon ion-md-mic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), " Charlas"), __jsx("li", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4019237356" + " " + "icon ion-logo-rss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), " Rss"), __jsx("li", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4019237356" + " " + "icon ion-logo-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), " Twitter"), __jsx("li", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4019237356" + " " + "icon ion-logo-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), " Facebook"), __jsx("li", {
        className: "jsx-4019237356",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-4019237356" + " " + "icon ion-logo-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), " LinkedIn")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4019237356",
        __self: this
      }, ".top-bar.jsx-4019237356{width:100%;height:3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border-bottom:1px solid #eef2f8;color:#88909a;}.links.jsx-4019237356{display:block;height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-color:#111;overflow-x:hidden;padding-top:60px;-webkit-transition:0.5s;transition:0.5s;}img.jsx-4019237356{border-radius:50%;}.top-bar.jsx-4019237356>.icon.jsx-4019237356{font-size:1.5em;color:#5d686f;}@media screen and (min-width:728px){.top-bar.jsx-4019237356{display:none;}.links.jsx-4019237356{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (max-width:728px){.top-bar.jsx-4019237356{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-4019237356{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURvQixBQUd3QixBQVNHLEFBYUksQUFHRixBQUtELEFBR0EsQUFLQSxBQUdBLFdBeENKLEVBOEJYLEFBV0EsQ0FoQ1ksRUFnQkUsRUFIaEIsSUFyQmUsSUFTTCxJQWdCVixJQWZpQixlQUNMLFVBQ0osTUFDQyxPQUNlLEVBa0J0QixBQUtBLG9CQXRCa0IsRUFkQyxnQkFlRixpQkFDRCx3Q0FDbEIsb0JBaEIrQiwySEFDRyxnQ0FDbEIsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL3MuZ29tZXovRGVza3RvcC9zZWJhc3RpYW4tZ29tZXotbmV4dC9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50b29nbGVMaW5rcyA9IHRoaXMudG9vZ2xlTGlua3MuYmluZCh0aGlzKTtcbiAgfVxuICB0b29nbGVMaW5rcyhldmVudCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rc1wiKTtcbiAgICBjb25zb2xlLmxvZyhsaW5rcy5zdHlsZSk7XG4gICAgbGlua3Muc3R5bGVbXCJkaXNwbGF5XCJdID0gXCJibG9ja1wiO1xuICAgIGNvbnNvbGUubG9nKGxpbmtzLnN0eWxlKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhclwiPlxuICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMudG9vZ2xlTGlua3N9IGNsYXNzTmFtZT1cImljb24gaW9uLW1kLW1lbnVcIj48L2k+XG4gICAgICAgICAgPGgxPlNlYmFzdGlhbiBHb21lejwvaDE+XG4gICAgICAgICAgPGltZyBzcmM9XCJmb3RvX3BlcnNvbmFsLmpwZ1wiIHdpZHRoPVwiMzJweFwiIGhlaWdodD1cIjMycHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtaG9tZVwiPjwvaT4gSW5pY2lvXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1ib29rbWFya1wiPjwvaT4gQ2F0ZWdvcsOtYXNcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWNsaXBib2FyZFwiPjwvaT4gRG9jZW5jaWFcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWNvbnRhY3RcIj48L2k+IFNvYnJlIE3DrVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtc2VhcmNoXCI+PC9pPiBCdXNjYXJcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLW1pY1wiPjwvaT4gQ2hhcmxhc1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby1yc3NcIj48L2k+IFJzc1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby10d2l0dGVyXCI+PC9pPiBUd2l0dGVyXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLWZhY2Vib29rXCI+PC9pPiBGYWNlYm9va1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby1saW5rZWRpblwiPjwvaT4gTGlua2VkSW5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZjJmODtcbiAgICAgICAgICAgIGNvbG9yOiAjODg5MDlhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cbiAgICAgICAgICAgIHdpZHRoOiAwOyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICAgICAgICAgIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXG4gICAgICAgICAgICB0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7IC8qIEJsYWNrKi9cbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7IC8qIFBsYWNlIGNvbnRlbnQgNjBweCBmcm9tIHRoZSB0b3AgKi9cbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvcC1iYXIgPiAuaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgY29sb3I6ICM1ZDY4NmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyOHB4KSB7XG4gICAgICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjhweCkge1xuICAgICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl19 */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Nav.js */"));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.1eface0ab8fddc750560.hot-update.js.map
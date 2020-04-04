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
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3585304893" + " " + "top-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("i", {
        onClick: this.openMenu,
        className: "jsx-3585304893" + " " + "icon ion-md-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Sebastian Gomez"), __jsx("img", {
        src: "foto_personal.jpg",
        width: "32px",
        height: "32px",
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), __jsx("ul", {
        className: "jsx-3585304893" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        onClick: this.closeMenu,
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Close"), __jsx("li", {
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3585304893" + " " + "icon ion-md-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), " Inicio"), __jsx("li", {
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3585304893" + " " + "icon ion-md-bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), " Categor\xEDas"), __jsx("li", {
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3585304893" + " " + "icon ion-md-clipboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), " Docencia"), __jsx("li", {
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3585304893" + " " + "icon ion-md-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), " Sobre M\xED"), __jsx("li", {
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3585304893" + " " + "icon ion-md-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), " Buscar"), __jsx("li", {
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3585304893" + " " + "icon ion-md-mic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), " Charlas"), __jsx("li", {
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3585304893" + " " + "icon ion-logo-rss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), " Rss"), __jsx("li", {
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3585304893" + " " + "icon ion-logo-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), " Twitter"), __jsx("li", {
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3585304893" + " " + "icon ion-logo-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), " Facebook"), __jsx("li", {
        className: "jsx-3585304893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3585304893" + " " + "icon ion-logo-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), " LinkedIn")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3585304893",
        __self: this
      }, ".top-bar.jsx-3585304893{width:100%;height:3em;position:fixed;margin-bottom:3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border-bottom:1px solid #eef2f8;color:#88909a;}.links.jsx-3585304893{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-image:linear-gradient( 141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75% );overflow-x:hidden;padding-top:60px;-webkit-transition:all 0.5s;transition:all 0.5s;}.links.jsx-3585304893 a.jsx-3585304893{padding:8px 8px 8px 32px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#818181;display:block;-webkit-transition:0.3s;transition:0.3s;}img.jsx-3585304893{border-radius:50%;}.top-bar.jsx-3585304893>.icon.jsx-3585304893{font-size:1.5em;color:#5d686f;}@media screen and (min-width:728px){.top-bar.jsx-3585304893{display:none;}.links.jsx-3585304893{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (max-width:728px){.top-bar.jsx-3585304893{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-3585304893{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERvQixBQUd3QixBQVdDLEFBaUJhLEFBUVAsQUFHRixBQUtELEFBR0EsQUFLQSxBQUdBLFdBdERKLENBV0gsQ0FpQ1IsQUFXQSxHQWhCYyxFQUhoQixFQXhCaUIsRUFYQSxHQTJCTSxLQVl2QixLQTNCWSxFQVhRLFFBWVosTUFDQyxJQVpNLEdBa0JaLGdCQTBCRCxBQUtBLENBdkJlLGVBQ0QsY0FDQSxjQUNFLFdBNUJHLFVBa0JELGtCQUNELENBVW5CLGdCQVRzQixnREFuQlMsQUFvQi9CLDJIQW5Ca0MsZ0NBQ2xCLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9OYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub3Blbk1lbnUgPSB0aGlzLm9wZW5NZW51LmJpbmQodGhpcyk7XG4gIH1cbiAgb3Blbk1lbnUoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtzXCIpO1xuICAgIGxpbmtzLnN0eWxlW1wiZGlzcGxheVwiXSA9IFwiYmxvY2tcIjtcbiAgICBsaW5rcy5zdHlsZVtcIndpZHRoXCJdID0gXCIyNTBweFwiO1xuICB9XG4gIGNsb3NlTWVudSgpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua3NcIik7XG4gICAgbGlua3Muc3R5bGVbXCJkaXNwbGF5XCJdID0gXCJub25lXCI7XG4gICAgbGlua3Muc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMFwiO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFyXCI+XG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy5vcGVuTWVudX0gY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtbWVudVwiPjwvaT5cbiAgICAgICAgICA8aDE+U2ViYXN0aWFuIEdvbWV6PC9oMT5cbiAgICAgICAgICA8aW1nIHNyYz1cImZvdG9fcGVyc29uYWwuanBnXCIgd2lkdGg9XCIzMnB4XCIgaGVpZ2h0PVwiMzJweFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xvc2VNZW51fT5DbG9zZTwvZGl2PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWhvbWVcIj48L2k+IEluaWNpb1xuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtYm9va21hcmtcIj48L2k+IENhdGVnb3LDrWFzXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1jbGlwYm9hcmRcIj48L2k+IERvY2VuY2lhXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1jb250YWN0XCI+PC9pPiBTb2JyZSBNw61cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLXNlYXJjaFwiPjwvaT4gQnVzY2FyXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1taWNcIj48L2k+IENoYXJsYXNcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tcnNzXCI+PC9pPiBSc3NcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tdHdpdHRlclwiPjwvaT4gVHdpdHRlclxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby1mYWNlYm9va1wiPjwvaT4gRmFjZWJvb2tcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWxvZ28tbGlua2VkaW5cIj48L2k+IExpbmtlZEluXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWYyZjg7XG4gICAgICAgICAgICBjb2xvcjogIzg4OTA5YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xuICAgICAgICAgICAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgICAgICAgICAgei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cbiAgICAgICAgICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAxNDFkZWcsXG4gICAgICAgICAgICAgICM5ZmI4YWQgMCUsXG4gICAgICAgICAgICAgICMxZmM4ZGIgNTElLFxuICAgICAgICAgICAgICAjMmNiNWU4IDc1JVxuICAgICAgICAgICAgKTsgLyogQmxhY2sqL1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIGEge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODE4MTgxO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9wLWJhciA+IC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBjb2xvcjogIzVkNjg2ZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzI4cHgpIHtcbiAgICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyOHB4KSB7XG4gICAgICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3Mge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXX0= */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Nav.js */"));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.c39bc3a5de720df7deea.hot-update.js.map
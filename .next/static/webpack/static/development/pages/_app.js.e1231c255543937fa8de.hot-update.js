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
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3385600011" + " " + "top-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("i", {
        onClick: this.toggleMenu,
        className: "jsx-3385600011" + " " + "icon ion-md-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Sebastian Gomez"), __jsx("img", {
        src: "foto_personal.jpg",
        width: "32px",
        height: "32px",
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("ul", {
        className: "jsx-3385600011" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3385600011" + " " + "menu-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("img", {
        src: "foto_personal.jpg",
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx("h2", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Sebastian Gomez")), __jsx("li", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3385600011" + " " + "icon ion-md-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Inicio"))), __jsx("li", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3385600011" + " " + "icon ion-md-bookmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Categor\xEDas"))), __jsx("li", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3385600011" + " " + "icon ion-md-clipboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Docencia"))), __jsx("li", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3385600011" + " " + "icon ion-md-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Sobre M\xED"))), __jsx("li", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3385600011" + " " + "icon ion-md-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Buscar"))), __jsx("li", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3385600011" + " " + "icon ion-md-mic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Charlas"))), __jsx("li", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3385600011" + " " + "icon ion-logo-rss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Rss"))), __jsx("li", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3385600011" + " " + "icon ion-logo-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Twitter"))), __jsx("li", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3385600011" + " " + "icon ion-logo-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Facebook"))), __jsx("li", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3385600011" + " " + "icon ion-logo-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), " ", __jsx("span", {
        className: "jsx-3385600011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "LinkedIn")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3385600011",
        __self: this
      }, ".top-bar.jsx-3385600011{width:100%;height:3em;top:0;position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #eef2f8;color:#88909a;background-color:white;z-index:1;-webkit-transition:0.3s;transition:0.3s;}.links.jsx-3385600011{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-image:linear-gradient( 141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75% );overflow-x:hidden;-webkit-transition:0.3s;transition:0.3s;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#eeeeee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-3385600011 a.jsx-3385600011{padding:8px 8px 8px 32px;-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:#818181;display:block;-webkit-transition:0.3s;transition:0.3s;}.links.jsx-3385600011 h2.jsx-3385600011{font-size:1.2em;}.links.jsx-3385600011 .menu-header.jsx-3385600011{text-align:center;}.links.jsx-3385600011 img.jsx-3385600011{max-width:100px;}.links.jsx-3385600011 li.jsx-3385600011{list-style:none;padding-left:1em;}img.jsx-3385600011{border-radius:50%;margin-right:1em;}.links.jsx-3385600011>li.jsx-3385600011>a.jsx-3385600011{color:white;font-size:1rem;}.top-bar.jsx-3385600011>.icon.jsx-3385600011{font-size:1.5em;color:#5d686f;padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0TmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHb0IsQUFHd0IsQUFjQyxBQXFCYSxBQVFULEFBR0UsQUFHRixBQUdBLEFBSUUsQUFJTixBQUlJLFdBL0RMLENBY0gsQUE4Q08sSUFqQmpCLEFBTUEsQUFHbUIsQUFZSCxFQWxCaEIsQUFVbUIsRUF6Q0YsRUFkVCxHQWtDZSxFQTBCdkIsQ0EzRGlCLEVBK0RFLEdBWm5CLEVBckNZLEFBeUNaLFFBdERlLEVBY1AsRUFpRFIsSUFoRFMsT0FNTixpQkFZYyxlQUNELGNBQ0EsYUFsQ0ssQ0FtQ0gscUJBZEUsa0JBQ0YsQ0FjbEIsdUNBYmdDLGFBdEJBLHNHQXVCZixhQXRCaUIsZ0NBQ2xCLFlBc0JRLEVBckJDLHVCQUNiLFVBQ00sd0NBQ2xCLEdBbUJnQixjQUNELDBFQUNmIiwiZmlsZSI6Ii9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0TmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBQb3N0TmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50b2dnbGVNZW51ID0gdGhpcy50b2dnbGVNZW51LmJpbmQodGhpcyk7XG4gICAgdGhpcy5tZW51T3BlbmVkID0gZmFsc2U7XG4gIH1cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua3NcIik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zdFwiKTtcbiAgICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1iYXJcIik7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcbiAgICBpZiAoIXRoaXMubWVudU9wZW5lZCkge1xuICAgICAgbGlua3Muc3R5bGVbXCJkaXNwbGF5XCJdID0gXCJmbGV4XCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGlua3Muc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMjUwcHhcIjtcbiAgICAgICAgY29udGVudC5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMjUwcHgsIDAsIDApXCI7XG4gICAgICAgIHRvcEJhci5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMjUwcHgsIDAsIDApXCI7XG4gICAgICAgIGZvb3Rlci5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMjUwcHgsIDAsIDApXCI7XG4gICAgICB9LCAxMDApO1xuICAgICAgdGhpcy5tZW51T3BlbmVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlua3Muc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMFwiO1xuICAgICAgY29udGVudC5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMCwgMCwgMClcIjtcbiAgICAgIHRvcEJhci5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMCwgMCwgMClcIjtcbiAgICAgIGZvb3Rlci5zdHlsZVtcInRyYW5zZm9ybVwiXSA9IFwidHJhbnNsYXRlM2QoMCwgMCwgMClcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsaW5rcy5zdHlsZVtcImRpc3BsYXlcIl0gPSBcIm5vbmVcIjtcbiAgICAgIH0sIDEwMCk7XG4gICAgICB0aGlzLm1lbnVPcGVuZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXJcIj5cbiAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1lbnV9IGNsYXNzTmFtZT1cImljb24gaW9uLW1kLW1lbnVcIj48L2k+XG4gICAgICAgICAgPGgxPlNlYmFzdGlhbiBHb21lejwvaDE+XG4gICAgICAgICAgPGltZyBzcmM9XCJmb3RvX3BlcnNvbmFsLmpwZ1wiIHdpZHRoPVwiMzJweFwiIGhlaWdodD1cIjMycHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWhlYWRlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJmb3RvX3BlcnNvbmFsLmpwZ1wiIC8+XG4gICAgICAgICAgICA8aDI+U2ViYXN0aWFuIEdvbWV6PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbWQtaG9tZVwiPjwvaT4gPHNwYW4+SW5pY2lvPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWJvb2ttYXJrXCI+PC9pPiA8c3Bhbj5DYXRlZ29yw61hczwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1jbGlwYm9hcmRcIj48L2k+IDxzcGFuPkRvY2VuY2lhPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLW1kLWNvbnRhY3RcIj48L2k+IDxzcGFuPlNvYnJlIE3DrTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1zZWFyY2hcIj48L2k+IDxzcGFuPkJ1c2Nhcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1tZC1taWNcIj48L2k+IDxzcGFuPkNoYXJsYXM8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby1yc3NcIj48L2k+IDxzcGFuPlJzczwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1sb2dvLXR3aXR0ZXJcIj48L2k+IDxzcGFuPlR3aXR0ZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby1mYWNlYm9va1wiPjwvaT4gPHNwYW4+RmFjZWJvb2s8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tbG9nby1saW5rZWRpblwiPjwvaT4gPHNwYW4+TGlua2VkSW48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVmMmY4O1xuICAgICAgICAgICAgY29sb3I6ICM4ODkwOWE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzOyAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cbiAgICAgICAgICAgIHdpZHRoOiAwOyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICAgICAgICAgIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXG4gICAgICAgICAgICB0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgMTQxZGVnLFxuICAgICAgICAgICAgICAjOWZiOGFkIDAlLFxuICAgICAgICAgICAgICAjMWZjOGRiIDUxJSxcbiAgICAgICAgICAgICAgIzJjYjVlOCA3NSVcbiAgICAgICAgICAgICk7IC8qIEJsYWNrKi9cbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zczsgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiB0aGUgc2lkZW5hdiAqL1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGNvbG9yOiAjZWVlZWVlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIGEge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODE4MTgxO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3MgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIC5tZW51LWhlYWRlciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rcyBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmtzIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlua3MgPiBsaSA+IGEge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9wLWJhciA+IC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBjb2xvcjogIzVkNjg2ZjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0TmF2O1xuIl19 */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostNav.js */"));
    }
  }]);

  return PostNav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostNav);

/***/ })

})
//# sourceMappingURL=_app.js.e1231c255543937fa8de.hot-update.js.map
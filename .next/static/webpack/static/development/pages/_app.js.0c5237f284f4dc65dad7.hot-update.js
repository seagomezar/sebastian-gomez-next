webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PostNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostNav */ "./components/PostNav.js");







var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _React$Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setDiscussScript", function () {
      return {
        __html: "\n          var disqus_config = function () {\n            this.page.url = \"https://www.sebastian-gomez.com\";  // Replace PAGE_URL with your page's canonical URL variable\n            this.page.identifier = \"test\"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable\n          };\n\n          (function() { // DON'T EDIT BELOW THIS LINE\n          var d = document, s = d.createElement('script');\n          s.src = 'https://EXAMPLE.disqus.com/embed.js';\n          s.setAttribute('data-timestamp', +new Date());\n          (d.head || d.body).appendChild(s);\n          })();"
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setDiscussNonscript", function () {
      return {
        __html: "<noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>"
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(_PostNav__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), __jsx("article", {
        className: "jsx-3081000413" + " " + "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3081000413",
        __self: this
      }, ".post.jsx-3081000413{max-width:1024px;margin:4rem auto 1rem auto;text-align:justify;text-rendering:optimizelegibility;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;font-family:\"Merriweather\",serif;color:#5d686f;font-weight:400;font-size:20px;line-height:30px;padding:1rem 1rem;-webkit-transition:0.3s all;transition:0.3s all;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NzQixBQUdnQyxpQkFDVSwyQkFDUixtQkFDZSxrQ0FDWix5R0FDWSxpQ0FDcEIsY0FDRSxnQkFDRCxlQUNFLGlCQUNDLGtCQUNFLGdEQUN0QiIsImZpbGUiOiIvVXNlcnMvcy5nb21lei9EZXNrdG9wL3NlYmFzdGlhbi1nb21lei1uZXh0L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvc3ROYXYgZnJvbSBcIi4vUG9zdE5hdlwiO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzZXREaXNjdXNzU2NyaXB0ID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBfX2h0bWw6IGBcbiAgICAgICAgICB2YXIgZGlzcXVzX2NvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZS51cmwgPSBcImh0dHBzOi8vd3d3LnNlYmFzdGlhbi1nb21lei5jb21cIjsgIC8vIFJlcGxhY2UgUEFHRV9VUkwgd2l0aCB5b3VyIHBhZ2UncyBjYW5vbmljYWwgVVJMIHZhcmlhYmxlXG4gICAgICAgICAgICB0aGlzLnBhZ2UuaWRlbnRpZmllciA9IFwidGVzdFwiOyAvLyBSZXBsYWNlIFBBR0VfSURFTlRJRklFUiB3aXRoIHlvdXIgcGFnZSdzIHVuaXF1ZSBpZGVudGlmaWVyIHZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIChmdW5jdGlvbigpIHsgLy8gRE9OJ1QgRURJVCBCRUxPVyBUSElTIExJTkVcbiAgICAgICAgICB2YXIgZCA9IGRvY3VtZW50LCBzID0gZC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICBzLnNyYyA9ICdodHRwczovL0VYQU1QTEUuZGlzcXVzLmNvbS9lbWJlZC5qcyc7XG4gICAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGltZXN0YW1wJywgK25ldyBEYXRlKCkpO1xuICAgICAgICAgIChkLmhlYWQgfHwgZC5ib2R5KS5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgICB9KSgpO2AsXG4gICAgfTtcbiAgfTtcbiAgc2V0RGlzY3Vzc05vbnNjcmlwdCA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgX19odG1sOiBgPG5vc2NyaXB0PlBsZWFzZSBlbmFibGUgSmF2YVNjcmlwdCB0byB2aWV3IHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9kaXNxdXMuY29tLz9yZWZfbm9zY3JpcHRcIj5jb21tZW50cyBwb3dlcmVkIGJ5IERpc3F1cy48L2E+PC9ub3NjcmlwdD5gLFxuICAgIH07XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFBvc3ROYXYgLz5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDRyZW0gYXV0byAxcmVtIGF1dG87XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiLCBzZXJpZjtcbiAgICAgICAgICAgICAgY29sb3I6ICM1ZDY4NmY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxkaXNjdXNzPlxuICAgICAgICAgIDxkaXYgaWQ9XCJkaXNxdXNfdGhyZWFkXCI+PC9kaXY+XG4gICAgICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5zZXREaXNjdXNzU2NyaXB0KCl9Pjwvc2NyaXB0PlxuICAgICAgICAgIDxub3NjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3RoaXMuc2V0Tm9uc2NyaXB0VGFnTWFuYWdlcigpfVxuICAgICAgICAgID48L25vc2NyaXB0PlxuICAgICAgICA8L2Rpc2N1c3M+XG4gICAgICAgIDxmb290ZXI+PC9mb290ZXI+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Layout.js */")), __jsx("discuss", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("div", {
        id: "disqus_thread",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx("script", {
        dangerouslySetInnerHTML: this.setDiscussScript(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), __jsx("noscript", {
        dangerouslySetInnerHTML: this.setNonscriptTagManager(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), __jsx("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.0c5237f284f4dc65dad7.hot-update.js.map
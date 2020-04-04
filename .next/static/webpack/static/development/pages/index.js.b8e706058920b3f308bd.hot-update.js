webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostHeader.js":
/*!**********************************!*\
  !*** ./components/PostHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tag */ "./components/Tag.js");





var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var PostHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PostHeader, _React$Component);

  function PostHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          date = _this$props.date,
          tags = _this$props.tags;
      return __jsx("small", {
        className: "jsx-1070623885" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-1070623885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("strong", {
        className: "jsx-1070623885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Fecha: "), new Intl.DateTimeFormat("es-CO", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }).format(new Date(date)), " ", "-", __jsx("strong", {
        className: "jsx-1070623885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, " Autor: "), " Sebastian Gomez"), __jsx("span", {
        className: "jsx-1070623885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-1070623885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, tags.map(function (tag, index) {
        return __jsx(_Tag__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: tag,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        });
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1070623885",
        __self: this
      }, "small.jsx-1070623885{color:#9eabb3;}span.jsx-1070623885{display:block;}span.jsx-1070623885:first-child{margin-top:0.2em;}span.jsx-1070623885:last-child{margin-bottom:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCb0IsQUFHMkIsQUFHQSxBQUdHLEFBR0MsY0FScEIsQUFHQSxHQUdBLENBR0EiLCJmaWxlIjoiL1VzZXJzL3MuZ29tZXovRGVza3RvcC9zZWJhc3RpYW4tZ29tZXotbmV4dC9jb21wb25lbnRzL1Bvc3RIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGFnIGZyb20gXCIuL1RhZ1wiO1xuXG5jbGFzcyBQb3N0SGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0ZSwgdGFncyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8c3Ryb25nPkZlY2hhOiA8L3N0cm9uZz5cbiAgICAgICAgICB7bmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlcy1DT1wiLCB7XG4gICAgICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgfSkuZm9ybWF0KG5ldyBEYXRlKGRhdGUpKX17XCIgXCJ9XG4gICAgICAgICAgLTxzdHJvbmc+IEF1dG9yOiA8L3N0cm9uZz4gU2ViYXN0aWFuIEdvbWV6XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7dGFncy5tYXAoKHRhZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxUYWcgbmFtZT17dGFnfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICBjb2xvcjogIzllYWJiMztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc21hbGw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0SGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostHeader.js */"));
    }
  }]);

  return PostHeader;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostHeader);

/***/ })

})
//# sourceMappingURL=index.js.b8e706058920b3f308bd.hot-update.js.map
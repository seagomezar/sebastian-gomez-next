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
        className: "jsx-3115239849" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-3115239849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("strong", {
        className: "jsx-3115239849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Fecha publicaci\xF3n: "), new Intl.DateTimeFormat("es-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }).format(new Date(date))), __jsx("span", {
        className: "jsx-3115239849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("strong", {
        className: "jsx-3115239849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, " Autor: "), " Sebastian Gomez"), __jsx("span", {
        className: "jsx-3115239849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("strong", {
        className: "jsx-3115239849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, " En: "), tags.map(function (tag, index) {
        return __jsx(_Tag__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: tag,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        });
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3115239849",
        __self: this
      }, "small.jsx-3115239849{color:#9eabb3;}span.jsx-3115239849{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCb0IsQUFHMkIsQUFHQSxjQUZoQixBQUdBIiwiZmlsZSI6Ii9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0SGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhZyBmcm9tIFwiLi9UYWdcIjtcblxuY2xhc3MgUG9zdEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGUsIHRhZ3MgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPHN0cm9uZz5GZWNoYSBwdWJsaWNhY2nDs246IDwvc3Ryb25nPlxuICAgICAgICAgIHtuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVzLVVTXCIsIHtcbiAgICAgICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUoZGF0ZSkpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxzdHJvbmc+IEF1dG9yOiA8L3N0cm9uZz4gU2ViYXN0aWFuIEdvbWV6XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPHN0cm9uZz4gRW46IDwvc3Ryb25nPlxuICAgICAgICAgIHt0YWdzLm1hcCgodGFnLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFRhZyBuYW1lPXt0YWd9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOWVhYmIzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zbWFsbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostHeader.js */"));
    }
  }]);

  return PostHeader;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostHeader);

/***/ })

})
//# sourceMappingURL=index.js.b5eb971a02b900845884.hot-update.js.map
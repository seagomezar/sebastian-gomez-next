webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tag.js":
/*!***************************!*\
  !*** ./components/Tag.js ***!
  \***************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/Tag.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var TagsColorDictionary = {
  CSS: "primary",
  HTML: "secondary",
  Javascript: "warning",
  Angular: "danger",
  React: "success",
  "Desarrollo Web": "info",
  Other: "dark"
};

var Tag =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Tag, _React$Component);

  function Tag() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tag);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Tag).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tag, [{
    key: "render",
    value: function render() {
      var name = this.props.name;
      var tagColor = TagsColorDictionary[name] || "dark";
      console.log(tagColor);
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/tags/" + name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-2325378431" + " " + ("badge badge-" + tagColor || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, name, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2325378431",
        __self: this
      }, ".badge.jsx-2325378431{-webkit-text-decoration:none;text-decoration:none;margin-right:1em;color:white;padding:1em 1em;}.badge-primary.jsx-2325378431{background-color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9UYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJzQixBQUdvQyxBQU1DLHNCQUN4Qiw0QkFObUIsaUJBQ0wsWUFDSSxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3MuZ29tZXovRGVza3RvcC9zZWJhc3RpYW4tZ29tZXotbmV4dC9jb21wb25lbnRzL1RhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgVGFnc0NvbG9yRGljdGlvbmFyeSA9IHtcbiAgQ1NTOiBcInByaW1hcnlcIixcbiAgSFRNTDogXCJzZWNvbmRhcnlcIixcbiAgSmF2YXNjcmlwdDogXCJ3YXJuaW5nXCIsXG4gIEFuZ3VsYXI6IFwiZGFuZ2VyXCIsXG4gIFJlYWN0OiBcInN1Y2Nlc3NcIixcbiAgXCJEZXNhcnJvbGxvIFdlYlwiOiBcImluZm9cIixcbiAgT3RoZXI6IFwiZGFya1wiLFxufTtcblxuY2xhc3MgVGFnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0YWdDb2xvciA9IFRhZ3NDb2xvckRpY3Rpb25hcnlbbmFtZV0gfHwgXCJkYXJrXCI7XG4gICAgY29uc29sZS5sb2codGFnQ29sb3IpO1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBocmVmPXtcIi90YWdzL1wiICsgbmFtZX0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17XCJiYWRnZSBiYWRnZS1cIiArIHRhZ0NvbG9yfT5cbiAgICAgICAgICB7bmFtZX1cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5iYWRnZSB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMWVtIDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWRnZS1wcmltYXJ5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZztcbiJdfQ== */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Tag.js */")));
    }
  }]);

  return Tag;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ })

})
//# sourceMappingURL=index.js.2ee9706c84ae42a623f8.hot-update.js.map
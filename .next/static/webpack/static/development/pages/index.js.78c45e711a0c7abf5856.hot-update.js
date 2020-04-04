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
        className: "jsx-1915239607" + " " + ("badge badge-" + tagColor || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, name, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1915239607",
        __self: this
      }, ".badge.jsx-1915239607{-webkit-text-decoration:none;text-decoration:none;margin-right:1em;color:white;padding:0.5em 0.5em;margin:0.5em 0;display:inline-block;}.badge-primary.jsx-1915239607{background-color:blue;}.badge-danger.jsx-1915239607{background-color:red;}.badge-warning.jsx-1915239607{background-color:yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9UYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJzQixBQUdvQyxBQVFDLEFBR0QsQUFHRyxxQkFGMUIsQ0FIQSxFQU1BLDBCQWRtQixpQkFDTCxZQUNRLG9CQUNMLGVBQ00scUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9UYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFRhZ3NDb2xvckRpY3Rpb25hcnkgPSB7XG4gIENTUzogXCJwcmltYXJ5XCIsXG4gIEhUTUw6IFwic2Vjb25kYXJ5XCIsXG4gIEphdmFzY3JpcHQ6IFwid2FybmluZ1wiLFxuICBBbmd1bGFyOiBcImRhbmdlclwiLFxuICBSZWFjdDogXCJzdWNjZXNzXCIsXG4gIFwiRGVzYXJyb2xsbyBXZWJcIjogXCJpbmZvXCIsXG4gIE90aGVyOiBcImRhcmtcIixcbn07XG5cbmNsYXNzIFRhZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGFnQ29sb3IgPSBUYWdzQ29sb3JEaWN0aW9uYXJ5W25hbWVdIHx8IFwiZGFya1wiO1xuICAgIGNvbnNvbGUubG9nKHRhZ0NvbG9yKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgaHJlZj17XCIvdGFncy9cIiArIG5hbWV9PlxuICAgICAgICA8YSBjbGFzc05hbWU9e1wiYmFkZ2UgYmFkZ2UtXCIgKyB0YWdDb2xvcn0+XG4gICAgICAgICAge25hbWV9XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYmFkZ2Uge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDAuNWVtIDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWRnZS1wcmltYXJ5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWRnZS1kYW5nZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFkZ2Utd2FybmluZyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZztcbiJdfQ== */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/Tag.js */")));
    }
  }]);

  return Tag;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ })

})
//# sourceMappingURL=index.js.78c45e711a0c7abf5856.hot-update.js.map
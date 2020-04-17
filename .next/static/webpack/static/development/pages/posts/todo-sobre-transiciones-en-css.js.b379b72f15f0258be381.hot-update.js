webpackHotUpdate("static/development/pages/posts/todo-sobre-transiciones-en-css.js",{

/***/ "./components/Discuss.js":
/*!*******************************!*\
  !*** ./components/Discuss.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/Discuss.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var Discuss =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Discuss, _React$Component);

  function Discuss(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Discuss);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Discuss).call(this, props));
    _this.canonicalUrl = false;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Discuss, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.canonicalUrl = window.location.href;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("div", {
        id: "disqus_thread",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), props.canonicalUrl ? __jsx("script", {
        dangerouslySetInnerHTML: {
          __html: "\n          var disqus_config = function () {\n            this.page.url = '".concat(props.canonicalUrl, "';\n            this.page.identifier = \"").concat(props.slug, "\"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable\n          };\n\n          (function() { // DON'T EDIT BELOW THIS LINE\n          var d = document, s = d.createElement('script');\n          s.src = 'https://EXAMPLE.disqus.com/embed.js';\n          s.setAttribute('data-timestamp', +new Date());\n          (d.head || d.body).appendChild(s);\n          })();")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }) : __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Loading dicuss"));
    }
  }]);

  return Discuss;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Discuss);

/***/ })

})
//# sourceMappingURL=todo-sobre-transiciones-en-css.js.b379b72f15f0258be381.hot-update.js.map
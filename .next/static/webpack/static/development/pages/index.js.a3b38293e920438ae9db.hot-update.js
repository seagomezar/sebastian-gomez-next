webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostExcerpt.js":
/*!***********************************!*\
  !*** ./components/PostExcerpt.js ***!
  \***********************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PostThumbnail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostThumbnail */ "./components/PostThumbnail.js");
/* harmony import */ var _PostHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostHeader */ "./components/PostHeader.js");





var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostExcerpt.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var PostExcerpt =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PostExcerpt, _React$Component);

  function PostExcerpt() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostExcerpt);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostExcerpt).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostExcerpt, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          index = _this$props.index,
          post = _this$props.post;
      return __jsx("article", {
        className: "",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/posts/" + post.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("a", {
        className: "post-thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(_PostThumbnail__WEBPACK_IMPORTED_MODULE_7__["default"], {
        thumbnailImage: post.thumbnailImage,
        altText: post.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/posts/" + post.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("h2", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, post.title))), __jsx(_PostHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
        tags: post.tags,
        date: post.date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), __jsx("p", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, post.excerpt), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/posts/" + post.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Seguir Leyendo")));
    }
  }]);

  return PostExcerpt;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostExcerpt);

/***/ })

})
//# sourceMappingURL=index.js.a3b38293e920438ae9db.hot-update.js.map
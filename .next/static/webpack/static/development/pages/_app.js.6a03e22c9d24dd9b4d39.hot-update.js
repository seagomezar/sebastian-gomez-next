webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _components_CodeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CodeBlock */ "./components/CodeBlock.js");
/* harmony import */ var unified_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! unified-ui */ "./node_modules/unified-ui/dist/index.js");
/* harmony import */ var unified_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(unified_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");

var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var mdComponents = {
  h1: function h1(props) {
    return __jsx("h1", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: {
        color: "#4a4a4a",
        fontSize: "2.7rem"
      }
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }));
  },
  pre: function pre(props) {
    return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  },
  code: _components_CodeBlock__WEBPACK_IMPORTED_MODULE_3__["default"]
};

var Style = function Style(_ref) {
  var children = _ref.children;
  return __jsx("style", {
    dangerouslySetInnerHTML: {
      __html: children
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;

  if (Component.isMDXComponent) {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["MDXProvider"], {
      components: mdComponents,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(Style, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, unified_ui__WEBPACK_IMPORTED_MODULE_4__["baseStyles"]), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }))));
  } else {
    return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.6a03e22c9d24dd9b4d39.hot-update.js.map
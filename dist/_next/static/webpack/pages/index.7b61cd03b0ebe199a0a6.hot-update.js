webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostNavigation.js":
/*!**************************************!*\
  !*** ./components/PostNavigation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostNavigation.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar PostNavigation = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PostNavigation, _React$Component);\n\n  var _super = _createSuper(PostNavigation);\n\n  function PostNavigation() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, PostNavigation);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PostNavigation, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          _this$props$currentPa = _this$props.currentPage,\n          currentPage = _this$props$currentPa === void 0 ? 0 : _this$props$currentPa,\n          totalPages = _this$props.totalPages;\n      return __jsx(\"div\", {\n        className: \"jsx-3587934902\" + \" \" + \"post-navigation\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 7\n        }\n      }, currentPage > 1 ? __jsx(\"div\", {\n        className: \"jsx-3587934902\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"/?page=\" + Number(parseInt(currentPage) - 1),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        className: \"jsx-3587934902\" + \" \" + \"newer-posts\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 15\n        }\n      }, \"Art\\xEDculos Recientes\"))) : \"\", currentPage < totalPages ? __jsx(\"div\", {\n        className: \"jsx-3587934902\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"/page/[id]\",\n        as: String(Number(parseInt(currentPage) + 1)),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        className: \"jsx-3587934902\" + \" \" + \"older-posts\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 15\n        }\n      }, \"Art\\xEDculos Anteriores\"))) : \"\", __jsx(\"div\", {\n        className: \"jsx-3587934902\" + \" \" + \"\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }\n      }, \"p\\xE1gina \", currentPage, \" de \", totalPages), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        id: \"3587934902\",\n        __self: this\n      }, \".post-navigation.jsx-3587934902{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1rem;color:#5d686f;}a.jsx-3587934902{display:block;-webkit-text-decoration:none;text-decoration:none;border-radius:5px;text-align:center;border:1px solid #eef2f8;color:#5d686f;padding:1rem;}.older-posts.jsx-3587934902::after{content:\\\">\\\";margin-left:1rem;}.newer-posts.jsx-3587934902::before{content:\\\"<\\\";margin-right:1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0TmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQlcsQUFHNEIsQUFRQyxBQVNGLEFBSUEsWUFISyxBQUlDLEVBYkcsZUFVdkIsQ0FJQSxrQ0Fib0IsVUFUQyxRQVVELGtCQUNPLHlCQUNYLGNBQ0QsSUFaZ0IsU0FhL0Isa0hBWnFCLDZGQUNBLG1CQUNMLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0TmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY2xhc3MgUG9zdE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50UGFnZSA9IDAsIHRvdGFsUGFnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1uYXZpZ2F0aW9uXCI+XG4gICAgICAgIHtjdXJyZW50UGFnZSA+IDEgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLz9wYWdlPVwiICsgTnVtYmVyKHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDEpfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3ZXItcG9zdHNcIj5BcnTDrWN1bG9zIFJlY2llbnRlczwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBcIlwiXG4gICAgICAgICl9XG4gICAgICAgIHtjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3BhZ2UvW2lkXVwifSBhcz17U3RyaW5nKE51bWJlcihwYXJzZUludChjdXJyZW50UGFnZSkgKyAxKSl9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvbGRlci1wb3N0c1wiPkFydMOtY3Vsb3MgQW50ZXJpb3JlczwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBcIlwiXG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICBww6FnaW5hIHtjdXJyZW50UGFnZX0gZGUge3RvdGFsUGFnZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PVwidHJ1ZVwiPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucG9zdC1uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjNWQ2ODZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVmMmY4O1xuICAgICAgICAgICAgICBjb2xvcjogIzVkNjg2ZjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vbGRlci1wb3N0czo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIj5cIjtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmV3ZXItcG9zdHM6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiPFwiO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdE5hdmlnYXRpb247XG4iXX0= */\\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostNavigation.js */\"));\n    }\n  }]);\n\n  return PostNavigation;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostNavigation);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TmF2aWdhdGlvbi5qcz82MDFkIl0sIm5hbWVzIjpbIlBvc3ROYXZpZ2F0aW9uIiwicHJvcHMiLCJjdXJyZW50UGFnZSIsInRvdGFsUGFnZXMiLCJOdW1iZXIiLCJwYXJzZUludCIsIlN0cmluZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsYzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUFBLHdCQUNpQyxLQUFLQyxLQUR0QztBQUFBLDhDQUNDQyxXQUREO0FBQUEsVUFDQ0EsV0FERCxzQ0FDZSxDQURmO0FBQUEsVUFDa0JDLFVBRGxCLGVBQ2tCQSxVQURsQjtBQUVQLGFBQ0U7QUFBQSw0Q0FBZSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dELFdBQVcsR0FBRyxDQUFkLEdBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRSxZQUFZRSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0gsV0FBRCxDQUFSLEdBQXdCLENBQXpCLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLDRDQUFhLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQURGLENBREQsR0FPQyxFQVJKLEVBVUdBLFdBQVcsR0FBR0MsVUFBZCxHQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUUsWUFBWjtBQUEwQixVQUFFLEVBQUVHLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDQyxRQUFRLENBQUNILFdBQUQsQ0FBUixHQUF3QixDQUF6QixDQUFQLENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLDRDQUFhLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixDQURGLENBREQsR0FPQyxFQWpCSixFQW9CRTtBQUFBLDRDQUFlLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDVUEsV0FEVixVQUMyQkMsVUFEM0IsQ0FwQkY7QUFBQTtBQUFBO0FBQUEsb3RIQURGO0FBdUREOzs7O0VBMUQwQkksNENBQUssQ0FBQ0MsUzs7QUE2RHBCUiw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdE5hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNsYXNzIFBvc3ROYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3VycmVudFBhZ2UgPSAwLCB0b3RhbFBhZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbmF2aWdhdGlvblwiPlxuICAgICAgICB7Y3VycmVudFBhZ2UgPiAxID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi8/cGFnZT1cIiArIE51bWJlcihwYXJzZUludChjdXJyZW50UGFnZSkgLSAxKX0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld2VyLXBvc3RzXCI+QXJ0w61jdWxvcyBSZWNpZW50ZXM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgXCJcIlxuICAgICAgICApfVxuICAgICAgICB7Y3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9wYWdlL1tpZF1cIn0gYXM9e1N0cmluZyhOdW1iZXIocGFyc2VJbnQoY3VycmVudFBhZ2UpICsgMSkpfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib2xkZXItcG9zdHNcIj5BcnTDrWN1bG9zIEFudGVyaW9yZXM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgXCJcIlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgcMOhZ2luYSB7Y3VycmVudFBhZ2V9IGRlIHt0b3RhbFBhZ2VzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD1cInRydWVcIj5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnBvc3QtbmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICBjb2xvcjogIzVkNjg2ZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZjJmODtcbiAgICAgICAgICAgICAgY29sb3I6ICM1ZDY4NmY7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub2xkZXItcG9zdHM6OmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCI+XCI7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5ld2VyLXBvc3RzOjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIjxcIjtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3ROYXZpZ2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostNavigation.js\n");

/***/ })

})
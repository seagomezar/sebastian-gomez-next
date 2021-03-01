webpackHotUpdate_N_E("pages/page/[id]",{

/***/ "./pages/page/[id].js":
/*!****************************!*\
  !*** ./pages/page/[id].js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_HeadSite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/HeadSite */ \"./components/HeadSite.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/PostList */ \"./components/PostList.js\");\n/* harmony import */ var _components_PostNavigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/PostNavigation */ \"./components/PostNavigation.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/analytics */ \"./utils/analytics.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/s.gomez/Desktop/sebastian-gomez-next/pages/page/[id].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n// WHERE YOUR POSTS ARE\n\nvar __N_SSG = true;\n\nvar Page = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Page, _React$Component);\n\n  var _super = _createSuper(Page);\n\n  function Page() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Page);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Page, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (!window.GA_INITIALIZED) {\n        Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_13__[\"initGA\"])();\n        window.GA_INITIALIZED = true;\n      }\n\n      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_13__[\"logPageView\"])();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          currentPage = _this$props.currentPage,\n          totalPages = _this$props.totalPages,\n          posts = _this$props.posts;\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 7\n        }\n      }, __jsx(_components_HeadSite__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }\n      }), __jsx(\"section\", {\n        className: \"jsx-2401261217\" + \" \" + \"container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 9\n        }\n      }, __jsx(\"header\", {\n        className: \"jsx-2401261217\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }\n      }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }\n      })), __jsx(\"section\", {\n        className: \"jsx-2401261217\" + \" \" + \"content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }\n      }, __jsx(_components_PostList__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        page: currentPage,\n        posts: posts,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }\n      }), __jsx(_components_PostNavigation__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        currentPage: currentPage,\n        totalPages: totalPages,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }\n      })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }\n      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        id: \"2401261217\",\n        __self: this\n      }, \".content.jsx-2401261217{-webkit-transition:0.3s;transition:0.3s;}@media screen and (min-width:768px) and (max-width:1024px){.content.jsx-2401261217{margin-left:75px;}}@media screen and (min-width:1025px) and (max-width:1280px){.content.jsx-2401261217{margin-left:250px;}}@media screen and (min-width:1281px){.content.jsx-2401261217{margin-left:500px;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvcGFnZXMvcGFnZS9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DVyxBQUcrQixBQUlHLEFBS0MsQUFLQSxpQkFUcEIsQ0FLQSxBQUtBLHNCQWRGIiwiZmlsZSI6Ii9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvcGFnZXMvcGFnZS9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWRTaXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRTaXRlXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IFBvc3RMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RMaXN0XCI7XG5pbXBvcnQgUG9zdE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdE5hdmlnYXRpb25cIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgcG9zdHMgZnJvbSBcIi4uL3Bvc3RzLmpzb25cIjsgLy8gV0hFUkUgWU9VUiBQT1NUUyBBUkVcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYW5hbHl0aWNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF3aW5kb3cuR0FfSU5JVElBTElaRUQpIHtcbiAgICAgIGluaXRHQSgpO1xuICAgICAgd2luZG93LkdBX0lOSVRJQUxJWkVEID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nUGFnZVZpZXcoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlLCB0b3RhbFBhZ2VzLCBwb3N0cyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SGVhZFNpdGU+PC9IZWFkU2l0ZT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8UG9zdExpc3QgcGFnZT17Y3VycmVudFBhZ2V9IHBvc3RzPXtwb3N0c30gLz5cblxuICAgICAgICAgICAgPFBvc3ROYXZpZ2F0aW9uIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX0gdG90YWxQYWdlcz17dG90YWxQYWdlc30gLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODFweCkge1xuICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSBwYXJhbXMuaWQgfHwgMTtcbiAgICBjb25zdCBQT1NUU19CWV9QQUdFID0gNTsgLy8gQ0hBTkdFIFRPIFNFVCBUSEUgUEFHRVMgUEVSIFBPU1RcbiAgICBjb25zdCBkYXRhUG9zdHMgPSBwb3N0cy5kYXRhLnBvc3RzO1xuICAgIGNvbnN0IHNvcnRlZFBvc3RzID0gZGF0YVBvc3RzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGIuZGF0ZSAtIGEuZGF0ZTtcbiAgICB9KTtcbiAgICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gc29ydGVkUG9zdHMuc2xpY2UoXG4gICAgICAoY3VycmVudFBhZ2UgLSAxKSAqIFBPU1RTX0JZX1BBR0UsXG4gICAgICBjdXJyZW50UGFnZSAqIFBPU1RTX0JZX1BBR0VcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAgIHRvdGFsUGFnZXM6XG4gICAgICAgIHNvcnRlZFBvc3RzLmxlbmd0aCAlIFBPU1RTX0JZX1BBR0UgPT09IDBcbiAgICAgICAgICA/IE1hdGgucm91bmQoc29ydGVkUG9zdHMubGVuZ3RoIC8gUE9TVFNfQllfUEFHRSlcbiAgICAgICAgICA6IE1hdGgucm91bmQoc29ydGVkUG9zdHMubGVuZ3RoIC8gUE9TVFNfQllfUEFHRSkgKyAxLFxuICAgICAgICBwb3N0czogZmlsdGVyZWRQb3N0cyxcbiAgICAgIH0gXG4gICAgfTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogW1xuICAgICAgeyBwYXJhbXM6IHsgaWQ6IFwiMVwiIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiBcIjJcIiB9IH0sXG4gICAgICB7IHBhcmFtczogeyBpZDogXCIzXCIgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgaWQ6IFwiNFwiIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiBcIjVcIiB9IH1cbiAgICBdLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG4iXX0= */\\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/pages/page/[id].js */\"));\n    }\n  }]);\n\n  return Page;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZS8uanM/NTgxMCJdLCJuYW1lcyI6WyJQYWdlIiwid2luZG93IiwiR0FfSU5JVElBTElaRUQiLCJpbml0R0EiLCJsb2dQYWdlVmlldyIsInByb3BzIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIiwicG9zdHMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQztBQUNuQzs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7O3dDQUVDO0FBQ2xCLFVBQUksQ0FBQ0MsTUFBTSxDQUFDQyxjQUFaLEVBQTRCO0FBQzFCQyx3RUFBTTtBQUNORixjQUFNLENBQUNDLGNBQVAsR0FBd0IsSUFBeEI7QUFDRDs7QUFDREUsMkVBQVc7QUFDWjs7OzZCQUVRO0FBQUEsd0JBQ29DLEtBQUtDLEtBRHpDO0FBQUEsVUFDQ0MsV0FERCxlQUNDQSxXQUREO0FBQUEsVUFDY0MsVUFEZCxlQUNjQSxVQURkO0FBQUEsVUFDMEJDLEtBRDFCLGVBQzBCQSxLQUQxQjtBQUVQLGFBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBQSw0Q0FBbUIsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREYsRUFJRTtBQUFBLDRDQUFtQixTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw2REFBRDtBQUFVLFlBQUksRUFBRUYsV0FBaEI7QUFBNkIsYUFBSyxFQUFFRSxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFHRSxNQUFDLG1FQUFEO0FBQWdCLG1CQUFXLEVBQUVGLFdBQTdCO0FBQTBDLGtCQUFVLEVBQUVDLFVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQUpGLEVBU0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEYsQ0FGRjtBQUFBO0FBQUE7QUFBQSwyZ0pBREY7QUFzQ0Q7Ozs7RUFsRCtCRSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Ii4vcGFnZXMvcGFnZS9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWRTaXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRTaXRlXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IFBvc3RMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RMaXN0XCI7XG5pbXBvcnQgUG9zdE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdE5hdmlnYXRpb25cIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgcG9zdHMgZnJvbSBcIi4uL3Bvc3RzLmpzb25cIjsgLy8gV0hFUkUgWU9VUiBQT1NUUyBBUkVcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYW5hbHl0aWNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF3aW5kb3cuR0FfSU5JVElBTElaRUQpIHtcbiAgICAgIGluaXRHQSgpO1xuICAgICAgd2luZG93LkdBX0lOSVRJQUxJWkVEID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nUGFnZVZpZXcoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlLCB0b3RhbFBhZ2VzLCBwb3N0cyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SGVhZFNpdGU+PC9IZWFkU2l0ZT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8UG9zdExpc3QgcGFnZT17Y3VycmVudFBhZ2V9IHBvc3RzPXtwb3N0c30gLz5cblxuICAgICAgICAgICAgPFBvc3ROYXZpZ2F0aW9uIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX0gdG90YWxQYWdlcz17dG90YWxQYWdlc30gLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODFweCkge1xuICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSBwYXJhbXMuaWQgfHwgMTtcbiAgICBjb25zdCBQT1NUU19CWV9QQUdFID0gNTsgLy8gQ0hBTkdFIFRPIFNFVCBUSEUgUEFHRVMgUEVSIFBPU1RcbiAgICBjb25zdCBkYXRhUG9zdHMgPSBwb3N0cy5kYXRhLnBvc3RzO1xuICAgIGNvbnN0IHNvcnRlZFBvc3RzID0gZGF0YVBvc3RzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGIuZGF0ZSAtIGEuZGF0ZTtcbiAgICB9KTtcbiAgICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gc29ydGVkUG9zdHMuc2xpY2UoXG4gICAgICAoY3VycmVudFBhZ2UgLSAxKSAqIFBPU1RTX0JZX1BBR0UsXG4gICAgICBjdXJyZW50UGFnZSAqIFBPU1RTX0JZX1BBR0VcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAgIHRvdGFsUGFnZXM6XG4gICAgICAgIHNvcnRlZFBvc3RzLmxlbmd0aCAlIFBPU1RTX0JZX1BBR0UgPT09IDBcbiAgICAgICAgICA/IE1hdGgucm91bmQoc29ydGVkUG9zdHMubGVuZ3RoIC8gUE9TVFNfQllfUEFHRSlcbiAgICAgICAgICA6IE1hdGgucm91bmQoc29ydGVkUG9zdHMubGVuZ3RoIC8gUE9TVFNfQllfUEFHRSkgKyAxLFxuICAgICAgICBwb3N0czogZmlsdGVyZWRQb3N0cyxcbiAgICAgIH0gXG4gICAgfTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogW1xuICAgICAgeyBwYXJhbXM6IHsgaWQ6IFwiMVwiIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiBcIjJcIiB9IH0sXG4gICAgICB7IHBhcmFtczogeyBpZDogXCIzXCIgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgaWQ6IFwiNFwiIH0gfSxcbiAgICAgIHsgcGFyYW1zOiB7IGlkOiBcIjVcIiB9IH1cbiAgICBdLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/page/[id].js\n");

/***/ })

})
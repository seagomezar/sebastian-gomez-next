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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PostThumbnail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostThumbnail */ "./components/PostThumbnail.js");
/* harmony import */ var _PostHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostHeader */ "./components/PostHeader.js");





var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostExcerpt.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





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
        key: index,
        className: "jsx-2344550606" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/posts/" + post.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-2344550606" + " " + "post-thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(_PostThumbnail__WEBPACK_IMPORTED_MODULE_8__["default"], {
        thumbnailImage: post.thumbnailImage,
        altText: post.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/posts/" + post.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-2344550606" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-2344550606" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, post.title))), __jsx(_PostHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
        tags: post.tags,
        date: post.date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-2344550606" + " " + "excerpt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, post.excerpt), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/posts/" + post.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-2344550606" + " " + "keep-reading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Seguir Leyendo")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2344550606",
        __self: this
      }, "article.jsx-2344550606{font-family:\"Open Sans\",sans-serif;color:#333333;font-size:1rem;margin:1rem 1rem;border-bottom:1px solid #eef2f8;}article.jsx-2344550606 a.jsx-2344550606{-webkit-text-decoration:none;text-decoration:none;color:#333333;}article.jsx-2344550606>.title.jsx-2344550606{margin:1rem 0;}article.jsx-2344550606>.keep-reading.jsx-2344550606{cursor:pointer;color:#349ef3;margin:1rem 0 0.5rem 0;display:block;}article.jsx-2344550606>.excerpt.jsx-2344550606{font-size:1rem;line-height:24px;text-align:justify;text-rendering:optimizelegibility;font-family:Merriweather,serif;color:#5d686f;}@media screen and (max-width:728px){.post-thumbnail.jsx-2344550606{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0RXhjZXJwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QlcsQUFHbUQsQUFPZixBQUlQLEFBR0MsQUFNQSxBQVVBLGFBQ2YsQ0FuQkYsQ0FHZ0IsQUFNRyxjQUxNLEdBTUosR0FyQkwsY0FDQyxDQU1ELENBZW9CLENBTnBCLFlBZEcsQUFNbkIsRUFTQSxlQWRrQyxJQXFCQSw0QkFwQmxDLEdBcUJnQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvcy5nb21lei9EZXNrdG9wL3NlYmFzdGlhbi1nb21lei1uZXh0L2NvbXBvbmVudHMvUG9zdEV4Y2VycHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUG9zdFRodW1ibmFpbCBmcm9tIFwiLi9Qb3N0VGh1bWJuYWlsXCI7XG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tIFwiLi9Qb3N0SGVhZGVyXCI7XG5cbmNsYXNzIFBvc3RFeGNlcnB0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5kZXgsIHBvc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlwiIGtleT17aW5kZXh9PlxuICAgICAgICA8TGluayBocmVmPXtcIi9wb3N0cy9cIiArIHBvc3Quc2x1Z30+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9zdC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgIDxQb3N0VGh1bWJuYWlsXG4gICAgICAgICAgICAgIHRodW1ibmFpbEltYWdlPXtwb3N0LnRodW1ibmFpbEltYWdlfVxuICAgICAgICAgICAgICBhbHRUZXh0PXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvcG9zdHMvXCIgKyBwb3N0LnNsdWd9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFBvc3RIZWFkZXIgdGFncz17cG9zdC50YWdzfSBkYXRlPXtwb3N0LmRhdGV9IC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImV4Y2VycHRcIj57cG9zdC5leGNlcnB0fTwvcD5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvcG9zdHMvXCIgKyBwb3N0LnNsdWd9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImtlZXAtcmVhZGluZ1wiPlNlZ3VpciBMZXllbmRvPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDFyZW07XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVmMmY4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJ0aWNsZSBhIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFydGljbGUgPiAudGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFydGljbGUgPiAua2VlcC1yZWFkaW5nIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBjb2xvcjogIzM0OWVmMztcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMC41cmVtIDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJ0aWNsZSA+IC5leGNlcnB0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcblxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTWVycml3ZWF0aGVyLCBzZXJpZjtcbiAgICAgICAgICAgICAgY29sb3I6ICM1ZDY4NmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjhweCkge1xuICAgICAgICAgICAgICAucG9zdC10aHVtYm5haWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdEV4Y2VycHQ7XG4iXX0= */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostExcerpt.js */"));
    }
  }]);

  return PostExcerpt;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostExcerpt);

/***/ })

})
//# sourceMappingURL=index.js.e187a5d82fb943f8529e.hot-update.js.map
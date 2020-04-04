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
        className: "jsx-7843243" + " " + "",
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
        className: "jsx-7843243" + " " + "post-thumbnail",
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
        className: "jsx-7843243" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-7843243" + " " + "",
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
        className: "jsx-7843243" + " " + "excerpt",
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
        className: "jsx-7843243" + " " + "keep-reading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Seguir Leyendo")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "7843243",
        __self: this
      }, "article.jsx-7843243{font-family:\"Open Sans\",sans-serif;color:#333333;font-size:1rem;margin:1rem 1rem;border-bottom:1px solid #eef2f8;}article.jsx-7843243 a.jsx-7843243{-webkit-text-decoration:none;text-decoration:none;color:#333333;}article.jsx-7843243>.title.jsx-7843243{margin:1rem 0;}article.jsx-7843243>.keep-reading.jsx-7843243{cursor:pointer;color:#349ef3;margin:1rem 0 0.5rem 0;display:block;}article.jsx-7843243>.excerpt.jsx-7843243{font-size:1rem;line-height:24px;}@media screen and (max-width:728px){.post-thumbnail.jsx-7843243{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0RXhjZXJwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QlcsQUFHbUQsQUFPZixBQUlQLEFBR0MsQUFNQSxBQUtBLGFBQ2YsQ0FkRixDQUdnQixBQU1HLGNBTE0sR0FNekIsR0FyQmdCLGNBQ0MsQ0FNRCxFQVNBLFlBZEcsQUFNbkIsRUFTQSxlQWRrQyxnQ0FDbEMiLCJmaWxlIjoiL1VzZXJzL3MuZ29tZXovRGVza3RvcC9zZWJhc3RpYW4tZ29tZXotbmV4dC9jb21wb25lbnRzL1Bvc3RFeGNlcnB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFBvc3RUaHVtYm5haWwgZnJvbSBcIi4vUG9zdFRodW1ibmFpbFwiO1xuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSBcIi4vUG9zdEhlYWRlclwiO1xuXG5jbGFzcyBQb3N0RXhjZXJwdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluZGV4LCBwb3N0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvcG9zdHMvXCIgKyBwb3N0LnNsdWd9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBvc3QtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICA8UG9zdFRodW1ibmFpbFxuICAgICAgICAgICAgICB0aHVtYm5haWxJbWFnZT17cG9zdC50aHVtYm5haWxJbWFnZX1cbiAgICAgICAgICAgICAgYWx0VGV4dD17cG9zdC50aXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL3Bvc3RzL1wiICsgcG9zdC5zbHVnfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPntwb3N0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxQb3N0SGVhZGVyIHRhZ3M9e3Bvc3QudGFnc30gZGF0ZT17cG9zdC5kYXRlfSAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJleGNlcnB0XCI+e3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL3Bvc3RzL1wiICsgcG9zdC5zbHVnfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJrZWVwLXJlYWRpbmdcIj5TZWd1aXIgTGV5ZW5kbzwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAxcmVtO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZjJmODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFydGljbGUgYSB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnRpY2xlID4gLnRpdGxlIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnRpY2xlID4gLmtlZXAtcmVhZGluZyB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICMzNDllZjM7XG4gICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDAuNXJlbSAwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFydGljbGUgPiAuZXhjZXJwdCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjhweCkge1xuICAgICAgICAgICAgICAucG9zdC10aHVtYm5haWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdEV4Y2VycHQ7XG4iXX0= */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostExcerpt.js */"));
    }
  }]);

  return PostExcerpt;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostExcerpt);

/***/ })

})
//# sourceMappingURL=index.js.342fbfc98188d905909b.hot-update.js.map
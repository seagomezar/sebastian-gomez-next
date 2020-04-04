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
        className: "jsx-1378320619" + " " + "",
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
        className: "jsx-1378320619" + " " + "post-thumbnail",
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
        className: "jsx-1378320619" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-1378320619" + " " + "",
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
        className: "jsx-1378320619" + " " + "excerpt",
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
        className: "jsx-1378320619" + " " + "keep-reading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Seguir Leyendo")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1378320619",
        __self: this
      }, "article.jsx-1378320619{font-family:\"Open Sans\",sans-serif;color:#333333;font-size:1rem;margin:1rem 1rem;border-bottom:1px solid #eef2f8;}article.jsx-1378320619 a.jsx-1378320619{-webkit-text-decoration:none;text-decoration:none;color:#333333;}article.jsx-1378320619>.title.jsx-1378320619{margin:1rem 0;}article.jsx-1378320619>.keep-reading.jsx-1378320619{cursor:pointer;color:#349ef3;margin:1rem 0 0.5rem 0;display:block;}article.jsx-1378320619>.excerpt.jsx-1378320619{font-size:1rem;line-height:24px;text-align:justify;text-rendering:optimizelegibility;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;font-family:Merriweather,serif;color:#5d686f;font-weight:400;}@media screen and (max-width:728px){.post-thumbnail.jsx-1378320619{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0RXhjZXJwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QlcsQUFHbUQsQUFPZixBQUlQLEFBR0MsQUFNQSxBQVdBLGFBQ2YsQ0FwQkYsQ0FHZ0IsQUFNRyxjQUxNLEdBTUosR0FyQkwsY0FDQyxDQU1ELENBZW9CLENBTnBCLFlBZEcsQUFNbkIsRUFTQSxlQWRrQyxJQW9CViw0QkFuQnhCLDZFQW9Ca0MsK0JBQ2xCLGNBQ0UsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0RXhjZXJwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQb3N0VGh1bWJuYWlsIGZyb20gXCIuL1Bvc3RUaHVtYm5haWxcIjtcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gXCIuL1Bvc3RIZWFkZXJcIjtcblxuY2xhc3MgUG9zdEV4Y2VycHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbmRleCwgcG9zdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiXCIga2V5PXtpbmRleH0+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL3Bvc3RzL1wiICsgcG9zdC5zbHVnfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwb3N0LXRodW1ibmFpbFwiPlxuICAgICAgICAgICAgPFBvc3RUaHVtYm5haWxcbiAgICAgICAgICAgICAgdGh1bWJuYWlsSW1hZ2U9e3Bvc3QudGh1bWJuYWlsSW1hZ2V9XG4gICAgICAgICAgICAgIGFsdFRleHQ9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtcIi9wb3N0cy9cIiArIHBvc3Quc2x1Z30+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJcIj57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8UG9zdEhlYWRlciB0YWdzPXtwb3N0LnRhZ3N9IGRhdGU9e3Bvc3QuZGF0ZX0gLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXhjZXJwdFwiPntwb3N0LmV4Y2VycHR9PC9wPlxuICAgICAgICA8TGluayBocmVmPXtcIi9wb3N0cy9cIiArIHBvc3Quc2x1Z30+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwia2VlcC1yZWFkaW5nXCI+U2VndWlyIExleWVuZG88L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYXJ0aWNsZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMXJlbTtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWYyZjg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnRpY2xlIGEge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJ0aWNsZSA+IC50aXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJ0aWNsZSA+IC5rZWVwLXJlYWRpbmcge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzQ5ZWYzO1xuICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMCAwLjVyZW0gMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnRpY2xlID4gLmV4Y2VycHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogTWVycml3ZWF0aGVyLCBzZXJpZjtcbiAgICAgICAgICAgICAgY29sb3I6ICM1ZDY4NmY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjhweCkge1xuICAgICAgICAgICAgICAucG9zdC10aHVtYm5haWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdEV4Y2VycHQ7XG4iXX0= */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostExcerpt.js */"));
    }
  }]);

  return PostExcerpt;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostExcerpt);

/***/ })

})
//# sourceMappingURL=index.js.4743374015467e078650.hot-update.js.map
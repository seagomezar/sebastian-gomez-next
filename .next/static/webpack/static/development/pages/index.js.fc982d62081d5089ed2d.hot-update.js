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
        className: "jsx-2452463242" + " " + "",
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
        className: "jsx-2452463242" + " " + "post-thumbnail",
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
        className: "jsx-2452463242" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-2452463242" + " " + "",
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
        className: "jsx-2452463242" + " " + "excerpt",
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
        className: "jsx-2452463242" + " " + "keep-reading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Seguir Leyendo")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2452463242",
        __self: this
      }, "article.jsx-2452463242{font-family:\"Open Sans\",sans-serif;color:#333333;font-size:1rem;margin:1rem 1rem;border-bottom:1px solid #eef2f8;}article.jsx-2452463242 a.jsx-2452463242{-webkit-text-decoration:none;text-decoration:none;color:#333333;}article.jsx-2452463242>.title.jsx-2452463242{margin:1rem 0;}article.jsx-2452463242>.keep-reading.jsx-2452463242{cursor:pointer;color:#349ef3;margin:1rem 0 0.5rem 0;display:block;}article.jsx-2452463242>.excerpt.jsx-2452463242{box-sizing:border-box;color:rgb(93,104,111);display:block;font-family:Merriweather,serif;font-size:16px;font-weight:400;height:240px;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;line-height:30.4px;margin-block-end:24px;margin-block-start:0px;margin-bottom:24px;margin-inline-end:0px;margin-inline-start:0px;margin-left:0px;margin-right:0px;margin-top:0px;outline-color:rgb(93,104,111);outline-style:none;outline-width:0px;text-align:justify;text-rendering:optimizelegibility;-webkit-text-size-adjust:100%;text-size-adjust:100%;width:335px;-webkit-font-smoothing:subpixel-antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0);}@media screen and (max-width:728px){.post-thumbnail.jsx-2452463242{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zLmdvbWV6L0Rlc2t0b3Avc2ViYXN0aWFuLWdvbWV6LW5leHQvY29tcG9uZW50cy9Qb3N0RXhjZXJwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QlcsQUFHbUQsQUFPZixBQUlQLEFBR0MsQUFNTyxBQTZCUCxhQUNmLENBdENGLENBR2dCLE9BTVUsT0FMRCxNQWZULFNBcUJBLEtBcEJDLENBTUQsRUFTQSxNQU1rQixNQXBCZixBQU1uQixFQVNBLGVBZGtDLFFBb0JqQixlQUNDLFNBcEJsQixPQXFCZSxhQUNTLHlHQUNILG1CQUNHLHNCQUNDLHVCQUNKLG1CQUNHLHNCQUNFLHdCQUNSLGdCQUNDLGlCQUNGLGVBQ2lCLDhCQUNiLG1CQUNELGtCQUNDLG1CQUNlLGtDQUNaLG9EQUNWLFlBQ2dDLDRDQUNDLDBDQUMvQyIsImZpbGUiOiIvVXNlcnMvcy5nb21lei9EZXNrdG9wL3NlYmFzdGlhbi1nb21lei1uZXh0L2NvbXBvbmVudHMvUG9zdEV4Y2VycHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUG9zdFRodW1ibmFpbCBmcm9tIFwiLi9Qb3N0VGh1bWJuYWlsXCI7XG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tIFwiLi9Qb3N0SGVhZGVyXCI7XG5cbmNsYXNzIFBvc3RFeGNlcnB0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5kZXgsIHBvc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlwiIGtleT17aW5kZXh9PlxuICAgICAgICA8TGluayBocmVmPXtcIi9wb3N0cy9cIiArIHBvc3Quc2x1Z30+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9zdC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgIDxQb3N0VGh1bWJuYWlsXG4gICAgICAgICAgICAgIHRodW1ibmFpbEltYWdlPXtwb3N0LnRodW1ibmFpbEltYWdlfVxuICAgICAgICAgICAgICBhbHRUZXh0PXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvcG9zdHMvXCIgKyBwb3N0LnNsdWd9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFBvc3RIZWFkZXIgdGFncz17cG9zdC50YWdzfSBkYXRlPXtwb3N0LmRhdGV9IC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImV4Y2VycHRcIj57cG9zdC5leGNlcnB0fTwvcD5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvcG9zdHMvXCIgKyBwb3N0LnNsdWd9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImtlZXAtcmVhZGluZ1wiPlNlZ3VpciBMZXllbmRvPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDFyZW07XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVmMmY4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJ0aWNsZSBhIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFydGljbGUgPiAudGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFydGljbGUgPiAua2VlcC1yZWFkaW5nIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBjb2xvcjogIzM0OWVmMztcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMC41cmVtIDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJ0aWNsZSA+IC5leGNlcnB0IHtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig5MywgMTA0LCAxMTEpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1lcnJpd2VhdGhlciwgc2VyaWY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwLjRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMjRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgb3V0bGluZS1jb2xvcjogcmdiKDkzLCAxMDQsIDExMSk7XG4gICAgICAgICAgICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgIG91dGxpbmUtd2lkdGg6IDBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgICAgICAgICAgICAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDMzNXB4O1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI4cHgpIHtcbiAgICAgICAgICAgICAgLnBvc3QtdGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RFeGNlcnB0O1xuIl19 */\n/*@ sourceURL=/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostExcerpt.js */"));
    }
  }]);

  return PostExcerpt;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostExcerpt);

/***/ })

})
//# sourceMappingURL=index.js.fc982d62081d5089ed2d.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
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
/* harmony import */ var _PostExcerpt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostExcerpt */ "./components/PostExcerpt.js");





var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/components/PostList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var PostList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PostList, _React$Component);

  function PostList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostList, [{
    key: "render",
    value: function render() {
      var posts = [{
        id: 1,
        tags: ['Animaciones', 'CSS', 'HTML', 'Desarrollo Web'],
        thumbnailImage: '/foto_personal.jpg',
        categories: ["CSS"],
        date: "2018-01-24 12:13:17",
        title: 'Todo sobre animaciones en css',
        slug: 'todo-sobre-transiciones-en-css',
        excerpt: "Las transiciones hacen parte del conjunto de herramientas que poseemos como desarrolladores FrontEnd para mejorar la experiencia del usuario dentro de nuestra aplicaci\xF3n Web. Son \xFAtiles porque nos permiten animar el cambio de valores en las distintas propiedades de un elemento lo que puede hacerlo m\xE1s llamativo al usuario e invitarlo a interactuar con \xE9l. En este post tratar\xE9 de cubrir el extenso tema de transiciones con diversos ejemplos adaptados desde la especificaci\xF3n."
      }];
      posts.push(posts[0]);
      posts.push(posts[0]);
      posts.push(posts[0]);
      return __jsx("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, posts.map(function (post, index) {
        return __jsx(_PostExcerpt__WEBPACK_IMPORTED_MODULE_6__["default"], {
          post: post,
          index: index,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        });
      }));
    }
  }]);

  return PostList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ })

})
//# sourceMappingURL=index.js.899bf10ca0119043eaf7.hot-update.js.map
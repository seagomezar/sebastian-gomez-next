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

  function Discuss() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Discuss);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Discuss).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Discuss, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, __jsx("div", {
        id: "disqus_thread",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }), __jsx("script", {
        dangerouslySetInnerHTML: {
          __html: "\n          var disqus_config = function () {\n            this.page.url = '".concat(props.canonicalUrl, "/").concat(props.slug, "';\n            this.page.identifier = \"").concat(props.slug, "\"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable\n          };\n\n          (function() { // DON'T EDIT BELOW THIS LINE\n          var d = document, s = d.createElement('script');\n          s.src = 'https://EXAMPLE.disqus.com/embed.js';\n          s.setAttribute('data-timestamp', +new Date());\n          (d.head || d.body).appendChild(s);\n          })();")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }));
    }
  }]);

  return Discuss;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Discuss);

/***/ }),

/***/ "./pages/posts/todo-sobre-transiciones-en-css.mdx":
/*!********************************************************!*\
  !*** ./pages/posts/todo-sobre-transiciones-en-css.mdx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _components_PostHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostHeader */ "./components/PostHeader.js");
/* harmony import */ var _components_HeadSite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/HeadSite */ "./components/HeadSite.js");
/* harmony import */ var _components_Discuss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Discuss */ "./components/Discuss.js");


var _jsxFileName = "/Users/s.gomez/Desktop/sebastian-gomez-next/pages/posts/todo-sobre-transiciones-en-css.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */





var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_HeadSite__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "HeadSite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Todo sobre transiciones en CSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_PostHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tags: ['Animaciones', 'HTML', 'CSS', 'Desarrollo Web'],
    date: "2018-01-24 12:13:17",
    mdxType: "PostHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Las transiciones hacen parte del conjunto de herramientas que poseemos como desarrolladores FrontEnd para mejorar la experiencia del usuario dentro de nuestra aplicaci\xF3n Web. Son \xFAtiles porque nos permiten animar el cambio de valores en las distintas propiedades de un elemento lo que puede hacerlo m\xE1s llamativo al usuario e invitarlo a interactuar con \xE9l. En este post tratar\xE9 de cubrir el extenso tema de transiciones con diversos ejemplos adaptados desde la especificaci\xF3n."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Empecemos con un ejemplo simple:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Tenemos un cuadrado simple:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), "<div id=\"square1\" class=\"square red\"></div>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Y unos estilos asociados a dicho cuadrado:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), ".square {\nwidth: 50px;\nheight: 50px;\nmargin-bottom: 5px;\n}\n.red { background: red; }\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Y tenemos una clase adicional que se la asignaremos al cuadrado en un momento x en el tiempo:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), ".black {\nbackground: black;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Sin embargo queremos que esto se haga de una manera suave, controlada y agradable al usuario. Por tanto es aqu\xED donde necesitamos hacer uso de las transiciones. Esto lo podemos hacer a\xF1adiendo la propiedad transition dentro de la clase que queremos a\xF1adir:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), ".black {\nbackground: black;\ntransition: background 2s 0.25s;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "La propiedad transition como la hemos usado en el ejemplo anterior nos permite que el cambio de background de rojo a negro se haga durante 2 segundos (duraci\xF3n) en vez de hacer el cambio instant\xE1neamente, tambi\xE9n nos permite indicar que este cambio empiece a ocurrir 0.25 segundos despu\xE9s de que asigne la clase al elemento (delay).\nTambi\xE9n existe otra sintaxis alternativa para esto que requiere unas cuantas l\xEDneas m\xE1s, sin embargo es \xFAtil conocerla:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), ".black {\nbackground: black;\ntransition-property: background;\ntransition-duration: 2s;\ntransition-delay: 0.25s;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Analogamente a los valores que hemos asignado en segundo a la duraci\xF3n y al retraso (delay) podr\xEDamos haberlo hecho en milisegundos, para lo cual bastar\xEDa con multiplicar por 1000 y a\xF1adir ms al final. Por ejemplo:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), "...\ntransition-duration: 2000ms;\ntransition-delay: 250ms;\n...\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Si queremos hacer transiciones sobre m\xE1s de una propiedad, podemos usar all para indicar que la transici\xF3n se aplica sobre todas las propiedades posibles:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), ".black {\nbackground: black;\ncolor: white;\ntransition: all 2s 0.25s;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Nota"), ": Transition all no es recomendable desde el punto de vista de desempe\xF1o (performance) altamente recomendamos no usar transition all a menos que definitivamente quieras aplicar transiciones sobre todo lo que pase con el elemento de la misma manera, por eso a continuaci\xF3n te explico como hacer transiciones espec\xEDficamente con cada propiedad."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "A veces no deseamos que se hagan transiciones sobre todas las propiedades de la misma manera, la propiedad transition adem\xE1s tiene la caracter\xEDstica de permitir especificar la transici\xF3n de cada propiedad simplemente separ\xE1ndolas por coma. Veamos un ejemplo:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), ".black {\nbackground: black;\ncolor: white;\ntransition: background 2s 0.25s,\ncolor 1.5 3s;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "En el ejemplo anterior estamos cambiando el background y el color con distinta duraci\xF3n y distinto retraso (delay). Esto permite tener un control mas granular de exactamente lo que necesitamos animar en cada transici\xF3n."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Como habr\xE1s notado hasta ahora las transiciones de las que hablamos ocurren de manera lineal, esto quiere decir que el cambio ocurre uniformemente durante el tiempo que dure la transici\xF3n, sin embargo esta no es la \xFAnica manera de hacerlo, por ejemplo podemos acelerar el cambio al comienzo y desacelerarlo al final lo que nos dar\xE1 un tipo diferente de sensaci\xF3n al ver la transici\xF3n. Para determinar como ocurrir\xE1 el cambio, tenemos la propiedad transition-timing-function que puede tomar los siguientes valores:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), "transition-timing-function: linear; // Este es el valor por defecto, no hace falta incluirlo\ntransition-timing-function: ease-in; // Significa que al comienzo sea r\xE1pido el cambio y que despu\xE9s se ralentice.\ntransition-timing-function: ease-out; // Significa que al comienzo sea lento el cambio y que despu\xE9s se acelere.\ntransition-timing-function: ease-in-out; // Significa que al comienzo y al final sea r\xE1pido el cambio pero en la mitad sea lento\ntransition-timing-function: cubic-bezier(0.21,0.3,0.1,0.23); // De acuerdo a los valores se acelera o desacelera.\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Pero esta no es la \xFAnica manera de a\xF1adir esta propiedad a las transiciones. Tambi\xE9n es posible hacerlo directamente en la propiedad transition:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), ".move {\ntransform: translateX(500px);\ntransition: transform 2s 0.25s ease-in-out;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Incluso en cada transici\xF3n sobre las propiedades:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), ".move-background {\ntransform: translateX(500px);\nbackground: red;\ntransition: transform 2s 0.25s ease-in-out,\nbackground 1s 0.10 cubic-bezier(0.21,0.3,0.1,0.23);\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Miremos en detalle un poco m\xE1s como funciona la propiedad transition-timing-function cuando toma el valor de cubic-bezier(). Para ello revisemos en que consiste la ecuaci\xF3n de la curva de bezier en la cual se basa esta funci\xF3n."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Las curvas de bezier son un sistema matem\xE1tico que desarrollo pierre bezier para el trazado de dibujos de aeronaves y autom\xF3viles que se describe como una ecuaci\xF3n que toma cuatro valores para describir la curva:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://storage.googleapis.com/sebastian-gomez-blog.appspot.com/uploads/2018/01/23242B8E-A920-4955-84E1-C7D2563CD969.png"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "a"
  }, {
    "src": "https://storage.googleapis.com/sebastian-gomez-blog.appspot.com/uploads/2018/01/23242B8E-A920-4955-84E1-C7D2563CD969.png",
    "alt": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }))), " Con una ecuaci\xF3n matem\xE1tica de la siguiente forma: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://storage.googleapis.com/sebastian-gomez-blog.appspot.com/uploads/2018/01/Screen-Shot-2018-01-09-at-4.13.37-PM.png"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "a"
  }, {
    "src": "https://storage.googleapis.com/sebastian-gomez-blog.appspot.com/uploads/2018/01/Screen-Shot-2018-01-09-at-4.13.37-PM-1024x53.png",
    "alt": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Pues bien estos cuatro valores (P0 a P3) son los que describen la transici\xF3n del movimiento entre el punto inicial y el punto final y con estos se pueden definir completamente diversos tipos de transiciones:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "cubic-bezier(P0, P1, P2, P3); En estos sitios web puedes jugar m\xE1s con este tipo de transiciones donde puedes ajustar los valores para tener un mayor control en tu transici\xF3n:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "http://cubic-bezier.com/"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), "http://cubic-bezier.com/")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "http://easings.net/"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), "http://easings.net/"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Debes tener en cuenta que hay propiedades que no son \u201Ctransicionables\u201D esto quiere decir que no puedes aplicar transiciones a estas propiedades. Para ver una lista de cuales propiedades son \u201Ctransicionables\" y cuales no puedes revisar este link:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "En el siguiente ejemplo se muestra un conjunto de transiciones sobre cubos con distintas transition-timing-function y propiedades, puedes jugar con ellas para evidenciar sus diferencias:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://codepen.io/seagomezar/pen/wPbYqe"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), "https://codepen.io/seagomezar/pen/wPbYqe")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Las herramientas para desarrolladores de los navegadores como chrome y firefox nos permiten ralentizar o acelerar las transformaciones para un mejor proceso de debug en ellas, para ello puedes abrir la pesta\xF1a animaciones:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://storage.googleapis.com/sebastian-gomez-blog.appspot.com/uploads/2018/01/13B715EC-945A-47A7-A6E8-F6A79F24AE3D.png"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "a"
  }, {
    "src": "https://storage.googleapis.com/sebastian-gomez-blog.appspot.com/uploads/2018/01/13B715EC-945A-47A7-A6E8-F6A79F24AE3D-1024x642.png",
    "alt": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Puedes tambi\xE9n usar Javascript para conocer el estado de una transici\xF3n mediante los siguientes listeners:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "transitionstart"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "transitionend")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Finalmente algunas consideraciones respecto a las transiciones:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Transiciones alrededor de 100ms son instant\xE1neas para los usuarios y dif\xEDcilmente perceptibles."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Transiciones de m\xE1ximo 1 segundo y m\xEDnimo 250ms son buenas y mantiene a los usuario conectados."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Mas de 2 segundos es definitivamente una mala idea para transformaciones en sitios web est\xE1ndar ya que puede desconectar al usuario de lo que pasa."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "De 250ms a 300ms es el tiempo est\xE1ndar de la mayor\xEDa de animaciones."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Las transiciones en general te permite crear experiencias que pasan solo una vez."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Si el navegador no soporta transiciones en el peor de los casos siempre se cambia la propiedad."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Las transiciones son granulares porque te permiten animar una o dos o x propiedades.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Eso es todo, espero que este post te sea de utilidad y lo puedas aplicar a alg\xFAn proyecto que tengas en mente y que simplemente te haya ayudado a entender la naturaleza de las transiciones en CSS. D\xE9jame un comentario si lograste implementarlo, si quieres a\xF1adir alguna otra funcionalidad o si tienes alguna duda no dudes en dejarme un comentario en la parte de abajo, recuerda que si te gust\xF3 tambi\xE9n puedes compartir usando los links a las redes sociales en la parte de abajo."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Discuss__WEBPACK_IMPORTED_MODULE_6__["default"], {
    slug: "todo-sobre-transiciones-en-css",
    mdxType: "Discuss",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=todo-sobre-transiciones-en-css.js.5830f20675f3ce4261de.hot-update.js.map
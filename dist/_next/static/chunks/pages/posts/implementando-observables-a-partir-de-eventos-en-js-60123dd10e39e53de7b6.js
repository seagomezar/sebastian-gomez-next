_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"0S7h":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/implementando-observables-a-partir-de-eventos-en-js",function(){return a("1qBK")}])},"1qBK":function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return d}));var o=a("wx14"),r=a("Ff2n"),t=a("q1tI"),s=a.n(t),c=a("7ljp"),l=a("j53b"),i=a("6G3q"),u=a("37hk"),b=(s.a.createElement,{});function d(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},b,a,{components:n,mdxType:"MDXLayout"}),Object(c.b)(i.a,{category:"Javascript",date:"2020-05-05",title:"Implementando Observables a partir de Eventos en JS",slug:"implementando-observables-a-partir-de-eventos-en-js",thumbnailImage:"/rxjs.png",excerpt:"En \xe9ste post vamos a tratar de implementar la definici\xf3n m\xe1s pura de observable y la funci\xf3n generadora de observables m\xe1s com\xfan como ya lo tiene implementado RX.js con el fin de entender a profundidad el concepto.",mdxType:"HeadSite"}),Object(c.b)("h1",null,"Implementando Observables a partir de Eventos en JS"),Object(c.b)(l.a,{tags:["Javascript","Programaci\xf3n Reactiva","Desarrollo Web"],date:"2020-05-05",slug:"implementando-observables-a-partir-de-eventos-en-js",mdxType:"PostHeader"}),Object(c.b)("p",null,"En \xe9ste post vamos a tratar de implementar la definici\xf3n m\xe1s pura de observable y la funci\xf3n generadora de observables m\xe1s com\xfan como ya lo tiene implementado RX.js con el fin de entender a profundidad el concepto."),Object(c.b)("p",null,"Nos encontramos en la ola de la programaci\xf3n reactiva y funcional, y a pesar de todas la ventajas que ofrece a\xfan es desconocida para la mayor\xeda de desarrolladores sobre todo aquellos desarrolladores j\xf3venes. En \xe9ste post vamos a tratar de implementar la definici\xf3n m\xe1s pura de observable y la funci\xf3n generadora de observables m\xe1s com\xfan como ya lo tiene implementado RX.js con el fin de entender a profundidad el concepto."),Object(c.b)("p",null,"La manera m\xe1s natural de acercarse a los observables es entendiendo que es \xa0la combinaci\xf3n de dos patrones de dise\xf1o en Javascript: Uno es el ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.sebastian-gomez.com/posts/patron-iterador-iterator-pattern-en-javascript/"}),"patr\xf3n iterador")," que lo explico en este post, y el segundo es el ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.sebastian-gomez.com/posts/entendiendo-el-patron-observador-observer-pattern-en-javascript/"}),"patr\xf3n observer")," que tambi\xe9n lo explico en este post, sin embargo no es la manera m\xe1s f\xe1cil. Una vez que hayas leido estos dos patrones y al menos tengas una idea en la cabeza de lo que son y significan un observable no es m\xe1s que una funci\xf3n en Javascript con otra funci\xf3n en su interior que retorna un Objeto (JSON) con tres funciones en su interior. onNext, onComplete y onError. En primer lugar escribamos en Javascript lo que te acabo de narrar:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'// ES5 & 6 (Antiguo est\xe1ndar)\nfunction Observable(forEach) {\n  this._forEach = forEach;\n}\n\nObservable.prototype = {\n  forEach: function (onNext, onError, onCompleted) {\n    if (typeof onNext === "function") {\n      /* la funci\xf3n se invoc\xf3 explicitamente con\n       * (onNext: ()=> ...., onError: () => ....., onComplete: () => ....) */\n      return this._forEach({\n        onNext: onNext,\n        onError: onError || function () {},\n        onCompleted: onCompleted || function () {},\n      });\n    } else {\n      /* la funci\xf3n se invoc\xf3 explicitamente con un objeto en lugar de tres funciones\n       * {onNext: ()=> ...., onError: () => ....., onComplete: () => ....} */\n      return this._forEach(onNext);\n    }\n  },\n};\n')),Object(c.b)("p",null,"Como te dije es una funci\xf3n llamada Observable que recibe como par\xe1metro una funci\xf3n que en este caso la llamamos forEach, \xa1Y S\xed! Tiene todo que ver con la funci\xf3n ForEach que usamos con los arreglos en Javascript. Como ver\xe1s esta funci\xf3n la implementamos de manera interna en el Observable para hacerla propia de la definici\xf3n del Observable. Como ver\xe1s en la invocaci\xf3n de la funci\xf3n forEach, asumimos que la van a invocar envi\xe1ndole tres par\xe1metros, onNext, onError y onComplete y que lo \xfanico que haremos ser\xe1 detectar si han enviado cada funci\xf3n como par\xe1metro o si han enviado las tres funciones dentro un objeto JSON, y en cualquier caso devolvemos recursivamente la invocaci\xf3n del forEach nuevamente con la declaraci\xf3n en su interior."),Object(c.b)("p",null,"Wait what? \u2026"),Object(c.b)("p",null,"S\xed, tal vez esto hasta aqu\xed te estall\xf3 un poco la cabeza, la programaci\xf3n con observables suele cambiar el paradigma con el cual escribimos c\xf3digo, tratar\xe9 de mostrarte un ejemplo para que sirve lo que hemos hecho escrito all\xed arriba, pero antes a\xf1adamos una funci\xf3n al enredado bloque de c\xf3digo de arriba. Imag\xednate que quieres mostrar un console.log(\u201cHizo click\u201d); cada vez que un usuario hace click en un bot\xf3n de tu sitio web. Para ello vamos a crear una funci\xf3n est\xe1tica dentro de la definici\xf3n de observable que creamos arriba que convertir\xe1 un evento del DOM en un observable:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Observable.fromEvent = function (dom, eventName) {\n  return new Observable(function forEach(observer) {\n    var handler = (e) => observer.onNext(e);\n    dom.addEventListener(eventName, handler);\n    return {\n      dispose: () => {\n        dom.removeEventListener(eventName, handler);\n      },\n    };\n  });\n};\n")),Object(c.b)("p",null,"Como ver\xe1s la funci\xf3n fromEvent recibe un elemento del DOM y el nombre del evento sobre el que queremos hacer seguimiento y retorna un observable sobre que nos retorna el evento cada vez que se ejecuta la acci\xf3n dentro de la funci\xf3n onNext. Adicionalmente un Observable siempre debe retornar un objeto que llamaremos subscripci\xf3n que tiene la responsabilidad de proveer una manera de dessuscribirnos al observable en caso de que no deseemos recibir mas informaci\xf3n esta es la responsabilidad de la funci\xf3n dispose. Ahora veamos como usamos los dos bloques de c\xf3digo juntos para capturar los eventos cada vez que hagamos click sobre un bot\xf3n."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'const button = document.getElementById("button");\nconst clicks = Observable.fromEvent(button, "click");\nconst clicksSubscription = clicks.forEach((event) => {\n  console.log("El usuario hizo click", event);\n});\n')),Object(c.b)("p",null,"Bien veamos ahora como podemos hacer lo mismo usando completamente ES7, lo primero que tenemos que tener presente es que la funci\xf3n forEach por convenci\xf3n es reemplazada por la funci\xf3n subscribe. Y nos valdremos de las palabras reservadas class y static para crear nuestra implementaci\xf3n de observable. Veamos entonces en primer lugar como implementamos la definici\xf3n pura de observable:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"class Observable {\n  constructor(subscribe) {\n    this._subscribe = subscribe;\n  }\n  subscribe(observer) {\n    return this._subscribe(observer);\n  }\n}\n")),Object(c.b)("p",null,"Como ver\xe1s aprovech\xe1ndonos de la definici\xf3n de clase y constructor se hace mas corta la implementaci\xf3n del observable. Ademas en esta nueva definici\xf3n no nos importa en absoluto como el observador (observer) env\xeda las funciones onNext, onComplete y onError (Que por cierto por convenci\xf3n se cambian a next, error y complete). Veamos entonces como implementamos la funci\xf3n fromEvent para crear observables a partir de eventos."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"  class Observable {\n    \u2026\n    static fromEvent(domElement, eventName) {\n      return new Observable(function subscribe(observer) {\n        const handler = ev => { observer.next(ev) };\n        domElement.addEventListener(eventName, handler);\n        return {\n          unsubscribe() {\n            domElement.removeEventListener(eventName, handler);\n          }\n        }\n      });\n    }\n  }\n")),Object(c.b)("p",null,"An\xe1logamente la ejecuci\xf3n del observable se realiza de manera similar a la ejecuci\xf3n del observable en el antiguo est\xe1ndar con la diferencia que en lugar de usar la funci\xf3n forEach, usamos la funci\xf3n subscribe:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'const button = document.getElementById("button");\nconst clicks = Observable.fromEvent(button, "click");\nconst clicksSubscription = clicks.subscribe({\n  next(e) {\n    console.log("Click in the button");\n  },\n});\n')),Object(c.b)("p",null,"Como ver\xe1s en los dos bloques de c\xf3digo anteriores notaras que la diferencia entre el est\xe1ndar viejo o antiguo para crear la definici\xf3n pura m\xe1s simple de un observable es significativamente mas larga y m\xe1s descriptiva que el est\xe1ndar nuevo y esto se debe a que usando el est\xe1ndar nuevo dejamos por completo la implementaci\xf3n de las funciones onNext, onComplete y onError al observador que en adelante ser\xe1n llamadas next, complete y error (sin el \u201con\u201d al comienzo) ver\xe1s que la invocaci\xf3n y ejecuci\xf3n del observable es muy similar usando ambos est\xe1ndares."),Object(c.b)("p",null,"Como notar\xe1s un observable no se ejecuta a menos que tengas un subscriptor que este escuchando los eventos mediante el subscribe o el forEach respectivamente y esto se debe a que por naturaleza los observables son fr\xedos (Cold or lazy observables) es decir que no hacen nada a menos que tengan a alguien que los escuche."),Object(c.b)("p",null,"Finalmente para dessuscribirte de un Observable puedes usar el m\xe9todo dispose que o unsubscribe que viene junto con la subscripci\xf3n de la siguiente manera:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// Estandar antiguo\nclicksSubscription.dispose();\n\n// Est\xe1ndar nuevo\nclicksSubscription.unsubscribe();\n")),Object(c.b)("p",null,"Sin embargo recuerda que si te dessuscribes antes de escuchar por el observable no obtendr\xe1s ning\xfan evento, es decir una implementaci\xf3n como la siguiente solo nos permitir\xeda obtener \xfanicamente el primer click sobre el bot\xf3n:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'    const clicksSubscription = clicks.subscribe({\n      next(e) {\n        console.log("Click in the button");\n        clicksSubscription.unsubscribe();\n      };\n    });\n')),Object(c.b)("p",null,"En los siguientes links encontrar\xe1s la implementaci\xf3n:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"https://codepen.io/seagomezar/pen/aEVZmv"}),"Usando el est\xe1ndar Antiguo (forEach)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"https://codepen.io/seagomezar/pen/MrOeyd"}),"Usando el est\xe1ndar Nuevo (Subscribe)"))),Object(c.b)("p",null,"Eso es todo, espero que este post te sea de utilidad y lo puedas aplicar a alg\xfan proyecto que tengas en mente y que simplemente te haya ayudado a entender la naturaleza de los observables. d\xe9jame un comentario si lograste implementarlo, si quieres a\xf1adir alguna otra funcionalidad o si tienes alguna duda no dudes en dejarme un comentario en la parte de abajo, recuerda que si te gust\xf3 tambi\xe9n puedes compartir usando los links a las redes sociales en la parte de abajo."),Object(c.b)(u.a,{slug:"implementando-observables-a-partir-de-eventos-en-js",mdxType:"Discuss"}))}d.isMDXComponent=!0},j53b:function(e,n,a){"use strict";var o=a("1OyB"),r=a("vuIU"),t=a("Ji7U"),s=a("md7G"),c=a("foSv"),l=a("MX0m"),i=a.n(l),u=a("q1tI"),b=a.n(u),d=(a("YFqc"),b.a.createElement);function m(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,o=Object(c.a)(e);if(n){var r=Object(c.a)(this).constructor;a=Reflect.construct(o,arguments,r)}else a=o.apply(this,arguments);return Object(s.a)(this,a)}}var p={CSS:"primary",HTML:"secondary",Javascript:"warning",Firebase:"warning","Google Maps":"darkgreen",Angular:"danger",React:"success","Desarrollo Web":"info","Google Datastudio":"primary","Big Query":"danger",NodeJS:"node",Other:"dark",Typescript:"typescript","Programaci\xf3n Reactiva":"reactive"},v=function(e){Object(t.a)(a,e);var n=m(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.name;return d("a",{className:"jsx-187945056 "+("badge badge-"+(p[e]||"dark")||!1)},e,d(i.a,{id:"187945056"},[".badge.jsx-187945056{-webkit-text-decoration:none;text-decoration:none;margin-right:1em;color:white;padding:0.5em 0.5em;margin:0.5em 0;display:inline-block;}",".badge-primary.jsx-187945056{background-color:blue;}",".badge-secondary.jsx-187945056{background-color:green;}",".badge-darkgreen.jsx-187945056{background-color:#3cba54;}",".badge-danger.jsx-187945056{background-color:red;}",".badge-warning.jsx-187945056{background-color:#e5be01;}",".badge-info.jsx-187945056{background-color:gray;}",".badge-dark.jsx-187945056{background-color:black;}",".badge-success.jsx-187945056{background-color:green;}",".badge-node.jsx-187945056{background-color:#11d92f;}",".badge-typescript.jsx-187945056{background-color:#4f8cf6;}",".badge-reactive.jsx-187945056{background-color:#e10c8c;}"]))}}]),a}(b.a.Component),f=b.a.createElement;function j(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,o=Object(c.a)(e);if(n){var r=Object(c.a)(this).constructor;a=Reflect.construct(o,arguments,r)}else a=o.apply(this,arguments);return Object(s.a)(this,a)}}var g=function(e){Object(t.a)(a,e);var n=j(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,n=e.date,a=e.tags;e.slug;return f("small",{className:"jsx-1750184873 "},f("span",{className:"jsx-1750184873"},f("strong",{className:"jsx-1750184873"},"Fecha: "),new Date(n).toLocaleDateString("es-CO")," -",f("strong",{className:"jsx-1750184873"}," Autor: ")," Sebastian Gomez"),f("span",{className:"jsx-1750184873"}),f("span",{className:"jsx-1750184873"},a.map((function(e,n){return f(v,{name:e,key:n})}))),f(i.a,{id:"1750184873"},["a.jsx-1750184873{color:#9eabb3;-webkit-text-decoration:none;text-decoration:none;}","small.jsx-1750184873{color:#9eabb3;}","span.jsx-1750184873{display:block;}","span.jsx-1750184873:first-child{margin-top:0.2em;}","span.jsx-1750184873:last-child{margin-bottom:1em;}"]))}}]),a}(b.a.Component);n.a=g}},[["0S7h",0,1,2,3,4,5]]]);
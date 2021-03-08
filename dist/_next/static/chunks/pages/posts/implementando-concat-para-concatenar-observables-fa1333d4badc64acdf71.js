_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"C/ja":function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return m}));var o=n("wx14"),r=n("Ff2n"),s=n("q1tI"),t=n.n(s),c=n("7ljp"),l=n("j53b"),b=n("6G3q"),i=n("37hk"),u=(t.a.createElement,{});function m(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},u,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)(b.a,{category:"Javascript",date:"2020-05-05",title:"Implementando concat para concatenar observables",slug:"implementando-concat-para-concatenar-observables",thumbnailImage:"/rxjs.png",excerpt:"En este post vamos a implementar una funci\xf3n que nos permita transformar distintos observables en uno solo concaten\xe1ndolos.",mdxType:"HeadSite"}),Object(c.b)("h1",null,"Implementando concat para concatenar observables"),Object(c.b)(l.a,{tags:["Javascript","Programaci\xf3n Reactiva","Desarrollo Web"],date:"2020-05-05",slug:"implementando-concat-para-concatenar-observables",mdxType:"PostHeader"}),Object(c.b)("p",null,"En este post vamos a implementar una funci\xf3n que nos permita transformar distintos observables en uno solo concaten\xe1ndolos."),Object(c.b)("p",null,"En los ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.sebastian-gomez.com/implementando-map-como-operador-en-observables/"}),"post anteriores")," tuvimos un acercamiento a la implementaci\xf3n del operador filter, map y of en observables, lo implementamos desde cero similarmente a como lo hace RX.js para entender un poco m\xe1s la filosof\xeda y el funcionamiento interno. En este post vamos a implementar una funci\xf3n que nos permita transformar distintos observables en uno solo concaten\xe1ndolos. Esto puede resultar particularmente \xfatil cuando quieres combinar datos que vienen desde una petici\xf3n HTTP (FromEvent), con datos que tienes en arreglos o variables. Veamos un ejemplo:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const sourceOne = Observable.fromEvent(/** Algo que nos d\xe9 1, 2, 3 por ejemplo*/);\nconst sourceTwo = of(4, 5, 6);\nconst fuenteDeLaVerdad = Observable.concat(sourceOne, sourceTwo);\nfuenteDeLaVerdad.subscribe(/** lo que queramos hacer aqu\xed*/);\n")),Object(c.b)("p",null,"En este ejemplo queremos combinar datos provenientes de una fuente din\xe1mica con una fuente de datos est\xe1tica, pero f\xe1cilmente podr\xedamos combinar ambas fuentes est\xe1ticas o fuentes din\xe1micas, sin embargo el objetivo es claro, como podemos combinar dos observables. Veamos entonces, necesitamos que sea un m\xe9todo est\xe1tico que me genere un nuevo observable a partir de los dos observables que reciba como par\xe1metro. Por tanto un primer esqueleto podr\xeda ser algo similar a esto. (Recuerda que estamos bajo ES6 y una clase llamada Observable)."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"class Observable {\n  // ...\n  static concat(...observables) {\n    return new Observable(function subscribe(observer) {\n      // Aqu\xed implementaremos la combinaci\xf3n\n    });\n  }\n  //...\n}\n")),Object(c.b)("p",null,"Bien, empecemos primero a desentra\xf1ar como estamos recibiendo los observables, como ver\xe1s estamos usando spread operator para recibir tantos observables como queramos, (Acas\xf3 dije que solo se pod\xedan dos), esto \u2026observables, nos permitir\xe1 poder combinar tantos como podamos y adicionalmente nos dar\xe1 control sobre ellos. Lo primero entonces que necesitamos es poderlos dividir y tomar el primero de los observables, esto lo hacemos mediante dos funciones est\xe1ndar para arreglos:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"    let myObservables = observables.slice();\n    let currentObservable = myObservables.shift();\n\n    const sourceOne = Observable.fromEvent(/** Algo que nos d\xe9 1, 2, 3 por ejemplo*/);\n    const sourceTwo = of(4, 5, 6);\n    const fuenteDeLaVerdad = Observable.concat(sourceOne, sourceTwo);\n    //...\n    static concat(...observables) {\n        return new Observable(\n            function subscribe(observer) {\n                let myObservables = observables.slice();\n                let currentObservable = myObservables.shift();\n                // En currentObservable tendriamos sourceOne\n            }\n        );\n    }\n    //...\n    ```\n\nBien, ahora solo necesitamos iterar sobre todos los elementos de nuestro observable y posteriormente cuando se acaben los elementos de este observable precipitarnos con el siguiente hasta que ya no queden m\xe1s observables. Vamos usar recursividad esta vez porque nos permitir\xe1 implementar la misma l\xf3gica a trav\xe9s de los observables.\n\n```js\n    static concat(...observables) {\n        return new Observable(function subscribe(observer) {\n            let myObservables = observables.slice();\n            let sub = null;\n            let processObservable = () => {\n                if (myObservables.length === 0) {\n                    observer.complete();\n                } else {\n                    let observable = myObservables.shift(); //Take the next observable in the params.sub = observable.subscribe({\n                        next(v) {\n                            observer.next(v);\n                        },\n                        error(err) {\n                            observer.error(err);\n                            sub.unsubscribe();\n                        },\n                        complete() {\n                            processObservable();\n                        }\n                    });\n                }\n            };\n            processObservable();\n            return {\n                sub\n            };\n        });\n    }\n")),Object(c.b)("p",null,"Como ver\xe1s solo existe una maneras de salir del primer observable al segundo, que se acaben los datos de dicho observable para lo cual volvemos a llamar la funci\xf3n processObservable y tomamos el siguiente observable de la lista. Si hay un error lo que hacemos inmediatamente es suspender todo el proceso de concatenaci\xf3n si bien en el bloque de c\xf3digo que te muestro arriba esta dise\xf1ado de esta manera, tambi\xe9n podr\xeda haber una variaci\xf3n que podemos programar, para la cual simplemente podemos decirle que continue con el siguiente observable. Es decir:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"    //...\n    error(err) {\n    observer.error(err);\n    sub.unsubscribe();\n    // Si falla algo con un observable pasamos al siguiente\n    processObservable();\n    },\n    //...\n")),Object(c.b)("p",null,"Finalmente aqu\xed est\xe1 el ejemplo completo con la implementaci\xf3n de of y nuestro nuevo operador concat:"),Object(c.b)("p",null,Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://codepen.io/seagomezar/pen/EpOyRj"}),"https://codepen.io/seagomezar/pen/EpOyRj")),Object(c.b)("p",null,"Eso es todo, espero que este post te sea de utilidad y lo puedas aplicar a alg\xfan proyecto que tengas en mente y que simplemente te haya ayudado a entender la naturaleza de los operadores sobre observables. d\xe9jame un comentario si lograste implementarlo, si quieres a\xf1adir alguna otra funcionalidad o si tienes alguna duda no dudes en dejarme un comentario en la parte de abajo, recuerda que si te gust\xf3 tambi\xe9n puedes compartir usando los links a las redes sociales en la parte de abajo."),Object(c.b)(i.a,{slug:"implementando-concat-para-concatenar-observables",mdxType:"Discuss"}))}m.isMDXComponent=!0},cedu:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/implementando-concat-para-concatenar-observables",function(){return n("C/ja")}])},j53b:function(e,a,n){"use strict";var o=n("1OyB"),r=n("vuIU"),s=n("Ji7U"),t=n("md7G"),c=n("foSv"),l=n("MX0m"),b=n.n(l),i=n("q1tI"),u=n.n(i),m=(n("YFqc"),u.a.createElement);function d(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(c.a)(e);if(a){var r=Object(c.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(t.a)(this,n)}}var p={CSS:"primary",HTML:"secondary",Javascript:"warning",Firebase:"warning","Google Maps":"darkgreen",Angular:"danger",React:"success","Desarrollo Web":"info","Google Datastudio":"primary","Big Query":"danger",NodeJS:"node",Other:"dark",Typescript:"typescript","Programaci\xf3n Reactiva":"reactive"},v=function(e){Object(s.a)(n,e);var a=d(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.name;return m("a",{className:"jsx-187945056 "+("badge badge-"+(p[e]||"dark")||!1)},e,m(b.a,{id:"187945056"},[".badge.jsx-187945056{-webkit-text-decoration:none;text-decoration:none;margin-right:1em;color:white;padding:0.5em 0.5em;margin:0.5em 0;display:inline-block;}",".badge-primary.jsx-187945056{background-color:blue;}",".badge-secondary.jsx-187945056{background-color:green;}",".badge-darkgreen.jsx-187945056{background-color:#3cba54;}",".badge-danger.jsx-187945056{background-color:red;}",".badge-warning.jsx-187945056{background-color:#e5be01;}",".badge-info.jsx-187945056{background-color:gray;}",".badge-dark.jsx-187945056{background-color:black;}",".badge-success.jsx-187945056{background-color:green;}",".badge-node.jsx-187945056{background-color:#11d92f;}",".badge-typescript.jsx-187945056{background-color:#4f8cf6;}",".badge-reactive.jsx-187945056{background-color:#e10c8c;}"]))}}]),n}(u.a.Component),g=u.a.createElement;function f(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(c.a)(e);if(a){var r=Object(c.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(t.a)(this,n)}}var j=function(e){Object(s.a)(n,e);var a=f(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,a=e.date,n=e.tags;e.slug;return g("small",{className:"jsx-1750184873 "},g("span",{className:"jsx-1750184873"},g("strong",{className:"jsx-1750184873"},"Fecha: "),new Date(a).toLocaleDateString("es-CO")," -",g("strong",{className:"jsx-1750184873"}," Autor: ")," Sebastian Gomez"),g("span",{className:"jsx-1750184873"}),g("span",{className:"jsx-1750184873"},n.map((function(e,a){return g(v,{name:e,key:a})}))),g(b.a,{id:"1750184873"},["a.jsx-1750184873{color:#9eabb3;-webkit-text-decoration:none;text-decoration:none;}","small.jsx-1750184873{color:#9eabb3;}","span.jsx-1750184873{display:block;}","span.jsx-1750184873:first-child{margin-top:0.2em;}","span.jsx-1750184873:last-child{margin-bottom:1em;}"]))}}]),n}(u.a.Component);a.a=j}},[["cedu",0,1,2,3,4,5]]]);
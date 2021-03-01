_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"3+AH":function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return l}));var o=r("wx14"),a=r("Ff2n"),i=r("q1tI"),s=r.n(i),c=r("7ljp"),t=r("j53b"),u=r("6G3q"),b=r("37hk"),d=(s.a.createElement,{});function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)(u.a,{category:"Javascript",date:"2020-05-05",title:"Entendiendo el Patron Observador (Observer Pattern) en Javascript",slug:"entendiendo-el-patron-observador-observer-pattern-en-javascript",thumbnailImage:"/javascript.jpg",excerpt:"En este post aprenderemos como implementar el patr\xf3n observer en Javascript y en que situaciones lo podemos usar.",mdxType:"HeadSite"}),Object(c.b)("h1",null,"Entendiendo el patr\xf3n observador (Observer Pattern) en Javascript"),Object(c.b)(t.a,{tags:["Javascript","Desarrollo Web"],date:"2020-05-05",slug:"entendiendo-el-patron-observador-observer-pattern-en-javascript",mdxType:"PostHeader"}),Object(c.b)("p",null,"En este post aprenderemos como implementar el patr\xf3n observer en Javascript y en que situaciones lo podemos usar."),Object(c.b)("p",null,"El patr\xf3n observador es uno de los patrones de dise\xf1o de software m\xe1s usado en Javascript. De el se extienden importantes aplicaciones que pueden ayudar a definir mejores arquitecturas en aplicaciones web, por lo que su uso y estudio es altamente recomendado. En este post aprenderemos como implementarlo en Javascript y en que situaciones lo podemos usar."),Object(c.b)("p",null,"En primer lugar el patr\xf3n observador se define como un patr\xf3n de comportamiento es decir que dentro del mundo de la programaci\xf3n orientada a objetos es un patr\xf3n responsable por la comunicaci\xf3n entre objetos."),Object(c.b)("p",null,"En segundo lugar el patr\xf3n observador tambi\xe9n puedes encontrarlo como el patr\xf3n publicador-subscriptor o modelo-patr\xf3n y nos da una idea b\xe1sica de lo que hace. En t\xe9rminos simples este patr\xf3n permite la notificaci\xf3n a objetos (subscriptores u observador) al cambio de otro objeto (publicador)."),Object(c.b)("p",null,"\xbfC\xf3mo podemos entonces implementarlo en Javascript?, empecemos implementando una clase llamada Publicador que contenga los m\xe9todos subscribe(), unsubscribe(), y notify()."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"class Publicador {\n  constructor() {\n    this.subscriptors = \\[\\];\n  }\n\n  subscribe(subscriptor) {\n    this.subscriptors.push(subscriptor);\n  }\n\n  unsubscribe(subscriptor) {\n    this.subscriptors = this.subscriptors.filter(\n      (item) => item !== subscriptor\n    );\n  }\n\n  notify(event) {\n    this.subscriptors.forEach((item) => {\n      item.call(this, event);\n    });\n  }\n}\n")),Object(c.b)("p",null,"Como ver\xe1s hemos manejado la lista de subscriptores con un array de Javascript como propiedad de la clase as\xed es posible f\xe1cilmente subscribir y des-subscribir subscriptores. Tambi\xe9n la funci\xf3n notify itera sobre cada uno de los subscriptores y se encarga de invocarlos con el evento."),Object(c.b)("p",null,"Ahora imaginemos que usaremos esta definici\xf3n de Publicador para un peri\xf3dico que regularmente publica nuevas ediciones."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const periodico = new Publicador();\n")),Object(c.b)("p",null,"Bien, pensemos un poco m\xe1s acerca de los clientes. Estos van a necesitar saber cuando llegue una nueva versi\xf3n del peri\xf3dico. Inicialmente pensemos en que los clientes son funciones:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'function Observer(edicion) {\n  console.log("LLeg\xf3 una nueva edici\xf3n con el nombre de: " + edicion);\n}\n\nperiodico.subscribe(Observer);\nperiodico.subscribe(Observer);\nperiodico.notify("Nueva edicion");\n')),Object(c.b)("p",null,"Con esta definici\xf3n anterior al ejecutarlo obtenemos algo as\xed:"),Object(c.b)("p",null,'"LLeg\xf3 una nueva edici\xf3n con el nombre de: Nueva edicion"',Object(c.b)("br",{parentName:"p"}),"\n",'"LLeg\xf3 una nueva edici\xf3n con el nombre de: Nueva edicion"'),Object(c.b)("p",null,"Si queremos ser conscientes de que cliente recibi\xf3 que edici\xf3n del peri\xf3dico podemos retocar un poco las definiciones de la funci\xf3n notify y de la funci\xf3n observer:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'    class Publicador {\n      ...\n      notify(event) {\n        let index = 0;\n        this.subscriptors.forEach( item => {\n          item.call(this, index, event);\n          index++;\n        });\n      }\n      ...\n    }\n    ...\n    function Observer(index, edicion) {\n      console.log("Al Observador #" +\n                  index + " le lleg\xf3 una nueva edici\xf3n con el nombre de: " +\n                  edicion);\n    }\n')),Object(c.b)("p",null,"De esta manera tenemos como output algo mucho mas entendible:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'"Al Observador #0 le lleg\xf3 una nueva edici\xf3n con el nombre de: Nueva edicion";\n"Al Observador #1 le lleg\xf3 una nueva edici\xf3n con el nombre de: Nueva edicion";\n')),Object(c.b)("p",null,"Sin embargo como un mejor acercamiento podr\xedamos definir una clase para los clientes que nos permita crear instancias de ella y tener un control mas granular. Tambi\xe9n debemos definir un m\xe9todo \xfanicamente dise\xf1ado para escuchar por nuevas decisiones del peri\xf3dico."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'class Observador {\n  constructor(id) {\n    this.id = id;\n    console.log("Se ha creado el subscriptor #: " + id);\n  }\n  buzon(edicion) {\n    console.log(\n      "Subscriptor # " + this.id + " recibi\xf3 una nueva edici\xf3n: " + edicion\n    );\n  }\n}\n\nconst subscriptor1 = new Subscriptor(1);\nconst subscriptor2 = new Subscriptor(2);\nconst subscriptor3 = new Subscriptor(3);\n')),Object(c.b)("p",null,"De esta forma podemos tener m\xe1s control sobre los subscriptores y podemos subscribirlos y des-subscribirlos de mejor manera. A continuaci\xf3n ver\xe1s como publicar multiples ediciones de un perioido as\xed como la habilidad suscribir y des-suscribir clientes:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'periodico.subscribe(subscriptor1);\nperiodico.subscribe(subscriptor2);\nperiodico.notify("Nueva edicion");\nperiodico.subscribe(subscriptor3);\nperiodico.notify("Segunda edicion");\nperiodico.unsubscribe(subscriptor1);\nperiodico.notify("Tercera edicion");\nperiodico.subscribe(subscriptor2);\nperiodico.notify("Nueva edicion");\nperiodico.subscribe(subscriptor3);\nperiodico.notify("Segunda edicion");\nperiodico.unsubscribe(subscriptor1);\nperiodico.notify("Tercera edicion");\n')),Object(c.b)("p",null,"Y obtenemos la siguiente salida:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'"--- Primera edici\xf3n ---";\n\n"Subscriptor # 1 recibi\xf3 una nueva edici\xf3n: Nueva edicion";\n\n"Subscriptor # 2 recibi\xf3 una nueva edici\xf3n: Nueva edicion";\n\n"--- Segunda edici\xf3n ---";\n\n"Subscriptor # 1 recibi\xf3 una nueva edici\xf3n: Segunda edicion";\n\n"Subscriptor # 2 recibi\xf3 una nueva edici\xf3n: Segunda edicion";\n\n"Subscriptor # 3 recibi\xf3 una nueva edici\xf3n: Segunda edicion";\n\n"--- Tercera edici\xf3n ---";\n\n"Subscriptor # 2 recibi\xf3 una nueva edici\xf3n: Tercera edicion";\n\n"Subscriptor # 3 recibi\xf3 una nueva edici\xf3n: Tercera edicion";\n')),Object(c.b)("p",null,"De esta manera queda totalmente completo el patr\xf3n observer. Como vez es muy f\xe1cil implementar el patr\xf3n observer y su utilidad es casi inmediata. A continuaci\xf3n podr\xe1s observar todo el c\xf3digo completo de este ejemplo:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'class Publicador {\n  constructor() {\n    this.subscriptors = \\[\\];\n  }\n\n  subscribe(subscriptor) {\n    this.subscriptors.push(subscriptor);\n  }\n\n  unsubscribe(subscriptor) {\n    this.subscriptors = this.subscriptors.filter(\n      (item) => item !== subscriptor\n    );\n  }\n\n  notify(event) {\n    this.subscriptors.forEach((item) => {\n      item.buzon.call(item, event);\n    });\n  }\n}\n\nclass Subscriptor {\n  constructor(id) {\n    this.id = id;\n    console.log("Se ha creado el subscriptor #: " + id);\n  }\n  buzon(edicion) {\n    console.log(\n      "Subscriptor # " + this.id + " recibi\xf3 una nueva edici\xf3n: " + edicion\n    );\n  }\n}\n\nconst periodico = new Publicador();\n\nconst subscriptor1 = new Subscriptor(1);\nconst subscriptor2 = new Subscriptor(2);\nconst subscriptor3 = new Subscriptor(3);\n\nconsole.log("--- Primera edici\xf3n ---");\n\nperiodico.subscribe(subscriptor1);\n\nperiodico.subscribe(subscriptor2);\n\nperiodico.notify("Nueva edicion");\n\nconsole.log("--- Segunda edici\xf3n ---");\n\nperiodico.subscribe(subscriptor3);\n\nperiodico.notify("Segunda edicion");\n\nconsole.log("--- Tercera edici\xf3n ---");\n\nperiodico.unsubscribe(subscriptor1);\n\nperiodico.notify("Tercera edicion");\n')),Object(c.b)("p",null,"Eso es todo, espero que este post te sea de utilidad y lo puedas aplicar a alg\xfan proyecto que tengas en mente y que simplemente te haya ayudado a entender la naturaleza del patr\xf3n observer. d\xe9jame un comentario si lograste implementarlo, si quieres a\xf1adir alguna otra funcionalidad o si tienes alguna duda no dudes en dejarme un comentario en la parte de abajo, recuerda que si te gust\xf3 tambi\xe9n puedes compartir usando los links a las redes sociales en la parte de abajo."),Object(c.b)(b.a,{slug:"entendiendo-el-patron-observador-observer-pattern-en-javascript",mdxType:"Discuss"}))}l.isMDXComponent=!0},"97lm":function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/entendiendo-el-patron-observador-observer-pattern-en-javascript",function(){return r("3+AH")}])},j53b:function(e,n,r){"use strict";var o=r("1OyB"),a=r("vuIU"),i=r("Ji7U"),s=r("md7G"),c=r("foSv"),t=r("MX0m"),u=r.n(t),b=r("q1tI"),d=r.n(b),l=(r("YFqc"),d.a.createElement);function p(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Object(c.a)(e);if(n){var a=Object(c.a)(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return Object(s.a)(this,r)}}var m={CSS:"primary",HTML:"secondary",Javascript:"warning",Firebase:"warning","Google Maps":"darkgreen",Angular:"danger",React:"success","Desarrollo Web":"info","Google Datastudio":"primary","Big Query":"danger",NodeJS:"node",Other:"dark",Typescript:"typescript","Programaci\xf3n Reactiva":"reactive"},g=function(e){Object(i.a)(r,e);var n=p(r);function r(){return Object(o.a)(this,r),n.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this.props.name;return l("a",{className:"jsx-187945056 "+("badge badge-"+(m[e]||"dark")||!1)},e,l(u.a,{id:"187945056"},[".badge.jsx-187945056{-webkit-text-decoration:none;text-decoration:none;margin-right:1em;color:white;padding:0.5em 0.5em;margin:0.5em 0;display:inline-block;}",".badge-primary.jsx-187945056{background-color:blue;}",".badge-secondary.jsx-187945056{background-color:green;}",".badge-darkgreen.jsx-187945056{background-color:#3cba54;}",".badge-danger.jsx-187945056{background-color:red;}",".badge-warning.jsx-187945056{background-color:#e5be01;}",".badge-info.jsx-187945056{background-color:gray;}",".badge-dark.jsx-187945056{background-color:black;}",".badge-success.jsx-187945056{background-color:green;}",".badge-node.jsx-187945056{background-color:#11d92f;}",".badge-typescript.jsx-187945056{background-color:#4f8cf6;}",".badge-reactive.jsx-187945056{background-color:#e10c8c;}"]))}}]),r}(d.a.Component),j=d.a.createElement;function v(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Object(c.a)(e);if(n){var a=Object(c.a)(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return Object(s.a)(this,r)}}var f=function(e){Object(i.a)(r,e);var n=v(r);function r(){return Object(o.a)(this,r),n.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this.props,n=e.date,r=e.tags;e.slug;return j("small",{className:"jsx-1750184873 "},j("span",{className:"jsx-1750184873"},j("strong",{className:"jsx-1750184873"},"Fecha: "),new Date(n).toLocaleDateString("es-CO")," -",j("strong",{className:"jsx-1750184873"}," Autor: ")," Sebastian Gomez"),j("span",{className:"jsx-1750184873"}),j("span",{className:"jsx-1750184873"},r.map((function(e,n){return j(g,{name:e,key:n})}))),j(u.a,{id:"1750184873"},["a.jsx-1750184873{color:#9eabb3;-webkit-text-decoration:none;text-decoration:none;}","small.jsx-1750184873{color:#9eabb3;}","span.jsx-1750184873{display:block;}","span.jsx-1750184873:first-child{margin-top:0.2em;}","span.jsx-1750184873:last-child{margin-bottom:1em;}"]))}}]),r}(d.a.Component);n.a=f}},[["97lm",0,1,2,3,4,5]]]);
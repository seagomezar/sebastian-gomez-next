_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{Iq50:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var n=t("wx14"),o=t("Ff2n"),r=t("q1tI"),c=t.n(r),s=t("7ljp"),l=t("j53b"),i=t("6G3q"),u=t("37hk"),p=(c.a.createElement,{});function b(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)(i.a,{category:"Desarrollo Web",date:1608837237881,title:"Comenzando con Next.js",slug:"comenzando-con-nextjs",thumbnailImage:"/nextjs.png",excerpt:"En este post mostrar\xe9 las distintas formas que hay para iniciar un proyecto con Next.js, exploraremos la opci\xf3n de librer\xedas de npm para iniciar as\xed como la opci\xf3n totalmente manual.",mdxType:"HeadSite"}),Object(s.b)("h1",null,"Comenzando con Next.js"),Object(s.b)(l.a,{tags:["Next.js","Javascript","NodeJS","Desarrollo Web"],date:1608837237881,slug:"comenzando-con-nextjs",mdxType:"PostHeader"}),Object(s.b)("h2",null,"La manera m\xe1s f\xe1cil"),Object(s.b)("p",null,'Similarmente como existe una librer\xeda de NPM para iniciar proyecto con React llamada "create-react-app",\nexiste tambi\xe9n una denominada "create-next-app" que puedes instalar como un paquete global:'),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"    $ npm install -g create-next-app\n")),Object(s.b)("p",null,"y usarla simplemente:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"    $ npx create-next-app\n")),Object(s.b)("p",null,"o con Yarn"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"    $ yarn create-next-app\n")),Object(s.b)("p",null,"Esto instalar\xe1 una aplicaci\xf3n de ejemplo (un boilerplate) con todas las dependencias\nrequeridas y dem\xe1s en nuestro archivo ",Object(s.b)("em",{parentName:"p"},"package.json")," tendremos ya todos los scripts configurados\nlistos para ser usados. "),Object(s.b)("p",null,"Sin embargo exploremos como ser\xeda crear nuestro proyecto completamente dede cero e instalando todo por\nnosotros mismos."),Object(s.b)("h2",null,"La otra manera f\xe1cil"),Object(s.b)("p",null,"Podemos crear nuestra carpeta donde contendremos nuestro proyecto e inicializarlo como un\nproyecto vacio de npm."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"    $ npm init -y\n")),Object(s.b)("p",null,"Luego necesitamos instalar tres dependencias, "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"i. React (por supuesto)"),Object(s.b)("li",{parentName:"ul"},"ii. React DOM (Tambi\xe9n por supuesto)"),Object(s.b)("li",{parentName:"ul"},"iii. Next.js (Si, en realidad next es un paquete de npm)")),Object(s.b)("p",null,"el comando con NPM y con yarn ser\xeda algo as\xed:"),Object(s.b)("p",null,"npm"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"    $ npm i next react react-dom --save\n")),Object(s.b)("p",null,"yarn"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"    $ yarn add next react react-dom\n")),Object(s.b)("p",null,"Lo siguiente que vamos a tener que hacer es a\xf1adir los script que necesitamos a nuestro ",Object(s.b)("em",{parentName:"p"},"package.json")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'    "scripts": {\n        "dev": "next",\n        "build": "next build",\n        "start": "next start"\n    }\n')),Object(s.b)("p",null,"\xbfQue hacen estos comandos?"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"El comando ",Object(s.b)("em",{parentName:"p"},"next"),' inicializa nuestra aplicaci\xf3n en modo de desarrollo y con "hot reloading" o mejor dicho\ncon una recarga cada vez que haces un cambio en el c\xf3digo.')),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("em",{parentName:"p"},"next build"),' construye tu proyecto y lo deja optimizado y limpio para producci\xf3n, (crea un nuevo folder "out" o "dist")')),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("em",{parentName:"p"},"next start")," Inicializa y ejecuta tu proyecto de producci\xf3n (el que construiste con ",Object(s.b)("em",{parentName:"p"},"next build"),")"))),Object(s.b)("p",null,"\ud83e\udde0 ",Object(s.b)("em",{parentName:"p"},"Recuerda"),": Next.js es un framework full-stack que necesita estar hosteado en una plataforma (servidor) que corra o soporte node.js"),Object(s.b)("p",null,"Eso es todo, espero que este post te sea de utilidad y lo puedas aplicar a\nalg\xfan proyecto que tengas en mente o que simplemente te haya ayudado a entender\ncomo iniciar tu proyecto de Next.js"),Object(s.b)("p",null,"Te dejo el enlace al siguiente post sobre Next.js, ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.sebastian-gomez.com/posts/enrutando-paginas-en-nextjs"}),"Enrutando p\xe1ginas con Next.js")),Object(s.b)("p",null,"D\xe9jame un comentario si te sirvi\xf3  o si quieres a\xf1adir\nalguna opini\xf3n o si tienes alguna duda no dudes en dejarme un comentario\nen la parte de abajo, recuerda que si te gust\xf3 tambi\xe9n puedes compartir usando los links a\nlas redes sociales en la parte de abajo."),Object(s.b)(u.a,{slug:"comenzando-con-nextjs",mdxType:"Discuss"}))}b.isMDXComponent=!0},j53b:function(e,a,t){"use strict";var n=t("1OyB"),o=t("vuIU"),r=t("Ji7U"),c=t("md7G"),s=t("foSv"),l=t("MX0m"),i=t.n(l),u=t("q1tI"),p=t.n(u),b=(t("YFqc"),p.a.createElement);function d(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(s.a)(e);if(a){var o=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Object(c.a)(this,t)}}var m={CSS:"primary",HTML:"secondary",Javascript:"warning",Firebase:"warning","Google Maps":"darkgreen",Angular:"danger",React:"success","Desarrollo Web":"info","Google Datastudio":"primary","Big Query":"danger",NodeJS:"node",Other:"dark",Typescript:"typescript","Programaci\xf3n Reactiva":"reactive"},j=function(e){Object(r.a)(t,e);var a=d(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.name;return b("a",{className:"jsx-187945056 "+("badge badge-"+(m[e]||"dark")||!1)},e,b(i.a,{id:"187945056"},[".badge.jsx-187945056{-webkit-text-decoration:none;text-decoration:none;margin-right:1em;color:white;padding:0.5em 0.5em;margin:0.5em 0;display:inline-block;}",".badge-primary.jsx-187945056{background-color:blue;}",".badge-secondary.jsx-187945056{background-color:green;}",".badge-darkgreen.jsx-187945056{background-color:#3cba54;}",".badge-danger.jsx-187945056{background-color:red;}",".badge-warning.jsx-187945056{background-color:#e5be01;}",".badge-info.jsx-187945056{background-color:gray;}",".badge-dark.jsx-187945056{background-color:black;}",".badge-success.jsx-187945056{background-color:green;}",".badge-node.jsx-187945056{background-color:#11d92f;}",".badge-typescript.jsx-187945056{background-color:#4f8cf6;}",".badge-reactive.jsx-187945056{background-color:#e10c8c;}"]))}}]),t}(p.a.Component),g=p.a.createElement;function O(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(s.a)(e);if(a){var o=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Object(c.a)(this,t)}}var x=function(e){Object(r.a)(t,e);var a=O(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.date,t=e.tags;e.slug;return g("small",{className:"jsx-1750184873 "},g("span",{className:"jsx-1750184873"},g("strong",{className:"jsx-1750184873"},"Fecha: "),new Date(a).toLocaleDateString("es-CO")," -",g("strong",{className:"jsx-1750184873"}," Autor: ")," Sebastian Gomez"),g("span",{className:"jsx-1750184873"}),g("span",{className:"jsx-1750184873"},t.map((function(e,a){return g(j,{name:e,key:a})}))),g(i.a,{id:"1750184873"},["a.jsx-1750184873{color:#9eabb3;-webkit-text-decoration:none;text-decoration:none;}","small.jsx-1750184873{color:#9eabb3;}","span.jsx-1750184873{display:block;}","span.jsx-1750184873:first-child{margin-top:0.2em;}","span.jsx-1750184873:last-child{margin-bottom:1em;}"]))}}]),t}(p.a.Component);a.a=x},z8jm:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/comenzando-con-nextjs",function(){return t("Iq50")}])}},[["z8jm",0,1,2,3,4,5]]]);
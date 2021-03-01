_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43],{"8AWB":function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return p}));var s=n("wx14"),o=n("Ff2n"),t=n("q1tI"),r=n.n(t),i=n("7ljp"),c=n("j53b"),l=n("6G3q"),u=n("37hk"),d=(r.a.createElement,{});function p(e){var a=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},d,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)(l.a,{category:"css",date:"2020-05-05",title:"Todo sobre transiciones en CSS",slug:"todo-sobre-transiciones-en-css",thumbnailImage:"/css3.jpg",excerpt:"En este post tratar\xe9 de cubrir el extenso tema de transiciones con diversos ejemplos adaptados desde la especificaci\xf3n",mdxType:"HeadSite"}),Object(i.b)("h1",null,"Todo sobre transiciones en CSS"),Object(i.b)(c.a,{tags:["Animaciones","HTML","CSS","Desarrollo Web"],date:"2020-05-05",slug:"todo-sobre-transiciones-en-css",mdxType:"PostHeader"}),Object(i.b)("p",null,"Las transiciones hacen parte del conjunto de herramientas que poseemos como desarrolladores FrontEnd para mejorar la experiencia del usuario dentro de nuestra aplicaci\xf3n Web. Son \xfatiles porque nos permiten animar el cambio de valores en las distintas propiedades de un elemento lo que puede hacerlo m\xe1s llamativo al usuario e invitarlo a interactuar con \xe9l. En este post tratar\xe9 de cubrir el extenso tema de transiciones con diversos ejemplos adaptados desde la especificaci\xf3n."),Object(i.b)("p",null,"Empecemos con un ejemplo simple:"),Object(i.b)("p",null,"Tenemos un cuadrado simple:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-css"}),'<div id="square1" class="square red"></div>\n')),Object(i.b)("p",null,"Y unos estilos asociados a dicho cuadrado:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-css"}),".square {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 5px;\n}\n.red {\n  background: red;\n}\n")),Object(i.b)("p",null,"Y tenemos una clase adicional que se la asignaremos al cuadrado en un momento x en el tiempo:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-css"}),".black {\n  background: black;\n}\n")),Object(i.b)("p",null,"Sin embargo queremos que esto se haga de una manera suave, controlada y agradable al usuario. Por tanto es aqu\xed donde necesitamos hacer uso de las transiciones. Esto lo podemos hacer a\xf1adiendo la propiedad transition dentro de la clase que queremos a\xf1adir:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-css"}),".black {\n  background: black;\n  transition: background 2s 0.25s;\n}\n")),Object(i.b)("p",null,"La propiedad transition como la hemos usado en el ejemplo anterior nos permite que el cambio de background de rojo a negro se haga durante 2 segundos (duraci\xf3n) en vez de hacer el cambio instant\xe1neamente, tambi\xe9n nos permite indicar que este cambio empiece a ocurrir 0.25 segundos despu\xe9s de que asigne la clase al elemento (delay).\nTambi\xe9n existe otra sintaxis alternativa para esto que requiere unas cuantas l\xedneas m\xe1s, sin embargo es \xfatil conocerla:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-css"}),".black {\n  background: black;\n  transition-property: background;\n  transition-duration: 2s;\n  transition-delay: 0.25s;\n}\n")),Object(i.b)("p",null,"Analogamente a los valores que hemos asignado en segundo a la duraci\xf3n y al retraso (delay) podr\xedamos haberlo hecho en milisegundos, para lo cual bastar\xeda con multiplicar por 1000 y a\xf1adir ms al final. Por ejemplo:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-css"}),"...\ntransition-duration: 2000ms;\ntransition-delay: 250ms;\n...\n")),Object(i.b)("p",null,"Si queremos hacer transiciones sobre m\xe1s de una propiedad, podemos usar all para indicar que la transici\xf3n se aplica sobre todas las propiedades posibles:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-css"}),".black {\n  background: black;\n  color: white;\n  transition: all 2s 0.25s;\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Nota"),": Transition all no es recomendable desde el punto de vista de desempe\xf1o (performance) altamente recomendamos no usar transition all a menos que definitivamente quieras aplicar transiciones sobre todo lo que pase con el elemento de la misma manera, por eso a continuaci\xf3n te explico como hacer transiciones espec\xedficamente con cada propiedad."),Object(i.b)("p",null,"A veces no deseamos que se hagan transiciones sobre todas las propiedades de la misma manera, la propiedad transition adem\xe1s tiene la caracter\xedstica de permitir especificar la transici\xf3n de cada propiedad simplemente separ\xe1ndolas por coma. Veamos un ejemplo:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-css"}),".black {\n  background: black;\n  color: white;\n  transition: background 2s 0.25s, color 1.5 3s;\n}\n")),Object(i.b)("p",null,"En el ejemplo anterior estamos cambiando el background y el color con distinta duraci\xf3n y distinto retraso (delay). Esto permite tener un control mas granular de exactamente lo que necesitamos animar en cada transici\xf3n."),Object(i.b)("p",null,"Como habr\xe1s notado hasta ahora las transiciones de las que hablamos ocurren de manera lineal, esto quiere decir que el cambio ocurre uniformemente durante el tiempo que dure la transici\xf3n, sin embargo esta no es la \xfanica manera de hacerlo, por ejemplo podemos acelerar el cambio al comienzo y desacelerarlo al final lo que nos dar\xe1 un tipo diferente de sensaci\xf3n al ver la transici\xf3n. Para determinar como ocurrir\xe1 el cambio, tenemos la propiedad transition-timing-function que puede tomar los siguientes valores:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-css"}),"transition-timing-function: linear; // Este es el valor por defecto, no hace falta incluirlo\ntransition-timing-function: ease-in; // Significa que al comienzo sea r\xe1pido el cambio y que despu\xe9s se ralentice.\ntransition-timing-function: ease-out; // Significa que al comienzo sea lento el cambio y que despu\xe9s se acelere.\ntransition-timing-function: ease-in-out; // Significa que al comienzo y al final sea r\xe1pido el cambio pero en la mitad sea lento\ntransition-timing-function: cubic-bezier(\n  0.21,\n  0.3,\n  0.1,\n  0.23\n); // De acuerdo a los valores se acelera o desacelera.\n")),Object(i.b)("p",null,"Pero esta no es la \xfanica manera de a\xf1adir esta propiedad a las transiciones. Tambi\xe9n es posible hacerlo directamente en la propiedad transition:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-css"}),".move {\n  transform: translateX(500px);\n  transition: transform 2s 0.25s ease-in-out;\n}\n")),Object(i.b)("p",null,"Incluso en cada transici\xf3n sobre las propiedades:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-css"}),".move-background {\n  transform: translateX(500px);\n  background: red;\n  transition: transform 2s 0.25s ease-in-out, background 1s 0.1 cubic-bezier(0.21, 0.3, 0.1, 0.23);\n}\n")),Object(i.b)("p",null,"Miremos en detalle un poco m\xe1s como funciona la propiedad transition-timing-function cuando toma el valor de cubic-bezier(). Para ello revisemos en que consiste la ecuaci\xf3n de la curva de bezier en la cual se basa esta funci\xf3n."),Object(i.b)("p",null,"Las curvas de bezier son un sistema matem\xe1tico que desarrollo pierre bezier para el trazado de dibujos de aeronaves y autom\xf3viles que se describe como una ecuaci\xf3n que toma cuatro valores para describir la curva:"),Object(i.b)("p",null,"Pues bien estos cuatro valores (P0 a P3) son los que describen la transici\xf3n del movimiento entre el punto inicial y el punto final y con estos se pueden definir completamente diversos tipos de transiciones:"),Object(i.b)("p",null,"cubic-bezier(P0, P1, P2, P3); En estos sitios web puedes jugar m\xe1s con este tipo de transiciones donde puedes ajustar los valores para tener un mayor control en tu transici\xf3n:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"http://cubic-bezier.com/"}),"http://cubic-bezier.com/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"http://easings.net/"}),"http://easings.net/"))),Object(i.b)("p",null,'Debes tener en cuenta que hay propiedades que no son \u201ctransicionables\u201d esto quiere decir que no puedes aplicar transiciones a estas propiedades. Para ver una lista de cuales propiedades son \u201ctransicionables" y cuales no puedes revisar este link:'),Object(i.b)("p",null,Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties"}),"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties")),Object(i.b)("p",null,"En el siguiente ejemplo se muestra un conjunto de transiciones sobre cubos con distintas transition-timing-function y propiedades, puedes jugar con ellas para evidenciar sus diferencias:"),Object(i.b)("p",null,Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://codepen.io/seagomezar/pen/wPbYqe"}),"https://codepen.io/seagomezar/pen/wPbYqe")),Object(i.b)("p",null,"Las herramientas para desarrolladores de los navegadores como chrome y firefox nos permiten ralentizar o acelerar las transformaciones para un mejor proceso de debug en ellas, para ello puedes abrir la pesta\xf1a animaciones:"),Object(i.b)("p",null,"Puedes tambi\xe9n usar Javascript para conocer el estado de una transici\xf3n mediante los siguientes listeners:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"transitionstart"),Object(i.b)("li",{parentName:"ul"},"transitionend")),Object(i.b)("p",null,"Finalmente algunas consideraciones respecto a las transiciones:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Transiciones alrededor de 100ms son instant\xe1neas para los usuarios y dif\xedcilmente perceptibles."),Object(i.b)("li",{parentName:"ul"},"Transiciones de m\xe1ximo 1 segundo y m\xednimo 250ms son buenas y mantiene a los usuario conectados."),Object(i.b)("li",{parentName:"ul"},"Mas de 2 segundos es definitivamente una mala idea para transformaciones en sitios web est\xe1ndar ya que puede desconectar al usuario de lo que pasa."),Object(i.b)("li",{parentName:"ul"},"De 250ms a 300ms es el tiempo est\xe1ndar de la mayor\xeda de animaciones."),Object(i.b)("li",{parentName:"ul"},"Las transiciones en general te permite crear experiencias que pasan solo una vez."),Object(i.b)("li",{parentName:"ul"},"Si el navegador no soporta transiciones en el peor de los casos siempre se cambia la propiedad."),Object(i.b)("li",{parentName:"ul"},"Las transiciones son granulares porque te permiten animar una o dos o x propiedades.")),Object(i.b)("p",null,"Eso es todo, espero que este post te sea de utilidad y lo puedas aplicar a alg\xfan proyecto que tengas en mente y que simplemente te haya ayudado a entender la naturaleza de las transiciones en CSS. D\xe9jame un comentario si lograste implementarlo, si quieres a\xf1adir alguna otra funcionalidad o si tienes alguna duda no dudes en dejarme un comentario en la parte de abajo, recuerda que si te gust\xf3 tambi\xe9n puedes compartir usando los links a las redes sociales en la parte de abajo."),Object(i.b)(u.a,{slug:"todo-sobre-transiciones-en-css",mdxType:"Discuss"}))}p.isMDXComponent=!0},j53b:function(e,a,n){"use strict";var s=n("1OyB"),o=n("vuIU"),t=n("Ji7U"),r=n("md7G"),i=n("foSv"),c=n("MX0m"),l=n.n(c),u=n("q1tI"),d=n.n(u),p=(n("YFqc"),d.a.createElement);function b(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=Object(i.a)(e);if(a){var o=Object(i.a)(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return Object(r.a)(this,n)}}var m={CSS:"primary",HTML:"secondary",Javascript:"warning",Firebase:"warning","Google Maps":"darkgreen",Angular:"danger",React:"success","Desarrollo Web":"info","Google Datastudio":"primary","Big Query":"danger",NodeJS:"node",Other:"dark",Typescript:"typescript","Programaci\xf3n Reactiva":"reactive"},g=function(e){Object(t.a)(n,e);var a=b(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.name;return p("a",{className:"jsx-187945056 "+("badge badge-"+(m[e]||"dark")||!1)},e,p(l.a,{id:"187945056"},[".badge.jsx-187945056{-webkit-text-decoration:none;text-decoration:none;margin-right:1em;color:white;padding:0.5em 0.5em;margin:0.5em 0;display:inline-block;}",".badge-primary.jsx-187945056{background-color:blue;}",".badge-secondary.jsx-187945056{background-color:green;}",".badge-darkgreen.jsx-187945056{background-color:#3cba54;}",".badge-danger.jsx-187945056{background-color:red;}",".badge-warning.jsx-187945056{background-color:#e5be01;}",".badge-info.jsx-187945056{background-color:gray;}",".badge-dark.jsx-187945056{background-color:black;}",".badge-success.jsx-187945056{background-color:green;}",".badge-node.jsx-187945056{background-color:#11d92f;}",".badge-typescript.jsx-187945056{background-color:#4f8cf6;}",".badge-reactive.jsx-187945056{background-color:#e10c8c;}"]))}}]),n}(d.a.Component),j=d.a.createElement;function O(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=Object(i.a)(e);if(a){var o=Object(i.a)(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return Object(r.a)(this,n)}}var f=function(e){Object(t.a)(n,e);var a=O(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,a=e.date,n=e.tags;e.slug;return j("small",{className:"jsx-1750184873 "},j("span",{className:"jsx-1750184873"},j("strong",{className:"jsx-1750184873"},"Fecha: "),new Date(a).toLocaleDateString("es-CO")," -",j("strong",{className:"jsx-1750184873"}," Autor: ")," Sebastian Gomez"),j("span",{className:"jsx-1750184873"}),j("span",{className:"jsx-1750184873"},n.map((function(e,a){return j(g,{name:e,key:a})}))),j(l.a,{id:"1750184873"},["a.jsx-1750184873{color:#9eabb3;-webkit-text-decoration:none;text-decoration:none;}","small.jsx-1750184873{color:#9eabb3;}","span.jsx-1750184873{display:block;}","span.jsx-1750184873:first-child{margin-top:0.2em;}","span.jsx-1750184873:last-child{margin-bottom:1em;}"]))}}]),n}(d.a.Component);a.a=f},"mm/0":function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/todo-sobre-transiciones-en-css",function(){return n("8AWB")}])}},[["mm/0",0,1,2,3,4,5]]]);
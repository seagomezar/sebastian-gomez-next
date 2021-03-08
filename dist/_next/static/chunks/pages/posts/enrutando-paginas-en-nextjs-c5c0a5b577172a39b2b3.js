_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{j53b:function(e,a,n){"use strict";var t=n("1OyB"),r=n("vuIU"),o=n("Ji7U"),s=n("md7G"),c=n("foSv"),i=n("MX0m"),l=n.n(i),p=n("q1tI"),u=n.n(p),b=(n("YFqc"),u.a.createElement);function d(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=Object(c.a)(e);if(a){var r=Object(c.a)(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return Object(s.a)(this,n)}}var m={CSS:"primary",HTML:"secondary",Javascript:"warning",Firebase:"warning","Google Maps":"darkgreen",Angular:"danger",React:"success","Desarrollo Web":"info","Google Datastudio":"primary","Big Query":"danger",NodeJS:"node",Other:"dark",Typescript:"typescript","Programaci\xf3n Reactiva":"reactive"},j=function(e){Object(o.a)(n,e);var a=d(n);function n(){return Object(t.a)(this,n),a.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.name;return b("a",{className:"jsx-187945056 "+("badge badge-"+(m[e]||"dark")||!1)},e,b(l.a,{id:"187945056"},[".badge.jsx-187945056{-webkit-text-decoration:none;text-decoration:none;margin-right:1em;color:white;padding:0.5em 0.5em;margin:0.5em 0;display:inline-block;}",".badge-primary.jsx-187945056{background-color:blue;}",".badge-secondary.jsx-187945056{background-color:green;}",".badge-darkgreen.jsx-187945056{background-color:#3cba54;}",".badge-danger.jsx-187945056{background-color:red;}",".badge-warning.jsx-187945056{background-color:#e5be01;}",".badge-info.jsx-187945056{background-color:gray;}",".badge-dark.jsx-187945056{background-color:black;}",".badge-success.jsx-187945056{background-color:green;}",".badge-node.jsx-187945056{background-color:#11d92f;}",".badge-typescript.jsx-187945056{background-color:#4f8cf6;}",".badge-reactive.jsx-187945056{background-color:#e10c8c;}"]))}}]),n}(u.a.Component),g=u.a.createElement;function O(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=Object(c.a)(e);if(a){var r=Object(c.a)(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return Object(s.a)(this,n)}}var N=function(e){Object(o.a)(n,e);var a=O(n);function n(){return Object(t.a)(this,n),a.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,a=e.date,n=e.tags;e.slug;return g("small",{className:"jsx-1750184873 "},g("span",{className:"jsx-1750184873"},g("strong",{className:"jsx-1750184873"},"Fecha: "),new Date(a).toLocaleDateString("es-CO")," -",g("strong",{className:"jsx-1750184873"}," Autor: ")," Sebastian Gomez"),g("span",{className:"jsx-1750184873"}),g("span",{className:"jsx-1750184873"},n.map((function(e,a){return g(j,{name:e,key:a})}))),g(l.a,{id:"1750184873"},["a.jsx-1750184873{color:#9eabb3;-webkit-text-decoration:none;text-decoration:none;}","small.jsx-1750184873{color:#9eabb3;}","span.jsx-1750184873{display:block;}","span.jsx-1750184873:first-child{margin-top:0.2em;}","span.jsx-1750184873:last-child{margin-bottom:1em;}"]))}}]),n}(u.a.Component);a.a=N},k2i2:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/enrutando-paginas-en-nextjs",function(){return n("uCeM")}])},uCeM:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return b}));var t=n("wx14"),r=n("Ff2n"),o=n("q1tI"),s=n.n(o),c=n("7ljp"),i=n("j53b"),l=n("6G3q"),p=n("37hk"),u=(s.a.createElement,{});function b(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},u,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)(l.a,{category:"Desarrollo Web",date:1610035708117,title:"Enrutando p\xe1ginas en Next.js",slug:"enrutando-paginas-en-nextjs",thumbnailImage:"/nextjs.png",excerpt:"En este post veremos lo sencillo que es crear p\xe1ginas con Next.js y como autom\xe1ticamente el router de Next.js las coloca disponibles para nosotros simplemente creando el archivo. Tambi\xe9n veremos como son obtenidos los par\xe1metros din\xe1micos de una URL.",mdxType:"HeadSite"}),Object(c.b)("h1",null,"Enrutando p\xe1ginas con Next.js"),Object(c.b)(i.a,{tags:["Next.js","Javascript","NodeJS","Desarrollo Web"],date:1610035708117,slug:"enrutando-paginas-en-nextjs",mdxType:"PostHeader"}),Object(c.b)("h2",null,"Enrutando p\xe1ginas"),Object(c.b)("p",null,"Tu no necesitas interactuar directamente con el router de Next.js para crear y ver p\xe1ginas en tu sitio. Next.js se ha construido con convenciones\npara hacer el proceso de creaci\xf3n de rutas tan f\xe1cil como crear un archivo \ud83d\ude80."),Object(c.b)("p",null,"Para comenzar solo debes crear una carpeta llamada ",Object(c.b)("inlineCode",{parentName:"p"},"/pages"),". Next.js asociar\xe1 cualquier archivo dentro de este directorio como una ruta. El nombre del archivo\ndeterminar\xe1 tambi\xe9n el nombre de la ruta o el patr\xf3n de la ruta, y cualquiera que sea el componente exportado dentro de estos archivos ser\xe1 la p\xe1gina que se mostrar\xe1."),Object(c.b)("p",null,'Por ahora creemos una ruta "index" simplemente creando el archivo dentro de nuestra carpeta pages: ',Object(c.b)("inlineCode",{parentName:"p"},"/pages/index.js")),Object(c.b)("p",null,"Luego, creemos un componente y exportemoslo:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"    import React from 'react'\n\n    export default () => <h1>Index Page</h1>\n")),Object(c.b)("p",null,"Inicializa tu servidor de desarrollo:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"npm")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"    $ npm run dev\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"yarn")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"    $ yarn dev\n")),Object(c.b)("p",null,'Deberiamos ser capaces de navegar en nuestro browser a la ruta "index" y ver nuestro h1. Como vez es super f\xe1cil crear una ruta y tenerla disponible en nuestro proyecto casi que\nde inmediato. Este tipo de convenciones hace que desarrollar sea m\xe1s r\xe1pido y que puedas enfocarte m\xe1s en el contenido que en la l\xf3gica.'),Object(c.b)("p",null,"Ver\xe1s que nada m\xe1s al abrir el navegador aparece el contenido:"),Object(c.b)("p",null,Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/nextjs/routing-index-page.png",title:"Routing Index Page"}),Object(c.b)("img",Object(t.a)({parentName:"a"},{src:"/nextjs/routing-index-page.png",alt:null})))),Object(c.b)("p",null,"\ud83e\udde0 ",Object(c.b)("strong",{parentName:"p"},"Nota:")," El archivo index siempre es un caso particular y m\xe1s en Next.js ya que se mostrar\xe1 por defecto tal cual un archivo html, sin embargo a diferencia de un\nsitio web tradicional o de una SPA la ruta http://localhost:3000/index no existe y se mostrar\xe1 el error 404 por defecto de Next.js. "),Object(c.b)("p",null,"\ud83c\udf93",Object(c.b)("strong",{parentName:"p"},"Tip:")," Recuerda que Next.js toma como base la carpeta ",Object(c.b)("inlineCode",{parentName:"p"},"pages")," por tanto la ruta ",Object(c.b)("em",{parentName:"p"},"http://localhost:3000/pages/index")," tampoco existir\xe1 a menos que crees una folder ",Object(c.b)("em",{parentName:"p"},"pages")," dentro\ndel folder principal ",Object(c.b)("em",{parentName:"p"},"pages"),"."),Object(c.b)("p",null,'Bien!, hemos creado una p\xe1gina "index", pero \xbfQu\xe8 pasa con routas m\xe1s complejas como: ',Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"myapp.com/project/settings"))," o ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"myapp.com/user/1"))," donde el ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"1"))," es un par\xe1metro?.\nNo te preocupes, Next.js tiene eso cubierto."),Object(c.b)("h2",null,"Carpetas y rutas"),Object(c.b)("p",null,"Para crear una ruta como ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"/project/settings"))," podemos usar carpetas dentro de nuestra carpeta principal ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"/pages")),". Para nuestra aplicaci\xf3n de tomar notas, necesitamos las siguientes\nroutas por ahora:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"    index => /\n    todas las notas => /notes\n    una nota => /notes/:id\n")),Object(c.b)("p",null,'Ya hemos creado la ruta "index", creemos la ruta para todas las notas: Para ello creemos una carpeta llamada notes y dentro creemos un archivo ',Object(c.b)("inlineCode",{parentName:"p"},"index.jsx"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"    pages\n        index.jsx\n        notes\n            index.jsx\n")),Object(c.b)("p",null,'A\xf1adiendo un archivo "index" dentro de una carpeta, le estamos diciendo a Next.js que queremos que el componente dentro del index sea lo que se muestre\ncuando se acceda a esta ruta con el nombre de la carpeta. Entonces, en este caso navegando a ',Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"/notes"))," va a renderizar el componente que este en ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"pages/notes/index.jsx"))),Object(c.b)("p",null,"Coloquemos por ahora dentro del archivo ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"pages/notes/index.jsx"))," lo siguiente:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"    import React from 'react'\n\n    export default () => <h1>All notes Page</h1>\n")),Object(c.b)("p",null,"Si navegas a la ruta deber\xedas ver lo siguiente:"),Object(c.b)("p",null,Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/nextjs/routing-notes-page.png",title:"Routing Notes Page"}),Object(c.b)("img",Object(t.a)({parentName:"a"},{src:"/nextjs/routing-notes-page.png",alt:null})))),Object(c.b)("p",null,"\ud83c\udf93",Object(c.b)("strong",{parentName:"p"},"Tip:")," No siempre es necesario crear la carpeta y el archivo index, tambi\xe9n puedes crear solo el archivo y Next.js crear\xe1 la ruta. Por ejemplo:\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"pages/notes/index.jsx"))," puede ser f\xe1cilmente sustituible por ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"pages/notes.jsx"))," y funcionar\xe1 exactamente igual. Sin embargo debes tener cuidado\ncon los confictos entre las rutas. Es completamente incorrecto tener: ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"pages/notes/index.jsx"))," y ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"pages/notes.jsx"))," ya que Next.js no sabr\xe1 cual de\nlos dos componentes renderizar para dicha ruta."),Object(c.b)("h2",null,"Rutas din\xe1micas"),Object(c.b)("p",null,"Next.js hace f\xe1cil la creaci\xf3n de rutas din\xe1micas. Dependiendo si tu quieres que estas p\xe1ginas sean prerrenderizadas o no la estrateg\xeda dentro del componente cambia\npero por ahora enfoquemonos en p\xe1ginas que ser\xe1 construidas cuando el servidor este corriendo es decir en tiempo de ejecuci\xf3n de nuestro servidor y no en tiempo de\ncompilaci\xf3n o ",Object(c.b)("em",{parentName:"p"},'"build time"'),"."),Object(c.b)("p",null,"Para crear una ruta din\xe1mica, podemos crear una archivo que tenga el nombre del parametro dinamico entre corchetes cuadrados, algo as\xed:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"    [id].jsx\n")),Object(c.b)("p",null,"Donde ",Object(c.b)("inlineCode",{parentName:"p"},"id")," es el nombre del parametro. Tu puedes nombrarlo como tu quieras. Recuerda que los corchetes cudrados no son un error o un ejemplo. Es la sintaxis estricta de Next.js\npara crear una ruta din\xe1mica. Por tanto para crear nuestra ruta de ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"/notes/1"))," vamos crear el archivo ",Object(c.b)("inlineCode",{parentName:"p"},"[id].jsx")," dentro de nuestra carpeta ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"/notes")),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"    pages\n        index.jsx\n        notes\n            index.jsx\n            [id].jsx\n")),Object(c.b)("p",null,"Podemos acceder al parametro id dentro de nuestra p\xe1gina usando un hook llamado ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"useRouter"))," de el m\xf3dulo ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"next/route")),". Este ya viene disponible y listo con\nNext.js."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"    import React from 'react'\n    import { useRouter } from 'next/router'\n\n    export default () => {\n        const router = useRouter()\n        const { id }= router.query\n\n        return (\n                <h1>Note: {id} </h1>\n            )\n    }\n")),Object(c.b)("p",null,"Donde el nombre del parametro en el objeto ",Object(c.b)("inlineCode",{parentName:"p"},"router.query")," es el mismo que el parametro que est\xe1 dentro de corchetes cuadrados en el nombre de la p\xe1gina:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"    router.query.id\n             |\n             |\n            [id].jsx\n")),Object(c.b)("p",null,"As\xed ver\xedas en tu aplicaci\xf3n el parametro:"),Object(c.b)("p",null,Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/nextjs/routing-note-page.png",title:"Routing Note Page"}),Object(c.b)("img",Object(t.a)({parentName:"a"},{src:"/nextjs/routing-note-page.png",alt:null})))),Object(c.b)("h2",null,"Capturando todas las rutas"),Object(c.b)("p",null,"Next.js tiene una funcionalidad bastante bonita que nos ayuda a definir y capturar todas las rutas\ncuando realmente no queremos hacer una p\xe1gina para cada ruta posible."),Object(c.b)("p",null,"Como ser\xeda una ruta capturable, basicamente es todas las combinaciones posibles de rutas dentro\nde una por ejemplo:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"    this/folder/**\n")),Object(c.b)("p",null,'Donde el ** significa todo dentro del "folder". Nosotros podemos hacer lo mismo con el concepto de rutas din\xe1micas\nen Next.js, lo \xfanico que necesitamos hacer es crear un archivo en nuestro directorio con una sintaxis as\xed:'),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"    docs/[...params].jsx\n")),Object(c.b)("p",null,"Entonces los tres puntos ",Object(c.b)("inlineCode",{parentName:"p"},"..."),"es usado por Next.js para entender que toda la estructura de la url ser\xe1 pasado como\nparametro, la diferencia entonces dentro del ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"useRouter"))," ser\xe1 que los parametros ser\xe1n un arreglo exactamente en\nel mismo orden que se construy\xf3 la ruta:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport { useRouter } from 'next/router'\n\n// file => /docs/[...params].jsx\n// route => /docs/a/b/c\n\nexport default () => {\n  const router = useRouter()\n  const { params }= router.query\n\n  // params === ['a', 'b', 'c']\n\n  return (\n    <h1>hello {JSON.stringify(params)}</h1>\n  )\n}\n")),Object(c.b)("p",null,"No importa el n\xfamero de segmentos que tenga tu ruta siempre los pasar\xe1 como array."),Object(c.b)("p",null,"As\xed se ver\xeda nuestro componente:"),Object(c.b)("p",null,Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/nextjs/routing-catch-all-page.png",title:"Routing Catch All Page"}),Object(c.b)("img",Object(t.a)({parentName:"a"},{src:"/nextjs/routing-catch-all-page.png",alt:null})))),Object(c.b)("p",null,"Ahora bien, para nuestra p\xe1gina padre es decir para la ruta ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"/docs"))," sola, a\xfan se mostrar\xeda error 404 ya\nque no hemos creado el archivo ",Object(c.b)("em",{parentName:"p"},"index.jsx")," dentro de la carpeta. Sin embargo si tambi\xe9n queremos ahorrarnos\nla creaci\xf3n de este archivo, podr\xedamos usar otros corchetes cuadrados fuera de nuestro ","[...params]",". "),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"    docs/[[...params]].jsx\n")),Object(c.b)("p",null,"\ud83c\udf93",Object(c.b)("strong",{parentName:"p"},"Tip:")," \xbfCuando usar esta funcionalidad de capturar todas las rutas? Es realmente \xfatil cuando tienes\nun conjunto de p\xe1ginas que tienen similitudes (si es que no son identicas) con sus layouts y estilos pero\ntienen diferente contenido y necesitan su propia URL. Documentaci\xf3n y Wikis son un ejemplo perfecto para usar \xe9sta\nfuncionalidad."),Object(c.b)("h2",null,"Non-pages"),Object(c.b)("p",null,"Las p\xe1ginas son especiales, pero que pasa cuando solamente necesitamos necesitamos componentes de react para\nusar en nuestras p\xe1ginas. Next.js no tiene ninguna convenci\xf3n sobre esto. Normalmente estos componentes se crean\ndentro de la carpeta ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"/src/components"))," donde colocamos los componentes."),Object(c.b)("p",null,"Eso es todo, espero que este post te sea de utilidad y lo puedas aplicar a\nalg\xfan proyecto que tengas en mente y que simplemente te haya ayudado a entender\ncomo funcionan las rutas en Next.js. "),Object(c.b)("p",null,"D\xe9jame un comentario si te sirvi\xf3  o si quieres a\xf1adir\nalguna opini\xf3n o si tienes alguna duda no dudes en dejarme un comentario\nen la parte de abajo, recuerda que si te gust\xf3 tambi\xe9n puedes compartir usando los links a\nlas redes sociales en la parte de abajo."),Object(c.b)(p.a,{slug:"enrutando-paginas-en-nextjs",mdxType:"Discuss"}))}b.isMDXComponent=!0}},[["k2i2",0,1,2,3,4,5]]]);
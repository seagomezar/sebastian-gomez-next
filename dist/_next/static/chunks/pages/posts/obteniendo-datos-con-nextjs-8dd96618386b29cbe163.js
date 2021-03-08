_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[37],{AFBc:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var n=t("wx14"),o=t("Ff2n"),s=t("q1tI"),r=t.n(s),c=t("7ljp"),i=t("j53b"),l=t("6G3q"),p=t("37hk"),d=(r.a.createElement,{});function u(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)(l.a,{category:"Desarrollo Web",date:1614624178656,title:"Obteniendo datos con Next.js",slug:"obteniendo-datos-con-nextjs",thumbnailImage:"/nextjs.png",excerpt:"La potencia que  tiene Next.js para obtener datos es de lejos una de las mejores en los frameworks modernos, desde mecanismos de cache hasta peticiones din\xe1micas hacen que Next.js tenga un conjunto de funcionalidades \xfanicas en este aspecto. En este post exploraremos tres de los m\xe9todos que tiene Next.js para traer datos a nuestra aplicaci\xf3n ya sea en tiempo de compilaci\xf3n o en tiempo de ejecuci\xf3n o simplemente como mecanismo de pre-rendering.",mdxType:"HeadSite"}),Object(c.b)("h1",null,"Obteniendo Datos con Next.js"),Object(c.b)(i.a,{tags:["Next.js","Javascript","NodeJS","Desarrollo Web"],date:1614624178656,slug:"obteniendo-datos-con-nextjs",mdxType:"PostHeader"}),Object(c.b)("p",null,"Hay muchas maneras de traer datos a nuestra aplicaci\xf3n con Next.js. Dependiendo de cuando y como necesites la informaci\xf3n\nhabr\xe1n varias alternativas que te pueden funcionar."),Object(c.b)("p",null,"Empecemos por lo que ya sabes. Si quieres traer datos del lado del cliente lo debes seguir haciendo como lo haces normalmente. Usando\naxios, fetch, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://swr.vercel.app/"}),"swr")," o ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-query.tanstack.com/"}),"react-query")," dentro del ",Object(c.b)("em",{parentName:"p"},"ComponentDidMount")," o dentro del hook que estes usando."),Object(c.b)("p",null,"\u26a0\ufe0f",Object(c.b)("strong",{parentName:"p"},"Tip:")," Next.js autom\xe1ticamente injecta fetch para que lo puedas usar en tu aplicaci\xf3n."),Object(c.b)("p",null,'Ahora si tu objetivo es obtener datos desde el lado del servidor o "antes de tiempo" (Ahead of time) tenemos tres opciones:'),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"getStaticProps"),Object(c.b)("li",{parentName:"ul"},"getStaticPaths"),Object(c.b)("li",{parentName:"ul"},"getServerSideProps")),Object(c.b)("h2",null,"Datos est\xe1ticos (Static Data)"),Object(c.b)("p",null,"Todos los m\xe9todos anteriores son para el prerenderizado de p\xe1ginas solamente. Tu no puedes usarlos en componentes o para\ntraer datos del lado del cliente."),Object(c.b)("p",null,"Hablemos entonces sobre ",Object(c.b)("em",{parentName:"p"},"getStaticProps")," en una p\xe1gina:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// /pages/index.js\n\nconst IndexPage = () => {// jsx }\nexport default IndexPage\n\nexport async function getStaticProps(context) {\n  return {\n    props: {}\n  }\n}\n")),Object(c.b)("p",null,"Por tener escrita esta funci\xf3n en el archivo de tu p\xe1gina y exportandola por defecto, Next.js va a ejecutar esta funci\xf3n\nen tiempo de construci\xf3n. Y cualquiera que sea el resultado ser\xe1 pasado como una propiedad en la p\xe1gina exportada."),Object(c.b)("p",null,"\u26a0\ufe0f",Object(c.b)("strong",{parentName:"p"},"Tip:")," Los resultados de esta funci\xf3n ser\xe1n guardados dentro de un archivo JSON y pasados como propiedad en el componente\nde la p\xe1gina del lado de cliente en tiempo de ejecuci\xf3n."),Object(c.b)("p",null,"Esta funci\xf3n al igual que las otras, solo se ejectutar\xe1n del lado del servidor. De hecho nisiquiera el c\xf3digo de esta\nfunci\xf3n se enviar\xe1 al c\xf3digo del cliente por tanto se pueden hacer cosas muy interesantes aqu\xed:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Interactuar con el sistema de archivos."),Object(c.b)("li",{parentName:"ul"},"Conectarse a una base de datos."),Object(c.b)("li",{parentName:"ul"},"Trabajo costoso del lado del backend.")),Object(c.b)("p",null,"El objeto de contexto que tiene los parametros cuando un usuario consulta una de nuestras p\xe1ginas y esta p\xe1gina es din\xe1mica,\nes decir tiene ","[id]",".js o ","[parametro]",".js o lo que sea dentro de ","[ ]",". Por esto el objeto contexto tiene en ",Object(c.b)("em",{parentName:"p"},"context.params"),"\nestos par\xe1metros. Pero imag\xedna que tienes una lista de posts y tu no sabes cuantos ni cuales son y a\xfan quieres hacer que\ntu sitio sea est\xe1tico. All\xed entra a jugar el m\xe9todo ",Object(c.b)("em",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"em"},"getStaticPaths")),". Veamos un ejemplo:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// /pages/blog/:slug.js\n\nconst IndexPage = () => {// jsx }\nexport default IndexPage\n\nexport async function getStaticPaths() {\n  // get all the paths for your posts from an API\n  // or file system\n  const results = await fetch('/api/posts')\n  const posts = await results.json()\n  const paths = posts.map(post => ({params: {slug: \n  post.slug}}))\n  /*\n  [\n    {params: {slug: 'get-started-with-node'}},\n    {params: {slug: 'top-frameworks'}}\n  ]\n  */\n  return {paths}\n}\n\nexport async function getStaticProps({ params }) {\n  const res = await fetch(`/api/post/${params.slug}`)\n  const post = await res.json()\n  return {\n    props: {post}\n  }\n}\n")),Object(c.b)("h2",null,"Rutas est\xe1ticas (Static Paths)"),Object(c.b)("p",null,"Si una p\xe1gina tiene una ruta din\xe1mica ","[id]",".jsx y usa getStaticProps. Tambi\xe9n deber\xe1 usar getStaticPaths para poder\nprerenderizar todas las p\xe1ginas en tiempo de compilaci\xf3n en el HTML."),Object(c.b)("p",null,"\u26a0\ufe0f",Object(c.b)("strong",{parentName:"p"},"Tip:")," Usa ",Object(c.b)("em",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"em"},"fallback: true"))," como par\xe1metro de retorno para el m\xe9todo getStaticPaths si tu tienes un sitio web\nmuy grande y tu no quieres est\xe1ticamente prerenderizar toooodas las p\xe1ginas de una sola vez y en vez de eso quieres hacer alguna\nfetch de datos directamente usando server side rendering y alguna paginaci\xf3n."),Object(c.b)("h2",null,"Datos desde el servidor (Server Data)"),Object(c.b)("p",null,"Finalmente tenemos el ",Object(c.b)("em",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"em"},"getServerSideProps")),", \xe9ste m\xe9todo se ejecutar\xe1 cada vez que se\nentre a la p\xe1gina donde lo has escrito, entonces a diferencia de ",Object(c.b)("em",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"em"},"getStaticProps")),"\ntu vas a esperar por todos los datos del API incluyendo par\xe1metros, headers y el\nrequest  y response. Ve\xe1mos un ejemplo:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const IndexPage = () => {// jsx }\nexport default IndexPage\n\nexport async function getServerSideProps() {\n  const response = await fetch(`https://somedata.com`)\n  const data = await response.json()\n\n  return { props: { data } }\n}\n")),Object(c.b)("h2",null,"Entonces... \xbfCuando usar cual?"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\xbfNecesitas usar datos en tiempo de ejecuci\xf3n y ",Object(c.b)("em",{parentName:"strong"},"NO")," necesitas Server Side Rendering?"),"\nR/: Usa fetch o axios desde el  lado del cliente en el componentDidMount o en el hook adecuado."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\xbfNecesitas datos en tiempo de ejecuci\xf3n que varian de request a request y ",Object(c.b)("em",{parentName:"strong"},"SI")," necesitas Servier Side Rendering?"),"\nR:/ Usa getServerSideProps"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\xbfTienes p\xe1ginas que traen informaci\xf3n que no cambia  mucho y que es ",Object(c.b)("em",{parentName:"strong"},"cacheable")," y adem\xe1s \xe9sta informaci\xf3n est\xe1 disponible en tiempo de compilaci\xf3n, por ejemplo un CMS?"),"\nR:/ Usa getStaticProps"),Object(c.b)("p",null,"*",Object(c.b)("em",{parentName:"p"},"\xbfTienes p\xe1ginas que traen informaci\xf3n que no cambia  mucho y que es "),"cacheable* y adem\xe1s \xe9sta informaci\xf3n est\xe1 disponible en tiempo de compilaci\xf3n pero adem\xe1s la p\xe1gina  recibe par\xe1metros?\nR:/ Use getStaticProps y getStaticPaths"),Object(c.b)("p",null,"\u26a0\ufe0f",Object(c.b)("strong",{parentName:"p"},"Tip:")," Next.js sigue mejorando en lo que respecta a la obtenci\xf3n de datos, es de lejos mi parte favorita ya que tiene poca o ninguna sobrecarga y es extremadamente potente."),Object(c.b)("p",null,"Eso es todo, espero que este post te sea de utilidad y lo puedas aplicar a\nalg\xfan proyecto que tengas en mente o que simplemente te haya ayudado a entender\ncuales son los mecanismos que tiene Next.js para la obtenci\xf3n de datos."),Object(c.b)("p",null,"D\xe9jame un comentario si te sirvi\xf3, si quieres a\xf1adir\nalguna opini\xf3n o si tienes alguna duda no dudes en dejarme un comentario\nen la parte de abajo, recuerda que si te gust\xf3 tambi\xe9n puedes compartir usando los links a\nlas redes sociales en la parte de abajo."),Object(c.b)(p.a,{slug:"obteniendo-datos-con-nextjs",mdxType:"Discuss"}))}u.isMDXComponent=!0},FtE0:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/obteniendo-datos-con-nextjs",function(){return t("AFBc")}])},j53b:function(e,a,t){"use strict";var n=t("1OyB"),o=t("vuIU"),s=t("Ji7U"),r=t("md7G"),c=t("foSv"),i=t("MX0m"),l=t.n(i),p=t("q1tI"),d=t.n(p),u=(t("YFqc"),d.a.createElement);function b(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(c.a)(e);if(a){var o=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Object(r.a)(this,t)}}var m={CSS:"primary",HTML:"secondary",Javascript:"warning",Firebase:"warning","Google Maps":"darkgreen",Angular:"danger",React:"success","Desarrollo Web":"info","Google Datastudio":"primary","Big Query":"danger",NodeJS:"node",Other:"dark",Typescript:"typescript","Programaci\xf3n Reactiva":"reactive"},j=function(e){Object(s.a)(t,e);var a=b(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.name;return u("a",{className:"jsx-187945056 "+("badge badge-"+(m[e]||"dark")||!1)},e,u(l.a,{id:"187945056"},[".badge.jsx-187945056{-webkit-text-decoration:none;text-decoration:none;margin-right:1em;color:white;padding:0.5em 0.5em;margin:0.5em 0;display:inline-block;}",".badge-primary.jsx-187945056{background-color:blue;}",".badge-secondary.jsx-187945056{background-color:green;}",".badge-darkgreen.jsx-187945056{background-color:#3cba54;}",".badge-danger.jsx-187945056{background-color:red;}",".badge-warning.jsx-187945056{background-color:#e5be01;}",".badge-info.jsx-187945056{background-color:gray;}",".badge-dark.jsx-187945056{background-color:black;}",".badge-success.jsx-187945056{background-color:green;}",".badge-node.jsx-187945056{background-color:#11d92f;}",".badge-typescript.jsx-187945056{background-color:#4f8cf6;}",".badge-reactive.jsx-187945056{background-color:#e10c8c;}"]))}}]),t}(d.a.Component),g=d.a.createElement;function f(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(c.a)(e);if(a){var o=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Object(r.a)(this,t)}}var O=function(e){Object(s.a)(t,e);var a=f(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.date,t=e.tags;e.slug;return g("small",{className:"jsx-1750184873 "},g("span",{className:"jsx-1750184873"},g("strong",{className:"jsx-1750184873"},"Fecha: "),new Date(a).toLocaleDateString("es-CO")," -",g("strong",{className:"jsx-1750184873"}," Autor: ")," Sebastian Gomez"),g("span",{className:"jsx-1750184873"}),g("span",{className:"jsx-1750184873"},t.map((function(e,a){return g(j,{name:e,key:a})}))),g(l.a,{id:"1750184873"},["a.jsx-1750184873{color:#9eabb3;-webkit-text-decoration:none;text-decoration:none;}","small.jsx-1750184873{color:#9eabb3;}","span.jsx-1750184873{display:block;}","span.jsx-1750184873:first-child{margin-top:0.2em;}","span.jsx-1750184873:last-child{margin-bottom:1em;}"]))}}]),t}(d.a.Component);a.a=O}},[["FtE0",0,1,2,3,4,5]]]);
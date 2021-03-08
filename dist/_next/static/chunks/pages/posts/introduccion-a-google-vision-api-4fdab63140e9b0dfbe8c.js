_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{j2Ad:function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return p}));var n=o("wx14"),r=o("Ff2n"),t=o("q1tI"),s=o.n(t),i=o("7ljp"),c=o("j53b"),l=o("6G3q"),d=o("37hk"),u=(s.a.createElement,{});function p(e){var a=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,o,{components:a,mdxType:"MDXLayout"}),Object(i.b)(l.a,{category:"Javascript",date:"2020-05-05",title:"Introducci\xf3n a Google Vision API",slug:"introduccion-a-google-vision-api",thumbnailImage:"/cloud-vision.png",excerpt:"Siempre me ha fascinado la inteligencia artificial. De hecho en el pasado he dictado algunos cursos en algunas universidades en Medell\xedn sobre inteligencia artificial y la tem\xe1tica es tan larga y extensa que a veces los primeros acercamientos de una persona a este tema resultan escabrosas y es probable que se rindan antes de tratar de hacer algo tangible usando inteligencia artificial. Por esto he querido crear esta historia ademas porque servir\xe1 de memoria para una presentaci\xf3n que har\xe9 en el Google DevFest de Medell\xedn.",mdxType:"HeadSite"}),Object(i.b)("h1",null,"Introducci\xf3n a Google Vision API"),Object(i.b)(c.a,{tags:["NodeJS","Desarrollo Web"],date:"2020-05-05",slug:"introduccion-a-google-vision-api",mdxType:"PostHeader"}),Object(i.b)("p",null,"Siempre me ha fascinado la inteligencia artificial. De hecho en el pasado he dictado algunos cursos en algunas universidades en Medell\xedn sobre inteligencia artificial y la tem\xe1tica es tan larga y extensa que a veces los primeros acercamientos de una persona a este tema resultan escabrosas y es probable que se rindan antes de tratar de hacer algo tangible usando inteligencia artificial. Por esto he querido crear esta historia ademas porque servir\xe1 de memoria para una presentaci\xf3n que har\xe9 en el Google DevFest de Medell\xedn."),Object(i.b)("p",null,"Empecemos por lo b\xe1sico, quiero mostrarles una de las APIs de la toda la suite de servicios en la nube que posee Google en su producto Google Cloud Platform, Google Vision API como su nombre lo indica es una API Rest que te permite hacer un an\xe1lisis detallado y un procesamiento profundo de im\xe1genes. Si bien esta disponible para casi todos los lenguajes modernos de programaci\xf3n me ha parecido interesante entender como podemos poner a funcionar esta API con Javascript y afortunadamente poseen una librer\xeda/SDK que funciona perfectamente con NodeJS."),Object(i.b)("p",null,"\xbfComo funciona Google Vision API?, pues bien, b\xe1sicamente Google tiene indexada una gran colecci\xf3n de im\xe1genes que ha venido creciendo a lo largo de su historia. Estas im\xe1genes son el insumo b\xe1sico para un proceso riguroso de clasificaci\xf3n que se ha venido mejorando cada d\xeda en Google, esto permite entonces que una vez que una imagen necesita ser analizada esta API tratar\xe1 de encontrar im\xe1genes similares y obtener los metadatos de estas im\xe1genes similares. Por ejemplo si subes una imagen de tu perro o tu gato primero la API tratar\xe1 de encontrar fotos similares y encontrar\xe1 por supuesto algunas fotos con perros, luego de ese conjunto de fotos con perros tratar\xe1 de encontrar algunas fotos con el mismo color, tama\xf1o de las formas entre otras posibles caracter\xedsticas. Finalmente extraer\xe1 las etiquetas de esas im\xe1genes similares y te las presentar\xe1 como si fueran las de tu imagen. Bien, probablemente a este punto dir\xe1s \u201cPor supuesto, esto no es Inteligencia Artificial\u201d y tal vez est\xe9s en lo correcto."),Object(i.b)("p",null,"Si bien el proceso de clasificaci\xf3n no es un proceso \u201cinteligente\u201d, estrictamente hablando si es un insumo necesario para el aprendizaje de m\xe1quina (Machine Learning). Tambi\xe9n es el insumo para extraer patrones sobre las im\xe1genes y poderlos comparar para generar conocimiento he incluso para generar conocimiento sobre lo aprendido (Deep Machine Learning), todos estos procesos hacen parte de la Google Vision API con agravante adicional, la potencia de computo de los servidores de Google (tal vez los m\xe1s poderosos del mundo) han venido trabajando desde hace alg\xfan tiempo detectando patrones sobre las im\xe1genes, procesando millones de im\xe1genes cada d\xeda y aprendiendo de lo que nosotros como humanos creemos que hay en una imagen."),Object(i.b)("p",null,"Finalmente, te estar\xe1s preguntando\u2026 bueno si \u2026 se ve bien pero debe costar un ojo de la cara, la respuesta es no, afortunadamente para nosotros los desarrolladores, Google Vision API tiene una capa gratuita de hasta 1000 peticiones por mes, y luego \\$1.50 d\xf3lares aproximadamente por cada bloque de 1000 peticiones. Aqu\xed puedes consultar m\xe1s sobre los precios. As\xed que no hay porque al menos no probar esta API."),Object(i.b)("p",null,"De igual manera debes saber que no es la \xfanica API de visi\xf3n artificial y procesamiento de im\xe1genes que podr\xe1s encontrar, de hecho hay alternativas interesantes como Microsoft Azure y OCR.Space que podr\xe1s comparar y usar. Estas alternativas son incluso m\xe1s baratas pero depender\xe1 de tus necesidades espec\xedficas cual y cuando usar cada una de ellas. Aqu\xed te dejo una comparaci\xf3n de precios."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1600/1*oVPEOdCfb3Dq6d4FXHrPCw.png",alt:null}))," Comparaci\xf3n de precios Google Cloud, MS Azure y OCR, tomado de: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://ocr.space/compare-ocr-software"}),"https://ocr.space/compare-ocr-software"),". Eso es todo por esta historia, en el siguiente Post voy a tratar de explicar c\xf3mo conectar y usar esta API con NodeJs."),Object(i.b)(d.a,{slug:"introduccion-a-google-vision-api",mdxType:"Discuss"}))}p.isMDXComponent=!0},j53b:function(e,a,o){"use strict";var n=o("1OyB"),r=o("vuIU"),t=o("Ji7U"),s=o("md7G"),i=o("foSv"),c=o("MX0m"),l=o.n(c),d=o("q1tI"),u=o.n(d),p=(o("YFqc"),u.a.createElement);function m(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=Object(i.a)(e);if(a){var r=Object(i.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(s.a)(this,o)}}var g={CSS:"primary",HTML:"secondary",Javascript:"warning",Firebase:"warning","Google Maps":"darkgreen",Angular:"danger",React:"success","Desarrollo Web":"info","Google Datastudio":"primary","Big Query":"danger",NodeJS:"node",Other:"dark",Typescript:"typescript","Programaci\xf3n Reactiva":"reactive"},b=function(e){Object(t.a)(o,e);var a=m(o);function o(){return Object(n.a)(this,o),a.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){var e=this.props.name;return p("a",{className:"jsx-187945056 "+("badge badge-"+(g[e]||"dark")||!1)},e,p(l.a,{id:"187945056"},[".badge.jsx-187945056{-webkit-text-decoration:none;text-decoration:none;margin-right:1em;color:white;padding:0.5em 0.5em;margin:0.5em 0;display:inline-block;}",".badge-primary.jsx-187945056{background-color:blue;}",".badge-secondary.jsx-187945056{background-color:green;}",".badge-darkgreen.jsx-187945056{background-color:#3cba54;}",".badge-danger.jsx-187945056{background-color:red;}",".badge-warning.jsx-187945056{background-color:#e5be01;}",".badge-info.jsx-187945056{background-color:gray;}",".badge-dark.jsx-187945056{background-color:black;}",".badge-success.jsx-187945056{background-color:green;}",".badge-node.jsx-187945056{background-color:#11d92f;}",".badge-typescript.jsx-187945056{background-color:#4f8cf6;}",".badge-reactive.jsx-187945056{background-color:#e10c8c;}"]))}}]),o}(u.a.Component),f=u.a.createElement;function j(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=Object(i.a)(e);if(a){var r=Object(i.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(s.a)(this,o)}}var h=function(e){Object(t.a)(o,e);var a=j(o);function o(){return Object(n.a)(this,o),a.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){var e=this.props,a=e.date,o=e.tags;e.slug;return f("small",{className:"jsx-1750184873 "},f("span",{className:"jsx-1750184873"},f("strong",{className:"jsx-1750184873"},"Fecha: "),new Date(a).toLocaleDateString("es-CO")," -",f("strong",{className:"jsx-1750184873"}," Autor: ")," Sebastian Gomez"),f("span",{className:"jsx-1750184873"}),f("span",{className:"jsx-1750184873"},o.map((function(e,a){return f(b,{name:e,key:a})}))),f(l.a,{id:"1750184873"},["a.jsx-1750184873{color:#9eabb3;-webkit-text-decoration:none;text-decoration:none;}","small.jsx-1750184873{color:#9eabb3;}","span.jsx-1750184873{display:block;}","span.jsx-1750184873:first-child{margin-top:0.2em;}","span.jsx-1750184873:last-child{margin-bottom:1em;}"]))}}]),o}(u.a.Component);a.a=h},jeTb:function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/introduccion-a-google-vision-api",function(){return o("j2Ad")}])}},[["jeTb",0,1,2,3,4,5]]]);
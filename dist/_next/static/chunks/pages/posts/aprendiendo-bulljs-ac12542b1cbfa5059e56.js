_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{IzRN:function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return b}));var n=o("wx14"),s=o("Ff2n"),r=o("q1tI"),t=o.n(r),l=o("7ljp"),c=o("j53b"),u=o("6G3q"),i=o("37hk"),d=(t.a.createElement,{});function b(e){var a=e.components,o=Object(s.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,o,{components:a,mdxType:"MDXLayout"}),Object(l.b)(u.a,{category:"Desarrollo Web",date:"2020-05-11",title:"Aprendiendo BullJS \ud83d\udc03",slug:"aprendiendo-bulljs",thumbnailImage:"/bulljs.png",excerpt:"Es com\xfan que nos encontremos alg\xfan proyecto en nuestra vida de programador con requerimientos muy puntuales en cuanto a funciones y su ejecuci\xf3n. Por ejemplo usar funciones en javascript que deban ejecutarse una cantidad espec\xedfica de veces, poder volver a ejecutarse en caso de fallar o una o varias veces y priorizar estas funciones para saber cual ejecutar primero, entre muchas otras cosas. Es all\xed donde muchos sistemas de manejo de colas para NodeJS empiezan a tomar importancia. Sin embargo en este art\xedculo vamos a hablar de una en particular llamada BullJS",mdxType:"HeadSite"}),Object(l.b)("h1",null,"Aprendiendo BullJS \ud83d\udc03"),Object(l.b)(c.a,{slug:"aprendiendo-bulljs",tags:["NodeJS","Javascript","Desarrollo Web"],date:"2020-05-11",mdxType:"PostHeader"}),Object(l.b)("p",null,"Es com\xfan que nos encontremos alg\xfan proyecto en nuestra vida de programador con requerimientos muy puntuales en cuanto a funciones y su ejecuci\xf3n. Por ejemplo usar funciones en javascript que deban ejecutarse una cantidad espec\xedfica de veces, poder volver a ejecutarse en caso de fallar o una o varias veces y priorizar estas funciones para saber cual ejecutar primero, entre muchas otras cosas. Es all\xed donde muchos sistemas de manejo de colas para NodeJS empiezan a tomar importancia. Sin embargo en este art\xedculo vamos a hablar de una en particular llamada BullJS."),Object(l.b)("p",null,"BullJS es una librer\xeda soportada por node.js para estos escenarios, pero que adem\xe1s persiste la informaci\xf3n en un base de datos en Redis. Pero eso no es todo, permite paralelismo de tareas, notificaciones entre productores y consumidores y seguimiento de progreso de tareas entre otros."),Object(l.b)("p",null,"El proyecto BullJS se define a s\xed mismo como: \u201cEl sistema de colas m\xe1s rapido y confiable basado en redis para NodeJS, cuidadosamente escrito para estabilidad, solidez y atomicidad\u201d."),Object(l.b)("p",null,"Aqu\xed encontrar\xe1s los enlaces a la documentaci\xf3n oficial:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://optimalbits.github.io/bull/"}),"Guide")," \u2014 Tu punto de entrada para empezar a desarrollar con bull"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/OptimalBits/bull"}),"Repositorio")," \u2014 Repositorio Oficial")),Object(l.b)("h2",null,"Comenzando \ud83d\udccb"),Object(l.b)("p",null,"Para instalar BullJS necesitas tener NodeJS instalado y adem\xe1s ejecutar el comando:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"npm install bull\n")),Object(l.b)("p",null,"Como mencionamos arriba, bull necesita redis-database, ya que es el lugar donde se almacena y se administran los \u201cjobs\u201d y los messages. Si tu tienes docker instalado en tu m\xe1quina, podemos ejecutar:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ docker run \u2014 name my-redis-container -p 6379:6379 -d redis\n")),Object(l.b)("p",null,"Esto inicia una base de datos local de redis que estar\xe1 ejecutandose en 127.0.0.1:6379"),Object(l.b)("h2",null,"Introducci\xf3n con un ejemplo \ud83d\udcaa"),Object(l.b)("p",null,"Un ejemplo para un \u201cjob\u201d (Porque ver\xe1s en BullJS se denomina job a cualquier tarea) podr\xeda ser algo como \u201c7 d\xedas despu\xe9s de que un se suscriba a nuestro newsletter queremos enviarle un email que contenga un enlace para puntuar su experiencia de subscripci\xf3n en nuestro sitio\u201d."),Object(l.b)("p",null,"BullJS tiene dos elementos principales que definen todo el ecosistema para trabajar, el primero son las colas o \u201cQueues\u201d y el segundo las tareas \u201cJobs\u201d. Revisemos primero las tareas:"),Object(l.b)("h2",null,"Queues en BullJS \ud83d\udeb4\u200d\u2642\ufe0f\ud83d\udeb4\u200d\u2640\ufe0f\ud83d\udeb4\u200d\u2642\ufe0f\ud83d\udeb4\u200d\u2640\ufe0f\ud83d\udeb4\u200d\u2640\ufe0f"),Object(l.b)("p",null,"Una cola es un objeto de javascript que puede producir y consumir jobs. Para este ejemplo vamos nombrar una newsLetterMail, pero tu puedes ponerle el nombre que quieras. Cuando creamos una instancia de una cola debemos especificarle el host y el puerto de tu base de datos de Redis ya que el default es 127.0.0.1:6379. Veamos entonces c\xf3mo ser\xeda esto:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import Queue from "bull";\n\nconst newsLetterMailQueue = new Queue("newsLetterMail", {\n  redis: {\n    host: "127.0.0.1",\n    port: 6379,\n  },\n});\n')),Object(l.b)("p",null,"Nota que hemos importado Bull con alias de Queue y hemos creado la Cola pas\xe1ndole dos argumentos, el nombre y un objeto con la configuraci\xf3n de redis. Eso es todo con las colas pasemos ahora a los\u2026"),Object(l.b)("h2",null,"Jobs en BullJS \ud83d\udeb4\u200d\u2642\ufe0f"),Object(l.b)("p",null,"Ahora que tenemos una Queue, creemos nuestro primer Job. Para esto vamos a pasar un objeto con datos que contenga la direcci\xf3n de email a la cual queremos enviar el email, adicionalmente vamos a pasar algunas opciones. En este ejemplo queremos procesar el job 7 d\xedas despu\xe9s de haber sido creado. Tambi\xe9n si el job falla se va a intentar ejecutar tres veces:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const data = {\n  email: "foo@bar.com",\n};\n\nconst options = {\n  delay: 86400000,\n  attempts: 3,\n};\n\nnewsLetterMailQueue.add(data, options);\n')),Object(l.b)("p",null,"Para a\xf1adir un job a una queue utilizamos la funci\xf3n add que viene en el objeto de javascript que nos devuelve la creaci\xf3n de la cola, \xe9sto hace que BullJS a\xf1ada el job a la base de datos con las opciones que hemos especificado."),Object(l.b)("h2",null,"Procesando un Job \ud83d\udeb5\u200d\u2642\ufe0f"),Object(l.b)("p",null,"Para procesar un Job, necesitamos especificar una funci\xf3n que pueda ser llamada por cada job en una cola, sin importar cuantos sean. Esta funci\xf3n se llama \u201cprocess\u201d y hace parte del objeto de la queue que hemos definido:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"newsLetterMailQueue.process(async (job) => {\n  await sendNewsLetterMailTo(job.data.email);\n});\n")),Object(l.b)("p",null,"Hemos extra\xeddo la propiedad email del Job mediante job.data y luego llamamos una funci\xf3n que se encarga de enviar el correo. Si esta funci\xf3n llega a fallar por alg\xfan error de javascript BullJS controlar\xe1 dicho error e intentar\xe1 ejectuarlo de nuevo hasta m\xe1ximo 3 veces o las veces que le hayamos especificado en las opciones del Job."),Object(l.b)("h2",null,"Completando un Job \ud83e\udd47\ud83d\udeb4\u200d\u2642\ufe0f"),Object(l.b)("p",null,"Ahora imaginemos que la ejecuci\xf3n ha finalizado, \xbfC\xf3mo podemos saber esto? O mejor a\xfan \xbfComo conocemos si algo fall\xf3?. Es ah\xed donde cabe anotar que cada vez que finalic\xe9 el proceso de un Job, necesitamos o bien resolver una promesa o bien ejecutar un callback, veamos estas dos opciones:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'newsLetterMailQueue.process(async (job, done) => {\n  await sendNewsLetterMailTo(job.data.email);\n  done(null, {"message"; "Email sent"})\n})\n')),Object(l.b)("p",null,"En este ejemplo anterior el callback done, recibe dos par\xe1metros error y resultado, como todo sali\xf3 bien hemos enviado el error en null y en el resultado un objeto con el mensaje de \xe9xito."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'newsLetterMailQueue.process(async (job) => {\n  await sendNewsLetterMailTo(job.data.email);\n  return Promise.resolve({"message"; "Email sent"})\n})\n')),Object(l.b)("p",null,"Ahora con promesas tenemos la opci\xf3n de retornar una promesa resuelta o fallida en este caso como queremos completar el job sin errores y completo retornamos el resultado dentro del resolve de nuestra promesa a retornar."),Object(l.b)("p",null,"Es posible notificar sobre el progreso de un Job mediate job.progress, ya que si tenemos alguna otra entidad escuchando por Jobs en una queue va a ser una buena se\xf1al de notificaci\xf3n entre ambos sistemas."),Object(l.b)("h2",null,"Manejando errores en un Job \ud83d\udeab\ud83d\udeb4\u200d\u2640\ufe0f"),Object(l.b)("p",null,"Una particularidad de Bull es que dentro del process de una queue, cada vez que se obtenga un error se va a finalizar el proceso del job y se va a reintentar, expl\xedcitamente podemos manejar esto de las dos maneras en que resolvemos un Job es decir con el objeto done, pas\xe1ndole como primer par\xe1metro el error, o retornando una promesa rechazada."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'newsLetterMailQueue.process(async (job, done) => {\n  await sendNewsLetterMailTo(job.data.email);\n  done(new Error("Algo sali\xf3 muy mal"))\n})\n\nnewsLetterMailQueue.process(async (job, done) => {\n  await sendNewsLetterMailTo(job.data.email);\n  return Promise.reject({"message"; "Algo sali\xf3 muy mal"})\n})\n')),Object(l.b)("p",null,"Algo que es importante que notes es que los try y los catch no funcionan dentro de .process es decir que debes manejar los errores en bloques try y catch de funciones exteriores a queue.process."),Object(l.b)("h2",null,"Concurrencia de jobs \ud83e\udd47\ud83e\udd48\ud83e\udd49\ud83e\udd3c\u200d\u2640\ufe0f"),Object(l.b)("p",null,"Algo que es muy interesante con BullJS es que podemos manejar concurrencia de jobs utilizando los procesadores que tenga nuestro computador, esto hace que podamos distribuir cargas de trabajo entre distintos nodos de una manera sencilla y dejarle a BullJS que maneja la concurrencia y la distribuci\xf3n, pero para ello se requiere que coloquemos la funci\xf3n process en un archivo independiente y que definamos cual ser\xeda la concurrencia m\xe1xima de Jobs en un mismo momento, veamos un ejemplo:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const numMaxJobsConcurrent = 4;\nnewsLetterMailQueue.process(numMaxJobsConcurrent, "path/to/funcion/file.js");\n')),Object(l.b)("p",null,"De esta manera supongamos que cuatro usuarios se registran entonces BullJS es capaz de ejecutar dichos procesos de manera simult\xe1nea sin que ninguno bloquee a otro. Sin embargo tienes que exportar la funci\xf3n en el archivo que est\xe1s procesando:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"///path/to/funcion/file.js\n\nconst processJob = async (job) => {\n  /// Do something\n  await sendNewsLetterMailTo(job.data.email);\n};\nmodule.exports = processJob;\n")),Object(l.b)("p",null,"As\xed estar\xe1s asegurando el correcto funcionamiento de la concurrencia y podr\xe1s ejecutar tantos jobs como desees."),Object(l.b)("h2",null,"Escuchando el estado de Jobs \ud83c\udfa7"),Object(l.b)("p",null,"Hasta ahora hemos explorado bastantes funcionalidades de BullJS, sin embargo la m\xe1s importante para mi resulta en la manera en que puedo escuchar por el estado y el resultado de un job en la misma aplicaci\xf3n o en una aplicaci\xf3n externa y completamente distinta, lo que quiere decir que si tienes dos o m\xe1s servidores que ejecutan tareas y necesitan notificarse entre ellos el progreso y la completitud de las mismas aqu\xed se vuelve a\xfan m\xe1s relevante esta librer\xeda. Imaginemos que una vez que se env\xeda el email a nuestro usuario queremos enviarle un mensaje de texto y esto lo har\xe1 otro servidor totalmente distinto a donde tenemos alojado el c\xf3digo del env\xedo de email. Bien lo que haremos ser\xe1 crear una cola con exactamente el mismo nombre y escucharemos por un mensaje que nos diga cuando un Job termin\xf3:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import Queue from "bull";\n\nconst newsLetterMailQueue = new Queue("newsLetterMail", {\n  redis: {\n    host: "127.0.0.1",\n    port: 6379,\n  },\n});\n\nnewsLetterMailQueue.on("global:completed", async (jobId, result) => {\n  // aqu\xed en result obtenemos el resultado que se env\xeda y\n  // adem\xe1s un identificador \xfanico al Job\n\n  await sendSMS();\n});\n')),Object(l.b)("p",null,"Dos cosas que son importantes notar aqu\xed es \ud83d\udd75\ufe0f\u200d\u2642\ufe0f:"),Object(l.b)("p",null,"i) El servidor que est\xe1 escuchando por los mensajes debe tener BullJS instalado."),Object(l.b)("p",null,"ii) Debe apuntar exactamente al mismo redis que est\xe1 usando el otro servidor."),Object(l.b)("p",null,"El evento 'global:completed' es el evento que se usa cross servidor es decir para servidores externos al que est\xe1 procesando el job, pero si lo que quieres es hacerlo junto todo en el mismo servidor o proyecto, simplemente debes escuchar por el evento \u2018completed\u2019."),Object(l.b)("p",null,"Adem\xe1s del evento completed hay una lista enorme de eventos por los que se puede escuchar, aqu\xed veremos una lista:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),".on('error', function(error) {\n  // An error occured.\n})\n\n.on('waiting', function(jobId){\n  // A Job is waiting to be processed as soon as a worker is idling.\n});\n\n.on('active', function(job, jobPromise){\n  // A job has started. You can use `jobPromise.cancel()`` to abort it.\n})\n\n.on('stalled', function(job){\n  // A job has been marked as stalled. This is useful for debugging job\n  // workers that crash or pause the event loop.\n})\n\n.on('progress', function(job, progress){\n  // A job's progress was updated!\n})\n\n.on('completed', function(job, result){\n  // A job successfully completed with a `result`.\n})\n\n.on('failed', function(job, err){\n  // A job failed with reason `err`!\n})\n\n.on('paused', function(){\n  // The queue has been paused.\n})\n\n.on('resumed', function(job){\n  // The queue has been resumed.\n})\n\n.on('cleaned', function(jobs, type) {\n  // Old jobs have been cleaned from the queue. `jobs` is an array of cleaned\n  // jobs, and `type` is the type of jobs cleaned.\n});\n\n.on('drained', function() {\n  // Emitted every time the queue has processed all the waiting jobs (even if there can be some delayed jobs not yet processed)\n});\n\n.on('removed', function(job){\n  // A job successfully removed.\n});\n")),Object(l.b)("p",null,"Todos ellos dependen espec\xedficamente de cada caso de uso que tu le quieras dar y recuerda que a cada uno de ellos le puedes a\xf1adir el \u201cglobal:\u201d para que lo puedas utilizar cross proyecto."),Object(l.b)("h2",null,"Conclusiones \u26f3\ufe0f"),Object(l.b)("p",null,"Finalmente te recomiendo probar muchisimo BullJS ya que es una librer\xeda muy simple con mucho poder, muy optimizada y que te permite controlar casi a cualquier nivel tus tareas, concurrencia y notificaci\xf3n entre proyectos, aqu\xed encontrar\xe1s la lista de todos los ejemplos que he desarrollado para t\xed. Recuerda darle like al repositorio y crea pull requests con ejemplos nuevos para que entre todos aprendamos m\xe1s sobre esta excelente librer\xeda:"),Object(l.b)("p",null,"Link al repositorio con todos los ejemplos."),Object(l.b)("p",null,"Links a los ejemplos espec\xedficos."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/seagomezar/learning-bulljs/tree/master/example-1-simple-queue-and-job"}),"Simple creaci\xf3n y ejecuci\xf3n de un Job")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/seagomezar/learning-bulljs/tree/master/example-2-job-lifecycle"}),"Ciclo de vida de un Job local y Global")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/seagomezar/learning-bulljs/tree/master/example-3-error-handling"}),"Manejo de errores")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/seagomezar/learning-bulljs/tree/master/example-4-concurrency"}),"Concurrencia de Jobs y notificaciones"))),Object(l.b)("p",null,"Eso es todo, espero que este post te sea de utilidad, Si tienes alguna duda no dudes en dejarme un comentario en la parte de abajo, recuerda que si te gust\xf3 tambi\xe9n puedes compartir usando los links a las redes sociales en la parte de abajo."),Object(l.b)(i.a,{slug:"aprendiendo-bulljs",mdxType:"Discuss"}))}b.isMDXComponent=!0},j53b:function(e,a,o){"use strict";var n=o("1OyB"),s=o("vuIU"),r=o("Ji7U"),t=o("md7G"),l=o("foSv"),c=o("MX0m"),u=o.n(c),i=o("q1tI"),d=o.n(i),b=(o("YFqc"),d.a.createElement);function p(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=Object(l.a)(e);if(a){var s=Object(l.a)(this).constructor;o=Reflect.construct(n,arguments,s)}else o=n.apply(this,arguments);return Object(t.a)(this,o)}}var m={CSS:"primary",HTML:"secondary",Javascript:"warning",Firebase:"warning","Google Maps":"darkgreen",Angular:"danger",React:"success","Desarrollo Web":"info","Google Datastudio":"primary","Big Query":"danger",NodeJS:"node",Other:"dark",Typescript:"typescript","Programaci\xf3n Reactiva":"reactive"},j=function(e){Object(r.a)(o,e);var a=p(o);function o(){return Object(n.a)(this,o),a.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var e=this.props.name;return b("a",{className:"jsx-187945056 "+("badge badge-"+(m[e]||"dark")||!1)},e,b(u.a,{id:"187945056"},[".badge.jsx-187945056{-webkit-text-decoration:none;text-decoration:none;margin-right:1em;color:white;padding:0.5em 0.5em;margin:0.5em 0;display:inline-block;}",".badge-primary.jsx-187945056{background-color:blue;}",".badge-secondary.jsx-187945056{background-color:green;}",".badge-darkgreen.jsx-187945056{background-color:#3cba54;}",".badge-danger.jsx-187945056{background-color:red;}",".badge-warning.jsx-187945056{background-color:#e5be01;}",".badge-info.jsx-187945056{background-color:gray;}",".badge-dark.jsx-187945056{background-color:black;}",".badge-success.jsx-187945056{background-color:green;}",".badge-node.jsx-187945056{background-color:#11d92f;}",".badge-typescript.jsx-187945056{background-color:#4f8cf6;}",".badge-reactive.jsx-187945056{background-color:#e10c8c;}"]))}}]),o}(d.a.Component),g=d.a.createElement;function f(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=Object(l.a)(e);if(a){var s=Object(l.a)(this).constructor;o=Reflect.construct(n,arguments,s)}else o=n.apply(this,arguments);return Object(t.a)(this,o)}}var h=function(e){Object(r.a)(o,e);var a=f(o);function o(){return Object(n.a)(this,o),a.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var e=this.props,a=e.date,o=e.tags;e.slug;return g("small",{className:"jsx-1750184873 "},g("span",{className:"jsx-1750184873"},g("strong",{className:"jsx-1750184873"},"Fecha: "),new Date(a).toLocaleDateString("es-CO")," -",g("strong",{className:"jsx-1750184873"}," Autor: ")," Sebastian Gomez"),g("span",{className:"jsx-1750184873"}),g("span",{className:"jsx-1750184873"},o.map((function(e,a){return g(j,{name:e,key:a})}))),g(u.a,{id:"1750184873"},["a.jsx-1750184873{color:#9eabb3;-webkit-text-decoration:none;text-decoration:none;}","small.jsx-1750184873{color:#9eabb3;}","span.jsx-1750184873{display:block;}","span.jsx-1750184873:first-child{margin-top:0.2em;}","span.jsx-1750184873:last-child{margin-bottom:1em;}"]))}}]),o}(d.a.Component);a.a=h},tG94:function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/aprendiendo-bulljs",function(){return o("IzRN")}])}},[["tG94",0,1,2,3,4,5]]]);
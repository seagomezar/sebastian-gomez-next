import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="description"
            content="Blog técnico sobre tecnologías Web, Aprende y profundiza más sobre desarrollo Web"
          />
          <meta name="keywords" content="HTML, CSS, JavaScript, Javascript" />
          <meta name="author" content="Sebastian Gomez" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/FaviconSG.png" />
          <link href="/static/css/styles.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `// paste script in here `,
            }}
          />
          <script
            data-ad-client="ca-pub-5241677876798110"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

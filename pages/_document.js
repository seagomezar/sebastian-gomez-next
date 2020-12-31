import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Blog técnico sobre tecnologías Web, Aprende y profundiza más sobre desarrollo Web"
          />
          <meta name="keywords" content="HTML, CSS, JavaScript, Javascript" />
          <meta name="author" content="Sebastian Gomez" />
          <link rel="icon" href="/FaviconSG.png" />
          <link href="/static/css/styles.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

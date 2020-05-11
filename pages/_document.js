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
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather&display=swap"
            rel="stylesheet"
          ></link>
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
        </body>
      </Html>
    );
  }
}

export default MyDocument;

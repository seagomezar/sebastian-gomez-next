import React from "react";
import Head from "next/head";
import OpenGraphTags from "./OpenGraphTags";

const HeadSite = (props) => (
  <Head>
    <meta charset="UTF-8" />
    <title>Lee Sobre Tecnologías Web - Sebastian Gomez</title>
    <meta
      name="description"
      content="Blog técnico sobre tecnologías Web, Aprende y profundiza más sobre desarrollo Web"
    />
    <meta name="keywords" content="HTML, CSS, JavaScript, Javascript" />
    <meta name="author" content="Sebastian Gomez" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <OpenGraphTags {...props} />
    <link rel="icon" href="/FaviconSG.png" />
    <link
      href="https://fonts.googleapis.com/css?family=Merriweather&display=swap"
      rel="stylesheet"
    ></link>
    <link href="/static/css/styles.css" rel="stylesheet" />
  </Head>
);

export default HeadSite;

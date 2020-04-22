import React from "react";
import Head from "next/head";
import OpenGraphTags from "./OpenGraphTags";

const HeadSite = (props) => (
  <Head>
    <title>Lee Sobre Tecnologías Web - Sebastian Gomez</title>
    <OpenGraphTags {...props} />
    <link rel="icon" href="/favicon.ico" />
    <link href="/static/css/ionicons.min.css" rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    ></link>
    <link
      href="https://fonts.googleapis.com/css?family=Merriweather&display=swap"
      rel="stylesheet"
    ></link>
    <link href="/static/css/styles.css" rel="stylesheet" />
  </Head>
);

export default HeadSite;

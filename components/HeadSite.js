import React from "react";
import Head from "next/head";
import OpenGraphTags from "./OpenGraphTags";

const HeadSite = (props) => (
  <Head>
    <title>Lee Sobre Tecnologías Web - Sebastian Gomez</title>
    <OpenGraphTags {...props} />
  </Head>
);

export default HeadSite;

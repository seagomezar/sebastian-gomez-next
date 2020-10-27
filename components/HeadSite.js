import React from "react";
import Head from "next/head";
//import OpenGraphTags from "./OpenGraphTags";
const siteUrl = "https://www.sebastian-gomez.com/";
    const siteDescription =
      "Blog técnico sobre tecnologías Web, Aprende y profundiza más sobre desarrollo Web";
const HeadSite = (props) => (
  <Head>
    <title>Lee Sobre Tecnologías Web - Sebastian Gomez</title>
    <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
    <meta
          name="description"
          content={props.excerpt || siteDescription}
        />
        <meta
          property="og:title"
          content={props.title || "Lee sobre tecnologías Web"}
        />
        <meta property="og:site" content="Sebastian Gomez" />
        <meta property="og:locale" content="es_CO" />
        <meta
          property="og:description"
          content={props.excerpt || siteDescription}
        />
        <meta
          property="og:image"
          content={
            props.thumbnailImage
              ? "https://sebastian-gomez.com" + props.thumbnailImage
              : "https://sebastian-gomez.com/foto_personal.jpg"
          }
        />
        <meta
          property="og:url"
          content={
            props.slug ? siteUrl + "posts/" + props.slug : siteUrl
          }
        />
        <meta
          property="og:type"
          content={props.slug ? "article" : "website"}
        />
        <meta property="article:author" content="Sebastian Gomez" />
        <meta property="article:section" content={props.category} />
        <meta property="article:published_time" content={props.date} />
        <meta property="article:modified_time" content={props.date} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@sebasgojs" />
        <meta name="twitter:creator" content="@sebasgojs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://google.com/article"
            },
            "headline": "${props.title || "Lee sobre tecnologías Web"}",
            "image": [
                "${
                  props.thumbnailImage
                    ? "https://sebastian-gomez.com" + props.thumbnailImage
                    : "https://sebastian-gomez.com/foto_personal.jpg"
                }"
            ],
            "datePublished": "${props.date || new Date("05-05-2020")}",
            "dateModified": "${props.date || new Date("05-05-2020")}",
            "author": {
                "@type": "Person",
                "name": "Sebastian Gomez"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Sebastian Gomez",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://sebastian-gomez.com/foto-personal.jpg"
                }
            },
            "description": "${props.excerpt || siteDescription}" 
          }`,
          }}
        ></script>
  </Head>
);

export default HeadSite;

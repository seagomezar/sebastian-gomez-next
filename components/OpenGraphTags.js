class OpenGraphTags extends React.Component {
  render() {
    const siteUrl = "https://www.sebastian-gomez.com/";
    const siteDescription =
      "Blog técnico sobre tecnologías Web, Aprende y profundiza más sobre desarrollo Web";
    return (
      <React.Fragment>
        <meta
          property="og:title"
          content={this.props.title || "Lee sobre tecnologías Web"}
        />
        <meta property="og:site" content="Sebastian Gomez" />
        <meta property="og:locale" content="es_CO" />
        <meta
          property="og:description"
          content={this.props.excerpt || siteDescription}
        />
        <meta
          property="og:image"
          content={this.props.thumbnailImage || "/foto-personal.jpg"}
        />
        <meta
          property="og:url"
          content={
            this.props.slug ? siteUrl + "posts/" + this.props.slug : siteUrl
          }
        />
        <meta
          property="og:type"
          content={this.props.slug ? "article" : "website"}
        />
        <meta property="article:author" content="Sebastian Gomez" />
        <meta property="article:section" content={this.props.category} />
        <meta property="article:published_time" content={this.props.date} />
        <meta property="article:modified_time" content={this.props.date} />
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
            "headline": ${this.props.title || "Lee sobre tecnologías Web"},
            "image": [
                ${this.props.thumbnailImage || "/foto-personal.jpg"}
            ],
            "datePublished": ${this.props.date},
            "dateModified": ${this.props.date},
            "author": {
                "@type": "Person",
                "name": "Sebastian Gomez"
            },
            "publisher": {
                "@type": "Person",
                "name": "Sebastian Gomez",
                "logo": {
                    "@type": "ImageObject",
                    "url": "/foto-personal.jpg"
                }
            },
            "description": ${this.props.excerpt || siteDescription}`,
          }}
        ></script>
      </React.Fragment>
    );
  }
}

export default OpenGraphTags;
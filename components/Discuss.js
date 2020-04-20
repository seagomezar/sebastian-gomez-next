import React from "react";

class Discuss extends React.Component {
  constructor(props) {
    super(props);
    this.canonicalUrl = false;
    this.state = {
      canonicalUrl: false,
    };
  }
  render() {
    const siteUrl = "https://www.sebastian-gomez.com/posts/";
    return (
      <React.Fragment>
        <div id="disqus_thread"></div>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          var disqus_config = function () {
            this.page.url = '${siteUrl}${this.props.slug}';
            this.page.identifier = "${this.props.slug}";
          };

          (function() { // DON'T EDIT BELOW THIS LINE
          var d = document, s = d.createElement('script');
          s.src = '//sebastian-gomez.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
          })();`,
          }}
        ></script>
      </React.Fragment>
    );
  }
}

export default Discuss;

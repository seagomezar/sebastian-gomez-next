import React from "react";
import Nav from "./Nav";
import { initGA, logPageView } from "../utils/analytics";

class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <Nav onlyTopBar={true} />
        <article className="post">
          {props.children}
          <style jsx="true">{`
            .post {
              max-width: 1024px;
              margin: 4rem auto 1rem auto;
              text-align: justify;
              text-rendering: optimizelegibility;
              letter-spacing: -0.3px;
              font-family: "Merriweather", serif;
              color: #5d686f;
              font-weight: 400;
              font-size: 20px;
              line-height: 30px;
              padding: 1rem 1rem;
              transition: 0.3s all;
            }
          `}</style>
        </article>
        <footer></footer>
      </React.Fragment>
    );
  }
}

export default Layout;

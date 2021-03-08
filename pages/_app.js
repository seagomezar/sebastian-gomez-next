import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/CodeBlock";
import { Container, baseStyles } from "unified-ui";
import Layout from "../components/Layout";
import Image from 'next/image';

const mdComponents = {
  h1: (props) => (
    <h1
      style={{
        color: "#4a4a4a",
        fontSize: "2.7rem",
        textAlign: "left",
        lineHeight: "3.7rem",
      }}
      {...props}
    />
  ),
  p: (props) => (
    <p style={{ marginBottom: "1rem", marginTop: "1rem" }} {...props} />
  ),
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  ul: (props) => <ul  style={{ marginTop: "1rem", marginBottom: "1rem" }} {...props} />,
  li: (props) => <li style={{ marginLeft: "2rem", marginBottom: "1rem" }} {...props} />,
  img: (props) => <Image style={{ width: "100%" }} {...props} width="300" height="300" layout="responsive" />,
  a: (props) => (
    <a
      style={{ textDecoration: "none", color: "rgb(52, 158, 243)" }}
      {...props}
    />
  ),
};

const Style = ({ children }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: children,
    }}
  />
);

const App = ({ Component, pageProps }) => {
  if (Component.isMDXComponent) {
    return (
      <Layout>
        <MDXProvider components={mdComponents}>
          <Style>{baseStyles}</Style>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    );
  } else {
    return <Component {...pageProps} />;
  }
};

export default App;

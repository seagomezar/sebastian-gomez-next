import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/CodeBlock";
import { Container, baseStyles } from "unified-ui";
import Layout from "../components/Layout";

const mdComponents = {
  h1: props => <h1 style={{ color: "tomato" }} {...props} />,
  pre: props => <div {...props} />,
  code: CodeBlock
};

const Style = ({ children }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: children
    }}
  />
);

export default ({ Component, pageProps }) => (
  <Layout>
    <MDXProvider components={mdComponents}>
      <Style>{baseStyles}</Style>
      <Component {...pageProps} />
    </MDXProvider>
  </Layout>
);

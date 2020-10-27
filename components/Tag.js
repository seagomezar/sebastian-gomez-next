import React from "react";
import Link from "next/link";

const TagsColorDictionary = {
  CSS: "primary",
  HTML: "secondary",
  Javascript: "warning",
  Firebase: "warning",
  "Google Maps": "darkgreen",
  Angular: "danger",
  React: "success",
  "Desarrollo Web": "info",
  "Google Datastudio": "primary",
  "Big Query": "danger",
  NodeJS: "node",
  Other: "dark",
  Typescript: "typescript",
  "Programación Reactiva": "reactive",
};

class Tag extends React.Component {
  render() {
    const { name } = this.props;
    const tagColor = TagsColorDictionary[name] || "dark";
    return (
      //<Link href={"/tags/" + name}>
      <a className={"badge badge-" + tagColor}>
        {name}

        <style jsx="true">{`
          .badge {
            text-decoration: none;
            margin-right: 1em;
            color: white;
            padding: 0.5em 0.5em;
            margin: 0.5em 0;
            display: inline-block;
          }
          .badge-primary {
            background-color: blue;
          }
          .badge-secondary {
            background-color: green;
          }
          .badge-darkgreen {
            background-color: #3cba54;
          }
          .badge-danger {
            background-color: red;
          }
          .badge-warning {
            background-color: #e5be01;
          }
          .badge-info {
            background-color: gray;
          }
          .badge-dark {
            background-color: black;
          }
          .badge-success {
            background-color: green;
          }
          .badge-node {
            background-color: #11d92f;
          }
          .badge-typescript {
            background-color: #4f8cf6;
          }
          .badge-reactive {
            background-color: #e10c8c;
          }
        `}</style>
      </a>
      //</Link>
    );
  }
}

export default Tag;

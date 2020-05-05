import React from "react";
import Link from "next/link";

const TagsColorDictionary = {
  CSS: "primary",
  HTML: "secondary",
  Javascript: "warning",
  Angular: "danger",
  React: "success",
  "Desarrollo Web": "info",
  Other: "dark",
};

class Tag extends React.Component {
  render() {
    const { name } = this.props;
    const tagColor = TagsColorDictionary[name] || "dark";
    return (
      <Link href={"/tags/" + name}>
        <a className={"badge badge-" + tagColor}>
          {name}

          <style jsx>{`
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
            .badge-danger {
              background-color: red;
            }
            .badge-warning {
              background-color: #E5BE01;
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
          `}</style>
        </a>
      </Link>
    );
  }
}

export default Tag;

import React from "react";
import Tag from "./Tag";

class PostHeader extends React.Component {
  render() {
    const { date, tags } = this.props;
    return (
      <small className="">
        <span>
          <strong>Fecha: </strong>
          {new Intl.DateTimeFormat("es-CO", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }).format(new Date(date))}{" "}
          -<strong> Autor: </strong> Sebastian Gomez
        </span>
        <span></span>
        <span>
          {tags.map((tag, index) => (
            <Tag name={tag} key={index} />
          ))}
        </span>
        <style jsx>{`
          small {
            color: #9eabb3;
          }
          span {
            display: block;
          }
          span:first-child {
            margin-top: 0.2em;
          }
          span:last-child {
            margin-bottom: 1em;
          }
        `}</style>
      </small>
    );
  }
}

export default PostHeader;

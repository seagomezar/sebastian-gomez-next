import React from "react";
import Tag from "./Tag";
import Link from "next/link";

class PostHeader extends React.Component {
  render() {
    const { date, tags, slug } = this.props;
    return (
      <small className="">
        <span>
          <strong>Fecha: </strong>
          {new Date(date).toLocaleDateString('es-CO')} -<strong> Autor: </strong> Sebastian Gomez
        </span>

        <span></span>
        <span>
          {tags.map((tag, index) => (
            <Tag name={tag} key={index} />
          ))}
        </span>
        <style jsx="true">{`
          a {
            color: #9eabb3;
            text-decoration: none;
          }
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

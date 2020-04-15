import React from "react";
import Link from "next/link";

class PostNavigation extends React.Component {
  render() {
    const { currentPage = 0, totalPages } = this.props;
    return (
      <div className="post-navigation">
        <div className="">
          <Link href={"/page/" + parseInt(currentPage + 1)}>
            <a className="">Artículos Anteriores</a>
          </Link>
        </div>
        <div className="">página 1 de {totalPages}</div>
        <style jsx>
          {`
            .post-navigation {
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              align-items: center;
              margin-bottom: 1rem;
              color: #5d686f;
            }
            a {
              display: block;
              text-decoration: none;
              border-radius: 5px;
              text-align: center;
              border: 1px solid #eef2f8;
              color: #5d686f;
              padding: 1rem;
            }
            a::after {
              content: ">";
              margin-left: 1rem;
            }
          `}
        </style>
      </div>
    );
  }
}

export default PostNavigation;

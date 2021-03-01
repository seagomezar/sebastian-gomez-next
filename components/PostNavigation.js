import React from "react";
import Link from "next/link";

class PostNavigation extends React.Component {
  render() {
    const { currentPage = 0, totalPages } = this.props;
    return (
      <div className="post-navigation">
        {currentPage > 1 ? (
          <div>
            <Link href={"/page/"+ (parseInt(currentPage) - 1)}>
              <a className="newer-posts">Artículos Recientes</a>
            </Link>
          </div>
        ) : (
          ""
        )}
        {currentPage < totalPages ? (
          <div>
            <Link href={"/page/"+ (parseInt(currentPage) + 1)}>
              <a className="older-posts">Artículos Anteriores</a>
            </Link>
          </div>
        ) : (
          ""
        )}

        <div className="">
          página {currentPage} de {totalPages}
        </div>
        <style jsx="true">
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
            .older-posts::after {
              content: ">";
              margin-left: 1rem;
            }
            .newer-posts::before {
              content: "<";
              margin-right: 1rem;
            }
          `}
        </style>
      </div>
    );
  }
}

export default PostNavigation;

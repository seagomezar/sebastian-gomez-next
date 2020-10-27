import React from "react";
import Link from "next/link";
import PostThumbnail from "./PostThumbnail";
import PostHeader from "./PostHeader";

class PostExcerpt extends React.Component {
  render() {
    const { index, post } = this.props;
    return (
      <article className="" key={index}>
        <Link href={"/posts/" + post.slug}>
          <a className="post-thumbnail">
            <PostThumbnail
              thumbnailImage={post.thumbnailImage}
              altText={post.title}
            />
          </a>
        </Link>
        <div className="excerpt-body">
          <Link href={"/posts/" + post.slug}>
            <a className="title">
              <h2 className="">{post.title}</h2>
            </a>
          </Link>
          <PostHeader tags={post.tags} date={post.date} slug={post.slug} />
          <p className="excerpt">{post.excerpt}</p>
          <Link href={"/posts/" + post.slug}>
            <a className="keep-reading">Seguir Leyendo</a>
          </Link>
        </div>

        <style jsx="true">
          {`
            article {
              display: flex;
              font-family: "Open Sans", sans-serif;
              color: #333333;
              font-size: 1rem;
              margin: 1rem 1rem;
              border-bottom: 1px solid #eef2f8;
            }
            .excerpt-body a {
              text-decoration: none;
              color: #333333;
            }
            .excerpt-body > .title {
              margin: 1rem 0;
            }
            .excerpt-body > .keep-reading {
              cursor: pointer;
              color: #349ef3;
              margin: 1rem 0 0.5rem 0;
              display: block;
            }
            .excerpt-body > .excerpt {
              font-size: 1rem;
              line-height: 24px;
              text-align: justify;
              text-rendering: optimizelegibility;
              font-family: Merriweather, serif;
              color: #5d686f;
            }
            .post-thumbnail {
              display: block;
              padding-top: 1rem;
              padding-right: 1rem;
            }
            @media screen and (max-width: 728px) {
              .post-thumbnail {
                display: none;
              }
            }
          `}
        </style>
      </article>
    );
  }
}

export default PostExcerpt;

import Link from "next/link";
import HeadSite from "../components/HeadSite";
import Nav from "../components/Nav";
import PostList from "../components/PostList";
import PostNavigation from "../components/PostNavigation";
import Footer from "../components/Footer";
import posts from "./posts.json"; // WHERE YOUR POSTS ARE

export default class Index extends React.Component {
  static getInitialProps(ctx) {
    const currentPage = ctx.query.page || 1;
    const POSTS_BY_PAGE = 1; // CHANGE TO SET THE PAGES PER POST
    const data = posts.data.posts.slice(
      (currentPage - 1) * POSTS_BY_PAGE,
      currentPage * POSTS_BY_PAGE + (POSTS_BY_PAGE - 1)
    );
    return {
      currentPage: currentPage,
      totalPages: Math.round(posts.data.posts.length / POSTS_BY_PAGE),
      posts: data,
    };
  }
  render() {
    const { currentPage, totalPages, posts } = this.props;
    return (
      <React.Fragment>
        <HeadSite></HeadSite>
        <section className="container">
          <header>
            <Nav />
          </header>
          <section className="content">
            <PostList page={currentPage} posts={posts} />

            <PostNavigation currentPage={currentPage} totalPages={totalPages} />
          </section>
          <Footer />
        </section>
        <style jsx>
          {`
            .content {
              transition: 0.3s;
            }
            @media screen and (min-width: 768px) and (max-width: 1024px) {
              .content {
                margin-left: 75px;
              }
            }
            @media screen and (min-width: 1025px) and (max-width: 1280px) {
              .content {
                margin-left: 250px;
              }
            }
            @media screen and (min-width: 1281px) {
              .content {
                margin-left: 500px;
              }
            }
          `}
        </style>
        <script
          id="dsq-count-scr"
          src="//sebastian-gomez.disqus.com/count.js"
          async
        ></script>
      </React.Fragment>
    );
  }
}

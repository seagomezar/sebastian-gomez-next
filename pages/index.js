import Link from "next/link";
import HeadSite from "../components/HeadSite";
import Nav from "../components/Nav";
import PostList from "../components/PostList";
import PostNavigation from "../components/PostNavigation";
import Footer from "../components/Footer";
import posts from "./posts.json"; // WHERE YOUR POSTS ARE
import { initGA, logPageView } from "../utils/analytics";

export default class Index extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  static getInitialProps(ctx) {
    const currentPage = ctx.query.page || 1;
    const POSTS_BY_PAGE = 5; // CHANGE TO SET THE PAGES PER POST
    const filteredPosts = posts.data.posts.slice(
      (currentPage - 1) * POSTS_BY_PAGE,
      currentPage * POSTS_BY_PAGE
    );
    return {
      currentPage: currentPage,
      totalPages:
        posts.data.posts.length % POSTS_BY_PAGE === 0
          ? Math.round(posts.data.posts.length / POSTS_BY_PAGE)
          : Math.round(posts.data.posts.length / POSTS_BY_PAGE) + 1,
      posts: filteredPosts,
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

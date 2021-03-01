import Link from "next/link";
import HeadSite from "../../components/HeadSite";
import Nav from "../../components/Nav";
import PostList from "../../components/PostList";
import PostNavigation from "../../components/PostNavigation";
import Footer from "../../components/Footer";
import posts from "../posts.json"; // WHERE YOUR POSTS ARE
import { initGA, logPageView } from "../../utils/analytics";

export default class Page extends React.Component {
  
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
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
        <style jsx="true">
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
      </React.Fragment>
    );
  }
}

export async function getStaticProps({params}) {
    const currentPage = params.id || 1;
    const POSTS_BY_PAGE = 5; // CHANGE TO SET THE PAGES PER POST
    const dataPosts = posts.data.posts;
    const sortedPosts = dataPosts.sort(function(a, b) {
      return b.date - a.date;
    });
    const filteredPosts = sortedPosts.slice(
      (currentPage - 1) * POSTS_BY_PAGE,
      currentPage * POSTS_BY_PAGE
    );
    return {
      props: {
        currentPage: currentPage,
        totalPages:
        sortedPosts.length % POSTS_BY_PAGE === 0
          ? Math.round(sortedPosts.length / POSTS_BY_PAGE)
          : Math.round(sortedPosts.length / POSTS_BY_PAGE) + 1,
        posts: filteredPosts,
      } 
    };
}
export async function getStaticPaths() {
    const POSTS_BY_PAGE = 5; // CHANGE TO SET THE PAGES PER POST
    const dataPostsLength = posts.data.posts.length;
    const pages = Math.ceil(dataPostsLength/POSTS_BY_PAGE);
    const paths = [];
    for (let i = 1; i <= pages; i++) {
        paths.push({params: {id: String(i)}})
    }
  return {
    paths,
    fallback: false
  }
}

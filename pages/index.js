import Link from "next/link";
import HeadSite from "../components/HeadSite";
import Nav from "../components/Nav";
import PostList from "../components/PostList";
import PostNavigation from "../components/PostNavigation";

import Footer from "../components/Footer";

export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeadSite></HeadSite>
        <section className="container">
          <header>
            <Nav />
          </header>
          <section className="content">
            <PostList page={1} />
            <PostNavigation currentPage={1} totalPages={3} />
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
      </React.Fragment>
    );
  }
}

import Link from "next/link";
import HeadSite from "../components/HeadSite"
import Nav from "../components/Nav";
import PostList from "../components/PostList";
import PostNavigation from "../components/PostNavigation";
import Profile from "../components/Profile";

export default class Index extends React.Component {

  render() {
    return (
      <React.Fragment>
        <HeadSite></HeadSite>
        <section className="container">
          <header>
            <Profile/>
            <Nav/>
          </header>
          <section className=""> 
            <PostList page={1} />
            <PostNavigation currentPage={1} totalPages={3} />
          </section>  
        </section>
        
      </React.Fragment>
    );
  }
}

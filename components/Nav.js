import React from "react";
import Links from "./Links";
import TopBar from "./TopBar";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <TopBar {...this.props} />
        <Links {...this.props} />
        <style jsx="true">{`
          @media screen and (max-width: 1024px) {
            nav {
              margin-top: 4rem;
            }
          }
        `}</style>
      </nav>
    );
  }
}

export default Nav;

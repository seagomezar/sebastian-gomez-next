import React from "react";

class PostNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.menuOpened = false;
  }
  toggleMenu() {
    const links = document.querySelector(".links");
    const content = document.querySelector(".post");
    const topBar = document.querySelector(".top-bar");
    const footer = document.querySelector("footer");
    if (!this.menuOpened) {
      links.style["display"] = "flex";
      setTimeout(() => {
        links.style["width"] = "250px";
        content.style["transform"] = "translate3d(250px, 0, 0)";
        topBar.style["transform"] = "translate3d(250px, 0, 0)";
        footer.style["transform"] = "translate3d(250px, 0, 0)";
      }, 100);
      this.menuOpened = true;
    } else {
      links.style["width"] = "0";
      content.style["transform"] = "translate3d(0, 0, 0)";
      topBar.style["transform"] = "translate3d(0, 0, 0)";
      footer.style["transform"] = "translate3d(0, 0, 0)";
      setTimeout(() => {
        links.style["display"] = "none";
      }, 100);
      this.menuOpened = false;
    }
  }
  render() {
    return (
      <nav>
        <div className="top-bar">
          <i onClick={this.toggleMenu} className="icon ion-md-menu"></i>
          <h1>Sebastian Gomez</h1>
          <img src="/foto_personal.jpg" width="32px" height="32px" />
        </div>
        <ul className="links">
          <div className="menu-header">
            <img src="/foto_personal.jpg" />
            <h2>Sebastian Gomez</h2>
          </div>
          <li>
            <a>
              <i className="icon ion-md-home"></i> <span>Inicio</span>
            </a>
          </li>
          <li>
            <a>
              <i className="icon ion-md-bookmark"></i> <span>Categorías</span>
            </a>
          </li>
          <li>
            <a>
              <i className="icon ion-md-clipboard"></i> <span>Docencia</span>
            </a>
          </li>
          <li>
            <a>
              <i className="icon ion-md-contact"></i> <span>Sobre Mí</span>
            </a>
          </li>
          <li>
            <a>
              <i className="icon ion-md-search"></i> <span>Buscar</span>
            </a>
          </li>
          <li>
            <a>
              <i className="icon ion-md-mic"></i> <span>Charlas</span>
            </a>
          </li>
          <li>
            <a>
              <i className="icon ion-logo-rss"></i> <span>Rss</span>
            </a>
          </li>
          <li>
            <a>
              <i className="icon ion-logo-twitter"></i> <span>Twitter</span>
            </a>
          </li>
          <li>
            <a>
              <i className="icon ion-logo-facebook"></i> <span>Facebook</span>
            </a>
          </li>
          <li>
            <a>
              <i className="icon ion-logo-linkedin"></i> <span>LinkedIn</span>
            </a>
          </li>
        </ul>
        <style jsx>{`
          .top-bar {
            width: 100%;
            height: 55px;
            top: 0;
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #eef2f8;
            color: #88909a;
            background-color: white;
            z-index: 1;
            transition: 0.3s all; /* 0.5 second transition effect to slide in the sidenav */
          }
          .links {
            height: 100%; /* 100% Full-height */
            width: 0; /* 0 width - change this with JavaScript */
            position: fixed; /* Stay in place */
            z-index: 1; /* Stay on top */
            top: 0; /* Stay at the top */
            left: 0;
            background-image: linear-gradient(
              141deg,
              #9fb8ad 0%,
              #1fc8db 51%,
              #2cb5e8 75%
            ); /* Black*/
            overflow-x: hidden; /* Disable horizontal scroll */
            transition: 0.3s; /* 0.5 second transition effect to slide in the sidenav */
            justify-content: space-around;
            flex-wrap: wrap;
            flex-direction: column;
            color: #eeeeee;
            display: flex;
          }
          .links a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;
          }
          .links h2 {
            font-size: 1.5em;
          }
          .links .menu-header {
            text-align: center;
            margin-top: 1rem;
          }
          .links img {
            max-width: 100px;
          }
          .links li {
            list-style: none;
            padding-left: 1em;
          }
          img {
            border-radius: 50%;
            margin-right: 1em;
          }
          .links > li > a {
            color: white;
            font-size: 1rem;
          }
          .top-bar > .icon {
            font-size: 1.5em;
            color: #5d686f;
            padding-left: 1em;
          }
        `}</style>
      </nav>
    );
  }
}

export default PostNav;

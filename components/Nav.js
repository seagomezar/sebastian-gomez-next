import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
  }
  openMenu() {
    const links = document.querySelector(".links");
    links.style["display"] = "flex";
    setTimeout(() => {
      links.style["width"] = "60%";
    }, 100);
  }
  closeMenu() {
    const links = document.querySelector(".links");
    const container = document.querySelector(".container");
    links.style["display"] = "none";
    setTimeout(() => {
      links.style["width"] = "0";
    }, 100);
  }
  render() {
    return (
      <nav>
        <div className="top-bar">
          <i onClick={this.openMenu} className="icon ion-md-menu"></i>
          <h1>Sebastian Gomez</h1>
          <img src="foto_personal.jpg" width="32px" height="32px" />
        </div>
        <ul className="links">
          <div onClick={this.closeMenu}>Close</div>
          <li>
            <i className="icon ion-md-home"></i> Inicio
          </li>
          <li>
            <i className="icon ion-md-bookmark"></i> Categorías
          </li>
          <li>
            <i className="icon ion-md-clipboard"></i> Docencia
          </li>
          <li>
            <i className="icon ion-md-contact"></i> Sobre Mí
          </li>
          <li>
            <i className="icon ion-md-search"></i> Buscar
          </li>
          <li>
            <i className="icon ion-md-mic"></i> Charlas
          </li>
          <li>
            <i className="icon ion-logo-rss"></i> Rss
          </li>
          <li>
            <i className="icon ion-logo-twitter"></i> Twitter
          </li>
          <li>
            <i className="icon ion-logo-facebook"></i> Facebook
          </li>
          <li>
            <i className="icon ion-logo-linkedin"></i> LinkedIn
          </li>
        </ul>
        <style jsx>{`
          .top-bar {
            width: 100%;
            height: 3em;
            top: 0;
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-bottom: 1px solid #eef2f8;
            color: #88909a;
            background-color: white;
            z-index: 1;
            transition: 0.3s; /* 0.5 second transition effect to slide in the sidenav */
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
            padding-top: 60px; /* Place content 60px from the top */
            transition: 0.3s; /* 0.5 second transition effect to slide in the sidenav */
          }
          .links:hover {
            font-size: 22px;
          }
          .links a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;
          }
          img {
            border-radius: 50%;
          }
          .top-bar > .icon {
            font-size: 1.5em;
            color: #5d686f;
          }
          @media screen and (min-width: 728px) {
            .top-bar {
              display: none;
            }
            .links {
              display: flex;
            }
          }
          @media screen and (max-width: 728px) {
            nav {
              margin-top: 4rem;
            }
            .top-bar {
              display: flex;
            }
            .links {
              display: none;
            }
          }
        `}</style>
      </nav>
    );
  }
}

export default Nav;

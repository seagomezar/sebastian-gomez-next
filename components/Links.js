import React from "react";
import Profile from "../components/Profile";
import Link from "next/link";

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.baseStyles = `
          .menu-header > img {
            border-radius: 50%;
            margin-right: 1em;
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
            padding: 0 8px 0 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;
          }
          .links h2 {
            font-size: 1.2em;
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
          .links > li > a {
            color: white;
            font-size: 1rem;
          }
        `;
    this.mediaqueries = `@media screen and (min-width: 767px) {
            .links {
              display: flex;
            }
          }
          @media screen and (max-width: 767px) {
            .links {
              display: none;
            }
          }
          @media screen and (min-width: 768px) and (max-width: 1024px) {
            h2 {
              display: none;
            }
            span {
              display: none;
            }
            img {
              width: 40px;
              margin: 1em 1em;
            }
            .links {
              display: flex;
              width: 75px;
            }
            .links > li > a {
              text-align: center;
              color: white;
              padding: 0 0 1rem 0;
              font-size: 1.2rem;
            }
            .links li {
              padding-left: 0;
              padding-bottom: 1rem;
            }
          }
          @media screen and (min-width: 1025px) and (max-width: 1280px) {
            .links {
              display: flex;
              width: 250px;
              padding-top: 1rem;
            }
            .links h2 {
              font-size: 1.2em;
              margin: 1rem 0;
            }
            .links li {
              padding-left: 0;
              padding-bottom: 1rem;
            }
          }
          @media screen and (min-width: 1281px) {
            .links {
              display: flex;
              width: 500px;
              padding: 1rem 0;
            }
            .links li a {
              font-size: 1rem;
            }
          }`;
  }
  render() {
    return (
      <ul className="links">
        <div className="menu-header">
          <img src="/foto_personal.jpg" />
          <h2>Sebastian Gomez</h2>
        </div>

        <Profile {...this.props} />
        <li>
          <Link href={"/"}>
            <a>
              <i className="icon ion-md-home"></i> <span>Inicio</span>
            </a>
          </Link>
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
            <i className="icon ion-md-mic"></i> <span>Charlas</span>
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
        {this.props.onlyTopBar ? (
          <style jsx>{this.baseStyles}</style>
        ) : (
          <style jsx>{this.baseStyles + this.mediaqueries}</style>
        )}
      </ul>
    );
  }
}

export default Links;

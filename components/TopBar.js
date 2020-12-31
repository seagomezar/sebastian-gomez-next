import React from "react";
import Link from "next/link";
import Image from 'next/image';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.menuOpened = false;
    this.baseStyles = `
      .top-bar {
        width: 100%;
        height: 3em;
        top: 0;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eef2f8;
        color: #88909a;
        background-color: white;
        z-index: 1;
        transition: 0.3s;
      }
      .top-bar a {
        text-decoration: none;
        color: #88909a;
      }
      .top-bar img {
        border-radius: 50%;
        margin-right: 1em;
      }
      .top-bar > div {
        margin-right: 1em;
      }
      .top-bar > .icon {
        font-size: 1.5em;
        color: #5d686f;
        padding-left: 1em;
        cursor: pointer;
      }
    `;
    this.mediaqueries = `@media screen and (min-width: 767px) {
              .top-bar {
                display: none;
              }
            }
            @media screen and (max-width: 767px) {
              .top-bar {
                display: flex;
              }
            }`;
  }
  toggleMenu() {
    const links = document.querySelector(".links");
    const selector = this.props.onlyTopBar ? ".post" : ".content";
    const content = document.querySelector(selector);
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
      <div className="top-bar">
        <i onClick={this.toggleMenu} className="icon">
          ☰
        </i>
        <Link href={"/"}>
          <a>
            <h1>Sebastian Gomez</h1>
          </a>
        </Link>

        <Image
          src="/foto_personal.jpg"
          width={32}
          height={32}
          layout="fixed"
          alt="Sebastian Gomez"
        />
        {this.props.onlyTopBar ? (
          <style jsx="true" dangerouslySetInnerHTML={{__html: `${this.baseStyles}`}}></style>
        ) : (
          <style jsx="true" dangerouslySetInnerHTML={{__html: `${this.baseStyles + this.mediaqueries}`}}></style>
        )}
      </div>
    );
  }
}

export default TopBar;

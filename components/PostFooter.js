import React from "react";

class PostFooter extends React.Component {
  render() {
    return (
      <footer>
        <img src="/foto_personal.jpg" alt="Sebastian Gomez" width="32px" />
        <hgroup>
          <h5>Sebastian Gomez</h5>
          <h6>GDE Tecnologías web</h6>
        </hgroup>
        <div className="social-networks">
          <i className="icon ion-logo-facebook"></i>
          <i className="icon ion-logo-twitter"></i>
        </div>
        <style jsx>{`
          footer {
            display: flex;
            flex-direction: row;
            margin: 0 1rem;
            align-items: center;
          }
          img {
            border-radius: 50%;
          }
          hgroup {
            padding-left: 1rem;
          }
          .social-networks {
            padding-left: 1rem;
            font-size: 32px;
            display: flex;
          }
          .social-networks i {
            display: block;
            margin-left: 1rem;
          }
        `}</style>
      </footer>
    );
  }
}

export default PostFooter;

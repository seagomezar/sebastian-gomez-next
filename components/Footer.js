import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        © Copyright 2020 Sebastian Gomez
        <style jsx="true">{`
          footer {
            color: #5d686f;
            text-align: center;
            padding-top: 2rem;
            padding-bottom: 1rem;
          }
          @media screen and (min-width: 768px) and (max-width: 1024px) {
            footer {
              margin-left: 75px;
            }
          }
          @media screen and (min-width: 1025px) and (max-width: 1280px) {
            footer {
              margin-left: 250px;
            }
          }
          @media screen and (min-width: 1281px) {
            footer {
              margin-left: 500px;
            }
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;

import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        © Copyright 2020 Sebastian Gomez
        <style jsx>{`
          footer {
            color: #5d686f;
            text-align: center;
            padding-top: 2rem;
            padding-bottom: 1rem;
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;

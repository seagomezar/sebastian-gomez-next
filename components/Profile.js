import React from "react";
import Menu from "./Nav";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.baseStyles = `.profile > p {
              margin: 0 3rem;
              text-align: justify;
              font-size: 1.1rem;
              display: none;
            }`;
    this.mediaqueries = `@media screen and (min-width: 1280px) {
      .profile > p{
        display: block;
      }
    }`;
  }
  render() {
    return (
      <article className="profile">
        <p>
          Mi nombre es Sebastián Gómez, soy Google Developer Expert en
          Tecnologías Web, estudié ingeniería de sistemas e Informática y una
          maestría en Ingeniería de Sistemas de la Universidad Nacional de
          Colombia. Actualmente trabajo en Globant como Manager Técnico de
          Ingeniería Web con énfasis en aplicaciones híbridas y cross
          compiladas. Docente de cátedra y me gusta dar charlas por el mundo así
          que contactame si estas buscando speakers.
        </p>
        {this.props.onlyTopBar ? (
          <style jsx>{this.baseStyles}</style>
        ) : (
          <style jsx>{this.baseStyles + this.mediaqueries}</style>
        )}
      </article>
    );
  }
}

export default Profile;

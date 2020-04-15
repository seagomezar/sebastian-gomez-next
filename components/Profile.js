import React from "react";
import Menu from "./Nav";

const Profile = () => (
  <article className="profile">
    <p>
      Mi nombre es Sebastián Gómez, soy Google Developer Expert en Tecnologías
      Web, estudié ingeniería de sistemas e Informática y una maestría en
      Ingeniería de Sistemas de la Universidad Nacional de Colombia. Actualmente
      trabajo en Globant como Manager Técnico de Ingeniería Web con énfasis en
      aplicaciones híbridas y cross compiladas. Docente de cátedra y me gusta
      dar charlas por el mundo así que contactame si estas buscando speakers.
    </p>
    <style jsx>
      {`
        p {
          margin: 1rem 3rem;
          text-align: justify;
          font-size: 1.1rem;
        }
        @media screen and (max-width: 1280px) {
          .profile {
            display: none;
          }
        }
      `}
    </style>
  </article>
);

export default Profile;

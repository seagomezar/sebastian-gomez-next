import React from "react";
import Menu from "./Nav";

const Profile = () => (
  <article className="profile">
    <img
      src="/foto_personal.jpg"
      className=""
      alt="Sebastian Gomez"
      width="100px"
    />
    <p className="text-justify">
      Mi nombre es Sebastián Gómez, soy Google Developer Expert en Tecnologías
      Web, estudié ingeniería de sistemas e Informática y una maestría en
      Ingeniería de Sistemas de la Universidad Nacional de Colombia. Actualmente
      trabajo en Globant como Manager Técnico de Ingeniería Web con énfasis en
      aplicaciones híbridas y cross compiladas. Docente de cátedra y me gusta
      dar charlas por el mundo así que contactame si estas buscando speakers.
    </p>
    <style jsx>
      {`
        @media screen and (max-width: 1024px) {
          .profile {
            display: none;
          }
        }
      `}
    </style>
  </article>
);

export default Profile;

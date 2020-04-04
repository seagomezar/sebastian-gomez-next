import React from "react";
import PostExcerpt from "./PostExcerpt";

class PostList extends React.Component {
  render() {
    let posts = [
      {
        id: 1,
        tags: ["Animaciones", "CSS", "HTML", "Desarrollo Web"],
        thumbnailImage: "/foto_personal.jpg",
        categories: ["CSS"],
        date: "2018-01-24 12:13:17",
        title: "Todo sobre animaciones en css",
        slug: "todo-sobre-transiciones-en-css",
        excerpt: `Las transiciones hacen parte del conjunto de herramientas que poseemos como desarrolladores FrontEnd para mejorar la experiencia del usuario dentro de nuestra aplicación Web. Son útiles porque nos permiten animar el cambio de valores en las distintas propiedades de un elemento lo que puede hacerlo más llamativo al usuario e invitarlo a interactuar con él. En este post trataré de cubrir el extenso tema de transiciones con diversos ejemplos adaptados desde la especificación.`,
      },
    ];
    posts.push(posts[0]);
    posts.push(posts[0]);
    posts.push(posts[0]);
    return (
      <section>
        {posts.map((post, index) => (
          <PostExcerpt post={post} index={index} key={index} />
        ))}
      </section>
    );
  }
}

export default PostList;

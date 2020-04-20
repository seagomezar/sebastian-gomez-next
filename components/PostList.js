import React from "react";
import PostExcerpt from "./PostExcerpt";

class PostList extends React.Component {
  render() {
    const posts = this.props.posts;
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

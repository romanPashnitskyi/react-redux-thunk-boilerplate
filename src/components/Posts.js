import React from "react";

function Posts({ posts }) {
  const postItems = posts && posts.map(p => (
    <div key={p.id}>
      <h3>{p.title}</h3>
      <p>{p.body}</p>
    </div>
  ));

  return (
    <div>
      <h1>Posts</h1>
      {postItems}
    </div>
  )
}
export default Posts;

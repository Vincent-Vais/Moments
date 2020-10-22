import React from "react";
import useStyles from "./Posts.styles";

import Post from "../Post";

function Posts({ posts }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {posts.map((post, idx) => (
        <Post post={post} key={post.id || idx} gridClass={classes[idx % 6]} />
      ))}
    </div>
  );
}

export default Posts;

import React from "react";
import { Avatar } from "@material-ui/core";
import useStyles from "./Post.styles";

function Post({ post, gridClass }) {
  const { username, imageUrl, comment } = post;
  const classes = useStyles();
  return (
    <div className={`${classes.post} ${gridClass}`}>
      <div className={classes.post__header}>
        <Avatar
          className={classes.post__avatar}
          alt="VincentVais"
          src="/static/image1.png"
        />
        <h3 className={classes.post__user}>{username}</h3>
      </div>
      <img alt="white castle" className={classes.post__img} src={imageUrl} />
      <h4 className={classes.post__text}>
        <span className={classes.post__bold}>@{username}:</span> {comment}
      </h4>
    </div>
  );
}

export default Post;

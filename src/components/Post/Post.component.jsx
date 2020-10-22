import React, { useState } from "react";
import { Avatar } from "@material-ui/core";

const LIMIT = 15;

function Post({ classes, post, gridClass }) {
  const { username, imageUrl, comment } = post;

  const [slider, setSlider] = useState(false);

  const shortenComment = () =>
    comment.length > LIMIT ? `${comment.slice(0, LIMIT)}...` : comment;

  const handleSlider = (bool) => {
    if (comment.length < LIMIT) return;
    setSlider(bool);
  };

  return (
    <div
      className={`${classes.post} ${gridClass}`}
      onMouseEnter={() => handleSlider(true)}
      onMouseLeave={() => handleSlider(false)}
    >
      <div className={classes.post__header}>
        <Avatar
          className={classes.post__avatar}
          alt={`${username}`}
          src="/static/image1.png"
        />
        <h3 className={classes.post__user}>{username}</h3>
      </div>
      <img
        alt={`${comment.slice(0, 5)}`}
        className={classes.post__img}
        src={imageUrl}
      />
      {slider ? (
        <h4 className={classes.post__slider}>
          <span className={classes.post__bold}>@{username}:</span> {comment}
        </h4>
      ) : (
        <h4 className={classes.post__text}>
          <span className={classes.post__bold}>@{username}:</span>{" "}
          {shortenComment(comment)}
        </h4>
      )}
    </div>
  );
}

export default Post;

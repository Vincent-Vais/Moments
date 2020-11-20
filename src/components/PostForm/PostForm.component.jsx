import { Button, TextField, LinearProgress } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import React from "react";

const PostForm = ({
  classes,
  textInput,
  imageInput,
  progressInput,
  handleUpload,
}) => {
  const { text, handleText } = textInput;
  const { image, handleImage } = imageInput;
  const { progress } = progressInput;

  return (
    <div className={classes.upload}>
      <LinearProgress
        variant="determinate"
        value={progress}
        className={classes.progress}
        style={{ opacity: `${progress ? 1 : 0}` }}
      />
      <div>
        <TextField
          id="filled-basic"
          label="Caption"
          variant="filled"
          className={classes.caption}
          type="text"
          value={text}
          onChange={handleText}
        />
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt=""
            className={classes.image}
          />
        ) : null}
        <div className={classes.fileInputGroup}>
          <label htmlFor="file" className={classes.fileLabel}>
            <PublishIcon className={classes.icon} />
          </label>
          <input
            className={classes.fileInput}
            type="file"
            onChange={handleImage}
            id="file"
          />
        </div>
        <Button className={classes.button} onClick={handleUpload}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default PostForm;

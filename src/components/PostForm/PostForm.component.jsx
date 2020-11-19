import { Button, TextField } from "@material-ui/core";
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
  const { progress, handleProgress } = progressInput;

  return (
    <div className={classes.upload}>
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

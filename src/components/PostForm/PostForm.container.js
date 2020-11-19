import React, { useState } from "react";
import { db, storage } from "../../firebase";
import useStyles from "./PostForm.styles";

function Container({ Component, ...otherProps }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleText = (event) => setText(event.target.value);

  const handleImage = (event) => {
    const img = event.target.files[0];
    if (!img) return;
    setImage(img);
  };

  const handleProgress = () => console.log("handle progress");

  const handleUpload = () => console.log("handle upload");

  const classes = useStyles();
  return (
    <Component
      classes={classes}
      {...otherProps}
      textInput={{ text, handleText }}
      imageInput={{ image, handleImage }}
      progressInput={{ progress, handleProgress }}
      handleUpload={handleUpload}
    />
  );
}

export default (component) => (props) => (
  <Container Component={component} {...props} />
);

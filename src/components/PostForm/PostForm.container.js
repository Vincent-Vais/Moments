import React, { useState } from "react";
import { db, storage, firebase } from "../../firebase";
import { useSelector, shallowEqual } from "react-redux";
import { selectUser } from "../../store/selectors/user";
import useStyles from "./PostForm.styles";

function Container({ Component, ...otherProps }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const user = useSelector(selectUser, shallowEqual);

  const handleText = (event) => setText(event.target.value);

  const handleImage = (event) => {
    const img = event.target.files[0];
    if (!img) return;
    setImage(img);
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snap) => {
        const progress = Math.round(
          (snap.bytesTransferred / snap.totalBytes) * 100
        );
        setProgress(progress);
        console.log(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) =>
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              comment: text,
              imageUrl: url,
              username: user,
            })
          );
        setProgress(0);
        setText("");
        setImage(null);
      }
    );
  };

  const classes = useStyles();
  return (
    <Component
      classes={classes}
      {...otherProps}
      textInput={{ text, handleText }}
      imageInput={{ image, handleImage }}
      progressInput={{ progress, setProgress }}
      handleUpload={handleUpload}
    />
  );
}

export default (component) => (props) => (
  <Container Component={component} {...props} />
);

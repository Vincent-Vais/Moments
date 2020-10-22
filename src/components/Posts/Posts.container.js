import React, { useEffect } from "react";
import { db } from "../../firebase";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import actions from "../../store/actions";
import selectors from "../../store/selectors";

function Container({ Component, ...otherProps }) {
  const {
    posts: { updatePosts },
  } = actions;
  const {
    posts: { selectPosts },
  } = selectors;

  const dispatch = useDispatch();

  const posts = useSelector(selectPosts, shallowEqual);

  useEffect(() => {
    const postsOff = db
      .collection("posts")
      .onSnapshot((snap) =>
        dispatch(
          updatePosts(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        )
      );
    return () => {
      postsOff();
    };
  }, [dispatch, updatePosts]);

  return <Component posts={posts} {...otherProps} />;
}

export default (component) => (props) => (
  <Container Component={component} {...props} />
);

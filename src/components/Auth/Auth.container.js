import React, { useEffect, useState } from "react";
import useStyles from "./Auth.styles";
import { auth } from "../../firebase";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import actions from "../../store/actions";
import selectors from "../../store/selectors";

const Container = ({ Component, ...otherProps }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectors.user.selectUser, shallowEqual);
  const [username, setUsername] = useState("");

  const handleSubmit = (event, data, type, callback) => {
    event.preventDefault();
    callback();
    if (type === "signup") {
      const { email, password, username } = data;
      setUsername(username);
      auth
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => alert(err.message));
    } else {
      const { email, password } = data;
      auth
        .signInWithEmailAndPassword(email, password)
        .catch((err) => alert(err.message));
    }
  };

  const handleSignOut = () => {
    auth.signOut().catch((err) => alert(err.message));
  };

  useEffect(() => {
    const authOff = auth.onAuthStateChanged((authUser) => {
      let user;
      if (authUser) {
        if (!authUser.displayName) {
          authUser.updateProfile({ displayName: username });
          user = username;
        } else {
          user = authUser.displayName;
        }
      } else {
        user = null;
      }
      dispatch(actions.user.updateUser(user));
    });
    return () => {
      authOff();
    };
  }, [username, dispatch]);

  const classes = useStyles();
  return (
    <Component
      classes={classes}
      handleSubmit={handleSubmit}
      handleSignOut={handleSignOut}
      user={user}
      {...otherProps}
    />
  );
};

export default (component) => (props) => (
  <Container Component={component} {...props} />
);

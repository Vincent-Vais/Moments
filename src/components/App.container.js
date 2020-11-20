import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { selectUser } from "../store/selectors/user";
import useStyles from "./App.styles";

const Container = ({ Component, ...otherProps }) => {
  const classes = useStyles();
  const user = useSelector(selectUser, shallowEqual);
  return <Component classes={classes} user={user} {...otherProps} />;
};

export default (component) => (props) => (
  <Container Component={component} {...props} />
);

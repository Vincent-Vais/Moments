import React from "react";
import useStyles from "./Header.styles";

function Container({ Component, ...otherProps }) {
  const classes = useStyles();
  return <Component classes={classes} {...otherProps} />;
}

export default (component) => (props) => (
  <Container Component={component} {...props} />
);

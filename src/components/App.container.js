import React from "react";
import useStyles from "./App.styles";

const Container = ({ Component, ...otherProps }) => {
  const classes = useStyles();
  return <Component classes={classes} {...otherProps} />;
};

export default (component) => (props) => (
  <Container Component={component} {...props} />
);

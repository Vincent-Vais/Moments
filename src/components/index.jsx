import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Post from "./Post";
import useStyles from "./App.styles";
import { useSelector, shallowEqual } from "react-redux";

function App() {
  const [posts, setPosts] = useState(
    useSelector((state) => state.posts, shallowEqual)
  );

  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.app__header}>
        <h4 className={classes.app__headerName}>moments</h4>
        <img src={logo} alt="logo" className={classes.app__headerLogo} />
      </div>
      <div className={classes.app__container}>
        {posts.map((post, idx) => (
          <Post post={post} key={idx} gridClass={classes[idx]} />
        ))}
      </div>
    </div>
  );
}

export default App;

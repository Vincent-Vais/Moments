import React from "react";

import Header from "./Header";
import PostForm from "./PostForm";
import Posts from "./Posts";

function App({ classes, user }) {
  return (
    <div className={classes.app}>
      <Header />
      {user ? <PostForm /> : null}
      <Posts />
    </div>
  );
}

export default App;

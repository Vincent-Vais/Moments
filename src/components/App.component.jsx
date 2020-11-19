import React from "react";

import Header from "./Header";
import PostForm from "./PostForm";
import Posts from "./Posts";

function App({ classes }) {
  return (
    <div className={classes.app}>
      <Header />
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;

import React from "react";

import Header from "./Header";
import Posts from "./Posts";

function App({ classes }) {
  return (
    <div className={classes.app}>
      <Header />
      <Posts />
    </div>
  );
}

export default App;

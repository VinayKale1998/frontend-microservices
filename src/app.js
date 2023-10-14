import React from "react";

import PostCreate from "./components/postcreate";
import PostList from "./components/postList";
import styles from "./utils/styles";

function App() {
  return (
    <div className={`${styles.textnormal}`}>
      <PostCreate></PostCreate>
      <PostList />
    </div>
  );
}

export default App;

import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Cинхорнные посты</h1>
          <Posts />
        </div>
        <div className="col">
          <h1>Aсинхорнные посты</h1>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;

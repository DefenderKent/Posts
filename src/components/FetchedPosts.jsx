import React from "react";
import Post from "./Post";
import { fetchPosts } from "./../redux/postsReduser";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPost);
  const loading = useSelector((state) => state.app.loading);
  if (loading) {
    return <Loader />;
  }
  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Загрузить
      </button>
    );
  }
  return posts.map((post, index) => <Post post={post} key={index} />);
};

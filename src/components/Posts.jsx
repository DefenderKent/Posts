import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center">Постов нет</p>;
  }
  return syncPosts.map((post, index) => <Post post={post} key={post.id} />);
};

const mapStatetoProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};
export default connect(mapStatetoProps)(Posts);

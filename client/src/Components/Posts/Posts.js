import React from "react";
import { useSeletor } from "react";
import Post from "./Post/Post";
const Posts = () => {
  const posts = useSeletor((state) => state.posts);
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentsCreate from "./CommentsCreate";
import CommentsList from "./CommentsList";

function PostList() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/posts");
      setPosts((prev) => res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id} className=" w-[20%] mx-1 my-1 px-1 py-1 bg-blue-300 rounded-md  border border-1 border-blue-200 justify-between" >
        
        <div>
        <h1> {post.title}</h1>
        <CommentsCreate postId={post.id}></CommentsCreate>
        <CommentsList  postId={post.id} ></CommentsList>
        </div>
      </div>
    );
  });
  return <div>{renderedPosts}
 </div>;
}

export default PostList;

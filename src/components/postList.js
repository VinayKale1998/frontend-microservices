import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentsCreate from "./CommentsCreate";
import CommentsList from "./CommentsList";
import styles from "../utils/styles";

function PostList() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  // console.log(posts);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:4003/posts");
      // console.log(res.data, "fetched from query ");
      setPosts(() => res.data);
      // console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const renderedPosts = Object.values(posts).map((post) => {
    console.log("post printed", post.id);
    return (
      <div
        key={post.id}
        className=" w-[20%] mx-1 my-1 px-1 py-1 bg-blue-300 rounded-md  border border-1 border-blue-200 justify-between"
      >
        <div>
          <h1 className={`${styles.textHeading}`}> {post.title}</h1>
          <CommentsCreate id={post.id}></CommentsCreate>
          <CommentsList comments={post.comments}></CommentsList>
        </div>
      </div>
    );
  });
  return <div>{renderedPosts}</div>;
}

export default PostList;

import React, { useEffect, useState } from "react";
import axios from "axios";

function CommentsList({ postId }) {
  const [commentList, setComments] = useState([]);

  useEffect(() => {
    const comments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3002/posts/${postId}/comments`
        );

        console.log(res.body)
      } catch (err) {
        console.log(err.message);
      }
    };
    comments();
   
  }, []);


  return <div>demo</div>

//   return <div>{commentList.map((item) => (
//     <h1 key={item.commentId}>{item.content}</h1>
//   ))}</div>;
}

export default CommentsList;

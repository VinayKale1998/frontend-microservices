import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../utils/styles";

function CommentsList({ postId }) {
  const [commentList, setComments] = useState([]);

  useEffect(() => {
    const comments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3002/posts/${postId}/comments`
        );

        setComments(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    comments();
  }, []);

  return (
    <div>
      <h1 className={`${styles.textHeading}`}> Comments</h1>
      <ul>
        {CommentsList.length > 0 &&
          commentList.map((item) => (
            <li
              key={item.commentId}
              className={`${styles.pmnormal} bg-white rounded-md`}
            >
              {item.content}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CommentsList;

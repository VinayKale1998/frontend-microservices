import React, { useState } from "react";
import axios from "axios";
import styles from "../utils/styles";

function CommentsCreate({ id }) {
  const [comment, setComment] = useState("");

  const commentHandler = (event) => {
    setComment(event.target.value);
  };

  const submitHandler = async (event) => {
    console.log(comment);
    event.preventDefault();
    try {
      let response = await axios.post(
        `http://localhost:4002/posts/${id}/comments`,
        {
          content: comment,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="comment">Comment</label>

      <input
        className={`${styles.pmnormal} ${styles.textnormal} w-48`}
        maxLength={50}
        onChange={commentHandler}
      ></input>

      <button type="submit" className={`${styles.buttonStyle} bg-blue-600`}>
        Create
      </button>
    </form>
  );
}

export default CommentsCreate;

import React, { useState } from "react";
import styles from "../utils/styles";
import axios from "axios";

function PostCreate() {
  const [title, setTitle] = useState("");
  const [response, setResponse] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (title.length < 5 && title.length > 20)
      window.alert("Please enter a valid title between 5 and 20 chars");

    try {
      let res = await axios.post("http://localhost:3001/posts", {
        title,
      });
      setResponse(res.data);

      setTitle("");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={`form-group flex flex-col space-y-3`}>
          <label
            htmlFor="Title"
            className={`${styles.pmnormal} ${styles.textnormal}`}
          >
            Title
          </label>
          <input
            name="Title"
            className={`"outline-none border border-1 border-black rounded-sm w-44 ${styles.pmnormal} `}
            type="text"
            onChange={titleHandler}
            maxLength={30}
            minLength={5}
            value={title}
          ></input>
        </div>

        <button
          className={`bg-red-300 w-40 rounded-md disabled:bg-opacity-[0.5] ${styles.pmnormal} `}
          disabled={!(title.length > 5 && title.length < 20)}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default PostCreate;

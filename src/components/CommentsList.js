import styles from "../utils/styles";

function CommentsList({ comments }) {
  console.log(comments);

  return (
    <div>
      <h1 className={`${styles.textHeading}`}> Comments</h1>
      <ul>
        {comments.length > 0 &&
          comments.map((comment) => {
            let content;

            if (comment.status === "approved") {
              content = comment.content;
            }
            if (comment.status === "pending") {
              content = "This comment is awaiting moderation";
            }

            if (comment.status === "rejected") {
              content = "This comment has been rejected";
            }
            return (
              <li
                key={comment.id}
                className={`${styles.pmnormal} bg-white rounded-md text-black`}
              >
                {content}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default CommentsList;

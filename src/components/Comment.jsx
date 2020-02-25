import React from "react";
import StoryMeta from "./StoryMeta";

function Comment({ comment }) {
  const classes = {
    cards: `p-6
      bg-bgPrimary2
      border-b-2
      border-bgPrimary1
      rounded`,
    comment: `mt-2
      text-base
      text-primary1`
  };

  return (
    <div className={classes.cards}>
      <StoryMeta by={comment.by} time={comment.time} id={comment.id} />
      <p
        className={classes.comment}
        dangerouslySetInnerHTML={{ __html: comment.text }}
      />
    </div>
  );
}

export default Comment;

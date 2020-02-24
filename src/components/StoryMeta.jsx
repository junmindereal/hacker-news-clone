import React from "react";
import TimeAgo from "react-timeago";
import { formatDate } from "../utils/helpers";

function StoryMeta({ by, time, descendants }) {
  const classes = {
    cardMeta: `text-sm
      text-primary2`,
    metaLink: `font-semibold
      hover:text-secondary2`
  };

  return (
    <div className={classes.cardMeta}>
      <span>
        by <span className={classes.metaLink}>{by}</span>{" "}
      </span>
      <TimeAgo date={formatDate(time)} />
      {descendants ? (
        <span>
          {" "}
          with{" "}
          <span className={classes.metaLink}>
            {descendants} {descendants === 1 ? "comment" : "comments"}
          </span>
        </span>
      ) : null}
    </div>
  );
}

export default StoryMeta;

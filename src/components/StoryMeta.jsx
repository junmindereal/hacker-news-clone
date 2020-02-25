import React from "react";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import { formatDate } from "../utils/helpers";

function StoryMeta({ by, id, time, descendants }) {
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
          <Link to={`/story?id=${id}`} className={classes.metaLink}>
            {descendants} {descendants === 1 ? "comment" : "comments"}
          </Link>
        </span>
      ) : null}
    </div>
  );
}

export default StoryMeta;

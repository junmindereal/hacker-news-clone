import React from "react";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import { formatDate } from "../utils/helpers";

function StoryMeta({ by, id, time, descendants }) {
  const classes = {
    cardMeta: `text-xs
      text-primary2
      md:text-sm`,
    metaLink: `font-semibold
      hover:text-secondary2`
  };

  return (
    <div className={classes.cardMeta}>
      <span>
        by{" "}
        <Link to={`/user?id=${by}`} className={classes.metaLink}>
          {by}
        </Link>{" "}
      </span>
      <TimeAgo date={formatDate(time)} />
      {descendants > 0 ? (
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

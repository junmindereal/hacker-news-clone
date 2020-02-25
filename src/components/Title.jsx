import React from "react";
import { Link } from "react-router-dom";

function Title({ url, id, title, style }) {
  const classes = {
    cardTitle: `text-lg
      text-primary1
      font-semibold
      hover:text-secondary1
      ${style}`
  };

  return url ? (
    <a
      className={classes.cardTitle}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      {title}
    </a>
  ) : (
    <Link className={classes.cardTitle} to={`/post?id=${id}`}>
      {title}
    </Link>
  );
}

export default Title;

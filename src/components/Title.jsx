import React from "react";

function Title({ url, title }) {
  const classes = {
    cardTitle: `text-lg
      text-primary1
      font-semibold
      hover:text-secondary1`
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.cardTitle}
    >
      {title}
    </a>
  );
}

export default Title;

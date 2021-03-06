import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Title({ url, id, title, style }) {
  const classes = {
    cardTitle: `
      text-base
      text-primary1
      font-semibold
      leading-tight
      hover:text-secondary1
      md:text-lg
      md:leading-normal
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

Title.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.string
};

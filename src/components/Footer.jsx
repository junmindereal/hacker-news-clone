import React from "react";

function Footer(props) {
  const classes = {
    container: `flex
      flex-row
      justify-center
      pb-4
      mt-6
      md:mt-16
      md:pb-6`,
    colLeft: `mr-2`,
    text: `text-xs
      text-primary2
      md:text-sm`,
    link: `font-semibold
      hover:text-secondary2`
  };

  const githubUrl = "https://github.com/junmindereal/";
  const repoUrl = "https://github.com/junmindereal/hacker-news-clone";

  return (
    <div className={`${classes.container} ${classes.text}`}>
      <div className={classes.colLeft}>
        <span>Made by</span>{" "}
        <a
          className={classes.link}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Junmin De Real
        </a>
      </div>
      <div>
        <span>View on</span>{" "}
        <a
          className={classes.link}
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Footer;

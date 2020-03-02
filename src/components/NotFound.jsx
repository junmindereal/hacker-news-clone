import React from "react";

const NotFound = () => {
  const classes = {
    container: `mt-24
      text-center`,
    heading: `text-2xl
      text-primary1
      font-semibold`
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Error 404: Page not found.</h1>
    </div>
  );
};

export default NotFound;

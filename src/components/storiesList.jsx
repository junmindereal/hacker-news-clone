import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import StoryMeta from "./StoryMeta";

function StoriesList({ stories }) {
  const classes = {
    card: `p-3
      bg-bgPrimary2
      border-b-2
      border-bgPrimary1
      rounded
      md:p-6`,
    message: `text-lg
    text-primary1
    font-semibold
    md:text-2xl`
  };

  if (stories === 0) {
    return <p className={classes.message}>This user hasn't posted yet</p>;
  }

  return (
    <ul>
      {stories.map(story => (
        <li key={story.id} className={classes.card}>
          <Title url={story.url} id={story.id} title={story.title} />
          <StoryMeta
            by={story.by}
            id={story.id}
            time={story.time}
            descendants={story.descendants}
          />
        </li>
      ))}
    </ul>
  );
}

export default StoriesList;

StoriesList.propTypes = {
  stories: PropTypes.array.isRequired
};

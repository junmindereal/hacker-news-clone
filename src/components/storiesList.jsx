import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import StoryMeta from "./StoryMeta";

function StoriesList({ stories }) {
  console.log(stories);
  const classes = {
    cardsContainer: `mt-12`,
    card: `p-6
      bg-bgPrimary2
      border-b-2
      border-bgPrimary1
      rounded`,
    message: `text-2xl
    text-primary1
    font-semibold`
  };

  if (stories === 0) {
    return <p className={classes.message}>This user hasn't posted yet</p>;
  }

  return (
    <ul className={classes.cardsContainer}>
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

import React, { Component } from "react";
import TimeAgo from "react-timeago";
import { getStoryIds, getStories } from "../services/storyService";
import { formatDate } from "../utils/helpers";

class StoriesList extends Component {
  state = {
    stories: []
  };

  async componentDidMount() {
    const { data: ids } = await getStoryIds("top");
    let stories = await getStories(ids);
    stories = stories.map(s => s.data);
    this.setState({ stories });
    console.log(this.state);
  }

  render() {
    const { stories } = this.state;
    const classes = {
      cardsContainer: `mt-12`,
      card: `p-6
        bg-bgPrimary2
        border-b-2
        border-bgPrimary1
        rounded`,
      cardTitle: `text-lg
        text-primary1
        font-semibold
        hover:text-secondary1`,
      cardMeta: `text-sm
        text-primary2`,
      metaLink: `font-semibold
        hover:text-secondary2`
    };

    return (
      <ul className={classes.cardsContainer}>
        {stories.map(story => (
          <li key={story.id} className={classes.card}>
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.cardTitle}
            >
              {story.title}
            </a>
            <div className={classes.cardMeta}>
              <span>
                by <span className={classes.metaLink}>{story.by}</span>{" "}
              </span>
              <TimeAgo date={formatDate(story.time)} />
              <span>
                {" "}
                with{" "}
                <span className={classes.metaLink}>
                  {story.descendants} comments
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default StoriesList;

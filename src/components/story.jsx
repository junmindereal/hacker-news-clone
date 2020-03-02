import React, { Component, Fragment } from "react";
import queryString from "query-string";
import { BubbleSpinLoader } from "react-css-loaders2";
import Title from "./Title";
import StoryMeta from "./StoryMeta";
import Comment from "./Comment";
import { getItem, getComments } from "../services/storyService";

class Story extends Component {
  state = {
    story: null,
    comments: null,
    loadingStory: true,
    loadingComments: true
  };

  async componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);

    const { data: story } = await getItem(id);
    this.setState({ story, loadingStory: false });

    let comments = await getComments(this.state.story.kids || []);
    comments = comments.map(c => c.data);
    this.setState({ comments, loadingComments: false });
  }

  render() {
    const classes = {
      story: `mt-6
        mb-4
        px-3
        md:mt-12
        md:mb-8
        md:px-0`,
      storyName: `text-xl
        md:text-2xl`,
      commentsContainer: `px-3
        md:px-0`
    };

    const { story, loadingStory, comments, loadingComments } = this.state;

    return (
      <Fragment>
        {loadingStory ? (
          <BubbleSpinLoader color={"#423D33"} size={8} />
        ) : (
          <div className={classes.story}>
            <h1>
              <Title
                style={classes.storyName}
                url={story.url}
                id={story.id}
                title={story.title}
              />
            </h1>
            <StoryMeta
              by={story.by}
              id={story.id}
              time={story.time}
              descendants={story.descendants}
            />
          </div>
        )}
        {loadingComments ? (
          <BubbleSpinLoader color={"#423D33"} size={8} />
        ) : (
          <div className={classes.commentsContainer}>
            {comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

export default Story;

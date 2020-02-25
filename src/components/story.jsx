import React, { Component, Fragment } from "react";
import queryString from "query-string";
import { BubbleSpinLoader } from "react-css-loaders2";
import Title from "./Title";
import { getItem } from "../services/storyService";

class Story extends Component {
  state = {
    story: null,
    comments: null,
    loadingPost: true,
    loadingComments: true
  };

  async componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    const { data: story } = await getItem(id);
    this.setState({ story, loadingPost: false });
    console.log(this.state);
  }

  render() {
    const classes = {
      story: `mt-12`,
      storyName: `text-2xl`
    };

    const { story, loadingPost } = this.state;

    return (
      <Fragment>
        {loadingPost ? (
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
            <p className={classes.storyMeta}>Joined</p>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Story;

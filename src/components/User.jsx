import React, { Component, Fragment } from "react";
import BubbleSpinLoader from "react-css-loaders2/dist/bubble-spin/BubbleSpinLoader";
import queryString from "query-string";
import TimeAgo from "react-timeago";
import StoriesList from "./StoriesList";
import { getUser, getStories } from "../services/storyService";
import { formatDate } from "../utils/helpers";

class User extends Component {
  state = {
    user: null,
    stories: null,
    loadingUser: true,
    loadingStories: true
  };

  async componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    const { data: user } = await getUser(id);
    this.setState({ user, loadingUser: false });

    const ids = this.state.user.submitted;
    let stories = await getStories(ids);
    stories = stories.map(s => s.data);
    stories = this.onlyStories(stories);
    this.setState({ stories, loadingStories: false });
  }

  onlyStories(stories) {
    return stories.filter(({ type }) => type === "story");
  }

  render() {
    const classes = {
      user: `mt-6
        px-3
        md:px-0
        md:mt-12`,
      userName: `text-xl
        text-primary1
        font-semibold
        md:text-2xl`,
      userMeta: `text-xs
        text-primary2
        md:text-sm`,
      strong: `font-semibold`,
      title: `mb-3
        text-xl
        text-primary1
        font-semibold
        md:mb-6
        md:text-2xl`,
      storiesContainer: `mt-6
        px-3
        md:mt-12
        md:px-0`
    };

    const { user, loadingUser, stories, loadingStories } = this.state;

    return (
      <Fragment>
        {loadingUser ? (
          <BubbleSpinLoader color={"#423D33"} size={8} />
        ) : (
          <div className={classes.user}>
            <h1 className={classes.userName}>{user.id}</h1>
            <p className={classes.userMeta}>
              joined <TimeAgo date={formatDate(user.created)} /> | has{" "}
              <span className={classes.strong}>{user.karma}</span> Karma
            </p>
          </div>
        )}
        {loadingStories ? (
          <BubbleSpinLoader color={"#423D33"} size={8} />
        ) : (
          <div className={classes.storiesContainer}>
            <h2 className={classes.title}>Posts</h2>
            <StoriesList stories={stories} />
          </div>
        )}
      </Fragment>
    );
  }
}

export default User;

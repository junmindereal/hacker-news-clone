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
      user: `mt-12`,
      userName: `text-2xl
        text-primary1
        font-semibold`,
      userMeta: `text-sm
        text-primary2`,
      strong: `font-semibold`,
      title: `mt-12
        text-2xl
        text-primary1
        font-semibold`
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
          <Fragment>
            <h2 className={classes.title}>Posts</h2>
            <StoriesList stories={stories} />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default User;

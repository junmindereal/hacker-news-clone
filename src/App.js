import React, { Component } from "react";
import Navbar from "./components/navbar";
import { getStoryIds, getStories } from "./services/storyService";

class App extends Component {
  state = {
    ids: [],
    stories: []
  };
  async componentDidMount() {
    const { data: ids } = await getStoryIds("top");
    let stories = await getStories(ids);
    stories = stories.map(s => s.data);
    this.setState({ ids, stories });
  }

  render() {
    const classes = {
      main: `bg-bgPrimary1`,
      container: `max-w-screen-md
        pt-10
        mx-auto`
    };

    return (
      <div className={classes.main}>
        <div className={classes.container}>
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;

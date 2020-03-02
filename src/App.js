import React, { Component } from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Story from "./components/Story";
import User from "./components/User";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    theme: "light"
  };

  handleTheme = t => {
    const theme = t === "light" ? "dark" : "light";
    this.setState({ theme });
  };

  render() {
    const classes = {
      main: `
        h-full
        min-h-screen
        min-h-full
        bg-bgPrimary1`,
      container: `max-w-screen-md
        pt-4
        mx-auto
        md:pt-10`
    };

    const { theme } = this.state;

    return (
      <div className={`${classes.main} ${this.state.theme}`}>
        <div className={classes.container}>
          <Navbar theme={theme} onToggle={() => this.handleTheme(theme)} />
          <HashRouter basename="/">
            <Switch>
              <Route
                path="/hacker-news-clone/top"
                render={() => <Stories type="top" />}
              />
              <Route
                path="/hacker-news-clone/new"
                render={() => <Stories type="new" />}
              />
              <Route path="/hacker-news-clone/user" component={User} />
              <Route path="/hacker-news-clone/story" component={Story} />
              <Route path="/hacker-news-clone/not-found" component={NotFound} />
              <Redirect from="/hacker-news-clone/" exact to="/top" />
              <Redirect to="/hacker-news-clone/not-found" />
            </Switch>
          </HashRouter>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

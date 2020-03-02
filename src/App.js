import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Story from "./components/Story";
import User from "./components/User";
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
        pt-10
        mx-auto`
    };

    const { theme } = this.state;

    return (
      <div className={`${classes.main} ${this.state.theme}`}>
        <div className={classes.container}>
          <Navbar theme={theme} onToggle={() => this.handleTheme(theme)} />
          <Switch>
            <Route path="/top" render={() => <Stories type="top" />} />
            <Route path="/new" render={() => <Stories type="new" />} />
            <Route path="/user" component={User} />
            <Route path="/story" component={Story} />
            <Redirect from="/" exact to="/top" />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import StoriesList from "./components/StoriesList";
import Story from "./components/Story";
import Footer from "./components/Footer";

class App extends Component {
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

    return (
      <div className={classes.main}>
        <div className={classes.container}>
          <Navbar />
          <Switch>
            <Route path="/top" render={() => <StoriesList type="top" />} />
            <Route path="/new" render={() => <StoriesList type="new" />} />
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

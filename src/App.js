import React, { Component } from "react";
import Navbar from "./components/navbar";
import StoriesList from "./components/storiesList";

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
          <StoriesList />
        </div>
      </div>
    );
  }
}

export default App;

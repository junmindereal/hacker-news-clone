import React, { Component } from "react";
import Navbar from "./components/navbar";

class App extends Component {
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

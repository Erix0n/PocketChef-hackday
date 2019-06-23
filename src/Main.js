import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import AllMeals from "./AllMeals";
import Random from "./Random";
import NavBar from "./NavBar.js";
import "./index.css";
import "normalize.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <NavBar />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/allmeals" component={AllMeals} />
          <Route path="/random" component={Random} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;

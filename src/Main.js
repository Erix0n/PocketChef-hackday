import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import AllMeals from "./AllMeals";
import Random from "./Random";
import "./index.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="header-bar">
          <h1>DineBot X2000</h1>
          <div className="header-items-container">
            <ul className="header">
              <li className="header-nav">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="header-nav">
                <NavLink to="/allmeals">All Meals</NavLink>
              </li>

              <li className="header-nav">
                <NavLink to="/random">Random Meal</NavLink>
              </li>
            </ul>
          </div>
        </div>
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

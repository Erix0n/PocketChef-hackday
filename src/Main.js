import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import AllMeals from "./AllMeals";
import iAmPeasant from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>DineBot X2000</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/AllMeals">All Meals</NavLink>
            </li>

            <li>
              <NavLink to="/random">iAmPeasant</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/AllMeals" component={AllMeals} />
            <Route path="/contact" component={iAmPeasant} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;

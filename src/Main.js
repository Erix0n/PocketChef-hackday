import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import AddRecipe from "./AddRecipes/AddRecipe";
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
          <Route exact path="/" component={AllMeals} />
          <Route path="/addrecipe" component={AddRecipe} />
          <Route path="/random" component={Random} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;

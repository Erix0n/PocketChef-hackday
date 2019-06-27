import React, { Component } from "react";
import Meal from "./Meal";
import {
  ContentWrapper,
  MobileFilterWrapper,
  VegoButton,
  MeatButton,
  MealContainer,
  SaladButton,
  PastaButton,
  RemoveFilterButton,
  SoupButton,
} from "./styles";

class AllMeals extends Component {
  state = {
    meals: [],
    filteredMeals: []
  };

  componentDidMount() {
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => this.setState({ meals: data.meals })
      );
  }

  renderMeals = () => {
    if (this.state.filteredMeals.length > 0) {
      return this.state.filteredMeals.map(meal => {
        return <Meal meal={meal} key={meal.id} />;
      });
    } else {
      return this.state.meals.map((meal) => {
        return <Meal meal={meal} key={meal.id} />;
      });
    }
  };

  filterMeals = term => {
    const matchingMeals = this.state.meals.filter(meal => {
      return meal.tags.includes(term);
    });

    this.setState({ filteredMeals: matchingMeals });
  };

  clearFilter = () => {
    this.setState({ filteredMeals: [] });
  };

  render() {
    return (
      <ContentWrapper>
        <MobileFilterWrapper>
          <VegoButton onClick={() => this.filterMeals("vego")}>
            <span role="img" aria-label="vego">🍄</span>
          </VegoButton>
          <MeatButton onClick={() => this.filterMeals("meat")}>
            <span role="img" aria-label="meat">🥩</span>
          </MeatButton>
          <SaladButton onClick={() => this.filterMeals("salad")}>
            <span role="img" aria-label="salad">🥗</span>
          </SaladButton>
          <PastaButton onClick={() => this.filterMeals("pasta")}>
            <span role="img" aria-label="pasta">🍝</span>
          </PastaButton>
          <SoupButton onClick={() => this.filterMeals("soup")}>
            <span role="img" aria-label="soup">🥣</span>
          </SoupButton>
          <RemoveFilterButton onClick={this.clearFilter}>
            <span role="img" aria-label="remove-filter">❌</span>
          </RemoveFilterButton>
        </MobileFilterWrapper>
        <MealContainer>{this.renderMeals()}</MealContainer>
      </ContentWrapper>
    );
  }
}

export default AllMeals;

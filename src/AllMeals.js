import React, { Component } from "react";
import Meal from "./Meal";
import {
  ContentWrapper,
  Label,
  MobileFilterWrapper,
  MealContainer,
  FilterButton
} from "./styles";

class AllMeals extends Component {
  state = {
    meals: [],
    filteredMeals: [],
    activeFilters: []
  };

  componentDidMount() {
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => {
        console.log('Fetch request');
        this.setState({ meals: data.meals, filteredMeals: data.meals })
      });
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

  filterMeals = () => {
    const matchingMeals = [];

    this.state.meals.forEach(meal => {
      let matches = true;

      this.state.activeFilters.forEach(filter => {
        if (!meal.tags.includes(filter)) {
          matches = false;
        }
      })

      if (matches) {
        matchingMeals.push(meal)
      }
    })

    this.setState({ filteredMeals: matchingMeals });
  };

  toggleFilter = filter => {
    const activeFilters = this.state.activeFilters;

    if (activeFilters.includes(filter)) {
      activeFilters.pop(filter);
    } else {
      activeFilters.push(filter);
    }

    this.setState({ activeFilters });

    this.filterMeals();
  }


  clearFilter = () => {
    this.setState({ activeFilters: [] }, this.filterMeals);

  };

  render() {
    return (
      <ContentWrapper>
        <Label>List of all meals:</Label>
        <MobileFilterWrapper>
          <FilterButton active={this.state.activeFilters.includes('15min')} borderColor="#187cbf" onClick={() => this.toggleFilter("15min")}>
            <span role="img" aria-label="15min">1️5️</span>
          </FilterButton>
          <FilterButton active={this.state.activeFilters.includes('45min')} borderColor="#187cbf" onClick={() => this.toggleFilter("45min")}>
            <span role="img" aria-label="45min">4️5️</span>
          </FilterButton>
          <FilterButton active={this.state.activeFilters.includes('60min')} borderColor="#187cbf" onClick={() => this.toggleFilter("60min")}>
            <span role="img" aria-label="60min">6️0️</span>
          </FilterButton>
          <FilterButton active={this.state.activeFilters.includes('vego')} borderColor="#91581b" onClick={() => this.toggleFilter("vego")}>
            <span role="img" aria-label="vego">🍄</span>
          </FilterButton>
          <FilterButton active={this.state.activeFilters.includes('meat')} borderColor="#b70e0e" onClick={() => this.toggleFilter("meat")}>
            <span role="img" aria-label="meat">🥩</span>
          </FilterButton>
          <FilterButton active={this.state.activeFilters.includes('salad')} borderColor="#06d61e" onClick={() => this.toggleFilter("salad")}>
            <span role="img" aria-label="salad">🥗</span>
          </FilterButton>
          <FilterButton active={this.state.activeFilters.includes('pasta')} borderColor="#e8d71e" onClick={() => this.toggleFilter("pasta")}>
            <span role="img" aria-label="pasta">🍝</span>
          </FilterButton>
          <FilterButton active={this.state.activeFilters.includes('soup')} borderColor="#bd6b00" onClick={() => this.toggleFilter("soup")}>
            <span role="img" aria-label="soup">🥣</span>
          </FilterButton>
          <FilterButton active={this.state.activeFilters.includes('rice')} borderColor="#cdf26f" onClick={() => this.toggleFilter("rice")}>
            <span role="img" aria-label="rice">🍚</span>
          </FilterButton>
          <FilterButton active={this.state.activeFilters.includes('fish')} borderColor="#00a5cf" onClick={() => this.toggleFilter("fish")}>
            <span role="img" aria-label="fish">🐟</span>
          </FilterButton>
          <FilterButton active={this.state.activeFilters.includes('potato')} borderColor="#f2b200" onClick={() => this.toggleFilter("potato")}>
            <span role="img" aria-label="potato">🥔</span>
          </FilterButton>
          <FilterButton active={this.state.activeFilters.includes('remove-filter')} borderColor="#187cbf" onClick={this.clearFilter}>
            <span role="img" aria-label="remove-filter">❌</span>
          </FilterButton>
        </MobileFilterWrapper>
        <MealContainer>{this.state.filteredMeals.length > 0 && this.renderMeals()}</MealContainer>
      </ContentWrapper>
    );
  }
}

export default AllMeals;

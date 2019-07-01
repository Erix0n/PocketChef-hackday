import React, { Component } from "react";
import { Label, Text, ContentWrapper, MobileFilterWrapper, MealContainer, MealWrapper, MealImage, MealInfo, StyledButton } from "./styles";

class Random extends Component {
  state = {
    randomMeal: []
  };

  componentDidMount() {
    fetch('http://localhost:8000/random')
      .then(response => response.json())
      .then(data => {
        console.log('Fetch request');
        this.setState({ randomMeal: data })
        console.log(this.state.randomMeal.tags);
      });
  }
  renderTags = () => {
    if (this.state.randomMeal.tags) {
      return (
        <span>
          {
            this.state.randomMeal.tags.map(tag => {
              return tag + " ";
            })
          }
        </span>
      );
    }
  };

  goToRecipe = () => {

    window.location.href = this.state.randomMeal.recipe;
  };


  renderMeals = () => {
    return (
      <MealWrapper>
        <MealImage img={this.state.randomMeal.img} />
        <MealInfo>
          <Text>{this.state.randomMeal.name}</Text>
          <Text>Cooking time: {this.state.randomMeal.cooktime}</Text>
          <Text>Tags: {this.renderTags()}</Text>
          <br></br>
          <StyledButton onClick={() => this.goToRecipe()}>Show recipe</StyledButton>
        </MealInfo>
      </MealWrapper>
    )
  }

  render() {
    return (
      <ContentWrapper>
        <MobileFilterWrapper>
          <Label>Today you should eat:</Label>
          <MealContainer>{this.renderMeals()}</MealContainer>
        </MobileFilterWrapper>
      </ContentWrapper>
    );
  }
}


export default Random;

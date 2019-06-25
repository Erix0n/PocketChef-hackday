import React from "react";

import { MealWrapper, MealImage, MealInfo, StyledButton } from "./styles";

export default props => {
  const renderTags = () => {
    return (
      <span>
        {props.meal.tags.map(tag => {
          return tag + " ";
        })}
      </span>
    );
  };

  const goToRecipe = () => {
    window.location.href = props.meal.recipe;
  };

  // console.log(props);

  return (
    <MealWrapper>
      <MealImage img={props.meal.img} />
      <MealInfo>
        <span>{props.meal.name}</span>
        {renderTags()}
        <StyledButton onClick={() => goToRecipe()}>Show recipe</StyledButton>
      </MealInfo>
    </MealWrapper>
  );
};

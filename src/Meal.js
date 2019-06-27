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

  console.log(props);

  return (
    <MealWrapper>
      <MealImage img={props.meal.img} />
      <MealInfo>
        {/* Add styled h3 or h4 tag instead of span */}
        <span>{props.meal.name}</span>
        <span>Cooking time: {props.meal.cooktime}</span>
        <span>Tags: {renderTags()}</span>
        <StyledButton onClick={() => goToRecipe()}>Show recipe</StyledButton>
      </MealInfo>
    </MealWrapper>
  );
};

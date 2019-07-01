import React from "react";

import { Text, MealWrapper, MealImage, MealInfo, StyledButton } from "./styles";

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

    return (
        <MealWrapper>
            <MealImage img={props.meal.img} />
            <MealInfo>
                <Text>{props.meal.name}</Text>
                <Text>Cooking time: {props.meal.cooktime}</Text>
                <Text>Tags: {renderTags()}</Text>
                <br></br>
                <StyledButton onClick={() => goToRecipe()}>Show recipe</StyledButton>
            </MealInfo>
        </MealWrapper>
    );
};

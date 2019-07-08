import React from "react";

import { Text, MealWrapper, MealImage, MealInfo, StyledButton } from "../styles";

export default props => {

    const goToRecipe = () => {
        window.location.href = props.meal.url;
    };

    return (
        <MealWrapper>
            <MealImage img={props.meal.imgUrl} />
            <MealInfo>
                <Text>{props.meal.title}</Text>
                <Text>Cooking time: {props.meal.cookTime}</Text>
                <br></br>
                <StyledButton onClick={() => goToRecipe()}>Show recipe</StyledButton>
            </MealInfo>
        </MealWrapper>
    );
};

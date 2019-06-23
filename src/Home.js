import React, { Component } from "react";
import Meal from "./Meal";
import {
  ContentWrapper,
  StyledButton,
  SecondaryButton,
  MealContainer
} from "./styles";

class Home extends Component {
  state = {
    meals: [],
    filteredMeals: []
  };

  componentDidMount() {
    window.setTimeout(
      () =>
        this.setState({
          meals: [
            {
              id: 1,
              tags: ["vego", "green"],
              name: "Vegobullar med fisksås",
              img:
                "https://assets.icanet.se/q_auto,f_auto/imagevaultfiles/id_105093/cf_259/vegobullar-717984.jpg"
            },
            {
              id: 2,
              tags: ["vego", "sauce"],
              name: "SÅS med fisksås",
              img:
                "https://www.matportalen.no/matvaregrupper/tema/fisk_og_skalldyr/article8624.ece/ALTERNATES/w700/Salat"
            },
            {
              id: 3,
              tags: ["meat", "potato"],
              name: "Kött med pommes",
              img:
                "https://static.mathem.se/shared/images/recipes/doublelarge/kott-pommos-bea.jpeg",
              recipe: "https://www.ica.se/recept/vegobullar-717984/"
            }
          ]
        }),
      1000
    );
  }

  renderMeals = () => {
    if (this.state.filteredMeals.length > 0) {
      return this.state.filteredMeals.map(meal => {
        return <Meal meal={meal} key={meal.id} />;
      });
    } else {
      return this.state.meals.map(meal => {
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
        <StyledButton onClick={() => this.filterMeals("vego")}>
          VEGO
        </StyledButton>
        <SecondaryButton onClick={() => this.filterMeals("sauce")}>
          SAUCE
        </SecondaryButton>
        <SecondaryButton onClick={this.clearFilter}>
          CLEAR FILTER
        </SecondaryButton>
        <MealContainer>{this.renderMeals()}</MealContainer>
      </ContentWrapper>
    );
  }
}

export default Home;

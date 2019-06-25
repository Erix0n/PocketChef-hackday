import React, { Component } from "react";
import Meal from "./Meal";
import {
  ContentWrapper,
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
    window.setTimeout(
      () =>
        this.setState({
          meals: [
            {
              id: 1,
              tags: ["vego", "green"],
              name: "Vegobullar med vitlöksyogurt och fetaost",
              img:
                "https://assets.icanet.se/q_auto,f_auto/imagevaultfiles/id_104007/cf_259/vegobullar-med-feta-och-vitloksyoghurt-v45-2014-71.jpg",
              recipe: "https://www.ica.se/halsa/recept/vegobullar-med-vitloksyoghurt-och-fetaost-718183/"
            },
            {
              id: 2,
              tags: ["vego", "soup"],
              name: "Italiensk bondsoppa",
              img:
                "https://assets.icanet.se/q_auto,f_auto/imagevaultfiles/id_193184/cf_259/italiensk-bondsoppa-725138-stor.jpg",
              recipe: "https://www.ica.se/recept/italiensk-bondsoppa-725138/"
            },
            {
              id: 3,
              tags: ["meat", "potato"],
              name: "Kött med pommes",
              img:
                "https://static.mathem.se/shared/images/recipes/doublelarge/kott-pommos-bea.jpeg",
              recipe: "https://www.ica.se/recept/vegobullar-717984/"
            },
            {
              id: 4,
              tags: ["meat", "salad"],
              name: "Ceasarsallad med bacon",
              img:
                "https://mittkok.expressen.se/wp-content/uploads/2014/03/fotolia_157570276_subscription_monthly_m-700x700.jpg",
              recipe: "https://www.ica.se/recept/caesarsallad-695632/"
            },
            {
              id: 5,
              tags: ["vego", "salad"],
              name: "Falafelbowl med hummus",
              img:
                "https://assets.icanet.se/q_auto,f_auto/imagevaultfiles/id_194373/cf_259/falafelbowl-med-hummus-725213-stor.jpg",
              recipe: "https://www.ica.se/recept/falafelbowl-med-hummus-725213/"
            },
            {
              id: 6,
              tags: ["pasta", "meat"],
              name: "Pasta med bacon och majs",
              img:
                "https://assets.icanet.se/q_auto,f_auto/imagevaultfiles/id_176277/cf_259/supersnabb-pasta-med-bacon-och-majs-723149-ny_580x.jpg",
              recipe: "https://www.ica.se/recept/supersnabb-pasta-med-bacon-och-majs-723149/"
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
        <MealContainer>{this.renderMeals()}</MealContainer>
      </ContentWrapper>
    );
  }
}

export default AllMeals;

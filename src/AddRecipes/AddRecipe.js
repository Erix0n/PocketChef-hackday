import React, { Component } from "react";
import RecipeMeal from "./RecipeMeal";
import { InputWrapper, StyledInput, InputLabel, ContentWrapper } from './styles';
import {
  Title,
  MealContainer,
  StyledButton,
} from "../styles";

class AddRecipe extends Component {
  state = {
    formData: {
      title: '',
      cookTime: '',
      imgUrl: '',
      tags: [],
      url: ''
    },
    meals: []
  };

  componentDidMount() {
    fetch('http://localhost:8000/addrecipe')
      .then(response => response.json())
      .then(data => {
        console.log('Fetch request');
        this.setState({ meals: data.meals })
        console.log(this.state.meals);
      });
  }

  renderMeals = () => {
    return this.state.meals.map((meal) => {
      return <RecipeMeal meal={meal} key={meal.id} />;
    });
  }


  handleSubmit = event => {
    event.preventDefault();

    const data = JSON.stringify(this.state.formData);

    fetch('http://localhost:8000/addrecipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
      .then(res => res.json())
      .then(data => console.log({ data }))
      .catch(err => console.error(err))
  }

  handleInput = event => {
    const { name, value } = event.target;

    const formData = { ...this.state.formData }

    formData[name] = value;

    this.setState({ meals: formData })
    this.setState({ formData })

  }
  // NÄR MAN SUBMITAR SÅ LÄGGER JAG TILL I STATE DET MAN POSTAR SÅ DET RENDERAS UT DIREKT

  render() {
    return (
      <ContentWrapper>
        <form onSubmit={this.handleSubmit}>
          <InputLabel>Title: </InputLabel>
          <InputWrapper>
            <StyledInput required type="text" name="title" value={this.state.title} onChange={this.handleInput} />
          </InputWrapper>

          <InputLabel>URL:</InputLabel>
          <InputWrapper>
            <StyledInput required type="text" name="url" value={this.state.url} onChange={this.handleInput} />
          </InputWrapper>

          <InputLabel>Image URL:</InputLabel>
          <InputWrapper>
            <StyledInput type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.handleInput} />
          </InputWrapper>

          <InputLabel>Tags:</InputLabel>
          <InputWrapper>
            <StyledInput type="text" name="tags" value={this.state.tags} onChange={this.handleInput} />
          </InputWrapper>

          <InputLabel>Cooking time:</InputLabel>
          <InputWrapper>
            <StyledInput required type="text" name="cookTime" value={this.state.cookTime} onChange={this.handleInput} />
          </InputWrapper>

          <StyledButton fillWidth style={{ marginTop: '30px', marginBottom: '30px' }} type="submit">Add recipe</StyledButton>
        </form>
        <Title>Your added recipes</Title>
        <MealContainer>{this.state.meals.length > 0 && this.renderMeals()}</MealContainer>
      </ContentWrapper >
    );
  }
}

export default AddRecipe;

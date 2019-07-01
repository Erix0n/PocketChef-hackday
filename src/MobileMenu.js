import React from "react";

import { MobileMenuWrapper, StyledLink } from "./styles";

export default props => {
  return (
    <MobileMenuWrapper open={props.open}>
      <StyledLink to="/">All Meals</StyledLink>
      <StyledLink to="/addrecipe">Add Recipe</StyledLink>
      <StyledLink to="/random">Random meal</StyledLink>
    </MobileMenuWrapper>
  );
};

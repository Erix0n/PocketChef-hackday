import React from "react";

import { MobileMenuWrapper, StyledLink } from "./styles";

export default props => {
  return (
    <MobileMenuWrapper open={props.open}>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/random">Random</StyledLink>
      <StyledLink to="/allmeals">All Meals</StyledLink>
    </MobileMenuWrapper>
  );
};

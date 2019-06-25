import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import {
  NavBar,
  NavBarWrapper,
  StyledLink,
  Title,
  NavItemWrapper,
  StyledButton,
  Backdrop
} from "./styles";

class NavigationBar extends Component {
  state = {
    currentTitle: "Home",
    isMobile: false,
    mobileMenuOpen: false
  };

  componentDidMount() {
    this.getCurrentTitle();
    this.isMobile();

    window.addEventListener("resize", () => this.isMobile());
  }

  componentDidUpdate() {
    this.getCurrentTitle();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.isMobile());
  }

  getCurrentTitle = () => {
    let title;
    switch (this.props.location.pathname) {
      case "/allmeals":
        title = "All meals";
        break;
      case "/":
        title = "Home";
        break;
      case "/random":
        title = "Random meal";
        break;
      default:
        title = "404";
    }

    if (this.state.currentTitle !== title) {
      this.setState({ currentTitle: title, mobileMenuOpen: false });
    }
  };

  isMobile = () => {
    let mobile = true;
    if (window.innerWidth > 768) {
      mobile = false;
    }

    this.setState({ isMobile: mobile });
  };

  render() {
    return (
      <NavBarWrapper>
        <NavBar>
          <Title>{this.state.currentTitle}</Title>
          <NavItemWrapper>
            {this.state.isMobile ? (
              <StyledButton
                onClick={() => this.setState({ mobileMenuOpen: true })}
              >
                Menu
              </StyledButton>
            ) : (
                <React.Fragment>
                  <StyledLink to="/">Home</StyledLink>
                  <StyledLink to="/random">Random</StyledLink>
                  <StyledLink to="/allmeals">All Meals</StyledLink>
                </React.Fragment>
              )}
          </NavItemWrapper>
        </NavBar>

        {this.isMobile && (
          <React.Fragment>
            <MobileMenu open={this.state.mobileMenuOpen} />
            {this.state.mobileMenuOpen && (
              <Backdrop
                onClick={() => this.setState({ mobileMenuOpen: false })}
              />
            )}
          </React.Fragment>
        )}
      </NavBarWrapper>
    );
  }
}

export default withRouter(NavigationBar);

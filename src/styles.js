import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
// import { identifier } from "@babel/types";

const NavBarWrapper = styled.div`
  height: 70px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  box-shadow: 2px 2px 8px #d2d2d2;
  position:fixed;
  top:0;
  left:0;
`;

const NavBar = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: palevioletred;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: palevioletred;
`;

const Label = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: palevioletred;
`;

const Text = styled.div`
  font-weight: 400;
  text-align:left;
  margin-bottom: 2px;
  color: black;
`;

const NavItemWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & > * {
    margin: 0 10px;
  }
`;

const FilterButton = styled.button`
  outline: none;
  border: 2px solid ${props => props.borderColor};
  border-radius: 5px;
  background-color: #fff;
  color: black;
  font-size:30px;
  padding: 8px 16px;
  margin-bottom: 5px;
  margin-right:4px;   
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.active && css`
    background-color: rgba(219, 112, 147, .6);
  `}
`;

const RemoveFilterButton = styled.button`
  outline: none;
  border: 2px solid #d80404;
  border-radius: 5px;
  background-color: #fff;
  color: #fff;
  font-size:30px;
  padding: 8px 16px;
  margin-bottom: 5px;
  margin-right:4px;   
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  outline: none;
  border: 2px solid palevioletred;
  border-radius: 5px;
  background-color: #fff;
  color: palevioletred;
  padding: 8px 16px;
  margin-bottom: 3px; 
  display: flex;
  justify-content: center;
  align-items: center;

  ${p => p.fillWidth && css`
      width: 100%;
  `}
`;

const MobileFilterWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 50px;
`;

const MobileMenuWrapper = styled.div`
  height: 100vh;
  width: 70%;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;
  z-index: 999;

  ${p =>
    p.open &&
    css`
      transform: translateX(0);
    `};
`;

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
`;

const MealContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-right: 10px;
    margin-bottom: 20px;
  }
`;

const MealWrapper = styled.div`
  height: 400px;
  width: 300px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 8px #d2d2d2;
`;

const MealImage = styled.div`
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-color: gray;
  background-image: url('${p => p.img}');
`;

const MealInfo = styled.div`
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

export {
  NavBar,
  NavBarWrapper,
  StyledLink,
  Title,
  Label,
  Text,
  NavItemWrapper,
  FilterButton,
  RemoveFilterButton,
  StyledButton,
  MobileFilterWrapper,
  ContentWrapper,
  MobileMenuWrapper,
  Backdrop,
  MealContainer,
  MealWrapper,
  MealImage,
  MealInfo
};

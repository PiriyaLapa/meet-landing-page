import styled from "styled-components";
import { StyledBtnProp } from "./interface";

// Button
export const StyledButton = styled.button<StyledBtnProp>`
  border-radius: 29px;
  background-color: ${(props) =>
    props.btnType === "Primary" ? "#4D96A9" : "#855FB1"};
  color: #ffff;
  border: none;
  height: 26px;
  width: 193px;
  height: 58px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.2px;
  span {
    font-family: "Red Hat Display";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 26px;
    color: ${(props) => (props.btnType === "Primary" ? "#8fe3f9" : "#D9B8FF")};
  }
`;

//  Styled Detect screen size fucntion
export const StyledScreenSizeDetect = styled.div`
  width: auto;
  height: auto;
  display: inline-block;
  background-color: rgba(143, 227, 249, 0.2);
  padding: 2%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Styled LandingPage
export const StyledLandingPage = styled.div`
  display: grid;
  /* grid-template-rows: repeat(3, 1fr); */
  grid-template-rows:auto 1fr 1fr auto;
  min-height: 100vh;
`;

export const StyledHeader = styled.header`
  padding: 5%;
  background-color: #eee9da;
`;

export const StyledGallery = styled.main`
  padding: 5%;
  background-color: #c5ebaa;
`;

export const StyledFooter = styled.footer`
  padding: 5%;
  background-color: #93bfcf;
`;

export const StyledAuthor = styled.footer`
  * {
    margin-right: 2%;
  }
`;

export const StyledNavbar = styled.nav`
  padding: 5%;
`;

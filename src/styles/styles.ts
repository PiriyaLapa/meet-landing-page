import styled from "styled-components";
import { StyledBtnProp } from "../interface/interface";
import { BtnDownloadProps } from "../interface/interface";

// Button
export const StyledButtonWhat = styled.button<StyledBtnProp>`
  border-radius: 29px;
  background-color: #855fb1;
  color: #ffff;
  border: none;
  height: 26px;
  width: 139px;
  height: 58px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.2px;
  margin: 3% auto;
`;

export const StyledBtnDownload = styled.button<BtnDownloadProps>`
  border-radius: 29px;
  background-color: ${(props) =>
    props.type === "Primary" ? "#4D96A9" : "#855FB1"};
  color: #ffff;
  border: none;
  height: 58px; /* Changed from 26px to 58px */
  width: 193px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.2px;
  margin: 2% 0%;
  span {
    font-family: "Red Hat Display";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 26px;
    color: ${(props) => (props.type === "Primary" ? "#8fe3f9" : "#D9B8FF")};
  }

  @media screen and (max-width: 767px) {
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //  background-color:#BDCDD6;
    /* padding: 3% 5%; */
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    //  background-color:#93BFCF;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    //  background-color:#6096B4;
  }
  @media screen and (min-width: 1920px) {
    //  background-color:#CADEFC;
  }
`;

//  Styled Detect screen size fucntion
export const StyledScreenSizeDetect = styled.div`
  // width: auto;
  width:90%;
  height: auto;
  display: inline-block;
  background-color: rgba(143, 227, 249, 0.2);
  padding: 2%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  h1 {
    font-family: "Ret Hat Display", sans-serif;
    font-style: normal;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 24px;
    span{
      color:yellow;
    }
  }
`;

// Styled LandingPage
export const StyledLandingPage = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-rows: auto auto auto auto;
  min-height: 100vh;
`;

export const StyledHeader = styled.header`
  @media screen and (max-width: 767px) {
    text-align: center;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //  background-color:#BDCDD6;
    /* padding: 3% 5%; */
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    //  background-color:#93BFCF;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    //  background-color:#6096B4;
  }
  @media screen and (min-width: 1920px) {
    //  background-color:#CADEFC;
  }
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
  padding: 3%;
  margin: 3% auto;
`;

// components

export const StyledImg = styled.img`
  @media screen and (max-width: 767px) {
    width: 102%;
    margin: 7% auto;
    display: flex;
    justify-content: center;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //  background-color:#BDCDD6;
    /* padding: 3% 5%; */
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    //  background-color:#93BFCF;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    //  background-color:#6096B4;
  }
  @media screen and (min-width: 1920px) {
    //  background-color:#CADEFC;
  }
`;

// Card component
export const StyledCardHeader = styled.div`
  padding: 5%;
`;

export const TitleHeader = styled.span`
  font-family: "Red Hat Disply", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  text-transform: capitalize;
  color: #28283d;
  display: block;
`;

export const ContentHeader = styled(TitleHeader)`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #87879d;
`;

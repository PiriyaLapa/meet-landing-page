import styled from "styled-components";
import { StyledBtnProp } from "../interface/interface";
import { BtnDownloadProps } from "../interface/interface";
import { StyledFooterProps } from "../interface/interface";
// Button
export const ContainerButton = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    justify-content: center;
    align-items: center;
    gap: 20px;
    //
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    //
  }
  @media screen and (min-width: 1920px) {
    //
  }
`;
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
  font-size: 1em;
  line-height: 26px;
  letter-spacing: 0.2px;
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
  font-size: 1em;
  line-height: 26px;
  letter-spacing: 0.2px;
  span {
    font-family: "Red Hat Display";
    font-style: normal;
    font-weight: 800;
    font-size: 1em;
    line-height: 26px;
    color: ${(props) => (props.type === "Primary" ? "#8fe3f9" : "#D9B8FF")};
  }

  @media screen and (max-width: 767px) {
    align-items: center;
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
  width: 90%;
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
    font-size: 1em;
    span {
      color: yellow;
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
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    text-align: center;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //
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
export const StyledHeaderDesktop = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  gap: 2%;
  @media screen and (max-width: 767px) {
    //
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //
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
export const StyledHeaderNormalScreen = styled.header`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    //
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //
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
  // background-color: #c5ebaa;
  margin: 0 auto;
  display: grid;
  gap: 20px;

  @media screen and (max-width: 767px) {
    //
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
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

export const ContainerGallery = styled.div`
  text-align: center;
  @media screen and (max-width: 767px) {
    //
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    gap: 2%;
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

export const StyledFooter = styled.footer<StyledFooterProps>`
  padding: 5%;
  background-color: #93bfcf;
  background-image: linear-gradient(
      rgba(77, 150, 169, 0.8),
      rgba(77, 150, 169, 0.8)
    ),
    url(${(props) => props.$backgroundImageUrl});
  background-size: cover;
  background-position: top;
  color: #fafafa;
`;

export const StyledAuthor = styled.footer`
  * {
    margin-right: 2%;
  }
`;

export const StyledNavbar = styled.nav`
  padding: 3%;
  margin: 3% auto;
  display: inline-block;
  height: 57px;
`;

// components

export const StyledImg = styled.img`
  width: 100%;
  @media screen and (max-width: 767px) {
    //
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //
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
export const StyledImgGallery = styled.img`
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    width: 151px;
    height: 143px;
    margin: 2px 5px;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 164px;
    height: 156px;
    /* margin: 0 5px; */
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 164px;
    height: 156px;
    /* margin: 0 5px; */
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    width: 255px;
    height: 242px;
    /* margin: 0 5px; */
  }
  @media screen and (min-width: 1920px) {
    //  background-color:#CADEFC;
  }
`;
export const StyledImgFooter = styled.img`
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

// Card component
export const StyledCardHeader = styled.div`
  padding-top: 5%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 457px;
    height: 262px;
    aling-items: center;
    margin: 0 auto;
    justify-content: center;
    gap: 20px;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 457px;
    height: 262px;
    aling-items: center;
    margin: 0 auto;
    justify-content: center;
    gap: 20px;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    //  background-color:#6096B4;
  }
  @media screen and (min-width: 1920px) {
    //  background-color:#CADEFC;
  }
`;
export const StyledCardFooter = styled.div`
  display: grid;

  @media screen and (max-width: 767px) {
    gap: 20px;
    :nth-child(3) {
    }
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 0 auto;
    grid-gap: 20px;
    //
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

export const TitleHeader = styled.span`
  font-family: "Red Hat Disply", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 2.5em;
  line-height: 44px;
  text-align: center;
  text-transform: capitalize;
  color: #28283d;
  display: block;
  @media screen and (max-width: 767px) {
    grid-area: A;
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

export const ContentHeader = styled(TitleHeader)`
  font-weight: 500;
  font-size: 1em;
  line-height: 26px;
  color: #87879d;

  @media screen and (max-width: 767px) {
    grid-area: B;
    padding: 8% 7%;
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
export const TitleFooter = styled.span`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 2em;
  line-height: 26px;
  text-align: center;
  padding-top: 50px;

  @media screen and (max-width: 767px) {
    //
    line-height: 36px;
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
export const ContentFooter = styled.span`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 1.125em;
  line-height: 26px;
  text-align: center;

  @media screen and (max-width: 767px) {
    line-height: 26px;
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

//  CardGallery
export const StyleCardGallry = styled.div`
  display: inline-block;
  @media screen and (max-width: 767px) {
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    //
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    //
  }
  @media screen and (min-width: 1920px) {
    //
  }
`;

export const SmallTitleGalleryCard = styled.span`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 1em;
  line-height: 26px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #4d96a9;
  display: block;
  text-align: center;
`;
export const TitleGalleryCard = styled.span`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 2em;
  line-height: 36px;
  text-align: center;
  color: #28283d;
  display: block;
`;
export const ContentGalleryCard = styled.span`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 26px;
  display: block;
  text-align: center;
  color: #87879d;
`;

// Vector
export const StyledVector1 = styled.div`
  text-align: center;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    //
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //
    display: inline-block;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    //
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    //
  }
  @media screen and (min-width: 1920px) {
    //
  }
`;

export const StyledVector2 = styled.div`
  text-align: center;
  position: relative;
  top: 45px;
  @media screen and (max-width: 767px) {
    //
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //
    display: inline-block;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    //
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    //
  }
  @media screen and (min-width: 1920px) {
    //
  }
`;

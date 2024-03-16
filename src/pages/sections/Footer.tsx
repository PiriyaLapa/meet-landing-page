import { Component, ReactNode } from "react";
import { StyledFooter } from "../../styles/styles";
import { FooterProps } from "../../interface/interface";
import mobileFooterImg from "../../assets/mobile/image-footer.jpg";
import tabletFooterImg from "../../assets/tablet/image-footer.jpg";
import laptopFooterImg from "../../assets/desktop/image-footer.jpg";
import desktopFooterImg from "../../assets/desktop/image-footer.jpg";
import CardFooter from "../../components/cards/CardFooter";

export default class Footer extends Component<FooterProps> {
  getBackgroundImageUrl = (windowWidth: number): string => {
    if (windowWidth <= 767) {
      return mobileFooterImg;
    } else if (windowWidth <= 1023) {
      return tabletFooterImg;
    } else if (windowWidth <= 1439) {
      return laptopFooterImg;
    } else {
      return desktopFooterImg;
    }
  };

  render(): ReactNode {
    const { windowWidth } = this.props;
    const backgroundImageurl = this.getBackgroundImageUrl(windowWidth);

    return (
      <StyledFooter $backgroundImageUrl={backgroundImageurl}>
          <CardFooter />        
      </StyledFooter>
    );
  }
}

import { Component, ReactNode } from "react";
import { StyledFooter } from "../../styles/styles";
import { FooterProps } from "../../interface/interface";
import mobileFooterImg from '../../assets/mobile/image-footer.jpg';

export default class Footer extends Component<FooterProps> {
  render(): ReactNode {
    const {windowWidth}  = this.props;
    return <StyledFooter windowWidth={windowWidth}>
      
    </StyledFooter>;
  }
}

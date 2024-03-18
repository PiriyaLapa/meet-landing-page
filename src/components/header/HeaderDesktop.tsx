import { Component, ReactNode } from "react";
import { StyledHeaderDesktop } from "../../styles/styles";
import CardHeader from "../cards/CardHeader";
import Image from "../image/Image";
import HeroLeft from "../../assets/desktop/image-hero-left.png";
import HeroRight from "../../assets/desktop/image-hero-right.png";

export default class HeaderDesktop extends Component {
  render(): ReactNode {
    return (
      <StyledHeaderDesktop>
        <Image urlImg={HeroLeft} />
        <CardHeader />
        <Image urlImg={HeroRight} />
      </StyledHeaderDesktop>
    );
  }
}

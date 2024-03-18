import { Component, ReactNode } from "react";
import { StyledHeader } from "../../styles/styles";
import Image from "../../components/image/Image";
import urlImg from "../../assets/tablet/image-hero.webp";
import CardHeader from "../../components/cards/CardHeader";
import HeaderDesktop from "../../components/header/HeaderDesktop";

export default class Header extends Component {
  render(): ReactNode {
    return (
      <div>
        <StyledHeader>
          <Image urlImg={urlImg} />
          <CardHeader />
        </StyledHeader>
        <HeaderDesktop/>
      </div>
    );
  }
}

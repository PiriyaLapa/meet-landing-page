import { Component, ReactNode } from "react";
import { StyledHeader } from "../../styles/styles";
import Image from "../../components/image/Image";
import urlImg from "../../assets/tablet/image-hero.webp";
import CardHeader from "../../components/cards/CardHeader";
// import Vector1 from "../../components/vectors/Vector1";

export default class Header extends Component {
  render(): ReactNode {
    return (
      <StyledHeader>
        <Image urlImg={urlImg} />
        <CardHeader />
        {/* <Vector1 /> */}
      </StyledHeader>
    );
  }
}

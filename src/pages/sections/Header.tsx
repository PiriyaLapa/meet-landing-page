import { Component, ReactNode } from "react";
import { StyledHeader } from "../../styles/styles";
// import Image from "../../components/image/Image";
// import urlImg from "../../assets/tablet/image-hero.webp";
// import CardHeader from "../../components/cards/CardHeader";
import HeaderNormalScreen from "../../components/header/HeaderNormalScreen";
import HeaderDesktop from "../../components/header/HeaderDesktop";
import { Headerprops } from "../../interface/interface";


export default class Header extends Component<Headerprops> {
  render(): ReactNode {
    const {isDesktop} = this.props;
    return (
        <StyledHeader>
          {isDesktop ? <HeaderDesktop /> : <HeaderNormalScreen />}
        </StyledHeader>
    );
  }
}

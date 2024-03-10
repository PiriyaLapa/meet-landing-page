import { Component, ReactNode } from "react";
import { StyledHeader } from "../../styles/styles";
import Image from "../../components/image/Image";
import urlImg from "../../assets/tablet/image-hero.webp";
import ButtonWhat from "../../components/buttons/ButtonWhat";
import ButtonDownload from "../../components/buttons/ButtonDownload";

export default class Header extends Component {
  render(): ReactNode {
    return (
      <StyledHeader>
        <Image urlImg={urlImg} />
        <ButtonDownload btnType="Primary" />
        <ButtonWhat />
      </StyledHeader>
    );
  }
}

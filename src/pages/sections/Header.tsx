import { Component, ReactNode } from "react";
import { StyledHeader } from "../../styles/styles";
import Image from "../../components/image/Image";
import urlImg from "../../assets/tablet/image-hero.webp";
import ButtonWhat from "../../components/buttons/ButtonWhat";
import Button from "../../components/buttons/Button";

export default class Header extends Component {
  render(): ReactNode {
    return (
      <StyledHeader>
        <Image urlImg={urlImg} />
        <Button btntype="Primary" />
        <ButtonWhat />
      </StyledHeader>
    );
  }
}

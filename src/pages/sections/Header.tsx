import { Component, ReactNode } from "react";
import { StyledHeader } from "../../styles/styles";
import Image from "../../components/image/Image";
import urlImg from "../../assets/tablet/image-hero.webp";
import ButtonWhat from "../../components/buttons/ButtonWhat";
import Button from "../../components/buttons/Button";
import { dataLandingPage } from "../../apis/Apis";

export default class Header extends Component {
  renderGalleryPictures(): ReactNode {
    return dataLandingPage.galleryPic.map((picture) => (
      <Image key={picture.id} urlImg={picture.urlImg} />
    ));
  }
  render(): ReactNode {
    return (
      <StyledHeader>
        <Image urlImg={urlImg} />
        <Button btntype="Primary" />
        <ButtonWhat />
        {this.renderGalleryPictures()}
      </StyledHeader>
    );
  }
}

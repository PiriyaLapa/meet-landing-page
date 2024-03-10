import { Component, ReactNode } from "react";
import { StyledHeader } from "../../styles/styles";
import Image from "../../components/image/Image";
import urlImg from "../../assets/tablet/image-hero.webp";
import ButtonWhat from "../../components/buttons/ButtonWhat";
import { dataLandingPage } from "../../apis/Apis";
import ButtonDownload from "../../components/buttons/ButtonDownload";

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
        <ButtonDownload btnType="Primary" />
        <ButtonWhat />
        {this.renderGalleryPictures()}
      </StyledHeader>
    );
  }
}

import { Component, ReactNode } from "react";
import { ContainerGallery, StyledGallery } from "../../styles/styles";
import { dataLandingPage } from "../../apis/Apis";
import ImageGallery from "../../components/image/ImageGallery";
import CardGallery from "../../components/cards/CardGallery";
import Vector1 from "../../components/vectors/Vector1";
// import Vector2 from "../../components/vectors/Vector2";

export default class Gallery extends Component {
  renderGalleryPictures(): ReactNode {
    return dataLandingPage.galleryPic.map((picture) => (
      <ImageGallery key={picture.id} urlImg={picture.urlImg} />
    ));
  }
  render(): ReactNode {
    return (
      <StyledGallery>
        <Vector1 />
        <ContainerGallery>{this.renderGalleryPictures()}</ContainerGallery>
        <CardGallery />
        {/* <Vector2 /> */}
      </StyledGallery>
    );
  }
}

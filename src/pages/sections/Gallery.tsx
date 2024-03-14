import { Component, ReactNode } from "react";
import { ContainerGallery, StyledGallery } from "../../styles/styles";
import { dataLandingPage } from "../../apis/Apis";
import ImageGallery from "../../components/image/ImageGallery";

export default class Gallery extends Component {
  renderGalleryPictures(): ReactNode {
    return dataLandingPage.galleryPic.map((picture) => (
      <ImageGallery key={picture.id} urlImg={picture.urlImg} />
    ));
  }
  render(): ReactNode {
    return (
      <StyledGallery>
        <ContainerGallery>
        {this.renderGalleryPictures()}
        </ContainerGallery>
      </StyledGallery>
    );
  }
}

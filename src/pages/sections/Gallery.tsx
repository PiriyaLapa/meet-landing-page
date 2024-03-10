import { Component, ReactNode } from "react";
import { StyledGallery } from "../../styles/styles";
import { dataLandingPage } from "../../apis/Apis";
import Image from "../../components/image/Image";

export default class Gallery extends Component {
  renderGalleryPictures(): ReactNode {
    return dataLandingPage.galleryPic.map((picture) => (
      <Image key={picture.id} urlImg={picture.urlImg} />
    ));
  }
  render(): ReactNode {
    return <StyledGallery>
        Gallery section
        {this.renderGalleryPictures()}
        </StyledGallery>;
  }
}

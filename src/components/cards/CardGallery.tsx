import { Component, ReactNode } from "react";
import {
  ContentGalleryCard,
  SmallTitleGalleryCard,
  StyledGallery,
  TitleGalleryCard,
} from "../../styles/styles";
import { dataLandingPage } from "../../apis/Apis";

export default class CardGallery extends Component {
  render(): ReactNode {
    const { smallTitle, title, content } = dataLandingPage.galleryCard;
    return (
      <StyledGallery>
        <SmallTitleGalleryCard>{smallTitle}</SmallTitleGalleryCard>
        <TitleGalleryCard>{title}</TitleGalleryCard>
        <ContentGalleryCard>{content}</ContentGalleryCard>
      </StyledGallery>
    );
  }
}

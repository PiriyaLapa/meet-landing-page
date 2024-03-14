import { Component, ReactNode } from "react";
import {  StyledImgGallery } from "../../styles/styles";
import { ImgProps } from "../../interface/interface";

export default class ImageGallery extends Component<ImgProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledImgGallery src={urlImg} />;
  }
}

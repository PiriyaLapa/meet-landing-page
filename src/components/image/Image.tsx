import { Component, ReactNode } from "react";
import { StyledImg } from "../../styles/styles";
import { ImgProps } from "../../interface/interface";

export default class Image extends Component<ImgProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledImg src={urlImg} />;
  }
}

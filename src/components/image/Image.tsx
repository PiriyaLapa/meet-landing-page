import { Component, ReactNode } from "react";
import { StyledImg } from "../../styles/styles";

interface ImgProps {
  urlImg: string;
}
export default class Image extends Component<ImgProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledImg src={urlImg} />;
  }
}

import { Component, ReactNode } from "react";
import { ImgProps } from "../../interface/interface";
import { StyledImgFooter } from "../../styles/styles";

export default class FooterImg extends Component<ImgProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledImgFooter src={urlImg} />;
  }
}

/**
 * Pesudoe code
 * function changeBackgroundImg(widthScreen){
    if widthScreen < 678 then
        backgroundImg = "mobile img"
    else if widthScreen >= 768 and widthScreen < 1024 then
        backgroundImg = "tablet img"
    else if widthScreen >= 1024 and widthScsreen < 1440 then
        backgroundImg = 'labtop img'
    else 
         
 * }
 */

import { Component, ReactNode } from "react";

interface ImgProps {
  urlImg: string;
}
export default class Image extends Component<ImgProps> {
  render(): ReactNode {
    return <div>Image</div>;
  }
}

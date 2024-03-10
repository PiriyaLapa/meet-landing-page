import { Component, ReactNode } from "react";
import { StyledBtnDownload } from "../../styles/styles";

interface BtnDownloadProps {
  btnType:"Primary"|"Secondary";
}
export default class ButtonDownload extends Component<BtnDownloadProps> {
  render(): ReactNode {
    const { btnType } = this.props;
    return <StyledBtnDownload type={btnType}>
        Download <span>v.1.34.1</span>
      </StyledBtnDownload>;
  }
}

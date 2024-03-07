import * as React from "react";
import { BtnProp } from "../../styles/interface";
import { StyledButton } from "../../styles/styles";

export default class Button extends React.Component<BtnProp> {
  public render() {
    const { btnType } = this.props;
    return (
      <StyledButton btnType={btnType}>
        Download <span>v.1.34.1</span>
      </StyledButton>
    );
  }
}

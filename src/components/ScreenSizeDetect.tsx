import * as React from "react";
import { StyledScreenSizeDetect } from "../styles/styles";
import { ScreenSizeDetectProps } from "../interface/interface";

export default class ScreenSizeDetect extends React.Component<ScreenSizeDetectProps> {
  public render() {
    const { screenNow, windowWidth, windowHeight } = this.props;
    return (
      <StyledScreenSizeDetect>
        <h1>Now device for : <span>{screenNow}</span></h1>
        <h1>Width of screen: <span>{windowWidth}</span></h1>
        <h1>Height of screen: <span>{windowHeight}</span></h1>
      </StyledScreenSizeDetect>
    );
  }
}

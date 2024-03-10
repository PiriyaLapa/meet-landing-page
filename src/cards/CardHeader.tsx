import * as React from "react";
import { ContentHeader, StyledCardHeader, TitleHeader } from "../styles/styles";

export default class CardHeader extends React.Component {
  public render(): React.ReactNode {
    return (
      <StyledCardHeader>
        <TitleHeader>test</TitleHeader>
        <ContentHeader>test</ContentHeader>
      </StyledCardHeader>
    );
  }
}

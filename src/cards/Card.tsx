import * as React from "react";
import { Content, StyledCard, Title } from "../styles/styles";

export default class Card extends React.Component {
  public render(): React.ReactNode {
    return (
      <StyledCard>
        <Title>test</Title>
        <Content>test</Content>
      </StyledCard>
    );
  }
}

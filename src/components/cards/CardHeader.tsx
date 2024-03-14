import * as React from "react";
import {
  ContainerButton,
  ContentHeader,
  StyledCardHeader,
  TitleHeader,
} from "../../styles/styles";
import ButtonDownload from "../buttons/ButtonDownload";
import ButtonWhat from "../buttons/ButtonWhat";
import { dataLandingPage } from "../../apis/Apis";

export default class CardHeader extends React.Component {
  public render(): React.ReactNode {
    const title = dataLandingPage.header.title;
    const content = dataLandingPage.header.content;
    return (
      <StyledCardHeader>
        <TitleHeader>{title}</TitleHeader>
        <ContentHeader>{content}</ContentHeader>
        <ContainerButton>
          <ButtonDownload btnType="Primary" />
          <ButtonWhat />
        </ContainerButton>
      </StyledCardHeader>
    );
  }
}

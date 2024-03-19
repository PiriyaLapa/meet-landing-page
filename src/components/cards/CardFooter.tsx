import { Component, ReactNode } from "react";
import {
  ContainerButton,
  ContentFooter,
  StyledCardFooter,
  TitleFooter,
} from "../../styles/styles";
import ButtonDownload from "../buttons/ButtonDownload";
import { dataLandingPage } from "../../apis/Apis";

export default class CardFooter extends Component {
  render(): ReactNode {
    const { title, content } = dataLandingPage.footer;
    return (
      <StyledCardFooter>
        <TitleFooter>{title}</TitleFooter>
        <ContentFooter>{content}</ContentFooter>
        <ContainerButton>
          <ButtonDownload btnType="Secondary" />
        </ContainerButton>
      </StyledCardFooter>
    );
  }
}

import { Component, ReactNode } from "react";
import { StyledFooter } from "../../styles/styles";
import { FooterProps } from "../../interface/interface";
import mobileFooterImg from "../../assets/mobile/image-footer.jpg";
import tabletFooterImg from "../../assets/tablet/image-footer.jpg";
import laptopFooterImg from "../../assets/desktop/image-footer.jpg";
import desktopFooterImg from "../../assets/desktop/image-footer.jpg";
import CardFooter from "../../components/cards/CardFooter";

export default class Footer extends Component<FooterProps> {
  getBackgroundImageUrl = (windowWidth: number): string => {
    if (windowWidth <= 767) {
      return mobileFooterImg;
    } else if (windowWidth <= 1023) {
      return tabletFooterImg;
    } else if (windowWidth <= 1439) {
      return laptopFooterImg;
    } else {
      return desktopFooterImg;
    }
  };

  render(): ReactNode {
    const { windowWidth } = this.props;
    const backgroundImageurl = this.getBackgroundImageUrl(windowWidth);

    return (
      <StyledFooter $backgroundImageUrl={backgroundImageurl}>
          <CardFooter />        
        {/* <h1>Htest</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum quibusdam fugiat tempore quis. Modi sit vel, debitis nulla labore incidunt deleniti commodi vero delectus, non blanditiis enim, obcaecati alias.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laborum unde adipisci nisi accusantium ipsa, optio blanditiis nostrum corporis assumenda doloribus sequi! Deleniti distinctio labore maxime beatae dignissimos accusamus sit assumenda ex facere nesciunt, non sequi laborum, debitis explicabo similique quasi consequatur amet rem rerum harum delectus exercitationem adipisci minus. Consectetur modi praesentium quo reiciendis? Facere adipisci accusantium, quam perferendis reprehenderit sunt inventore alias eveniet, corrupti deleniti ea, ratione sit. Ipsa dolorem debitis error cupiditate laboriosam id! Exercitationem rem a dolor, voluptas id nostrum, dolorum quia vero voluptatem quas quae itaque iste tempore aut ducimus debitis provident iusto voluptate? Repellendus?</p> */}
      </StyledFooter>
    );
  }
}

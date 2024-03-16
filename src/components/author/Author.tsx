import { Component, ReactNode } from "react";
import { StyledAuthor } from "../../styles/styles";

export default class Author extends Component {
  render(): ReactNode {
    return (
      <StyledAuthor>
        Challenge by
        <a
          href="https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR/hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          FrontendMentor
        </a>
        Coded by
        <a href="https://www.frontendmentor.io/profile/PiriyaLapa">Piriya L.</a>
      </StyledAuthor>
    );
  }
}

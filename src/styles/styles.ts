import styled from "styled-components";
import { StyledBtnProp } from "./interface";

// Button
export const StyledButton = styled.button<StyledBtnProp>`
  border-radius: 29px;
  background-color: ${(props) =>
    props.btnType === "Primary" ? "#4D96A9" : "#855FB1"};
  color: #ffff;
  border: none;
  height: 26px;

  width: 193px;
  height: 58px;
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.2px;
  span {
    font-family: "Red Hat Display";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 26px;
    color: ${(props) => (props.btnType === "Primary" ? "#8fe3f9" : "#D9B8FF")};
  }
`;

//  Styled Detect screen size fucntion
export const StyledScreenSizeDetect = styled.div`
  width: auto;
  height: auto;
  display:inline-block;
  background-color: rgba(143,227,249, 0.2);
  padding:2%;
`;

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
  span {
    font-family: "Red Hat Display";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: ${(props) => (props.btnType === "Primary" ? "#8fe3f9" : "#D9B8FF")};
  }
`;

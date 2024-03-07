import styled from "styled-components";
import { BtnProp } from "./interface";

// Button
export const StyledButton = styled.button<BtnProp>`
    border-radius:12px;
    background-color:${(props) => props.btnType === "Primary" ? "#4D96A9":"#855FB1" };
    color:#FFFF;
    border:none;
`;
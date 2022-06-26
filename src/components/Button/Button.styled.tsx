import styled from "styled-components";
import { ButtonStyledProps } from "./types";


export const ButtonElement = styled.button<ButtonStyledProps>`
min-width : ${props => props.width ? props.width : 'max-content'};
background-color: ${props => props.buttonType ? props.buttonType : 'red'};
padding:7px 20px;
border: none;
border-radius: 4px;
color:#ffffff;
font-size: 18px;
a {
    text-decoration: none;
    color:#ffffff;
}
`
import React from "react";
import { Link } from "react-router-dom";
import { ButtonElement } from "./Button.styled";
import { ButtonProps } from "./types";

const Button:React.FunctionComponent<ButtonProps> = ({content,link,href}) => {
    if(link && href){
      return  <ButtonElement><Link to={href}>{content}</Link></ButtonElement>
    }
    return <ButtonElement>{content}</ButtonElement>
}
export default Button;
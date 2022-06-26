import React from "react";
import Button from "../Button/Button";
import { HeaderBar } from "./Header.styled";
import Logo from "./Logo";

const Header: React.FunctionComponent = () => {
    return <HeaderBar>
        <div className="logo">
            <Logo />
        </div>
        <div className="menu">
            <Button link={true} href='/login' content="Sign Up"></Button>
        </div>

    </HeaderBar>
}



export default Header;
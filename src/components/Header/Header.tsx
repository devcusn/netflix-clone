import React from "react";
import { HeaderBar } from "./Header.styled";
import Logo from "./Logo";

const Header: React.FunctionComponent = () => {
    return <HeaderBar>
        <div className="logo">
            <Logo />
        </div>
        <div className="menu"></div>

    </HeaderBar>
}



export default Header;
import React from "react";
import styled from "styled-components";
import background from '../../assets/image/background.jpg'
export const Page = styled.div`
background-image: url(${background}) ;
width:100%;
height:100vh;
.overlays {
    background-color: rgba(0,0,0,0.4) ;
}
.section {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
}
`
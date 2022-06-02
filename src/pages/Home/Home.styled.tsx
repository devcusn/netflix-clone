import React from "react";
import styled from "styled-components";
import background from '../../assets/image/background.jpg'
export const HomePage = styled.div`
background-image: url(${background}) ;
width:100%;
height:100vh;
.overlays {
    background-color: rgba(0,0,0,0.4) ;
}
.section {
    display: flex;
    justify-content:center;
    align-items: center ;
    height: calc(100vh - 107px);
    width:100% ;
    color:#ffffff;
    .info-area {
        display: flex;
        flex-direction:column ;
        justify-content:center;
        align-items: center ;
        margin-bottom:70px ;
        .text-big {
              font-size:60px;
              font-weight:bold;
              max-width:900px;
              text-align:center ;
          }
          .text-middle {
             font-size:30px ;
             margin-top:20px ;
             margin-bottom:20px ;
        }
        .text-small{
            font-size:20px ;
        }
    }
    .info-action {
        display:flex ;
        margin-top:20px ;
        input {
            font-size:19px;
            padding:25px ;
            width:400px ;
        }
        button {
            border:none ;
            background-color: red;
            width:225px ;
            font-size:30px;
            color:#ffffff;
        }
    }
  
}
`
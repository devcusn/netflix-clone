import React from "react";
import Home from "../pages/Home/Home";

export type Router = {
    path: string
    component: JSX.Element
}

const Routers: Router[] = [
    { path: '/', component: <Home /> },
    { path: '*', component: <div>Not Found</div> }
];


export default Routers;
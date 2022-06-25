import React from "react";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
export type Router = {
    path: string
    component: JSX.Element
}

const Routers: Router[] = [
    { path: '/', component: <Home /> },
    { path: '/login', component: <LoginPage /> },
    { path: '*', component: <div>Not Found</div> }
];


export default Routers;
import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import { Page } from "./Login.styled";



const LoginPage :React.FunctionComponent =()=>{
    return <Page>
        <div className="overlays">
        <Header />
            <div className="section">
                <Form title="Sign In">
                        <Input/>
                        <Input/>
                </Form>
            </div>
        </div>
    </Page>
}

export default LoginPage
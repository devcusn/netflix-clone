import React from "react";
import { FormElement } from "./Form.styled";
import { FormProps } from "./types";



const Form:React.FunctionComponent <FormProps>= ({title,children}) => {
    return <FormElement>
        <div className="title">
         {title}
        </div>
        <div className="form_content">
        {children}
        </div>
    </FormElement>
}

export default Form;
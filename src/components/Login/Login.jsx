import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    placeholder={"login"}
                    name={"login"}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    placeholder={"password"}
                    name={"password"}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    type={"checkbox"}
                    name={"rememberMe"}
                /> remember me
            </div>
            <div>
                <button> Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    // вводить уникальное имя форм
    form: 'login'
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login;

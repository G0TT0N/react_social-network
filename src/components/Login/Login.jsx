import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input} // импорт компоненты формы
                    placeholder={"email"}
                    name={"email"}
                    validate={[required]} // подключение валидатора
                />
            </div>
            <div>
                <Field
                    component={Input}
                    placeholder={"password"}
                    type={"password"}
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
            {props.error && <div className={style.formSummaryError}> {/* покажет ошибку при неверных данных логина */}
                {props.error}
            </div>}
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
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);

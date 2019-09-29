import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => { // деструктуризация props, берем только нужное оттуда
    return (
        <form
            onSubmit={handleSubmit} // отменяет перезагрузку страницы при отправке формы, собирает все данные из формы
        >
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
            {captchaUrl && <div>
                <img src={captchaUrl} alt="captcha"/>
                {createField("Captcha", "captcha", [required], Input, {})}
            </div>}
            {error && <div className={style.formSummaryError}> {/* покажет ошибку при неверных данных логина */}
                {error}
            </div>}

            <div>
                <button>Sign In</button>
                <button><a href="https://social-network.samuraijs.com/signUp">Sign Up</a></button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({ // вызов хок по документации
    // вводить уникальное имя формы
    form: 'login'
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => { // сюда придут все значения из формы
        props.login(formData.email, formData.password, formData.rememberMe, props.captcha)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, {login})(Login);

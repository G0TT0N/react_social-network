import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({ // доп данные для работы редиректа
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = Component => { // хок принимает компоненту и возвращает, наделив функционалом редиректа
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>; // редирект
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent); // еще раз обернем connect и вернем уже готовый редирект

    return ConnectedAuthRedirectComponent;
};


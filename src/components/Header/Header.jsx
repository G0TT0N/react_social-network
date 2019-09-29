import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png" alt="logo"/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <NavLink to={'/login'} onClick={props.logout}>Log out</NavLink></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header

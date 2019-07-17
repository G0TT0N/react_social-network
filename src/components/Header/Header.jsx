import React from 'react';
import style from './Header.module.css'


const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png" alt="logo"/>
        </header>
    )
};

export default Header
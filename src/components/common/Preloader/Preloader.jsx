import React from 'react';
import preloader from "../../../assets/images/loader.svg";


let Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt={'preloader'}/>
        </div>
    )
};

export default Preloader;
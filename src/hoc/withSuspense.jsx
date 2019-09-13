import React, {Suspense} from 'react';
import Preloader from "../components/common/Preloader/Preloader";

export const withSuspense = Component => { // хок принимает компоненту и возвращает, наделив функционалом редиректа
    return (props) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    };
};


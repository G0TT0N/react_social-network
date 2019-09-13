import React, {useState} from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize); // от сервара пришло общее количество, делим
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) { // высчитываем количество страниц
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize); // дробим на порции
    let [portionNumber, setPortionNumber] = useState(1); // хук для определения и установки порции пагинатора
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; // стандартно (1-1) * 10+1 = 0
    let rightPortionPageNumber = portionNumber * portionSize; // 1 * 10 = 10

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && // для всех кроме первой страницы
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber) // стандартно первые 10 страниц
                .map((page) => { // выводить для каждой страницы спан со стилями
                    return <span className={cn({ // classnames
                            [styles.selectedPage]: currentPage === page // если совпадают, то применить стили
                        },
                        styles.pageNumber)}
                                 key={page}
                                 onClick={() => {
                                     onPageChanged(page);
                                 }}>
                        {page}
                    </span>
                })}
            {portionCount > portionNumber && // для всех кроме последней страницы
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
        </div>
    );
};

export default Paginator;

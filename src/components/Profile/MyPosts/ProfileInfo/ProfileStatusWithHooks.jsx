import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => { // создаем функциональную компоненту на хуках
    /*  let stateWithSetState = useState(false); // useState() возвращает массив из 2х элементов
        let editMode = stateWithSetState[0]; // первый элемент это часть переданного стейта
        let setEditMode = stateWithSetState[1]; // второй это функция, что будет изменять первый элемент*/

    let [editMode, setEditMode] = useState(false); // современный синтаксис с деструктурированным присваниванием
    let [status, setStaus] = useState(props.status); // useState достает из props status и присваивает первому элементу, плюс объявляет функцию, что следит за ним

    useEffect(() => { // хук useEffect.
        setStaus(props.status); //Запускается после рендера и ререндерит после изменения зависимости
    }, [props.status]); // зависимость. Нежелательно, но возможно оставить пустым массивом

    const activateEditMode = () => {
        setEditMode(true) // меняет editMode на true
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStaus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode && // если false то показать span
            <div>
                <span onDoubleClick={activateEditMode}> {/* вызов функции по двойному клику */}
                    {props.status || "no status"}
                </span>
            </div>
            }

            {editMode && // если true то показать div
            <div>
                <input
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={status}
                    autoFocus={true} // при клике на элемент, сразу активирует поле ввода
                />
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;
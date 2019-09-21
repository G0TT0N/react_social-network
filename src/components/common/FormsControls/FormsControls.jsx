import React from 'react';
import styles from './FormsControls.module.css';
import {Field} from "redux-form";

// форм криэйтер
const FormControl = ({input, meta, ...props}) => { // *из-за библиотеки приходят сюда не стандартные props, а объект с input и meta
    const hasError = meta.touched && meta.error; // **из meta приходят touched и error, сохраняем
    return (
        <div
            className={styles.formControl + ' ' + (hasError ? styles.error : "")}> {/* **если пришли, то применить этот стиль */}
            <div>
                {props.children} {/* сюда придут input или textarea */}
            </div>
            {hasError && <span>{meta.error}</span>} {/* **если пришли, то показать элемент */}
        </div>
    )
};

// формы
export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/> {/*  *поэтому надо деструктуризировать передаваемые данные  */}
    </FormControl>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
);



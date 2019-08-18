export const required = (value) => { // если нет value то показать ошибку
    if (value) return undefined;
    return 'Field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {  // проверка максимальной длинны поля c замыканием
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};


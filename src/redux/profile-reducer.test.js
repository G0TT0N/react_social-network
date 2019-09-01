import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    postsData: [
        {
            id: 1,
            message: 'qwe1',
            likesCount: 10
        },
        {
            id: 2,
            message: 'qwe2',
            likesCount: 10
        },
        {
            id: 3,
            message: 'qwe3',
            likesCount: 10
        },
        {
            id: 4,
            message: 'qwe4',
            likesCount: 10
        },
        {
            id: 5,
            message: 'qwe5',
            likesCount: 10
        },
        {
            id: 6,
            message: 'qwe6',
            likesCount: 10
        }
    ],
    profile: null,
    status: '',
};

it('new post should be added', () => { // тест на добавление поста
    // готовим исходные данные
    let action = addPostActionCreator("test_1");
    // запускаем основное дейтсвие
    let newState = profileReducer(state, action);
    // проверяем ожидание результата newState.postsData.length === 5
    expect (newState.postsData.length).toBe(6);
});

it('message of new post should be corrected', () => { // тест на корректность сообщения
    // готовим исходные данные
    let action = addPostActionCreator("test_1");
    // запускаем основное дейтсвие
    let newState = profileReducer(state, action);
    // проверяем ожидание результата postsData[6].message === test_1
    expect (newState.postsData[6].message).toBe("test_1");
});

it('after deleting length of message should be decrement', () => { // тест на удаление сообщения
    // готовим исходные данные
    let action = deletePost(1);
    // запускаем основное дейтсвие
    let newState = profileReducer(state, action);
    // проверяем ожидание результата postsData.length === 5
    expect (newState.postsData.length).toBe(5);
});

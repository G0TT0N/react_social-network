import {createSelector} from "reselect";

const getUsers = (state) => { // обычный селектор, что возвращает данные из стейта
    return state.usersPage.users
};
export const getUsersSelectorCreator = createSelector(getUsers, (users) => { // расширенный селектор из библиотеки, принимает данный обычного селектора и выполняет в себе сложную логику.
    return users.filter(u => true); // логика приведена только для примера, смысла в ней нет. Как и в этом селекторе.
});
export const getPageSize = (state) => {
    return state.usersPage.pageSize
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
};
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
};


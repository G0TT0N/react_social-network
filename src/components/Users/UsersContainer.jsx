import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThunkCreator,
    follow,
    unfollow
} from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelectorCreator
} from "../../redux/users-selectors";

class UsersContainer extends React.Component { // или extends React.PureComponent, чтобы самим не писать оптимизацию рендера
    shouldComponentUpdate(nextProps, nextState, nextContext) { // метод оптимизация рендера
        return nextProps != this.props || nextState != this.state // перерисует если true
    }

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize); // вызываем санк криэйтор и передаем в него параметры
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.getUsersThunkCreator(pageNumber, pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => { // реализация через селекторы. Они принимают state на входе и возвращают то, что запрашивают
    return {
        users: getUsersSelectorCreator(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersThunkCreator
    })
)(UsersContainer);

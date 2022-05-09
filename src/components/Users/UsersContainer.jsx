import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, requestUsers} from '../../redux/users-reducer.js'
import React, { useEffect } from "react"
import Users from "./Users"
import Preloader from '../common/preloader/Preloader.jsx'
import s from './Users.module.css'
import { compose } from 'redux'
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, 
    getIsFetching, getFollowingInProgress} from '../../redux/selectors/users-selectors.js'

const UsersContainer = React.memo (props => {
    
    useEffect( () => {
        props.requestUsers(props.currentPage, props.pageSize)
        // eslint-disable-next-line
    }, [])

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        props.requestUsers(pageNumber, props.pageSize)
    }
    
    return (
        <div className={s.pageUsers}>
            {props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} 
            onPageChanged={onPageChanged} currentPage={props.currentPage}
            users={props.users} isFetching={props.isFetching}
            followingInProgress= {props.followingInProgress}
            follow={props.follow} unfollow={props.unfollow}
            isAuth={props.isAuth}
            />
        </div>
    )
})


let mapStateToProps = (state) => {
    return (
        {
            users: getUsers(state),
            pageSize: getPageSize(state),
            totalUsersCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            followingInProgress: getFollowingInProgress(state),
            isAuth: state.auth.isAuth
        }
    )
}


export default compose(
    connect(mapStateToProps, { setCurrentPage, requestUsers, follow, unfollow }),
    
)(UsersContainer)


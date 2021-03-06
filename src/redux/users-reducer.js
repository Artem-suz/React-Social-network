import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS= 'TOGGLE-IS-FOLLOWING-PROGRESS'

export const followSuccess = (userId) => {
    return {type: FOLLOW, userId}
}

export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId}
}

export const setUsers = (users) => { 
    return {type:SET_USERS, users}
}

export const setCurrentPage = (currentPage) => { 
    return {type:SET_CURRENT_PAGE, currentPage}
}

export const setTotalUsersCount = (totalUsersCount) => { 
    return {type:SET_TOTAL_USERS_COUNT, totalUsersCount}
}

export const toggleIsFetching = (isFetching) => { 
    return {type:TOGGLE_IS_FETCHING, isFetching}
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return {type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
}

export const requestUsers = (page, pageSize) => {
    

    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setUsers(data.items))
            })
    }
}

export const unfollow = (id) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.unfollow(id)
            .then(data => {
                
                if( data.resultCode === 0 ) {
                    
                    dispatch(unfollowSuccess(id))

                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.follow(id)
            .then(data => {
                
                if( data.resultCode === 0 ) {
                    
                    dispatch(followSuccess(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],

}

const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case FOLLOW:
            return(
                {
                    ...state,
                    users: state.users.map ( (u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
                    
                }
            )

        case UNFOLLOW:
            return (
                {
                    ...state,
                    users: state.users.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    })
                }
            )
        
        case SET_USERS:
            return {...state, users: action.users }

        case SET_CURRENT_PAGE:
            
            return {...state, currentPage: action.currentPage }   

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount }

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching }
                
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, 
                followingInProgress: action.isFetching ? 
                [...state.followingInProgress, action.userId ] :
                state.followingInProgress.filter(id => id !== action.userId)
                }
                
        default:
            return state
    }

}

export default usersReducer
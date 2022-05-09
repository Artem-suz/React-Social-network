import { connect } from 'react-redux'
import Header from './Header'

import React from 'react'
import { logout } from '../../redux/auth-reducer'


const HeaderContainer = (props) => {

        return (
            <Header isAuth = {props.isAuth} login = {props.login} logout = {props.logout} 
            profile={props.profile} authorizedUserId={props.authorizedUserId} />
        )

}

const mapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth,
            profile: state.profilePage.profile,
            authorizedUserId: state.auth.id,
        }
    )
}


export default connect(mapStateToProps, {
    logout,
})(HeaderContainer) 
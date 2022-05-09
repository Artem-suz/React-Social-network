import Profile from "./Profile"
import { connect } from 'react-redux'
import {getProfile, getStatus, updateStatus, savePhoto, saveProfile, setEmptyErrorFromServer} from '../../redux/profile-reducer'
import { useParams } from "react-router-dom";
import { compose } from "redux";
import React, { useEffect,} from "react";



const ProfileContaner = React.memo(props => {
    let {id} =  useParams()
    
    
    if(!id) {
        id = props.authorizedUserId
    }

    let isOwner = id === props.authorizedUserId

    useEffect(() => {

        props.getProfile(id)
        props.getStatus(id)
        // eslint-disable-next-line
    },[id])
    
    
    return (
        
        <Profile profile={props.profile} isAuth={props.isAuth} updateStatus={props.updateStatus}
            status={props.status} isOwner={isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}
            errorFromServer={props.errorFromServer} setEmptyErrorFromServer={props.setEmptyErrorFromServer}
            posts={props.posts} newPostText={props.newPostText} friends={props.friends}/>
    )
})


const mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        errorFromServer:state.profilePage.errorFromServer,
        friends: state.navbar.friends,


    })
}

export default compose(
    connect (mapStateToProps, { getProfile, getStatus, updateStatus,
        savePhoto, saveProfile, setEmptyErrorFromServer,}),
    
)(ProfileContaner)
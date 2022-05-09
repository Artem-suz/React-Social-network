import s from './User.module.css'
import userPhoto from '../../../assets/images/user4.png'
import React from 'react'
import { NavLink } from 'react-router-dom'




const User = (props) => {
    
    const unfollowHandler = () => {

        props.unfollow(props.id)
    }

    const followHandler = () => {

        props.follow(props.id)
    }

    return (
        <div className={s.userCard}>
            <div className={s.userCardWrapper}>

                    <div className={s.photoWrapper}>
                        <div className={s.photo}>
                            <NavLink to={'/profile/'+props.id}>
                                <img src={props.photo.small != null ? props.photo.small : userPhoto} alt={props.name} />
                            </NavLink>
                        </div>
                        
                            {
                            (props.followed) ? 
                            <button className={s.button + ' ' + s.unfollowBtn} onClick={unfollowHandler} 
                            disabled={props.followingInProgress.some((id) => id === props.id) || !props.isAuth}>Unfollow</button> : 
                            <button className={s.button + ' ' + s.followBtn} onClick={followHandler} 
                            disabled={props.followingInProgress.some((id) => id === props.id) || !props.isAuth}>Follow</button>
                            }
                        
                    </div>

                    <div className={s.info}>
                        <div className={s.infoHeader}>
                            <div className={s.name}>{props.name}</div>
                            <div className={s.location}> City: {props.location || ''}</div>
                        </div>
                        
                        <div className={s.infoFooter}>
                            <div className={s.status}>{props.status}</div>
                        </div>
                        
                    </div>

            </div>



            
        </div>
    )
}





export default User
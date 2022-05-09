
import s from './FriendElement.module.css'
import React from 'react'

class FriendElement extends React.Component {

    render() {
        return (
            <div className={s.friendItem}>
                <img className={s.navbarImg} src={this.props.img} alt='Friends avatar'></img> 
            <span className={s.friendName}>{this.props.name}</span>
        </div>
        )
    }
}




export default FriendElement
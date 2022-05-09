import s from './ProfileFriends.module.css'
import FriendElement from './FriendElement/FriendElement'
const ProfileFriends = (props) => {
  
  return(
    <div className={s.myProfileFriends}>
      <span className={s.friendsTitle}>Friends</span>
      <div className={s.friendsWrapper}>
                    
        {props.friends.map((e) => {
            return <FriendElement name={e.name} 
            img={e.img} id={e.id} key={e.id}/>
        })}
      </div>
    </div>
    )
}

export default ProfileFriends
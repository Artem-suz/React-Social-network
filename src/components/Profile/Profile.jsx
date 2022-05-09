
import Preloader from '../common/preloader/Preloader';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />;
        }
    
    return (
        <div className={s.appWrapperContent}>
            
            <ProfileInfo profile={props.profile} 
            status={props.status} updateStatus={props.updateStatus}
            isOwner={props.isOwner} savePhoto={props.savePhoto}
            saveProfile={props.saveProfile} errorFromServer={props.errorFromServer}
            setEmptyErrorFromServer={props.setEmptyErrorFromServer}  friends={props.friends}

            followed={props.followed} followingInProgress={props.followingInProgress}
            isAuth={props.isAuth} id={props.id} unfollow={props.unfollow} follow={props.follow}
            />
        </div>
    )
}

export default Profile
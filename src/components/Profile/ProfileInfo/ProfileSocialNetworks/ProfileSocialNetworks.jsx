import s from './ProfileSocialNetworks.module.css'

const ProfileSocialNetworks = (props) => {
    return (
        <div className={s.ProfileSocialNetworks}>
            <h4>Other Social Networks:</h4>
            <a href='https://ru-ru.facebook.com/' className={s.socialItem + ' ' + s.bgFacebook}>Facebook</a>
            <a href='https://twitter.com/?lang=ru' className={s.socialItem + ' ' + s.bgTwitter}>Twitter</a>
            <a href='https://dribbble.com/' className={s.socialItem + ' ' + s.bgDribbble}>Dribbble</a>
        </div>
    )
}

export default ProfileSocialNetworks
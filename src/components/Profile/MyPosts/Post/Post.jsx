import s from './Post.module.css'
import userPhoto from '../../../../assets/images/user4.png'

const Post = (props) => {
    
    return (
        <div className={s.item}>
            
                <div className={s.postHeader}>
                    <img src={props.profile.photos.small || userPhoto} className={s.postImg} alt='User avatar'/>
                    <div className={s.postHeaderInfo}>
                        <span className={s.author}> {props.profile.fullName} </span>
                        <span > 29 Apr at 5:21 pm </span>
                    </div>
                </div>
            
            <div className={s.postFooter}>
                {props.message} 
            </div>
            
        </div>
    )
}

export default Post
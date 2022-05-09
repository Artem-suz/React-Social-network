import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.css'

const setActive = ({isActive}) => {
    return (isActive) ? s.active : ''
}

const DialogItem = (props) => {
    let path = '/dialogs/'+ props.id
    
    return (
        <div className={s.dialog}>
            
            <NavLink to= {path} className={setActive}>
                <img className={s.img} src={props.img} alt='User avatar'/>
                {props.name} 
            
            </NavLink>
        </div>
    )
}



export default DialogItem
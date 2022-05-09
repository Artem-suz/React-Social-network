import { NavLink,  } from 'react-router-dom'
import s from'./Header.module.css'
import logout from '../../assets/images/logout.png'
import userPhoto from '../../assets/images/user4.png'
import { useState } from 'react'
import React from 'react'

const Header = React.memo(props => {
    
    let headerProfileImg = (props.profile) ? props.profile.photos.small : userPhoto

    let [isHiddenLogout,showLogout] = useState(true)

    

    const showLogoutHandler = () => {
        showLogout(!isHiddenLogout)
    }

        return (
            <header className={s.header}>
                <div className={s.container}>
                    <NavLink to={'/myProfile'} className ={s.headerLogo}>Social network</NavLink>
                    <div className={s.topProfileLink}>

                        { (props.isAuth) ? 
                            <div className={s.headerLogin}>
                                <span className={s.wrapperHeaderLogout} onClick={showLogoutHandler}>
                                    <img src={headerProfileImg} className={s.headerProfileImg} alt='Profile avatar'/>
                                    
                                    <span className="material-icons">
                                        keyboard_arrow_down
                                    </span>
                                </span>
                                


                                { (isHiddenLogout) ? '' :
                                <span className={s.btnLogout} onClick={showLogoutHandler}>
                                    <button onClick={props.logout}>
                                        <img src={logout} alt='Button logout'> 
                                        </img> Log out
                                    </button>
                                </span>
                                    
                                }
                                
                            </div>
                            : 
                            <NavLink to={'/login'} className={s.topProfileLink}>Login</NavLink>
                        }
                        
                    </div>
                </div>
            </header>
        )
    
})



export default Header
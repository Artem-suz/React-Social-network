import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

import React from 'react'

const Navbar = (props) => {


    
    const setActive = ({isActive}) => {
        return (isActive) ? s.active : ''
    }

        return (
            <nav className={s.nav}>

            <div className={s.item}>
                <NavLink to='/myProfile' className={setActive}>
                    <span className="material-icons"> person
                    </span> My profile
                </NavLink> 
            </div>

            <div className={s.item}>
                <NavLink to='/dialogs' className={setActive}>
                    <span className="material-icons"> chat
                    </span> Messenger
                </NavLink> 
            </div>

            <div className={s.item}>
                <NavLink to='/users' className={setActive}>
                    <span className="material-icons"> people
                    </span> Users 
                </NavLink> 
            </div>

            <div className={s.item}>
                <NavLink to='/news' className={setActive}>
                    <span className="material-icons"> grade
                    </span> News
                </NavLink> 
            </div>

            <div className={s.item}>
                <NavLink to='/music' className={setActive}>
                    <span className="material-icons"> audiotrack
                    </span> Music
                </NavLink> 
            </div>
            
            <div className={s.item}>
                <NavLink to='/settings' className={setActive}>
                    <span className="material-icons"> settings
                    </span> Settings 
                </NavLink> 
            </div>

        </nav>
        )
    
}

export default Navbar
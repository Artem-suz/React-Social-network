import React, { useEffect, useState } from "react"
import s from './ProfileInfo.module.css'
const ProfileStatusWithHooks = (props) => {
    
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if(props.isOwner){
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div>
                {!editMode &&
                    <h3 onClick={activateEditMode} className={(props.isOwner) ? s.ownerProfileStatus : s.profileStatus}> 
                        <span className={s.status }>Status: </span>
                        <span > {props.status || 'Set status'}</span>
                    </h3>
                }
                {editMode && 
                    <div className={s.editProfileStatus} >
                        <textarea onBlur={deactivateEditMode} autoFocus={true}
                        onChange={onStatusChange} value={status} />
                    </div>
                }
            </div>
        )
    
    

}

export default ProfileStatusWithHooks
import s from './FormsControls.module.css'

export const TextareaProfile = ( {field, ...props} ) => {
    
    
    const hasError = props.form.errors.post
    return(
        <div className={s.textareaProfilePost}>
            <textarea {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}

export const TextareaEditProfile = ( {field, ...props} ) => {
    
    
    const hasError = props.form.errors.post 
    return(
        <div className={s.textareaEditProfile}>
            <textarea {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}

export const TextareaDialogs = ( {field, ...props} ) => {
    
    const hasError = props.form.errors.chatMessage
    return(
        <div className={s.textareaDialogs}>
            <textarea {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}

export const InputLogin = ( {field, ...props} ) => {
    
    const hasError = props.form.errors.email && props.form.touched.email 
    return(
        <div className={s.inputLogin}>
            <input {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}

export const InputLoginPassword = ( {field, ...props} ) => {
    
    const hasError = props.form.errors.password && props.form.touched.password
    return(
        <div className={s.inputLogin}>
            <input {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}

export const InputLoginCaptcha= ( {field, ...props} ) => {
    
    const hasError = props.form.touched.captcha 
    return(
        <div className={s.InputLoginCaptcha}>
            <input {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}


export const InputProfileFacebook = ( {field, ...props} ) => {
    
    const hasError = (props.value.indexOf('https://') !==-1 &&  props.value.indexOf('.') !==-1) ? false : true
    return(
        <div className={s.inputContactInform}>
            <input {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}

export const InputProfileVk = ( {field, ...props} ) => {
    
    const hasError = (props.value.indexOf('https://') !==-1 &&  props.value.indexOf('.') !==-1) ? false : true
    return(
        <div className={s.inputContactInform}>
            <input {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}

export const InputProfileInstagram= ( {field, ...props} ) => {
    
    const hasError = (props.value.indexOf('https://') !==-1 &&  props.value.indexOf('.') !==-1) ? false : true
    return(
        <div className={s.inputContactInform}>
            <input {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}

export const InputProfileGithub = ( {field, ...props} ) => {
    
    const hasError = (props.value.indexOf('https://') !==-1 &&  props.value.indexOf('.') !==-1) ? false : true
    return(
        <div className={s.inputContactInform}>
            <input {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}

export const InputProfileYoutube = ( {field, ...props} ) => {
    
    const hasError = (props.value.indexOf('https://') !==-1 &&  props.value.indexOf('.') !==-1) ? false : true
    return(
        <div className={s.inputContactInform}>
            <input {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}

export const InputProfileMainLink = ( {field, ...props} ) => {
    
    const hasError = (props.value.indexOf('https://') !==-1 &&  props.value.indexOf('.') !==-1) ? false : true
    return(
        <div className={s.inputContactInform}>
            <input {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}

export const InputProfileWebsite= ( {field, ...props} ) => {
    
    const hasError = (props.value.indexOf('https://') !==-1 &&  props.value.indexOf('.') !==-1) ? false : true
    return(
        <div className={s.inputContactInform}>
            <input {...field} {...props} className={hasError ? s.textAreaError : ''}/>
        </div>
    )
}
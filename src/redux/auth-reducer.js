import { authAPI, securityAPI } from "../api/api"

const SET_USER_DATA = 'SET-USER-DATA'
const SET_ERROR_FROM_SERVER = 'SET-ERROR-FROM-SERVER'
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS'
const CLEAR_CAPTCHA_URL = 'CLEAT-CAPTCHA-URL'
const CLEAR_ERROR_FROM_SERVER = 'CLEAR-ERROR-FROM-SERVER'

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, captchaUrl}
}

export const setAuthUserData = (id, email, login, isAuth) => {
    return {type: SET_USER_DATA, payload: {id, email, login, isAuth}}
}

export const clearCaptchaUrl = () => {
    return {type: CLEAR_CAPTCHA_URL}
}

export const clearErrorFromServer = () => {
    return {type: CLEAR_ERROR_FROM_SERVER}
}

export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.authMe()
        .then(data => {
            
            if(data.resultCode === 0) {
                
                let {id, email, login} = data.data
                dispatch( setAuthUserData(id, email, login, true) )
            }
            
        })
    }
}

export const setErrorFromServer = (errorMessage) => {
    return {type: SET_ERROR_FROM_SERVER, errorMessage}
}

export const login = (email, password, rememberMe, captcha) => {
    
    return (dispatch) => {
        
        authAPI.login(email, password, rememberMe, captcha)
        .then((response) => {
            
            if(response.data.resultCode === 0) {
                //SUCCESS, GET AUTH DATA
                dispatch( getAuthUserData() )
                dispatch( clearCaptchaUrl() )
                dispatch( clearErrorFromServer() )
            }else {
                if(response.data.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
                dispatch(setErrorFromServer(response.data.messages[0]))
            }
            
            
        })
    }
}

export const logout = () => {

    return (dispatch) => {
        authAPI.logout()
        .then((response) => {
            if(response.data.resultCode === 0) {
                dispatch( setAuthUserData(null, null, null, false) )
            }
        })
    }
}

export const getCaptchaUrl = () => {

    return (dispatch) => {
        securityAPI.getCaptchaUrl()
        .then((response) => {
            dispatch(getCaptchaUrlSuccess(response.data.url))
        })
    }
}

let initialState = {
    
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorFromServer: '',
    captchaUrl: null, // IF 'NULL', THEN CAPTCHA IS NOT REQUIRED

}

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case SET_USER_DATA:
            
            return(
                {
                    ...state,
                    ...action.payload,
                    
                    
                }
            )
        case SET_ERROR_FROM_SERVER:
            return(
                {
                    ...state,
                    errorFromServer: action.errorMessage
                }
            )
        case CLEAR_ERROR_FROM_SERVER:
            return(
                {
                    ...state,
                    errorFromServer: ''
                }
            )
        case GET_CAPTCHA_URL_SUCCESS:
            return(
                {
                    ...state,
                    captchaUrl: action.captchaUrl
                }
            ) 
        case CLEAR_CAPTCHA_URL:
            return(
                {
                    ...state,
                    captchaUrl: null
                }
            )       
        default:
            return state
    }

}

export default authReducer
import { profileAPI } from "../api/api"
import  store  from '../redux/redux-store'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'
const SET_ERROR_FROM_SERVER = 'SET-ERROR-FROM-SERVER'
const SET_EMPTY_ERROR_FROM_SERVER = 'SET-EMPTY-ERROR-FROM-SERVER'

export const addPost = (newPostText) => {
    return {type: ADD_POST, newPostText}
}
export const setUserProfile = (profile) => {
    return {type:SET_USER_PROFILE, profile}
}
export const setStatus = (status) => {
    return {type:SET_STATUS, status}
}
export const savePhotoSucces = (photos) => {
    return {type:SAVE_PHOTO_SUCCESS, photos}
}
export const setErrorFromServer = (errorMessage) => {
    return {type: SET_ERROR_FROM_SERVER, errorMessage}
}
export const setEmptyErrorFromServer = () => {
    return {type: SET_ERROR_FROM_SERVER, }
}


export const getProfile = (id) => {

    return (dispatch) => {
        profileAPI.getProfile(id)
            .then(response => {
            
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getStatus = (id) => {
    return (dispatch) =>{
        profileAPI.getStatus(id)
        .then((response) => dispatch(setStatus(response.data)))
    }
}
export const updateStatus = (status) => {
    return (dispatch) =>{
        profileAPI.updateStatus(status)
        .then((response) => {

            if(response.data.resultCode ===0) dispatch(setStatus(status))
        })
    }
}
export const savePhoto = (photoFile) => {
    
    return (dispatch) =>{
        profileAPI.savePhoto(photoFile)
        .then((response) => {

            if(response.data.resultCode === 0) dispatch( savePhotoSucces(response.data.data.photos) )
        })
    }
}
export const saveProfile = (profile) => {
    

    return async (dispatch) => {
        const userId = store.getState().auth.id
        const response = await profileAPI.saveProfile(profile)

        if (response.data.resultCode === 0) {
            dispatch( getProfile(userId) )
        }else {
            dispatch(setErrorFromServer(response.data.messages[0]))
            return Promise.reject(response.data.messages[0])
        }
    }
    
    
}




let initialState = {
    posts: [
        {id:1, post:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',},
        {id:2, post:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat',},
        {id:3, post:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.',},
        {id:4, post:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiten, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit en lorem ipsum der.',},
        
    ],
    profile: null,
    status: '',
    errorFromServer:'',
}

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: 
            return (
                {
                    ...state,
                    posts: [...state.posts, {id: 5, post: action.newPostText, likesCount: 0,}],
                    
                }
            )
        case SET_USER_PROFILE:
            
                return (
                    {
                        ...state, profile: action.profile
                    }
                )
        case SET_STATUS:
            return (
                {
                    ...state, status: action.status
                }
            )
        case SAVE_PHOTO_SUCCESS:
            return (
                {
                    ...state, profile: {...state.profile, photos: action.photos}
                }
            )
        case SET_ERROR_FROM_SERVER:
            return(
                {
                    ...state,
                    errorFromServer: action.errorMessage
                }
            )
        case SET_EMPTY_ERROR_FROM_SERVER:
            return(
                {
                    ...state,
                    errorFromServer: ''
                }
            )
        default:
            return state
    }

}

export default profileReducer
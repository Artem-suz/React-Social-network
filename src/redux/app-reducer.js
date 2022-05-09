import { getAuthUserData } from "./auth-reducer"

const INITIALIZED_SUCCES = 'INITIALIZED-SUCCES'


export const setInitializedSuccess = () => {
    return {type: INITIALIZED_SUCCES}
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())
        
        Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccess())
        })
        
    }
}

let initialState = {
    initialized: false,

}

const appReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case INITIALIZED_SUCCES:
            
            return(
                {
                    ...state,
                    initialized: true,
                }
            )
                
        default:
            return state
    }

}

export default appReducer
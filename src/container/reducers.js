import * as actionType from './types';

const initialState = { isLoggedIn : false, user : null }

// reducer
export default function rootReducer(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case actionType.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            }
        case actionType.REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false
            }
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user
            }
        case actionType.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn : false,
                user : null
            }
        case actionType.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user : null
            }
        default: 
            return state;
    }
}
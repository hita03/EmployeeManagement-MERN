import * as actionType from './types';
import * as AuthService from '../components/services/auth.service';

// register action
export const registerAction = (payload) => (dispatch) => {
    return AuthService.register(payload)
        .then(response => {
            
            dispatch({
                type: actionType.REGISTER_SUCCESS,
                payload : response.data
            })
            
            return Promise.resolve(response.data)

        })
        .catch(error => {

            dispatch({
                type : actionType.REGISTER_FAIL,
                payload : { err : error.message || "Registration Failed"}
            })

            return Promise.reject(error)

        })
}

// login action

export const loginAction = (userCredential) => (dispatch) =>{
    return AuthService.login(userCredential)
        .then(data => {

            dispatch({
                type : actionType.LOGIN_SUCCESS,
                payload : data
            })
            return Promise.resolve(data)
        })
        .catch(error => {

            dispatch({
                type : actionType.REGISTER_FAIL,
                payload : { err : error.message || "Login Failed" }
            })
            return Promise.reject(error)
        })
}

// logout action
export const logoutAction = () => (dispatch) => {
    const msg = AuthService.logout()

    dispatch({
        type : actionType.LOGOUT,
        payload : { msg }
    })

    return Promise.resolve(msg)

}
import { Dispatch } from "redux";
import ToastHot from 'react-hot-toast';

export const loginAction = (data: { login_email: string; login_password: string; }) => {
    if (data.login_email === "prasanta@technoexponent.com" && data.login_password === "Prasanta@1")
        return (dispatch : Dispatch) => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: data.login_email
            })
            console.log("Login Success");
            ToastHot.success("Login Success");
        }
    else {
        return (dispatch: Dispatch) => {
            dispatch({
                type: 'LOGIN_FAILURE'
            })
            console.log("Login Failure");
            ToastHot.error("Login Failure");
        }
    }
}

export const logoutAction = () => {
    return (dispatch : Dispatch) => {
        dispatch({
            type: 'LOGOUT_SUCCESS',
        })
        console.log("Logout Success");
        ToastHot.success("Logout Success");
    }
}
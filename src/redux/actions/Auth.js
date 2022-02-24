import {
    SIGNIN,
    SIGNOUT
} from '../constants/Auth';

export const login = (user) => {
    return {
        type: SIGNIN,
        payload: user
    }
}


export const logout = () => {
    return {
        type: SIGNOUT
    }
}
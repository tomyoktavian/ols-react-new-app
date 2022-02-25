import {
    SIGNIN,
    SIGNOUT
} from '../constants/Auth';

const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') ? localStorage.getItem('isAuthenticated') : false,
    user: localStorage.getItem('session') ? JSON.parse(localStorage.getItem('session')) : {}
};

export default function getAuth(state = initialState, action) {
    switch (action.type) {
        case SIGNIN:
            localStorage.setItem("session", JSON.stringify(action.payload))
            localStorage.setItem("isAuthenticated", true)
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case SIGNOUT:
            localStorage.removeItem('session')
            localStorage.setItem("isAuthenticated", false)
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            };
        default:
            return state;
    }
}
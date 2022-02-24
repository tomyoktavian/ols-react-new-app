import {
    SIGNIN,
    SIGNOUT
} from '../constants/Auth';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function getAuth(state = initialState, action) {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case SIGNOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            };
        default:
            return state;
    }
}
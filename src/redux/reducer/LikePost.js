import {
    LIKED_POST,
    UNLIKEPOST
} from '../constants/LikePost';


const initialState = {
    post: [],
};


export default function getLikePost(state = initialState, action) {
    switch (action.type) {
        case LIKED_POST:
            return {
                ...state,
                post: action.payload
            };
        case UNLIKEPOST:
            return {
                ...state,
                post: action.payload
            };
        default:
            return state;
    }
}

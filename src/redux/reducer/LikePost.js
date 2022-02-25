import {
    LIKED_POST,
    UNLIKEPOST
} from '../constants/LikePost';


const initialState = {
    postLike: localStorage.getItem('postLike') ? JSON.parse(localStorage.getItem('postLike')) : [],
};


export default function getLikePost(state = initialState, action) {
    switch (action.type) {
        case LIKED_POST:
            localStorage.setItem("postLike", JSON.stringify([...state.postLike, `${action.payload}`]))
            return {
                ...state,
                postLike: [...state.postLike, `${action.payload}`]
            };
        case UNLIKEPOST:
            const newPostLike = state.postLike.filter(post => post !== `${action.payload}`);
            localStorage.setItem("postLike", JSON.stringify(newPostLike))
            return {
                ...state,
                postLike: newPostLike
            };
        default:
            return state;
    }
}

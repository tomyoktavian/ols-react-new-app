import {
    LIKED_POST,
    UNLIKEPOST
} from './../constants/LikePost';


export const likePost = (post) => {
    return {
        type: LIKED_POST,
        payload: post
    }
}


export const unlikePost = (post) => {
    return {
        type: UNLIKEPOST,
        payload: post
    }
}
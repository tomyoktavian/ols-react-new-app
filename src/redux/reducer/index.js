import { combineReducers } from 'redux';
import getAuth from './Auth';
import getTombolSidebar from './TombolSidebar';
import getLikePost from './LikePost';

const rootReducer = combineReducers({
    getAuth,
    getTombolSidebar,
    getLikePost
});

export default rootReducer;
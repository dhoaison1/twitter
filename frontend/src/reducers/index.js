import { combineReducers } from 'redux';

import userReducer from './userReducer';
import postReducer from './postReducer';
import followingReducer from './followingReducer';
import followerReducer from './followerReducer';
import authenticatedReducer from './authenticateReducer';

export default combineReducers({
    // userReducer: userReducer,
    // postReducer: postReducer,
    // followingReducer,
    // followerReducer,
    authenticatedReducer: authenticatedReducer
})
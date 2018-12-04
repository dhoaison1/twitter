import { combineReducers } from 'redux';

import userReducer from './userReducer';
import postReducer from './postReducer';
import followingReducer from './followingReducer';

export default combineReducers({
    userReducer: userReducer,
    postReducer: postReducer,
    followingReducer
})
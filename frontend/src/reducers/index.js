import { combineReducers } from 'redux';

import postReducer from './postReducer';
import authenticatedReducer from './authenticateReducer';

export default combineReducers({
    postReducer: postReducer,
    authenticatedReducer: authenticatedReducer
})
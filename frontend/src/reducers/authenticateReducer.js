import { LOGOUT, GET_USER } from '../action/type';

const intitialState = {
    isAuthenticated: false,
    user: {
        username: '',
        post: [],
        following: [],
        follower: []
    }
}

export default (state = intitialState, action) => {
    switch(action.type) {
        case LOGOUT:
            return {
                isAuthenticated: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: Boolean(action.payload),
            }
        default:
            return intitialState;
    }
}

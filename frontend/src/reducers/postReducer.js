import { GET_FOLLOWING_POST } from '../action/type';

const initialState = {}

export default (state = initialState , action) => {
    switch (action.type) {
      case GET_FOLLOWING_POST:
        return action.payload;
      default:
        return state;
    }
}
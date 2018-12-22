import { GET_FOLLOWING_POST } from './type';

export const GetFollowingPost = (followingAddress) => {
    return (dispatch) => {
        //axios
        dispatch(GetPostSuccess)
    }
}

export const GetPostSuccess = data => {
    return {
        type: GET_FOLLOWING_POST,
        payload: data
    }
}
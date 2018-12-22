import { UPDATE_USER_INFOR, GET_USER_INFOR } from './type';
import axios from 'axios';

export const updateUser = (data) => {
    return {
        type: UPDATE_USER_INFOR,
        payload: data
    }
}


export const GetUserInfor = (address)  => {
    return (dispatch) => {
        return axios.post('/user', {address: address})
        .then(res => {
            console.log(res);
            dispatch(GetUserInforSuccess(res.data))
        })
        .catch(err => {
            console.log(err);
        })
    }
    
}

export const GetUserInforSuccess = data => {
    return {
        type: GET_USER_INFOR,
        payload: data
    }
}
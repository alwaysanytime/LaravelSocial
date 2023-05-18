import axios from 'axios';
import SERVER_URL from '../../config/config';

export const loginAction = (payload) => dispatch => {
    dispatch({type: 'START_LOADING'});
    axios.post( SERVER_URL + '/api/login', payload)
        .then(res => {
            console.log('res', res);
            if (res.status == 200) {
                dispatch({type: 'SET_USER', payload:res.data});
                dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Loggedin Successfully'}});
            }
            else dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: res.response.data.message}});
            dispatch({type: 'STOP_LOADING'});
        });
}

export const registerAction = (payload) => dispatch => {
    dispatch({type: 'START_LOADING'});
    axios.post(SERVER_URL + '/api/register', payload)
        .then(res => {
            if (res.status == 200) {
                dispatch({type: 'SET_USER', payload:res.data});
                dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Registered Successfully'}});
            }
            else dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: res.response.data.message}});
            dispatch({type: 'STOP_LOADING'});
        });
}

export const logoutAction = () => dispatch => {
    axios.get(SERVER_URL + '/api/logout')
        .then(res => {
            dispatch({type: 'LOGOUT'});
        });

}

export const updateaccountAction = (payload) => dispatch => {
    axios.post(SERVER_URL + '/api/updateaccount', payload)
        .then(res => {
            if (res.status == 200) {
                dispatch({type: 'UPDATE_ACCOUNT', payload});
                dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Account Updated Successfully'}});
            } else  dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: res.response.data.message}});
        });
}

export const updatePasswordAction = (payload) => dispatch => {
    axios.post(SERVER_URL + '/api/changepassword', payload)
        .then(res => {
            if (res.status == 200)
                dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Password Changed Successfully'}});
            else  dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: res.response.data.message}});
        });
}

export const verificationAction = () => dispatch => {
    axios.get(SERVER_URL + '/api/email/verification')
        .then(res => {
            if (res.status == 200)
                dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Verification Link sent'}});
            else  dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: res.response.data.message}});
        })
}

export const uploadAction = (payload) => dispatch => {
    axios.post(SERVER_URL + '/api/avatar', {avatar: payload.avatar})
        .then(res => {
            if (res.status == 200) {
                dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Uploaded Successfully'}});
                dispatch({type: 'SET_AVATAR', payload: res.data.link})
            }
            else  dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: res.response.data.message}});
        })
}

export const verifyCheckAction = () => dispatch => {
    axios.post(SERVER_URL + '/api/verifycheck')
        .then(res => {
            if (res.status == 200) {
                dispatch({type: 'SET_VERIFY', payload: res.data.verify})
            }
            else  dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: res.response.data.message}});
        });
    axios.post(SERVER_URL + '/api/getavatar')
        .then(res => {
            dispatch({type: 'SET_AVATAR', payload: res.data.avatar})
        });
}

export const getCurrentUserAction = () => dispatch => {
    axios.post(SERVER_URL + '/api/getcurrentuser')
        .then(res => {
            if (res.status == 200) {
                dispatch({type: 'SET_USER', payload:res.data});
                const user = res.data.data;
                if (user.email_verified_at) {
                    const verify = localStorage.getItem('verify');
                    if (!verify)
                        dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Email Confirmed. Your Profile is Live!'}});
                    localStorage.setItem('verify', true);
                }
            }
            else dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: res.response.data.message}});
        });
}

export const toggleCompactAction = () => dispatch => {
    axios.post(SERVER_URL + '/api/togglesocial', {show: false})
        .then(res => {
            if (res.status == 200) {
                dispatch({type: 'TOGGLE_SOCIAL', payload:res.data});
            }
            else dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: res.response.data.message}});
        });
}

export const toggleSocialAction = (action = "social") => dispatch => {
    axios.post(SERVER_URL + '/api/togglesocial', {show: true, action})
        .then(res => {
            if (res.status == 200) {
                if (action == "social") dispatch({type: 'TOGGLE_SHOWSOCIAL'});
                else if (action == "badge") dispatch({type: 'TOGGLE_BADGE'});
                else if (action == "suggest") dispatch({type: 'TOGGLE_SUGGEST'});
                else dispatch({type: 'TOGGLE_FOLLOW'});
            }
        });
}

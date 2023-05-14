import axios from "axios";

export const getFollowInfoAction = () => dispatch => {
    axios.post('/follow-data')
        .then(res => {
            dispatch({type: 'SET_FOLLOW', payload: res.data})
        })
}

export const followUserAction = (username) => dispatch => {
    dispatch({type: 'START_LOADING'});
    axios.post('/follow', {username})
        .then(res => {
            if (res.status == 200) {
                dispatch({type: 'FOLLOW_USER', payload: res.data.user});
                dispatch({type: 'STOP_LOADING'});
            }
        })
}

export const unfollowUserAction = (username) => dispatch => {
    dispatch({type: 'START_LOADING'});
    axios.post('/unfollow', {username})
        .then(res => {
            if (res.status == 200) {
                dispatch({type: 'UNFOLLOW_USER', payload: username});
                dispatch({type: 'STOP_LOADING'});
            }
        });
}
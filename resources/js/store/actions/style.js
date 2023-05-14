import axios from 'axios';

export const styleListAction = () => dispatch => {
    axios.post('/styles')
        .then(res => dispatch({type:'SET_STYLES', payload:res.data.styles}));
};
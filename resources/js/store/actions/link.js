import axios from 'axios';

export const linkListAction = (id) => dispatch => {
    axios.get(`/links`)
        .then(res => {
            dispatch({type: 'SET_LINKS', payload: res.data.links});
        });
}

export const updateLinkAction = (id, title, url, admin) => dispatch => {
    const link = admin ? '/admin' : '';
    let _url = url;
    if (url) {
        const pos = _url.indexOf("?tag=");
        if (pos != -1) 
            _url = url.substr(0, pos);
    }
    axios.post(link + '/links/update', {id, title, url:_url})
        .then(res => {
            dispatch({type: 'UPDATE_LINK', payload: {id, title, url: res.data.url}})
        });
}

export const removeLinkAction = (id, admin) => dispatch => {
    const link = admin ? '/admin' : '';
    axios.post(link + '/links/delete', {id})
        .then(res => {
            if (res.status == 200) {
                dispatch({type: 'REMOVE_LINK', payload: id});
                dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Link Deleted Successfully'}});
            } else dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: res.response.data.message}});
        });
}

export const addLinkAction = (admin) => dispatch => {
    const link = admin ? '/admin' : '';
    dispatch({type: 'START_LOADING'});
    axios.post(link + '/links/insert', {title: '', url: '', username: admin})
     .then(res => {
         if (res.status == 200) {
            dispatch({type: 'ADD_LINK', payload: {id: res.data.id}});
            dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Link Added Successfully'}});
         } else dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: res.response.data.message}});
         dispatch({type: 'STOP_LOADING'});
     });
}

export const toggleLinkAction = (id, admin) => dispatch => {
    const link = admin ? '/admin' : '';
    axios.post(link + '/links/toggle', {id})
     .then(res => {
         dispatch({type: 'TOGGLE_LINK', payload: id})
     });
}

export const toggleMaskAction = (id, admin) => dispatch => {
    const link = admin ? '/admin' : '';
    axios.post(link + '/links/togglemask', {id})
     .then(res => {
         dispatch({type: 'TOGGLE_MASK', payload: id})
     });
}

export const swapLinkAction = ({from, to, _from, _to, admin}) => dispatch => {
    const link = admin ? '/admin' : '';
    dispatch({type: 'SWAP_LINK', payload: {from: _from, to: _to}});
    axios.post(link + '/links/swap', {from, to});
}
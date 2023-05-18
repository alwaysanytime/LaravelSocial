import { setAuthToken } from '../../config/config';
import SERVER_URL from '../../config/config';

const initialState = {
    username: '',
    email: '',
    token: '',
    loggedin: false,
    display: 'Olivia',
    bio: 'These are my links',
    style: 1,
    email_verified_at: '',
    isLoading: false,
    avatar: 'https://bookings247.co/avatar/default.png',
    display: '',
    social: 0,
    referr: '',
    showsocial: true,
    showfollow: true,
    follow: '',
    badge: false,
    verified: false,
    follow: -1,
    following: 0,
    suggest: 1,
    emailsend: 1,
}

const authReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_SUGGEST':
            return {
                ...state,
                suggest: !state.suggest
            }
        case 'SET_FOLLOW':
            return {
                ...state,
                follow: action.payload
            }
        case 'TOGGLE_BADGE':
            return {
                ...state,
                badge: !state.badge
            }
        case 'TOGGLE_FOLLOW':
            return {
                ...state,
                showfollow: !state.showfollow
            }
        case 'TOGGLE_SHOWSOCIAL':
            return {
                ...state,
                showsocial: !state.showsocial
            }
        case 'SET_REFERR':
            return {
                ...state,
                referr: action.payload
            };
        case 'TOGGLE_SOCIAL':
            return {
                ...state,
                social: !state.social
            }
        case 'SET_VERIFY':
            return {
                ...state,
                email_verified_at: action.payload
            };
        case 'SET_AVATAR':
            let _avatar = action.payload;
            if (_avatar != "") _avatar = SERVER_URL + _avatar;
            localStorage.setItem('avatar', _avatar);
            return {
                ...state,
                avatar: _avatar
            };
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload
            }
        case 'SET_USER':
            let avatarurl = action.payload.data.avatar;
            if (avatarurl != "") avatarurl = SERVER_URL + avatarurl;
            if (action.payload.token) {
                localStorage.setItem('token', 'Bearer ' + action.payload.token);
                setAuthToken('Bearer ' + action.payload.token);
            }
            return {
                token: action.payload.token ? action.payload.token : state.token,
                ...action.payload.data,
                loggedin: true,
                avatar: avatarurl
            }
        case 'LOAD_FROM_STORAGE':
            const username = localStorage.getItem('username');
            const token = localStorage.getItem('token');
            const email = localStorage.getItem('email');
            const id = localStorage.getItem('id');
            const display = localStorage.getItem('display');
            const bio = localStorage.getItem('bio');
            const style = localStorage.getItem('style');
            const email_verified_at = localStorage.getItem('email_verified_at');
            const avatar = localStorage.getItem('avatar');
            setAuthToken(token);
            return {
                username,
                token,
                email,
                id,
                loggedin: true,
                display,
                bio,
                style,
                email_verified_at,
                avatar,
            }
        case 'LOGOUT':
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            localStorage.removeItem('id');
            localStorage.removeItem('bio');
            localStorage.removeItem('display');
            localStorage.removeItem('style');
            localStorage.removeItem('email_verified_at');
            localStorage.removeItem('avatar');
            return initialState;
        case 'UPDATE_ACCOUNT':
            Object.keys(action.payload).map(key => {localStorage.setItem(key, action.payload[key])});
            return {
                ...state,
                ...action.payload
            }
        case 'START_LOADING':
            return {
                ...state,
                isLoading: true
            };
        case 'STOP_LOADING':
            return {
                ...state,
                isLoading: false
            };
        default:
            return state || initialState;
    }
};

export default authReducer;

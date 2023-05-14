const initialState = {
    follower: [],
    following: [],
    tab: "following",
    bottom: false,
    followercount: 0,
    followingcount: 0
};

const followReducer = (state, action) => {

    const {type, payload} = action;
    switch(type) {
        case 'TOGGLE_BOTTOM':
            return {
                ...state,
                bottom: !state.bottom
            }
        case 'SET_FOLLOW':
            return {
                ...state,
                ...payload
            };
        case 'FOLLOW_USER':
            return {
                ...state,
                following: [...state.following, payload]
            }
        case 'UNFOLLOW_USER':
            return {
                ...state,
                following: state.following.filter(fol => fol.username != payload)
            }
        case 'TOGGLE_TAB':
            return {
                ...state,
                tab: state.tab == "following" ? "follower" : "following"
            }
        default:
            return state || initialState;
    }

};

export default followReducer;
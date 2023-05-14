const initialState = [];

const styleReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'SET_STYLES':
            return [...payload]
        default:
            return state || initialState;
    }
};

export default styleReducer;
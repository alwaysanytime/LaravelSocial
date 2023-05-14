const messageReducer = (state, action) => {

    const { type, payload } = action;

    switch(type) {
        case 'ADD_MESSAGE':
            return [
                ...state, 
                action.payload
            ];
        case 'CLEAR_MESSAGES':
            return [];
        default:
            return state || [];
    }

};

export default messageReducer;
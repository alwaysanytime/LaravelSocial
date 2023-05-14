const initialState = [
    {title: 'My Personal Website', url: 'https://personal', enable: true, id: 1, alert: 0},
    {title: 'Amazon Wishlist', url: 'https://amazon', enable: true, id: 2, alert: 0},
    {title: 'Instagram', url: 'https://instagram.com', enable: true, id: 3, alert: 0},
    {title: 'Tiktok', url: 'https://tiktok.com', enable: true, id: 4, alert: 0}
]

const linksReducer = (state, action) => {

    const {type, payload} = action;

    switch(type) {
        case 'MESSAGE_SEND':
            return state.map((link, index) => index == payload ? {...link, alert: 1} : link);
        case 'ADD_LINK':
            return [
                {
                    title: 'Title',
                    url: 'Link',
                    id: payload.id,
                    enable: true,
                    mask: 0
                },
                ...state,
            ];
        case 'REMOVE_LINK':
            return state.filter(link => link.id != payload);
        case 'UPDATE_LINK':
            return state.map(link => link.id == payload.id ? {...link, title: payload.title, url: payload.url} : link);
        case 'TOGGLE_LINK':
            return state.map(link => link.id == payload ? {...link, enable: !link.enable} : link);
        case 'TOGGLE_MASK':
            return state.map(link => link.id == payload ? {...link, mask: !link.mask} : link);
        case 'SET_LINKS':
            return [...payload];
        case 'SWAP_LINK':
            let links = [...state];
            const {from, to} = payload
            if (from > to) {
                let before = {...links[from]};
                for (let i = to; i <= from; i++) {
                    const temp = {...links[i]};
                    links[i] ={...before, id:links[i].id};
                    before = temp;
                }
            } else {
                let before = {...links[from]};
                for (let i = to; i >= from; i--) {
                    const temp = {...links[i]};
                    links[i] ={...before, id:links[i].id};
                    before = temp;
                }
            }
            console.log(links);
            return links;
        default:
            return state || initialState;
    }

};

export default linksReducer;
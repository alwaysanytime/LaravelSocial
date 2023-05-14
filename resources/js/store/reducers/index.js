import { combineReducers } from "redux";
import authReducer from './auth';
import linksReducer from "./links";
import messageReducer from './message';
import styleReducer from "./style";
import followReducer from './follow';

const rootReducer = combineReducers({
    auth: authReducer,
    links: linksReducer,
    messages: messageReducer,
    styles: styleReducer,
    follow: followReducer,
});

export default rootReducer;
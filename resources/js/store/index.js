import thunk from 'redux-thunk';
import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import { applyMiddleware } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
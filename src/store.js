import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import UserReducer from './reducers/UserReducer';
import { productReducer } from './reducers/products';

const reducer = combineReducers({
    users: UserReducer,
    products: productReducer
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

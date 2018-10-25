import {createStore, applyMiddleware, combineReducers} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunk from 'redux-thunk';

import UserReducer from './reducers/UserReducer';
import { productReducer } from './reducers/products';

const reducer = combineReducers({
    users: UserReducer,
    products: productReducer
});

const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunk));

export default store;

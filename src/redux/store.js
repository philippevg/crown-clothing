import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import combineReducers from './root-reducer';

const middlewares = [logger];

//TODO/ check combine reducers eens?
const store = createStore(combineReducers, applyMiddleware(...middlewares));

export default store;

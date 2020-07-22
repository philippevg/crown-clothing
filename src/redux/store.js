import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from "redux-persist";
import createSagaMiddleWare from 'redux-saga';

import combineReducers from './root-reducer';
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleWare();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development')
    middlewares.push(logger);

export const store = createStore(combineReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga());

export const persistor = persistStore(store);

export default { store, persistor };

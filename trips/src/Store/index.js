//import {configureStore, applyMiddleware, getDefaultMiddleware} from '@reduxjs/toolkit';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './Modules/rootReducer';
import rootSaga from './Modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
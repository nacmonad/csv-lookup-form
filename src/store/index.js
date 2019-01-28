import { actionCreators,  } from 'redux'
import { compose, applyMiddleware, combineReducers, createStore } from 'redux'
import form from './form';
import workbook from './workbook';

import createSagaMiddleware from 'redux-saga'

import {downloadFormRequestedSaga} from './formSagas';


// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
/* eslint-enable no-underscore-dangle */

// Apply Middleware & Compose Enhancers
const enhancers = [];
const middleware = [];


const rootReducer = combineReducers({
    form,
    workbook,
});


const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));

const enhancer = composeEnhancers(...enhancers);

export default createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(downloadFormRequestedSaga);

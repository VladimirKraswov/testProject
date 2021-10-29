import {createStore as createReduxStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import reducer from './reducer';

const middleware = [thunk];

const createStore = reducer =>
  createReduxStore(reducer, applyMiddleware(...middleware));

const store = createStore(reducer);

export default store;

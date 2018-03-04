import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from './reducers/';
import * as api from './api';
import * as schema from './normalizr.schema';

const initialState = {
  decks: {}
};

const thunkWithExtras = thunk.withExtraArgument({ api, schema });

const configureStoreDev = (params) => {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunkWithExtras,
  ];

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );

  return store;
}

const configureStoreProd = () => {
  const middlewares = [
    thunkWithExtras
  ];

  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middlewares)
    )
  );

  return store;
}

const isProd = process.env.NODE_ENV === 'production';
const configureStore = isProd ? configureStoreProd : configureStoreDev;

export default configureStore;
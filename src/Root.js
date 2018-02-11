import React from 'react';
import { Provider } from 'react-redux';

import createStore from './createStore';

import Home from './containers/Home';

const store = createStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default Root;
import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native'

import createStore from './createStore';

import Navigation from './components/Navigation';

const store = createStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default Root;
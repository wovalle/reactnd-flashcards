import React from 'react';
import { Provider } from 'react-redux';

import createStore from './createStore';

import Navigation from './components/Navigation';

const store = createStore();

class Root extends React.Component {
  state = {
    fontsLoaded: false,
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded)
      return null

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

export default Root;
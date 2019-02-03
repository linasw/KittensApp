import React, {Component} from 'react';
import {NativeModules} from 'react-native';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';

import App from './App.container';

const store = initStore();

class Kittens extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Kittens;
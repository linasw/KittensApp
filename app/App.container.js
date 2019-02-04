import React, {Component} from 'react';
import Router from './routes/index';
import { createAppContainer} from "react-navigation";

const AppContainer = createAppContainer(Router);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

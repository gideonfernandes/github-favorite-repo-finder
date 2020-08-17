import 'react-native-gesture-handler';
import React, { Component } from 'react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';

import Routes from './routes';

class App extends Component {
  render () {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </>
    );
  }
};

export default App;

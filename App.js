import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { Provider } from 'react-redux';
import Router from './src/Router';
import store from './store';

if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <StatusBar backgroundColor="black" barStyle={'light-content'} />
        <Provider store={store} >
          <Router />
        </Provider>
      </SafeAreaView>
    )
  }
}

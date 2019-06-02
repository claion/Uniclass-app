import React, { Component } from 'react';
import {AppLoading } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {SafeAreaView} from 'react-native';

import downloadImagesAsync from './assets/assets';
import Init from './Init.js';
import reducer from './redux';

let store = createStore(reducer);

export default class App extends Component {
  state = {
    loading: true
  }

  handleError = e => console.error(e);
  handleLoaded = () => this.setState({loading: false})
  loadAssets = async () => {
    await downloadImagesAsync();
  }

  render() {
    const {loading} = this.state;
    if (loading) {
      return <AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError} />
    } else {
      return (
        <Provider store={store}>
          <SafeAreaView style={flex=0} />
          <Init />
        </Provider>
      )
    } 
  }
}

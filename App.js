import React, { Component } from 'react';
import {AppLoading } from 'expo';
import { Provider } from 'react-redux';

import downloadImagesAsync from './assets/assets';
import Init from './Init.js';
import configureStore from './redux';
import { PersistGate } from 'redux-persist/integration/react';

const {persistor, store} = configureStore();

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
          <PersistGate persistor={persistor}>
            <Init />
          </PersistGate>
        </Provider>
      )
    } 
  }
}

import React, { Component } from 'react';
import { AppLoading, Asset } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import assets from './constants/assets';
import AppContainerNavigator from './navigators/AppContainerNavigator';
import configureStore from './redux';

const { persistor, store } = configureStore();

export default class App extends Component {
  state = {
    loading: true
  };

  handleError = e => console.error(e);
  handleLoaded = () => this.setState({ loading: false });
  loadAssets = async () => {
    await Asset.loadAsync(Object.values(assets));
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppContainerNavigator />
          </PersistGate>
        </Provider>
      );
    }
  }
}

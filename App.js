import React, { Component } from 'react';
import downloadImagesAsync from './assets/assets';
import {AppLoading } from 'expo'
import Init from './Init.js'

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
      return <Init />
    } 
  }
}

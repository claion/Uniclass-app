import React from 'react';
import LoginScreen from './screens/loginScreen';
import Loading from './components/loading';

export default class App extends React.Component {
  state = {
    loading: false
  }
  render() {
    const {loading} = this.state;
    if (loading) {
      return <Loading/>
    } else {
      return <LoginScreen />
    } 
  }
}

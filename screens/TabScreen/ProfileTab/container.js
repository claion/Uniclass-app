import React from 'react';
import PropTypes from 'prop-types';

import Presenter from './presenter';

export default class extends React.Component {
    static propTypes = { 
        logout: PropTypes.func.isRequired
    }

    async _logout () {
        const {logout, navigation: {navigate}} = this.props
    
        await logout();
        navigate('AccountNavigator');
    }

    render() {
        
        return <Presenter logout={this._logout.bind(this)} />
    }
}
import React, { Component } from 'react';
import OuterStack from './OuterStack';
import { AppRegistry } from 'react-native';

export default class CustomDrawer extends Component {
    render() {
        return ( <
            OuterStack / >
        );
    }
}

AppRegistry.registerComponent('CustomDrawer', () => CustomDrawer);
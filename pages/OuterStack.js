import React, { Component } from 'react';

import Routers from './routes';
import MainScreen from './MainScreen';
import { StackNavigator } from 'react-navigation';

import Login from './login';
import Register from './register';
import ForgetPassword from './ForgetPassword';
const OuterStack = StackNavigator({
    MainScreen: {
        screen: MainScreen,
    },
	Routers: {
        screen: Routers,
		navigationOptions: {
			header: null,
		}
    },
	Login: {
		screen: Login,
	},
	Register: {
		screen: Register,
	},
	ForgetPassword: {
		screen:ForgetPassword,
	}
	
});
export default OuterStack;
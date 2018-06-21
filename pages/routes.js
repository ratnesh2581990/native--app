import React, { Component } from 'react';
import HomeScreen from './home';
import Login from './login';
import Register from './register';
import Profile from './profile';
import SideMenu from './sidemenu';
import MenuIcon from './hemburg';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


const FirstActivity_StackNavigator = StackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: < MenuIcon navigationProps = { navigation }
            />,
            headerStyle: {
                backgroundColor: '#FF9800'
            },
            headerTintColor: '#fff',
        })
    },
});

// const SecondActivity_StackNavigator = StackNavigator({
    // Login: {
        // screen: Login,
        // navigationOptions: ({ navigation }) => ({
            // title: 'Login',
            // headerLeft: < MenuIcon navigationProps = { navigation }
            // />,
            // headerStyle: {
                // backgroundColor: '#FF9800'
            // },
            // headerTintColor: '#fff',
            // headerRight:
                // <TouchableOpacity
            // onPress={() => navigation.navigate('Home')
            // }
            // style = {
                // { margin: 10, backgroundColor: 'orange', padding: 10 }
            // } >
            // <
            // Text style = {
                // { color: '#ffffff' }
            // } > Home < /Text> < /
            // TouchableOpacity > ,
        // })
    // },
// });


// const ThirdActivity_StackNavigator = StackNavigator({
    // Register: {
        // screen: Register,
        // navigationOptions: ({ navigation }) => ({
            // title: 'Registration',
            // headerLeft: < MenuIcon navigationProps = { navigation }
            // />,
            // headerStyle: {
                // backgroundColor: '#FF9800'
            // },
            // headerTintColor: '#fff',
            // headerRight:
                // <
                // TouchableOpacity
            // onPress = {
                // () => navigation.navigate('Home')
            // }
            // style = {
                // { margin: 10, backgroundColor: 'orange', padding: 10 }
            // } >
            // <
            // Text style = {
                // { color: '#ffffff' }
            // } > Home < /Text> < /
            // TouchableOpacity > ,
        // })
    // },
// });

// const FourthActivity_StackNavigator = StackNavigator({
    // Profile: {
        // screen: Profile,
        // navigationOptions: ({ navigation }) => ({
            // title: 'Profile',
            // headerLeft: < MenuIcon navigationProps = { navigation }
            // />,
            // headerStyle: {
                // backgroundColor: '#FF9800'
            // },
            // headerTintColor: '#fff',
            // headerRight:
                // <
                // TouchableOpacity
            // onPress = {
                // () => navigation.navigate('Home')
            // }
            // style = {
                // { margin: 10, backgroundColor: 'orange', padding: 10 }
            // } >
            // <
            // Text style = {
                // { color: '#ffffff' }
            // } > Home < /Text> < /
            // TouchableOpacity > ,
            // headerMode: "none"
        // })
    // },
// });


export default MyDrawerNavigator = DrawerNavigator({
    Home: {
        screen: FirstActivity_StackNavigator
    },

});
import React, { Component } from 'react';
import {
    View,
    Button, YellowBox
} from 'react-native';
import { AsyncStorage } from 'react-native';
export default class MainScreen extends Component {
		constructor(props) {
 
    super(props);
	this.state ={ userPhone: '' };
  
    YellowBox.ignoreWarnings(
 
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
      
    ]);
  
  }
	componentDidMount() {
		this.getToken();
	}
	async getToken() {
		try {		  
		console.log('async test');
		console.log(AsyncStorage.getItem('user'));
		  const userPhone = await AsyncStorage.getItem('user');
		  console.log(userPhone);
		  if(!userPhone) {
			  console.log(userPhone+'condition 1');
			TempLogin();
		  } else {
			  this.setState({userPhone: userPhone});
			  console.log(userPhone+'condition 2');
			this.props.navigation.navigate('Routers')
		  }
		} catch(error) {
			console.log(userPhone+'condition 3');
			console.log("Something went wrong");
			TempLogin();
		}
	  }
	  TempLogin = ()=> {
		  
			return(
			<View style = { style.container }>
				<Button title="Login" onPress={ ()=> this.props.navigation.navigate('Login') }
				/>
				<Button title = "Register" onPress={ () => this.props.navigation.navigate('Register') }
				/> 
			</View>
			);
			
		}
    render() {
		
        return ( 
		<View style = { style.container }>
            <Button title="Login" onPress={ ()=> this.props.navigation.navigate('Login') }
            />
			<Button title = "Register" onPress={ () => this.props.navigation.navigate('Register') }
            /> 
		</View>
        );
    }
}
const style = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}
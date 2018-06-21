/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { YellowBox } from 'react-native';
import {
  StyleSheet,
  Text,
  View,Button,TextInput,TouchableOpacity
} from 'react-native';

class Register extends Component {
	constructor(props) {
      super(props);
	  this.state={
			userName:'',
			userEmail:'', 
			userPassword:'',
			phonenumber:''	
		}
    YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
    ]);
    }
	userRegister = () =>{
		const {userName} = this.state;
		const {userEmail,userPassword,phonenumber} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(userEmail==""){
		  this.setState({email:'Please enter Email address'})
		} else if(reg.test(userEmail) === false) {
			this.setState({email:'Email is Not Correct'})
			return false;
		} else if(userPassword == "") {
			this.setState({email:'Please enter password'})
		} else if(phonenumber == ""){
			this.setState({email:'Please enter Phone Number'})
		} else {
			fetch('http://roopeshwedsshruti.com/reactNativeApp/register.php', {
				method: 'post',
				header:{
					'Accept': 'application/json',
					'Content-type': 'application/json'
				},
				body:JSON.stringify({
					name: userName,
					email: userEmail,
					password: userPassword,
					phone: phonenumber,
				})
			
			})
			.then((response) => response.json())
			.then((responseJson) =>{
				this.props.navigation.navigate('Home');
			})
			.catch((error)=>{
				console.error(error);
			});
		}
	}
  render () {
    return (
      <View style={styles.container}>
	  <Text style={{padding:10,margin:10,color:'red'}}>{this.state.email}</Text>
	  <TextInput
	  placeholder="Enter Name"
	  style={{width:250,margin:10, borderColor:"#333", 
	  borderWidth:1}}	
	  underlineColorAndroid="transparent"
  onChangeText= {userName => this.setState({userName})}
	  
	  />
	  
	  <TextInput
	  placeholder="Enter Email"
	  style={{width:250,margin:10, borderColor:"#333", 
	  borderWidth:1}}	
	  underlineColorAndroid="transparent"
	  onChangeText={userEmail => this.setState({userEmail})}
	  />
	  <TextInput
	  placeholder="Enter Phone Number"
	  style={{width:250,margin:10, borderColor:"#333", 
	  borderWidth:1}}	
	  underlineColorAndroid="transparent"
	  onChangeText= {phonenumber => this.setState({phonenumber})}
	  />
	  
	  <TextInput
	  placeholder="Enter Password"
	  style={{width:250,margin:10, borderColor:"#333", 
	  borderWidth:1}}	
	  underlineColorAndroid="transparent"
	  onChangeText={userPassword => this.setState({userPassword})}
	  />
	  
	  <TouchableOpacity
		onPress={this.userRegister}
		style={{width:250,padding:10, backgroundColor:'magenta',
		alignItems:'center'}}>
	  <Text style={{color:'#fff'}}>Signup</Text>
	  </TouchableOpacity>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Register;

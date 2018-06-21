import React, {Component} from 'react';
import { YellowBox } from 'react-native';
import { StyleSheet,
  Text,
  View,TouchableOpacity,TextInput,Button,Keyboard,AsyncStorage } from 'react-native';

class Login extends Component {
	constructor(props){
		super(props)
		YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
    ]);
		this.state={
			userPhone:'',
			userPassword:''
		}
		this.state = {
			validating: false
		}
	}
	login = () =>{
		const {userPhone,userPassword} = this.state;
		this.setState({ validating: true });
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(userPhone==""){
		  this.setState({phone:'Please enter Phone Number'})
			
		} else if(userPassword==""){
			this.setState({phone:'Please enter password'})
		} else{
		
		fetch('http://roopeshwedsshruti.com/reactNativeApp/user_login.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				phone: userPhone,
				password: userPassword
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			let objdata = responseJson.data;
			let test = objdata.user_phone;
			console.log(test);
			this.saveToStorage(test);
			this.props.navigation.navigate('Home');
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		Keyboard.dismiss();
	}
	async saveToStorage(userData){
		if (userData) {
			AsyncStorage.setItem('user', userData, (err)=> {
			if(err){
				console.log("an error");
				throw err;
			}
			console.log("success");
			}).catch((err)=> {
				console.log("error is: " + err);
			});

			return true;
		}
		return false;
	}
	 redirect(routeName, accessToken){
		this.props.navigator.push({
		  name: routeName
		});
  }
  render () {
    return (
      <View style={styles.container}>    
	<Text style={{padding:10,margin:10,color:'red'}}>{this.state.phone}</Text>
	
	<TextInput
	placeholder="Enter phone Number"
	style={{width:200, margin:10}}
	onChangeText={userPhone => this.setState({userPhone})}
	/>
	
	<TextInput
	placeholder="Enter Password"
	style={{width:200, margin:10}}
	onChangeText={userPassword => this.setState({userPassword})} secureTextEntry={true} />
	
	
	<TouchableOpacity
	onPress={this.login}
	style={{width:200,padding:10,backgroundColor:'magenta',alignItems:'center'}}>
	<Text style={{color:'white'}}>Login</Text>
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

});
export default Login;

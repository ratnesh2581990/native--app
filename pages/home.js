import React, {Component} from 'react';
import { YellowBox } from 'react-native';
import { View,Text,StyleSheet,Button,TouchableOpacity,StatusBar,Image,AsyncStorage } from 'react-native';

class HomeScreen extends Component {
	constructor(props) {
    super(props);
    YellowBox.ignoreWarnings(

      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
      
    ]);
  
  }
  
  logout = () => {
	  this.removeToken();
  }
  
  async removeToken() {
		try {		  
			await AsyncStorage.removeItem('user');
		} catch(error) {
			console.log("Something went wrong");
		}
	  }

  render () {
		 return (
		  <View style={styles.container}>	
		  	<Text style={styles.pageName}>the phone number is</Text>
		  	<Button title="Log Out" onPress={this.logout} />
		  </View>
		);
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
	container:{
		display:'flex',alignItems:'center',
		justifyContent:'center'
	},
	btn1:{
		backgroundColor:'orange',
		padding:10,margin:10,width:'95%'
	},
	btn2:{
		backgroundColor:'blue',
		padding:10,margin:10,width:'95%'
	},
	pageName:{
		margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center'
	},
	btnText:{
		color:'#fff',fontWeight:'bold'
	},
	
});

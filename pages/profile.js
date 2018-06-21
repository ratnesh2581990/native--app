import React, {Component} from 'react';
import { YellowBox } from 'react-native';
import { StyleSheet,
  Text,
  View,TouchableOpacity,TextInput,Button,Keyboard,AsyncStorage } from 'react-native';

class Profile extends Component {
	constructor(props){
		super(props)
		YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
    ]);
	this.state = {
		logout: false
	}
	}
userlogout = () =>{
		this.setState({ logout: true });
		if (this.logout){
			this.setState({
				logout: false
			});
			this.props.navigation.navigate('Home');
		} else {
			console.log('Failed to log out');
		}		
	}
async logout(){
	await AsyncStorage.removeItem('user');
}	
  render () {
	  const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View style={styles.container}>    
		<Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
		<TouchableOpacity onPress={this.userlogout} style={{width:200,padding:10,backgroundColor:'magenta',alignItems:'center'}}>
			<Text style={{color:'white'}}>Click here to Logout</Text>
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
  TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 }
});
export default Profile;

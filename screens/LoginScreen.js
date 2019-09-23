import React, {Component} from 'react'
import{
    StyleSheet, Text, View,TextInput,Dimensions,ImageBackground,Image,Alert,TouchableOpacity
} from 'react-native';

import HomeScreen from './HomeScreen'
import Maps from './Maps'
import SignUp from './SignUp'
import BottomTab from './BottomTab'
import Booking from './Booking'
import PhoneCall from './PhoneCall'
import Emergency from './Emergency'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import firebase from 'firebase';

const {width:WIDTH} = Dimensions.get('window');
class LoginScreen extends Component{


    constructor(props){
        super(props);
        this.state = {
          email: "",
          password: "",
          error: '',
          loading: false
        };
        this.checkInput = this.checkInput.bind(this)
        this.signup = this.signup.bind(this)
      }
      onForgotPassword = () => {
        this.props.navigation.navigate("ForgotPassword")
      }
    
      checkInput = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { 
          this.props.navigation.navigate("Profile");
        } , (error) => {
           Alert.alert(error.message);
        });
      }
      signup = () =>{
        this.props.navigation.navigate("SignUp")
      }
    render(){
        return(
          <ImageBackground source={require('../images/bkgrnd.png')} style={styles.backgroundContainer}>
                <View style={styles.container}>
                <Image source={require('../images/logo.png')} style={styles.logo}/>
    <TextInput
    style={styles.input}
    placeholder={'Email'}
    placeholderTextColor={'white'}
    underLineColorAndroid='transparent'
    autoCapitalize="none"
    autoCorrect={false}
    value={this.state.email}
    onChangeText={(text) => {this.setState({email: text})}}
    />
  
    <TextInput
      style={styles.input}
      placeholder={'Password'}
      secureTextEntry={true}
      placeholderTextColor={'white'}
      underLineColorAndroid='transparent'
      autoCapitalize="none"
      autoCorrect={false}
      value={this.state.password}
    onChangeText={(text) => {this.setState({password: text})}}
    />
  <TouchableOpacity style={styles.forpas}>
    <Text style={styles.text1} onPress={this.onForgotPassword}>Forgot Password?</Text>
  </TouchableOpacity>
 
  <TouchableOpacity style={styles.btnLogin} >
    <Text style={styles.text} onPress={this.checkInput}>Login</Text>

  </TouchableOpacity>
 
  <TouchableOpacity style={styles.btnLogin} >
    <Text style={styles.text} onPress={this.signup}>Sign Up</Text>
  </TouchableOpacity>
  </View>
            </ImageBackground>
            
            
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop:'10%',
    marginHorizontal:'27%'

  },

  input: {
    width: wp('80%'),
    height: hp('10%'),
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
    marginHorizontal: '10%',
    marginTop: '5%'
  },
  btnLogin: {
    width: wp('80%'),
    height: hp('7%'),
    borderRadius: 25,
    borderWidth: 2,
    backgroundColor: '#0699A1',
    justifyContent: 'center',
    marginTop: '5%',
    marginHorizontal: '10%',
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  forpas: {
    width: WIDTH - 55,
    height: 45,
    justifyContent: 'center',
    },
    text1:{
     color:'white',
     textAlign:'right'
    },
    
});


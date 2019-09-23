
import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text,Button, View,TextInput,Dimensions,ImageBackground,Image,Alert,TouchableOpacity } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { NavigationActions } from 'react-navigation';


const {width:WIDTH} = Dimensions.get('window')

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      error: '',
      loading: false
    };
  }
  signup = () =>{
    if(this.state.password !== this.state.confirmpassword){
      Alert.alert("Password do not match");
      return;
    }

   firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
   .then(() => { } , (error) => {
        Alert.alert(error.message);
     });
  }
  render(){
    return (
      <ImageBackground source={require('../images/bkgrnd.png')} style={styles.backgroundContainer}>
   <ScrollView>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <Image source={require('../images/logo.png')} style={styles.logo}/>
    
    
     </KeyboardAvoidingView>

    
     
        
      
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
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

    </KeyboardAvoidingView>

    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
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

    </KeyboardAvoidingView>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <TextInput
        style={styles.input}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
        placeholderTextColor={'white'}
        underLineColorAndroid='transparent'
        autoCapitalize="none"
        autoCorrect={false}
        value={this.state.confirmpassword}
        onChangeText={(text) => {this.setState({confirmpassword: text})}}
      />

    </KeyboardAvoidingView>
    
    <View/>

    <TouchableOpacity style={styles.btnLogin} >

    
      <Text style={styles.text} onPress={this.signup}>Sign Up</Text>
    </TouchableOpacity>
     </ScrollView>
     </ImageBackground>
  );
}
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: WIDTH - 55,
    height: 40,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    borderColor: 'white',
    borderWidth: 2,
    opacity: 0.7,
    color: 'black',
    marginHorizontal: 25,
    marginTop: 20
   },
  btnLogin: {
    width: wp('80%'),
    height: hp('7%'),
    borderRadius: 25,
    backgroundColor: '#0699A1',
    justifyContent: 'center',
    marginHorizontal: '10%',
    marginTop: '5%'
     },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
     },
     logo: {
        marginTop:'20%',
        marginHorizontal:'27%'
    
      },
     
  
});


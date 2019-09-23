
import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View,TextInput,Dimensions,ImageBackground,Image,TouchableOpacity } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const {width:WIDTH} = Dimensions.get('window')

export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: null,
      lastname:  null,
      fno:  null,
      aria: null,
      pin:  null,
      error: '',
      loading: false
    };
    this.submit = this.submit.bind(this)
  }
  postProfile = (firstname,lastname,fno,aria,pin,firstnameClear,lastnameClear, fnoClear,ariaClear,pinClear) => {
    if(this.state.pin!=null){
      fetch( 'https://firstapp-f30a3.firebaseio.com',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "firstname": firstname,
          "lastname": lastname,
          "fno": fno,
          "aria": aria,
          "pin": pin,
        }),
      })
      .then((response) => response.json())
      .then((responseData) => {
              if(responseData.name != null ){
                this.refs[firstnameClear].setNativeProps({text: ''});
                this.refs[lastnameClear].setNativeProps({text: ''});
                this.refs[fnoClear].setNativeProps({text: ''});
                this.refs[ariaClear].setNativeProps({text: ''});
                this.refs[pinClear].setNativeProps({text: ''});
                this.setState({
                  firstname: null,
                  lastname: null,
                  fno:null,
                  aria: null,
                  pin: null,
                  loading: true,
                  })              
              }
              else{
              Alert.alert(
                'Oops !',
                'Something went wrong',
                [
                  {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
            }

      })
      .done();
    }
      else{
        Alert.alert(
          'Oops !',
          'Press SUBMIT button after entering your Message.',
          [
            {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          ],
          { cancelable: false }
        )        
      }
    
  };

  submit = () =>{
    this.props.navigation.navigate("Home")
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
      placeholder={'First Name'}
      placeholderTextColor={'white'}
      underLineColorAndroid='transparent'
      onChangeText={(firstname) => this.setState({firstname})} ref={'firstnameClear'}
      />
    
    </KeyboardAvoidingView>
     
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    
    <TextInput
    style={styles.input}
    placeholder={'Last Name'}
    placeholderTextColor={'white'}
    underLineColorAndroid='transparent'
    onChangeText={(lastname) => this.setState({lastname})} ref={'lastnameClear'}
    />

    
    
  
  </KeyboardAvoidingView>
  <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    
      <TextInput
      style={styles.input}
      placeholder={'Flat.no H.no..'}
      placeholderTextColor={'white'}
      underLineColorAndroid='transparent'
      onChangeText={(fno) => this.setState({fno})} ref={'fnoClear'}
      />
    
    </KeyboardAvoidingView>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    
      <TextInput
      style={styles.input}
      placeholder={'Area,street..'}
      placeholderTextColor={'white'}
      underLineColorAndroid='transparent'
      onChangeText={(aria) => this.setState({aria})} ref={'ariaClear'}
      />
    
    </KeyboardAvoidingView>
    
    
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    
      <TextInput
      style={styles.input}
      placeholder={'PINCODE'}
      placeholderTextColor={'white'}
      underLineColorAndroid='transparent'
      onChangeText={(pin) => this.setState({pin})} ref={'pinClear'}
      />
    
    </KeyboardAvoidingView>
    
    
    
    <View/>

    <TouchableOpacity style={styles.btnLogin} success onPress={() => this.postProfile(this.state.firstname, this.state.lastname, this.state.fno, this.state.aria, this.state.pin, 'firstnameClear', 'lastnameClear', 'fnoClear', 'ariaClear','pinClear')}>
    
      <Text style={styles.text} onPress={this.submit}>Submit</Text>
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


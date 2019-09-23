import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions,ImageBackground,Image,Button ,Alert,Easing,Animated} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import Maps from './screens/Maps'
import SignUp from './screens/SignUp'
import BottomTab from './screens/BottomTab'
import Booking from './screens/Booking'
import Emergency from './screens/Emergency'
import Profile from './screens/Profile'
import PhoneCall from './screens/PhoneCall'
import MainTabNavigator from './navigation/MainTabNavigator'
import firebase from 'firebase'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
var firebaseConfig = {
  apiKey: "AIzaSyAoZQaOqX3w-rOYv-IEUhYGYe_-KJ_VQyg",
  authDomain: "firstapp-f30a3.firebaseapp.com",
  databaseURL: "https://firstapp-f30a3.firebaseio.com",
  projectId: "firstapp-f30a3",
  storageBucket: "firstapp-f30a3.appspot.com",
  messagingSenderId: "514115813710",
  appId: "1:514115813710:web:0957b7d47f645917e99e1f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const {width:WIDTH} = Dimensions.get('window');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }
  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }

  render(){
    if ( (!this.state.isLoadingComplete || !this.state.isAuthenticationReady) && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          {(this.state.isAuthenticated) ? <MainTabNavigator /> : <RootNavigation />}
        </View>
      );
    }
 
}
}

const AppStackNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
 //Home: {screen: HomeScreen},
  Map: {screen: Maps},
  SignUp:{screen: SignUp},
  BottomTab:{screen:BottomTab},
  Booking:{screen:Booking},
  Emergency:{screen:Emergency},
  Profile:{screen:Profile},
  ForgotPassword:{screen:ForgotPasswordScreen},
  PhoneCall:{screen:PhoneCall}
  },
  {
    headerMode: "none",
    mode: "modal",
    defaultNavigationOptions: {
      gesturesEnabled: false
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateY }] };
      }
    })
  }
);

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  
});
const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer
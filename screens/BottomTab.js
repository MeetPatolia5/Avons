import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet, View,TextInput,Dimensions,ImageBackground,Image,Button,Alert,TouchableOpacity} from 'react-native';
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation'
const {width:WIDTH} = Dimensions.get('window');
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';  
import firebase,{database} from 'firebase';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { ScrollView } from 'react-native-gesture-handler';
import Booking from './Booking'
import EmergencyScreen from './Emergency'
import ProfileScreen from './Profile'

class BottomTab extends React.Component {
  
  
  render() {
    return (
        <ScrollView>
    <View style={styles.backgroundContainer}>
        <SearchBar
           placeholder="Search for a Service"
        />

      <View style={styles.btn}>

        <TouchableOpacity style={styles.btnLogin}>
          <Image source={require('../images/plumber.png')} style={styles.images}></Image>
    <Text style={styles.text}>Plumber</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.btnLogin}>
  <Image source={require('../images/mechanic.png')} style={styles.images}></Image>
    <Text style={styles.text}>Mechanic</Text>
  </TouchableOpacity>
</View>
<View style={styles.btn}>
  <TouchableOpacity style={styles.btnLogin}>
  <Image source={require('../images/carpenter.png')} style={styles.images}></Image>
    <Text style={styles.text}>Carpenter</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.btnLogin}>
  <Image source={require('../images/electrican.png')} style={styles.images}></Image>
    <Text style={styles.text}>Electrician</Text>
  </TouchableOpacity>
  </View>
    </View>
    </ScrollView>
    );
  }
}
class Emergency extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Emergency</Text>
      </View>
    );
  }
}
class Profile extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {screen: BottomTab,
    navigationOptions:{  
      tabBarLabel:'Home',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-home" color={tintColor} size={25}/>  
      )  
    }  
  },
  Booking: {screen: Booking,
    navigationOptions:{  
      tabBarLabel:'My Bookings',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-list-box" color={tintColor} size={25}/>  
      )  
    }  
  },
  Emergency: {screen:Emergency,
    navigationOptions:{  
      tabBarLabel:'Emergency',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="md-call" color={tintColor} size={25}/>  
      )  
    }  
  },
  Profile: {screen:Profile,
    navigationOptions:{  
      tabBarLabel:'Profile',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="ios-person" color={tintColor} size={25}/>  
      )  
    }  
  }
},
{
  initialRouteName: "Home"
}
);
export default createAppContainer(TabNavigator);
const styles = StyleSheet.create({
    container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center'  
  }, 
      backgroundContainer: {
          flex: 1,
          backgroundColor:'white',
          marginTop: '8%'
      },
      text: {
        color: 'black',
        fontSize: 25,
        marginTop: 30,
        textAlign: 'center'
      },
      btnLogin: {
        width: wp('45%'),
        height: hp('25%'),
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginTop: 18,
        marginHorizontal: 10,
      },
      btn: {
        flexDirection: 'row',
        marginTop: '10%'
      },
      text1: {
        fontSize: 16
      },
      // footer: {
      //   marginTop: '22.5%',
      //   height: 50,
      //   backgroundColor: '#0699A1',
      //   flexDirection: 'row',
        
      // },
      icons: {
        padding: '8%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      // footer: {
      //   marginTop: '18%',
      //   backgroundColor: '#0699A1'
      // },
      images: {
        marginHorizontal: '20%'
      }
  });
  
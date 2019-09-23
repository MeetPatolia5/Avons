import React from 'react';
import { StyleSheet, View,TextInput,Dimensions,ImageBackground,Image,Button,Alert,TouchableOpacity} from 'react-native';
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation'
const {width:WIDTH} = Dimensions.get('window');
import {SearchBar} from 'react-native-elements';
import firebase,{database} from 'firebase';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { ScrollView } from 'react-native-gesture-handler';
   
class HomeScreen extends React.Component {
 constructor(){
   super();
  this.state = {
    search: '',
    data:''
  }
  
  //this.updateSearch = this.updateSearch.bind(this);
 }
 
//  componentDidMount(){
//   var firebaseConfig = {
//     apiKey: "AIzaSyAkpGl09PGiqt1CaugP-LQ9dybAuvLrmEI",
//     authDomain: "first-demo-b141d.firebaseapp.com",
//     databaseURL: "https://first-demo-b141d.firebaseio.com",
//     projectId: "first-demo-b141d",
//     storageBucket: "",
//     messagingSenderId: "5248126881",
//     appId: "1:5248126881:web:a1e1d93735304fe0"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.database().ref('data/').on('value',async function(snapshot){
//     let snap=JSON.stringify(snapshot);
//     data=JSON.parse(snap);

//     this.setState({
//       data:data
//     })
//     console.log(this.state.data)
//   }.bind(this)

//   )
//   console.log(this.state.data)
//  }
//   updateSearch = text => {
//     // var arrayholder = this.state.data;
//     // console.log(this.state.data);
// //    console.log(this.state.search);
//     // const newData = this.arrayholder.filter(item => {
//     //   const itemData = item.name;
      
//     //   const textData = text;
//     //   return itemData.indexOf(textData) > -1;
//     // });
//     this.setState({search:text});
//   }
  render(){
  //  const {search} = this.state;
  return (
    <ScrollView>
    <View style={styles.backgroundContainer}>
        <SearchBar
           placeholder="Search for a Service"
           onChangeText={text =>this.updateSearch(text)}
           value={this.state.search}
        />

      <View style={styles.btn}>

        <TouchableOpacity style={styles.btnLogin}>
        <Icon name="lock" size={30} />
    <Text style={styles.text}>Plumber</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.btnLogin}>
        <Icon name="lock" size={30} />
    <Text style={styles.text}>Mechanic</Text>
  </TouchableOpacity>
</View>
<View style={styles.btn}>
  <TouchableOpacity style={styles.btnLogin}>
        <Icon name="lock" size={30} />
    <Text style={styles.text}>Carpenter</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.btnLogin}>
        <Icon name="lock" size={30} />
    <Text style={styles.text}>Electrician</Text>
  </TouchableOpacity>
  </View>

  
  
    </View>
    </ScrollView>
  );
}
}
 

const styles = StyleSheet.create({
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center'  
}, 
    backgroundContainer: {
        flex: 1,
        backgroundColor:'white',
        marginTop: '5%'
    },
    text: {
      color: 'black',
      fontSize: 25,
      marginTop: 50,
      textAlign: 'center'
    },
    btnLogin: {
      width: wp('45%'),
      height: hp('25%'),
      borderRadius: 25,
      backgroundColor: 'white',
      justifyContent: 'center',
      marginTop: 20,
      marginHorizontal: 10,
    },
    btn: {
      flexDirection: 'row',
      marginTop: '10%'
    },
    text1: {
      fontSize: 16
    },
    footer: {
      marginTop: '22.5%',
      backgroundColor: '#0699A1',
      height: 50,
      flexDirection: 'row',
    },
    icons: {
      padding: '8%',
      alignItems: 'center',
      justifyContent: 'center'
    }
});


import React from 'react';

import { StyleSheet, Text, View,TextInput,Dimensions,ImageBackground,Image,TouchableOpacity } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';

const {width:WIDTH} = Dimensions.get('window')

export default class Booking extends React.Component {
constructor(){
    super();
    this.bookservice = this.bookservice.bind(this)
}
  bookservice = ()=>{
      this.props.navigation.navigate("BottomTab");
  }
  render(){
    return (
      <View style={styles.space}>
        <View style={{width: 500, height: 170, backgroundColor: 'black'}}>
          <Text style={styles.textspace}>My Bookings</Text>
        <View style={styles.container}>
        <TouchableOpacity style={styles.onbtn}>
            <Text style = {styles.txton}>
               Ongoing
            </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.hisbtn}>
            <Text style = {styles.txthis}>
               History
            </Text>
         </TouchableOpacity>
     </View>
        </View>

          <Text style={styles.ongoing}>No Current Booking{"\n"}
          Click On the book now to Get a Service
           </Text>

 
           <TouchableOpacity style={styles.bookbtn}>
            <Text style = {styles.book} onPress={this.bookservice}>
               Book Now
            </Text>
         </TouchableOpacity>
     
      </View>
      


      );
}
}
const styles = StyleSheet.create({
space: {
  flex:1,
  flexDirection: "column"    
},
textspace:{
  marginTop: 40,
  marginRight: 300,
  textAlign:'center',
  color:'white',
 fontSize:26
},
ongoing:{
  textAlign:'center',
  marginTop:150,
  marginLeft:10
},
book:{
  
  marginBottom: 80,
  borderWidth: 1,
  padding: 10,
  borderColor: 'white',
  backgroundColor: 'black',
  textAlign:'center',
  color:'white',
  fontSize:20,

  
},
bookbtn:{
 width:"40%",
 marginLeft:120,
 marginTop: 70
 
},
onbtn:{
  backgroundColor: 'black',
  width: '50%',
  height: 10
  


},
hisbtn:{
  backgroundColor: 'black',
 width: '50%',
  height: 10

},
txton:{
  color:'white',
  fontSize:20,
//   marginTop: 50
//   marginLeft:30

},
txthis:{
color:'white',
fontSize:20,
// marginTop: 50
// marginLeft:40

},
container: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 50,
  marginLeft: 20
}
});


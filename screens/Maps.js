import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View,TextInput,Dimensions,ImageBackground,Image,Button ,Alert} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Maps extends React.Component {
  render() {
    return (
        <View style={styles.backgroundContainer}>
      <MapView style={styles.map}
      region={{
          latitude: 22.599866,
          longitude: 72.820540,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
      }}
      >
      <MapView.Marker 
        coordinate={{
            latitude:22.599866,
            longitude: 72.820540,
        }}
        title={'My title'}
        description={'My description'}
      />
      </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          marginTop: '10%'
      },
      map:{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          height: hp('30%')
      },
    }
);
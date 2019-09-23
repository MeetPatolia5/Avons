import React from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import call from 'react-native-phone-call';

export default class PhoneCall extends React.Component {
      call = () => {
        //handler to make a call
        const args = {
          number: '8780114216',
          prompt: false,
        };
    
        call(args).catch(console.error);
      };
      render() {
        return (
          <View style={styles.container}>
            <Button title="Make a Call" onPress={this.call} />
          </View>
        );
      }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
    }
});
    
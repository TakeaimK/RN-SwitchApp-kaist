/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import LoginScreen from './src/LoginScreen'

export default class App extends Component{
  render(){
    return(
     <View style={{flex:1}}>
      <LoginScreen />
     </View>
    );  
  }
}


const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent:'center',
//    alignItems:'center',
//    //backgroundColor: 'powderblue',
//  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
});



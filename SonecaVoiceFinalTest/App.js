/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import NavigationStack from "./Navigation";



export default class App extends Component {

  constructor(props){
    super(props);
   

  }
  
  render() {
    return (
      <NavigationStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
});

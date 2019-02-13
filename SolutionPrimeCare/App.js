/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { LoginScreen } from './pages/Login';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './pages/Home';
import AppScreenNames from './constantes/AppScreenNames';

const AppNavigator = createStackNavigator(
  {
      login: {screen: LoginScreen},
      home: {screen: HomeScreen},
      //esqueciSenha: {screen: EsqueciSenha},
      //cadastro: {screen: Cadastro},
  },
  {
      initialRouteName: AppScreenNames.TELA_LOGIN
  }
   
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
render() {
  return <AppContainer />;
}
}


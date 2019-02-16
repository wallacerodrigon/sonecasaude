import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginComponent from './pages/login/LoginComponent';
import HomeScreen from './pages/home/Home';
import React from 'react';

import {TELA_LOGIN} from './constants/AppScreenNames';
import EsqueciSenha from './pages/esqueci-senha/EsqueciSenha';

const AppNavigator = createStackNavigator(
    {
        login: {screen: LoginComponent},
        home: {screen: HomeScreen},
        esqueciSenha: {screen: EsqueciSenha},
    },
    {
        initialRouteName: TELA_LOGIN,
    }
     
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
 
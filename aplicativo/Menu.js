import React from 'react';

import {Text, View} from 'react-native';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';

import LoginComponent from './pages/login/LoginComponent';

import ControleMedicacao from './pages/medicacao/ControleMedicacao';
import EstilosComuns from './assets/estilos/estilos';
import ListaMedicos from './pages/medicos/ListaMedicos';
import EsqueciSenha from './pages/esqueci-senha/EsqueciSenha';
import MeusDados from './pages/perfil/MeusDados';
import AdicionaCompartilhamentoInfo from './pages/cadastro/AdicionaCompartilhamentoInfo';
import Endereco from './pages/cadastro/Endereco';
import { TELA_PADRAO } from './constants/AppScreenData';
import StackNavigatorSpc from './rotas';
import HomeScreen from './pages/home/Home';


//https://reactnavigation.org/docs/en/stack-navigator.html
export const DrawerMenu = createDrawerNavigator(
    {
      sair: {screen: LoginComponent},
      esqueciSenha: {screen: EsqueciSenha},

      compartilhaInformacoes: {screen: AdicionaCompartilhamentoInfo},
      
      endereco: {screen: Endereco},
      
      controleMedicacao: {screen: ControleMedicacao},
      listaMedicos: {screen: ListaMedicos},                                    

       meuPerfil: {screen: MeusDados},                                    
     // stack: { path: '/', screen:StackNavigatorSpc}
    },
    // {
    //     drawerWidth: 300,
    //     drawerPosition: 'left',
    //     // contentComponent: (
    //     //     <View>
    //     //         <Text>Menu 1</Text>
    //     //         <Text>Menu 1</Text>
    //     //         <Text>Menu 1</Text>
    //     //         <Text>Menu 1</Text>
    //     //         <Text>Menu 1</Text>
    //     //     </View>
    //     // ), 
    //     contentOptions: {
    //       activeTintColor: '#fff',
    //       activeBackgroundColor: '#ddd'
    //     },
    //     // drawerOpenRoute: 'DrawerOpen',
    //     // drawerCloseRoute: 'DrawerClose',
    //     // drawerToggleRoute: 'DrawerToggle'
    //   }   
     
    );


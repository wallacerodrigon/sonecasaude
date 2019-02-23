import React from 'react';

import {Text, View} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

import LoginComponent from './pages/login/LoginComponent';

import ControleMedicacao from './pages/medicacao/ControleMedicacao';
import EstilosComuns from './assets/estilos/estilos';
import ListaMedicos from './pages/medicos/ListaMedicos';
import EsqueciSenha from './pages/esqueci-senha/EsqueciSenha';
import MeusDados from './pages/perfil/MeusDados';
import AdicionaCompartilhamentoInfo from './pages/cadastro/AdicionaCompartilhamentoInfo';
import Endereco from './pages/cadastro/Endereco';
import { TELA_PADRAO } from './constants/AppScreenData';

//https://reactnavigation.org/docs/en/stack-navigator.html
const DrawerMenu = createDrawerNavigator(
    {
      sair: {screen: LoginComponent},
      esqueciSenha: {screen: EsqueciSenha},

      compartilhaInformacoes: {screen: AdicionaCompartilhamentoInfo},
      
      endereco: {screen: Endereco},
      
      controleMedicacao: {screen: ControleMedicacao},
      listaMedicos: {screen: ListaMedicos},                                    

       meuPerfil: {screen: MeusDados},                                    

    },
    {
        //initialRouteName: "login",
        defaultNavigationOptions:  ({navigation}) => ({
          title: TELA_PADRAO.title,
          headerStyle: [ EstilosComuns.backgroundToolbar],
          cardShadowEnabled: "true",
          headerTitleStyle: [EstilosComuns.backgroundPadrao],
        }),

    },
     
);

export const DrawerMenuContainer = createAppContainer(DrawerMenu);
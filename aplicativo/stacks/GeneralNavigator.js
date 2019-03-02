import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import { TELA_PADRAO } from '../constants/AppScreenData';
import EstilosComuns from '../assets/estilos/estilos';
//import { Icon } from 'native-base';

import LoginComponent from '../pages/login/LoginComponent';
//import HomeScreen from './pages/home/Home';
import EsqueciSenha from '../pages/esqueci-senha/EsqueciSenha';
import StackNotLoggedIn from './StackNotLoggedIn';
import CadastroStack from './CadastroStack';
import StackLoggedIn from './StackLoggedIn';
import MedicosStack from '../pages/medicos';
import MedicamentosStack from '../pages/medicamentos';
import MedicacoesStack from '../pages/medicacao';

export default createAppContainer(createSwitchNavigator(
  {
    startStack: StackNotLoggedIn,
    cadastro: CadastroStack,
    logadoStack: StackLoggedIn,
    medicos: MedicosStack,
    medicamentos: MedicamentosStack,
    medicacoes:MedicacoesStack
  },
));

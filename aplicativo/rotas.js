import React from 'react';

import {createStackNavigator, createAppContainer} from 'react-navigation';

import { View } from "react-native";
import { TELA_PADRAO, TELA_COMANDO_VOZ } from './constants/AppScreenData';
import EstilosComuns, { BRANCO } from './assets/estilos/estilos';
import { Icon } from 'native-base';

import LoginComponent from './pages/login/LoginComponent';
import HomeScreen from './pages/home/Home';
import EsqueciSenha from './pages/esqueci-senha/EsqueciSenha';
import DadosPessoais from './pages/cadastro/DadosPessoais';
import Endereco from './pages/cadastro/Endereco';
import Desafios from './pages/cadastro/Desafios';
import FinalizaCadastro from './pages/cadastro/FinalizaCadastro';
import AdicionaCompartilhamentoInfo from './pages/cadastro/AdicionaCompartilhamentoInfo';
import ControleMedicacao from './pages/medicacao/ControleMedicacao';
import ComandoOuvindoVoz from './pages/voz/ComandoOuvindoVoz';
import ListaMedicos from './pages/medicos/ListaMedicos';
import AdicionaMedico from './pages/medicos/AdicionaMedico';
import AdicionaClinica from './pages/medicos/AdicionaClinica';
import ListaClinicas from './pages/medicos/ListaClinicas';
import CompartilhaInformacoes from './pages/cadastro/CompartilhaInformacoes';

import Alarme from './pages/medicacao/Alarme';
import ControleMedicamento from './pages/medicacao/ControleMedicamento';
import { BotaoOpacity } from './components/botao/Botao';
import Historico from './pages/medicacao/Historico';


//https://reactnavigation.org/docs/en/stack-navigator.html
const StackNavigatorSpc = createStackNavigator(
    {
    //  drawer: {screen: DrawerMenu},
      login: {screen: LoginComponent},
      home: {screen: HomeScreen},
      esqueciSenha: {screen: EsqueciSenha},

      compartilhaInformacoes: {screen: CompartilhaInformacoes},
      
      dadosPessoais: {screen: DadosPessoais},
      endereco: {screen: Endereco},
      desafios: {screen: Desafios},
      finalizaCadastro: {screen: FinalizaCadastro},

      adicionaCompartilhamentoInfo: {screen: AdicionaCompartilhamentoInfo},
      novoCompartilhamentoInfo: {screen: AdicionaCompartilhamentoInfo},
      
      controleMedicacao: {screen: ControleMedicacao},
      // adicionaCompartilhamentoMedicacao: {screen: EsqueciSenha},
      controleMedicamento: {screen: ControleMedicamento},
      // listaCompartilhamentoMedicacao: {screen: EsqueciSenha},                                    

      alarme: {screen: Alarme},
      comandoVoz: {screen: ComandoOuvindoVoz},                                    

       adicionaMedicos: {screen: AdicionaMedico},
       listaMedicos: {screen: ListaMedicos},                                    

      // meuPerfil: {screen: EsqueciSenha},                                    
       historico: {screen: Historico},
       adicionaClinica: {screen: AdicionaClinica},                                    
       listaClinicas: {screen: ListaClinicas},                                    
    },
    {
        initialRouteName: "login",
        defaultNavigationOptions:  ({navigation}) => ({
          title: TELA_PADRAO.title,
          headerStyle: [ EstilosComuns.backgroundToolbar],
          cardShadowEnabled: "true",
          headerTitleStyle: [EstilosComuns.corBranca],
        //   headerLeft: (
        //         <View style={{backgroundColor: '#fff'}} > </View>
        //   ),
          headerRight: (
            <BotaoOpacity onClick={() => navigation.navigate(TELA_COMANDO_VOZ.name)}> 
                <Icon name="mic" size={30} color={BRANCO}/>
            </BotaoOpacity>
          )
         }),

    },
     
);

export default NavigatorSpc = createAppContainer(StackNavigatorSpc);
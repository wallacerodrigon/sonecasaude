import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginComponent from './pages/login/LoginComponent';
import HomeScreen from './pages/home/Home';
import EsqueciSenha from './pages/esqueci-senha/EsqueciSenha';

import DadosPessoais from './pages/cadastro/DadosPessoais';
import Endereco from './pages/cadastro/Endereco';
import Desafios from './pages/cadastro/Desafios';
import FinalizaCadastro from './pages/cadastro/FinalizaCadastro';
import AdicionaCompartilhamentoInfo from './pages/cadastro/AdicionaCompartilhamentoInfo';
import { TELA_PADRAO } from './constants/AppScreenData';
import EstilosComuns from './assets/estilos/estilos';
import ComandoOuvindoVoz from './pages/voz/ComandoOuvindoVoz';
import AlarmeEstoque from './pages/medicacao/AlarmeEstoque';
import AlarmeHorario from './pages/medicacao/AlarmeHorario';

//https://reactnavigation.org/docs/en/stack-navigator.html
const AppNavigator = createStackNavigator(
    {
      login: {screen: LoginComponent},
      home: {screen: HomeScreen},
      esqueciSenha: {screen: EsqueciSenha},

      compartilhaInformacoes: {screen: AdicionaCompartilhamentoInfo},
      
      dadosPessoais: {screen: DadosPessoais},
      endereco: {screen: Endereco},
      desafios: {screen: Desafios},
      finalizaCadastro: {screen: FinalizaCadastro},
      adicionaCompartilhamentoInfo: {screen: AdicionaCompartilhamentoInfo},
      
      controleMedicacao: {screen: EsqueciSenha},
      adicionaCompartilhamentoMedicacao: {screen: EsqueciSenha},
      adicionaMedicamento: {screen: EsqueciSenha},
      historicoMedicacao: {screen: EsqueciSenha},                                    
      listaCompartilhamentoMedicacao: {screen: EsqueciSenha},                                    

      alarmeEstoque: {screen: AlarmeEstoque},
      alarmeHorario: {screen: AlarmeHorario},                                    
      comandoVoz: {screen: ComandoOuvindoVoz},                                    

      adicionaMedicos: {screen: EsqueciSenha},
      listaMedicos: {screen: EsqueciSenha},                                    

      meuPerfil: {screen: EsqueciSenha},                                    

      adicionaClinica: {screen: EsqueciSenha},                                    
      listaClinicas: {screen: EsqueciSenha},                                    
    },
    {
        //melhorar a fonte
        initialRouteName: "login",
        defaultNavigationOptions: {
          title: TELA_PADRAO.title,
          headerStyle: [EstilosComuns.backgroundPadrao, EstilosComuns.corBranca]
          
        },

    },
     
);

export const AppContainer = createAppContainer(AppNavigator);
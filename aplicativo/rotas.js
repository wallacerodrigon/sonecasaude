import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginComponent from './pages/login/LoginComponent';
import HomeScreen from './pages/home/Home';
import EsqueciSenha from './pages/esqueci-senha/EsqueciSenha';

import DadosPessoais from './pages/cadastro/DadosPessoais';
import Endereco from './pages/cadastro/Endereco';
import Desafios from './pages/cadastro/Desafios';
import FinalizaCadastro from './pages/cadastro/FinalizaCadastro';
import AdicionaCompartilhamentoInfo from './pages/cadastro/AdicionaCompartilhamentoInfo';

const AppNavigator = createStackNavigator(
    {
      login: {screen: LoginComponent},
      home: {screen: HomeScreen},
      esqueciSenha: {screen: EsqueciSenha},

      compartilhaInformacoes: {screen: EsqueciSenha},

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

      alarmeEstoque: {screen: EsqueciSenha},
      alarmeHorario: {screen: EsqueciSenha},                                    
      comandoVoz: {screen: EsqueciSenha},                                    

      adicionaMedicos: {screen: EsqueciSenha},
      listaMedicos: {screen: EsqueciSenha},                                    

      meuPerfil: {screen: EsqueciSenha},                                    

      adicionaClinica: {screen: EsqueciSenha},                                    
      listaClinicas: {screen: EsqueciSenha},                                    

      
    },
    {
        initialRouteName: "login"
    }
     
);

export const AppContainer = createAppContainer(AppNavigator);
import {createStackNavigator} from 'react-navigation';

import PADRAO_NAVEGACAO from "./StackConfigs";

import LoginComponent from "../pages/login/LoginComponent";
import PerfilCadastro from '../pages/cadastro/PerfilCadastro';
import EsqueciSenha from "../pages/esqueci-senha/EsqueciSenha";
import DadosPessoais from "../pages/cadastro/DadosPessoais";
import Endereco from "../pages/cadastro/Endereco";
import Desafios from "../pages/cadastro/Desafios";
import AdicionaCompartilhamentoInfo from "../pages/cadastro/AdicionaCompartilhamentoInfo";
import FinalizaCadastro from "../pages/cadastro/FinalizaCadastro";

const StackNotLoggedIn = createStackNavigator(
    {
        login: {screen: LoginComponent},
        esqueciSenha: {screen: EsqueciSenha},
        cadastroPerfil: PerfilCadastro,
        dadosPessoais: DadosPessoais,
        endereco: Endereco,
        desafios: Desafios,
        adicionaCompartilhamentoInfo: AdicionaCompartilhamentoInfo,
        finalizaCadastro: FinalizaCadastro,         
    },
    {
        defaultNavigationOptions: PADRAO_NAVEGACAO,
       // headerMode: 'none'
       
    }    
);

export default StackNotLoggedIn;
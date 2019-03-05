import {createStackNavigator} from 'react-navigation';

import PADRAO_NAVEGACAO from "./NavigatorConfigs";

import LoginComponent from "../pages/login/LoginComponent";
import PerfilCadastro from '../pages/cadastro/PerfilCadastro';
import EsqueciSenha from "../pages/esqueci-senha/EsqueciSenha";
import DadosPessoais from "../pages/cadastro/DadosPessoais";
import Endereco from "../pages/cadastro/Endereco";
import Desafios from "../pages/cadastro/Desafios";
import CadastroCompartilhamento from "../pages/compartilhamento/CadastroCompartilhamento";
import FinalizaCadastro from "../pages/cadastro/FinalizaCadastro";

const StackNotLoggedIn = createStackNavigator(
    {
        login: {screen: LoginComponent},
        cadastroPerfil: PerfilCadastro,
        esqueciSenha: {screen: EsqueciSenha},
        dadosPessoais: DadosPessoais,
        endereco: Endereco,
        desafios: Desafios,
        cadastroCompartilhamento: CadastroCompartilhamento,
        finalizaCadastro: FinalizaCadastro,         
    },
    {
        defaultNavigationOptions: PADRAO_NAVEGACAO,
       // headerMode: 'none'
       
    }    
);

export default StackNotLoggedIn;